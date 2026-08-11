import { describe, expect, it, vi } from "vitest";
import { parse } from "graphql";

import {
  collectScalarNames,
  deriveTypedEntryPayloads,
  generateTypedEntryPayloads,
  nameTypedEntryPayloads,
  renderTypedEntryPayloads,
} from "../src/typedBatchEntries.js";

const SCHEMA = parse(`
  scalar SafeString
  scalar DateTime
  scalar Int64
  scalar JSON
`);

const scalars = collectScalarNames(SCHEMA);

const derive = (source: string, warn = vi.fn()) =>
  deriveTypedEntryPayloads([parse(source)], { warn });

const generate = (source: string, warn = vi.fn()) =>
  generateTypedEntryPayloads({
    documents: [parse(source)],
    schema: SCHEMA,
    warn,
  });

/**
 * The generated `export type <name> = { ... }` block on its own. The shared
 * preamble and runtime helper mention words like `parameters` and `null`, so
 * assertions about a payload's fields have to look at just that payload.
 */
const payloadType = (output: string, name: string) => {
  const start = output.indexOf(`export type ${name} = {`);
  expect(start).toBeGreaterThan(-1);
  return output.slice(start, output.indexOf("\n};", start));
};

/** The body of a payload's builder — the `AddLedgerEntryInput` it constructs. */
const builderBody = (output: string, name: string) => {
  const start = output.indexOf(`export const ${name} = (`);
  expect(start).toBeGreaterThan(-1);
  return output.slice(start, output.indexOf("\n});", start));
};

const entryOperation = ({
  name = "PostThing",
  type = `"thing"`,
  typeVersion = "",
  parameters = "parameters: {amount: $amount}",
  variables = "$ik: SafeString!, $ledgerIk: SafeString!, $amount: String!",
}: {
  name?: string;
  type?: string;
  typeVersion?: string;
  parameters?: string;
  variables?: string;
} = {}) => `
  mutation ${name}(${variables}) {
    addLedgerEntry(
      ik: $ik
      entry: {ledger: {ik: $ledgerIk}, type: ${type}${typeVersion ? `, typeVersion: ${typeVersion}` : ""}${parameters ? `, ${parameters}` : ""}}
    ) {
      __typename
    }
  }
`;

describe("recognition", () => {
  it("recognises a typed entry operation", () => {
    const payloads = derive(entryOperation());

    expect(payloads).toHaveLength(1);
    expect(payloads[0]).toMatchObject({
      entryType: "thing",
      typeVersion: 1,
      operationName: "PostThing",
      parametersMode: "typed",
    });
  });

  it.each([
    [
      "a query rather than a mutation",
      `query PostThing($ik: SafeString!) { addLedgerEntry(ik: $ik, entry: {type: "thing"}) { __typename } }`,
    ],
    [
      "an anonymous operation",
      `mutation { addLedgerEntry(ik: "ik", entry: {type: "thing"}) { __typename } }`,
    ],
    [
      "more than one selection",
      `mutation PostThing { addLedgerEntry(ik: "ik", entry: {type: "thing"}) { __typename } ledgerEntry(ik: "ik") { id } }`,
    ],
    [
      "a field other than addLedgerEntry",
      `mutation PostThing { reconcileTx(ik: "ik", entry: {type: "thing"}) { __typename } }`,
    ],
    [
      "an entry argument that is a variable",
      `mutation PostThing($entry: LedgerEntryInput!) { addLedgerEntry(ik: "ik", entry: $entry) { __typename } }`,
    ],
    [
      "no entry argument at all",
      `mutation PostThing { addLedgerEntry(ik: "ik") { __typename } }`,
    ],
    [
      "a type that is a variable, as in the SDK's own addLedgerEntry",
      `mutation addLedgerEntry($type: String!) { addLedgerEntry(ik: "ik", entry: {type: $type, parameters: {}}) { __typename } }`,
    ],
    [
      "no type at all",
      `mutation PostLines { addLedgerEntry(ik: "ik", entry: {lines: []}) { __typename } }`,
    ],
  ])("skips %s", (_description, source) => {
    const warn = vi.fn();

    expect(derive(source, warn)).toEqual([]);
    // A skip is silent, never an error and never a warning.
    expect(warn).not.toHaveBeenCalled();
  });

  it("does not require a particular operation name", () => {
    const payloads = derive(entryOperation({ name: "whateverYouLike" }));

    expect(payloads).toHaveLength(1);
    expect(payloads[0].entryType).toEqual("thing");
  });

  it("renders nothing when no operation is a typed entry operation", () => {
    expect(
      generate(
        `mutation addLedgerEntry($type: String!) { addLedgerEntry(ik: "ik", entry: {type: $type}) { __typename } }`,
      ),
    ).toEqual("");
  });
});

/** Spec 2.3a: on every payload, whatever its operation binds. */
const COMMON_FIELD_NAMES = ["posted", "description", "tags", "groups", "conditions"];

describe("identity", () => {
  it("keeps two versions of one entry type apart", () => {
    const payloads = derive(
      [
        entryOperation({ name: "PostThing", typeVersion: "1" }),
        entryOperation({
          name: "PostThing_v2",
          typeVersion: "2",
          parameters: "parameters: {amount: $amount, fee: $fee}",
          variables:
            "$ik: SafeString!, $ledgerIk: SafeString!, $amount: String!, $fee: String!",
        }),
      ].join("\n"),
    );

    expect(payloads.map((payload) => payload.typeVersion)).toEqual([1, 2]);
    expect(payloads[1].parameters.map((parameter) => parameter.wireName)).toEqual([
      "amount",
      "fee",
    ]);
  });

  it("normalises an unpinned typeVersion to 1", () => {
    expect(derive(entryOperation())[0].typeVersion).toEqual(1);
  });

  it("treats an unpinned operation and one pinning version 1 as one payload", () => {
    const payloads = derive(
      [
        entryOperation({ name: "PostThing" }),
        entryOperation({ name: "PostThingAgain", typeVersion: "1" }),
      ].join("\n"),
    );

    expect(payloads).toHaveLength(1);
    // First occurrence in input order wins.
    expect(payloads[0].operationName).toEqual("PostThing");
  });

  it("deduplicates two operations at one identity without warning", () => {
    const warn = vi.fn();
    const payloads = derive(
      [
        entryOperation({ name: "PostThing" }),
        entryOperation({ name: "PostThingWithMoreFields" }),
      ].join("\n"),
      warn,
    );

    expect(payloads).toHaveLength(1);
    expect(warn).not.toHaveBeenCalled();
  });

  it("warns when two operations at one identity bind different entry fields", () => {
    const warn = vi.fn();
    // Feeding both the plain and the runtime-args generation of one Schema in
    // together is the realistic way to hit this: they describe the same entries
    // but bind different fields, and the first one in wins.
    const payloads = derive(
      [
        entryOperation({ name: "PostThing" }),
        entryOperation({
          name: "PostThingRuntimeArgs",
          parameters:
            "tags: $tags, parameters: {amount: $amount}",
          variables:
            "$ik: SafeString!, $ledgerIk: SafeString!, $amount: String!, $tags: [LedgerEntryTagInput!]",
        }),
      ].join("\n"),
      warn,
    );

    expect(payloads).toHaveLength(1);
    expect(payloads[0].fields.map((field) => field.name)).toEqual([
      "ledgerIk",
      ...COMMON_FIELD_NAMES,
    ]);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain("different entry fields");
  });

  it("warns when two operations at one identity declare different parameters", () => {
    const warn = vi.fn();
    const payloads = derive(
      [
        entryOperation({ name: "PostThing" }),
        entryOperation({
          name: "PostThingStale",
          parameters: "parameters: {somethingElse: $amount}",
        }),
      ].join("\n"),
      warn,
    );

    expect(payloads).toHaveLength(1);
    expect(payloads[0].operationName).toEqual("PostThing");
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain("different parameters");
  });
});

describe("parameters", () => {
  it("takes required-ness from the variable definition, not the field name", () => {
    const payloads = derive(
      entryOperation({
        parameters: "parameters: {amount: $amount, memo: $memo}",
        variables:
          "$ik: SafeString!, $ledgerIk: SafeString!, $amount: Int64!, $memo: String",
      }),
    );

    expect(
      payloads[0].parameters.map((parameter) => ({
        wireName: parameter.wireName,
        required: parameter.required,
      })),
    ).toEqual([
      { wireName: "amount", required: true },
      { wireName: "memo", required: false },
    ]);
  });

  it("preserves source order rather than sorting or putting required first", () => {
    const payloads = derive(
      entryOperation({
        parameters:
          "parameters: {zebra: $zebra, apple: $apple, middle: $middle}",
        variables:
          "$ik: SafeString!, $ledgerIk: SafeString!, $zebra: String, $apple: String!, $middle: String",
      }),
    );

    expect(payloads[0].parameters.map((parameter) => parameter.wireName)).toEqual([
      "zebra",
      "apple",
      "middle",
    ]);
  });

  it("leaves a parameter the operation fixes to the API", () => {
    const payloads = derive(
      entryOperation({
        parameters: `parameters: {amount: $amount, currency: "USD", nested: {a: 1}}`,
      }),
    );

    // A fixed value is encoded in the Schema, so the API derives it from there:
    // the payload neither exposes it nor re-posts it.
    expect(payloads[0].parameters.map((parameter) => parameter.wireName)).toEqual([
      "amount",
    ]);
  });

  it("falls back to an untyped map when parameters is a variable", () => {
    const payloads = derive(
      entryOperation({
        parameters: "parameters: $parameters",
        variables: "$ik: SafeString!, $ledgerIk: SafeString!, $parameters: JSON!",
      }),
    );

    expect(payloads[0]).toMatchObject({
      entryType: "thing",
      parametersMode: "untyped",
      parameters: [],
    });
  });

  it("takes no parameters at all when the operation posts none", () => {
    const payloads = derive(entryOperation({ parameters: "" }));

    expect(payloads[0]).toMatchObject({
      parametersMode: "absent",
      parameters: [],
    });
  });

  it("leaves values the operation fixes to the API", () => {
    const warn = vi.fn();
    const output = generate(
      entryOperation({
        parameters: `posted: "2024-01-01", parameters: {amount: $amount, currency: "USD"}`,
      }),
      warn,
    );

    // Both are encoded in the Schema the operation was generated from, so the
    // API derives them: the payload neither exposes nor re-posts either one.
    expect(builderBody(output, "thingV1")).not.toContain("2024-01-01");
    expect(builderBody(output, "thingV1")).not.toContain("USD");
    expect(warn).not.toHaveBeenCalled();
  });
  it("takes no parameters when the operation fixes all of them", () => {
    const output = generate(
      entryOperation({ parameters: `parameters: {currency: "USD"}` }),
    );

    expect(builderBody(output, "thingV1")).not.toContain("USD");
    expect(payloadType(output, "ThingV1")).not.toContain("parameters");
  });
  it("warns and skips a parameter bound to an undeclared variable", () => {
    const warn = vi.fn();
    const payloads = derive(
      entryOperation({
        parameters: "parameters: {amount: $amount, mystery: $mystery}",
      }),
      warn,
    );

    expect(payloads[0].parameters.map((parameter) => parameter.wireName)).toEqual([
      "amount",
    ]);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain("$mystery");
  });
});

describe("naming", () => {
  it("always carries the version the payload resolves to", () => {
    const names = nameTypedEntryPayloads(
      derive(
        [
          entryOperation({ name: "PostThing" }),
          entryOperation({ name: "PostThing_v2", typeVersion: "2" }),
        ].join("\n"),
      ),
    ).map((payload) => payload.typeName);

    expect(names).toEqual(["ThingV1", "ThingV2"]);
  });

  it("derives a name from the entry type alone, whatever else is generated", () => {
    const alone = nameTypedEntryPayloads(derive(entryOperation()))[0];
    const alongside = nameTypedEntryPayloads(
      derive(
        [
          entryOperation({ name: "PostOther", type: `"other"` }),
          entryOperation(),
          entryOperation({ name: "PostThing_v9", typeVersion: "9" }),
        ].join("\n"),
      ),
    ).find((payload) => payload.typeVersion === 1 && payload.entryType === "thing");

    expect(alongside?.typeName).toEqual(alone.typeName);
    expect(alongside?.builderName).toEqual(alone.builderName);
  });

  it.each([
    ["user-funds-account", "UserFundsAccountV1", "userFundsAccountV1"],
    ["fundingSettlement", "FundingSettlementV1", "fundingSettlementV1"],
    ["payment_processing", "PaymentProcessingV1", "paymentProcessingV1"],
    ["2-way-transfer", "_2WayTransferV1", "_2WayTransferV1"],
  ])("names %s as %s", (entryType, typeName, builderName) => {
    const [payload] = nameTypedEntryPayloads(
      derive(entryOperation({ type: JSON.stringify(entryType) })),
    );

    expect(payload.typeName).toEqual(typeName);
    expect(payload.builderName).toEqual(builderName);
  });

  it("warns and suffixes when two entry types want one identifier", () => {
    const warn = vi.fn();
    const payloads = nameTypedEntryPayloads(
      derive(
        [
          entryOperation({ name: "PostA", type: `"user-funds"` }),
          entryOperation({ name: "PostB", type: `"user_funds"` }),
        ].join("\n"),
      ),
      { warn },
    );

    expect(payloads.map((payload) => payload.typeName)).toEqual([
      "UserFundsV1",
      "UserFundsV1_2",
    ]);
    expect(warn).toHaveBeenCalledTimes(1);
  });
});

describe("rendering", () => {
  it("types a required parameter from its variable and an optional one as optional", () => {
    const output = generate(
      entryOperation({
        parameters: "parameters: {amount: $amount, memo: $memo, tag: $tag}",
        variables:
          "$ik: SafeString!, $ledgerIk: SafeString!, $amount: Int64!, $memo: String, $tag: LedgerEntryTagInput",
      }),
    );

    const payload = payloadType(output, "ThingV1");
    expect(payload).toContain("amount: Scalars['Int64']['input'];");
    expect(payload).toContain("memo?: Scalars['String']['input'] | undefined;");
    // A non-scalar variable type refers to the generated input type by name.
    expect(payload).toContain("tag?: LedgerEntryTagInput | undefined;");
    // InputMaybe and wire-visible null are never used for these types.
    expect(payload).not.toContain("InputMaybe");
    expect(payload).not.toContain("| null");
  });

  it("keeps a wire name verbatim even when it is a reserved word", () => {
    const output = generate(
      entryOperation({
        parameters:
          "parameters: {class: $reserved, function: $fn, user_id: $userId, userId: $userIdCamel}",
        variables:
          "$ik: SafeString!, $ledgerIk: SafeString!, $reserved: String!, $fn: String!, $userId: String!, $userIdCamel: String!",
      }),
    );

    // Property keys need no escaping in TypeScript, so no wire name is ever
    // rewritten, and two names that differ only in casing stay distinct.
    const payload = payloadType(output, "ThingV1");
    expect(payload).toContain("class: Scalars['String']['input'];");
    expect(payload).toContain("function: Scalars['String']['input'];");
    expect(payload).toContain("user_id: Scalars['String']['input'];");
    expect(payload).toContain("userId: Scalars['String']['input'];");
    // Wire names reach the built entry verbatim, in source order.
    expect(builderBody(output, "thingV1")).toContain(
      [
        "    parameters: {",
        "      class: input.parameters.class,",
        "      function: input.parameters.function,",
        "      user_id: input.parameters.user_id,",
        "      userId: input.parameters.userId,",
        "    },",
      ].join("\n"),
    );
  });

  it("renders lists and untyped parameter fallbacks", () => {
    const output = generate(
      [
        entryOperation({
          name: "PostThing",
          parameters: "parameters: {amounts: $amounts}",
          variables: "$ik: SafeString!, $ledgerIk: SafeString!, $amounts: [Int64!]!",
        }),
        entryOperation({
          name: "PostRuntime",
          type: `"runtime"`,
          parameters: "parameters: $parameters",
          variables: "$ik: SafeString!, $ledgerIk: SafeString!, $parameters: JSON!",
        }),
      ].join("\n"),
    );

    expect(payloadType(output, "ThingV1")).toContain(
      "amounts: Array<Scalars['Int64']['input']>;",
    );
    // `$parameters: JSON!` is non-null, so the untyped map is required.
    expect(payloadType(output, "RuntimeV1")).toContain(
      "parameters: Scalars['JSON']['input'];",
    );
  });

  it("exposes the entry fields the operation binds", () => {
    const output = generate(
      entryOperation({
        parameters: "posted: $posted, tags: $tags, parameters: {amount: $amount}",
        variables:
          "$ik: SafeString!, $ledgerIk: SafeString!, $posted: DateTime, $tags: [LedgerEntryTagInput!], $amount: String!",
      }),
    );

    const payload = payloadType(output, "ThingV1");
    expect(payload).toContain("ik: Scalars['SafeString']['input'];");
    expect(payload).toContain("ledgerIk: Scalars['SafeString']['input'];");
    expect(payload).toContain("posted?: Scalars['DateTime']['input'] | undefined;");
    expect(payload).toContain("tags?: Array<LedgerEntryTagInput> | undefined;");
    // `lines` cannot be combined with an entry that has a `type`, so it is the
    // one LedgerEntryInput field a payload never offers unasked.
    expect(payload).not.toContain("lines");
  });

  it("exposes every common field even when the operation binds none of them", () => {
    // Spec 2.3a: the common fields are fixed by `LedgerEntryInput`, not derived
    // from the operation. A CLI that stops binding `tags` must not silently
    // remove `tags` from the payload, and no CLI generation binds `description`
    // at all -- so deriving the set would leave it permanently unreachable.
    const output = generate(
      entryOperation({
        parameters: "parameters: {amount: $amount}",
        variables: "$ik: SafeString!, $ledgerIk: SafeString!, $amount: String!",
      }),
    );

    const payload = payloadType(output, "ThingV1");
    expect(payload).toContain("posted?: Scalars['DateTime']['input'] | undefined;");
    expect(payload).toContain("description?: Scalars['String']['input'] | undefined;");
    expect(payload).toContain("tags?: Array<LedgerEntryTagInput> | undefined;");
    expect(payload).toContain("groups?: Array<LedgerEntryGroupInput> | undefined;");
    expect(payload).toContain(
      "conditions?: Array<LedgerEntryConditionInput> | undefined;",
    );
    expect(payload).not.toContain("lines");
  });

  it("generates no payload for an entry type that takes Ledger Lines", () => {
    const warn = vi.fn();
    const output = generate(
      entryOperation({
        parameters: "lines: $lines",
        variables:
          "$ik: SafeString!, $ledgerIk: SafeString!, $lines: [LedgerLineInput!]!",
      }),
      warn,
    );

    // `lines` is not a common field, so a payload for this entry type could only
    // ever post an entry with no Lines. Better to have none, and say why.
    expect(output).toEqual("");
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain("raw `AddLedgerEntryInput`");
  });
  it("never lets the caller set type or typeVersion", () => {
    const output = generate(
      entryOperation({
        typeVersion: "3",
        parameters: `parameters: {amount: $amount}`,
      }),
    );

    const payload = payloadType(output, "ThingV3");
    expect(payload).not.toContain("  type");
    expect(payload).not.toContain("  typeVersion");
    // The version still reaches the wire, from the operation rather than the caller.
    expect(builderBody(output, "thingV3")).toContain("    typeVersion: 3,");
    expect(builderBody(output, "thingV3")).toContain("    type: 'thing',");
  });
  it("exposes a whole-object ledger binding as ledger", () => {
    const output = generate(`
      mutation PostThing($ik: SafeString!, $ledger: LedgerMatchInput, $amount: String!) {
        addLedgerEntry(
          ik: $ik
          entry: {ledger: $ledger, type: "thing", parameters: {amount: $amount}}
        ) {
          __typename
        }
      }
    `);

    expect(payloadType(output, "ThingV1")).toContain(
      "ledger?: LedgerMatchInput | undefined;",
    );
    expect(builderBody(output, "thingV1")).toContain(
      "    ...(input.ledger !== undefined && { ledger: input.ledger }),",
    );
  });

  it("matches the committed snapshot of generated output", () => {
    // Generated source is what callers write against, so any change to an
    // identifier or a signature has to surface as a reviewable diff.
    const payloads = nameTypedEntryPayloads(
      derive(
        [
          entryOperation({
            name: "PostUserFundsAccount",
            type: `"user-funds-account"`,
          }),
          entryOperation({
            name: "PostUserFundsAccount_v2",
            type: `"user-funds-account"`,
            typeVersion: "2",
            parameters:
              "parameters: {amount: $amount, feeAmount: $feeAmount, memo: $memo}",
            variables:
              "$ik: SafeString!, $ledgerIk: SafeString!, $amount: String!, $feeAmount: Int64!, $memo: String",
          }),
          entryOperation({
            name: "PostRuntimeThing",
            type: `"runtime-thing"`,
            parameters: "parameters: $parameters",
            variables:
              "$ik: SafeString!, $ledgerIk: SafeString!, $parameters: JSON!",
          }),
        ].join("\n"),
      ),
    );

    expect(renderTypedEntryPayloads(payloads, scalars)).toMatchSnapshot();
  });
});
