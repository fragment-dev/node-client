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

/** The `buildTypedLedgerEntry(...)` call of a payload's builder. */
const builderCall = (output: string, name: string) => {
  const start = output.indexOf(`  buildTypedLedgerEntry(${name}`);
  expect(start).toBeGreaterThan(-1);
  return output.slice(start, output.indexOf("\n", start));
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
      payloads[0].parameters.map(({ wireName, required }) => ({
        wireName,
        required,
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

  it("skips a parameter whose value is fixed by the operation", () => {
    const payloads = derive(
      entryOperation({
        parameters: `parameters: {amount: $amount, currency: "USD", nested: {a: 1}}`,
      }),
    );

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
    expect(builderCall(output, "'thing'")).toContain(
      "['class', 'function', 'user_id', 'userId'], input);",
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

  it("exposes exactly the entry fields the operation binds", () => {
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
    // Nothing the operation leaves out is offered to the caller.
    expect(payload).not.toContain("groups");
    expect(payload).not.toContain("conditions");
    expect(payload).not.toContain("description");
    expect(payload).not.toContain("lines");
  });

  it("exposes lines when the operation binds them", () => {
    const output = generate(
      entryOperation({
        parameters: "lines: $lines",
        variables:
          "$ik: SafeString!, $ledgerIk: SafeString!, $lines: [LedgerLineInput!]!",
      }),
    );

    // An entry type whose lines the Schema does not fix takes them from the
    // caller, and the operation is what says so.
    const payload = payloadType(output, "ThingV1");
    expect(payload).toContain("lines: Array<LedgerLineInput>;");
    // With no `parameters` in the operation, the payload takes none.
    expect(payload).not.toContain("parameters");
  });

  it("never lets the caller set type, typeVersion or a fixed field", () => {
    const output = generate(
      entryOperation({
        typeVersion: "3",
        parameters: `description: "fixed by the operation", parameters: {amount: $amount}`,
      }),
    );

    const payload = payloadType(output, "ThingV3");
    expect(payload).not.toContain("  type");
    expect(payload).not.toContain("  typeVersion");
    // A field bound to a literal is fixed by the operation, so it is not the
    // caller's to set.
    expect(payload).not.toContain("description");
    // The version still reaches the wire, from the operation rather than the caller.
    expect(builderCall(output, "'thing'")).toContain("'thing', 3,");
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
    expect(builderCall(output, "'thing'")).toContain("[['ledger', 'ledger']]");
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
