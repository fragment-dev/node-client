/**
 * Snapshot coverage for the clients generated from `tests/template-schema/`, a
 * real Fragment template Schema and the two operation sets the CLI generates
 * from it: one that binds only `posted`, and one that also binds `tags`,
 * `groups` and `conditions`. Both are committed, so any change to a generated
 * identifier or signature shows up as a reviewable diff.
 *
 * The two sets are what makes the pair worth having: a payload exposes exactly
 * what its source operation binds, so the runtime-args payloads accept more
 * fields while describing the same entry types with the same parameters.
 */
import { readFileSync } from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { parse } from "graphql";

import {
  deriveTypedEntryPayloads,
  nameTypedEntryPayloads,
} from "../src/typedBatchEntries.js";
import {
  disputePayoutSettleV1,
  orderPlacedV1,
  orderPlacedV2,
  typedLedgerEntryBuilders,
} from "./fixtures/generated-template-client.js";
import { orderPlacedV2 as orderPlacedV2RuntimeArgs } from "./fixtures/generated-template-runtime-args-client.js";

const TEMPLATE_DIR = path.join(process.cwd(), "tests/template-schema");
const FIXTURES_DIR = path.join(process.cwd(), "tests/fixtures");

const read = (file: string) => readFileSync(file, "utf-8");

/** A payload's own `export type <name> = { ... }` block from a generated client. */
const payloadType = (client: string, name: string) => {
  const start = client.indexOf(`export type ${name} = {`);
  expect(start).toBeGreaterThan(-1);
  // Skip the declaration line so the type's own name cannot match a field check.
  return client.slice(client.indexOf("\n", start), client.indexOf("\n};", start));
};

/** Payload names, identities and wire parameter names, in derivation order. */
const surfaceOf = (file: string) =>
  nameTypedEntryPayloads(
    deriveTypedEntryPayloads([parse(read(path.join(TEMPLATE_DIR, file)))]),
  ).map((payload) => ({
    name: payload.builderName,
    type: payload.entryType,
    version: payload.typeVersion,
    parameters: payload.parameters.map((parameter) => parameter.wireName),
  }));

const generatedClient = read(
  path.join(FIXTURES_DIR, "generated-template-client.ts"),
);
const generatedRuntimeArgsClient = read(
  path.join(FIXTURES_DIR, "generated-template-runtime-args-client.ts"),
);

describe("generated template client", () => {
  it("exposes the fields each operation set binds, and no others", () => {
    const plain = payloadType(generatedClient, "DisputePayoutInitiateV1");
    const runtimeArgs = payloadType(
      generatedRuntimeArgsClient,
      "DisputePayoutInitiateV1",
    );

    // Both operations bind the entry's Ledger and `posted`.
    [plain, runtimeArgs].forEach((payload) => {
      expect(payload).toContain("ledgerIk: Scalars['SafeString']['input'];");
      expect(payload).toContain("posted?: Scalars['DateTime']['input'] | undefined;");
    });

    // Only the runtime-args operation binds tags, groups and conditions, so only
    // its payload lets a caller set them.
    expect(runtimeArgs).toContain("tags?: Array<LedgerEntryTagInput> | undefined;");
    expect(runtimeArgs).toContain("groups?: Array<LedgerEntryGroupInput> | undefined;");
    expect(runtimeArgs).toContain(
      "conditions?: Array<LedgerEntryConditionInput> | undefined;",
    );
    expect(plain).not.toContain("tags");
    expect(plain).not.toContain("groups");
    expect(plain).not.toContain("conditions");

    // Neither binds lines for this entry type, whose lines the Schema fixes.
    expect(plain).not.toContain("lines");
    expect(runtimeArgs).not.toContain("lines");
  });

  it("binds different fields per entry type within one operation set", () => {
    // `card_settle` binds tags and groups but no conditions; the payload says so.
    const cardSettle = payloadType(generatedRuntimeArgsClient, "CardSettleV1");

    expect(cardSettle).toContain("tags?: Array<LedgerEntryTagInput> | undefined;");
    expect(cardSettle).toContain("groups?: Array<LedgerEntryGroupInput> | undefined;");
    expect(cardSettle).not.toContain("conditions");
  });

  it("matches the payload surface derived from the template Schema", () => {
    expect(surfaceOf("queries.graphql")).toMatchInlineSnapshot(`
      [
        {
          "name": "orderPlacedV1",
          "parameters": [
            "user_id",
            "order_id",
            "order_cost",
            "currency",
            "platform_fee",
            "driver_fee",
            "restaurant_id",
            "driver_id",
          ],
          "type": "order_placed",
          "version": 1,
        },
        {
          "name": "orderPlacedV2",
          "parameters": [
            "user_id",
            "order_id",
            "order_cost",
            "currency",
            "platform_fee",
            "service_fee",
            "driver_fee",
            "restaurant_id",
            "driver_id",
          ],
          "type": "order_placed",
          "version": 2,
        },
        {
          "name": "cardSettleV1",
          "parameters": [
            "user_id",
            "order_id",
            "currency",
            "amount",
          ],
          "type": "card_settle",
          "version": 1,
        },
        {
          "name": "restaurantPayoutInitiateV1",
          "parameters": [
            "restaurant_id",
            "order_id",
            "currency",
            "amount",
            "payout_id",
          ],
          "type": "restaurant_payout_initiate",
          "version": 1,
        },
        {
          "name": "restaurantPayoutSettleV1",
          "parameters": [
            "restaurant_id",
            "payout_id",
            "currency",
            "amount",
          ],
          "type": "restaurant_payout_settle",
          "version": 1,
        },
        {
          "name": "driverPayoutInitiateV1",
          "parameters": [
            "driver_id",
            "order_id",
            "currency",
            "amount",
            "payout_id",
          ],
          "type": "driver_payout_initiate",
          "version": 1,
        },
        {
          "name": "driverPayoutSettleV1",
          "parameters": [
            "driver_id",
            "payout_id",
            "currency",
            "amount",
          ],
          "type": "driver_payout_settle",
          "version": 1,
        },
        {
          "name": "disputePayoutInitiateV1",
          "parameters": [
            "user_id",
            "disputes_id",
            "amount",
            "currency",
            "payout_id",
            "order_id",
          ],
          "type": "dispute_payout_initiate",
          "version": 1,
        },
        {
          "name": "disputePayoutSettleV1",
          "parameters": [
            "user_id",
            "disputes_id",
            "amount",
            "currency",
            "order_id",
          ],
          "type": "dispute_payout_settle",
          "version": 1,
        },
      ]
    `);

    // The runtime-args operations describe the same Schema, so they must derive
    // the same surface, down to parameter order.
    expect(surfaceOf("queries.runtime-args.graphql")).toEqual(
      surfaceOf("queries.graphql"),
    );
  });

  it("exposes every payload in the runtime registry", () => {
    expect(Object.keys(typedLedgerEntryBuilders)).toEqual([
      "order_placed@1",
      "order_placed@2",
      "card_settle@1",
      "restaurant_payout_initiate@1",
      "restaurant_payout_settle@1",
      "driver_payout_initiate@1",
      "driver_payout_settle@1",
      "dispute_payout_initiate@1",
      "dispute_payout_settle@1",
    ]);
  });

  it("keeps snake_case parameter names verbatim, in source order", () => {
    const built = orderPlacedV2({
      ik: "order-1",
      ledgerIk: "marketplace",
      parameters: {
        // Given in a different order than the operation declares them.
        driver_id: "driver-1",
        user_id: "user-1",
        order_id: "order-1",
        order_cost: "2000",
        currency: "USD",
        platform_fee: "200",
        service_fee: "100",
        driver_fee: "300",
        restaurant_id: "restaurant-1",
      },
    });

    expect(Object.keys(built.entry.parameters ?? {})).toEqual([
      "user_id",
      "order_id",
      "order_cost",
      "currency",
      "platform_fee",
      "service_fee",
      "driver_fee",
      "restaurant_id",
      "driver_id",
    ]);
    expect(built.entry.typeVersion).toEqual(2);
  });

  it("builds the same wire payload from either generated client", () => {
    const input = {
      ik: "order-1",
      ledgerIk: "marketplace",
      parameters: {
        user_id: "user-1",
        order_id: "order-1",
        order_cost: "2000",
        currency: "USD",
        platform_fee: "200",
        service_fee: "100",
        driver_fee: "300",
        restaurant_id: "restaurant-1",
        driver_id: "driver-1",
      },
    };

    expect(JSON.stringify(orderPlacedV2RuntimeArgs(input))).toEqual(
      JSON.stringify(orderPlacedV2(input)),
    );
  });

  it("posts an unpinned entry type at the version it resolves to", () => {
    const built = orderPlacedV1({
      ik: "order-1",
      ledgerIk: "marketplace",
      parameters: {
        user_id: "user-1",
        order_id: "order-1",
        order_cost: "2000",
        currency: "USD",
        platform_fee: "200",
        driver_fee: "300",
        restaurant_id: "restaurant-1",
        driver_id: "driver-1",
      },
    });

    expect(built.entry.type).toEqual("order_placed");
    expect(built.entry.typeVersion).toEqual(1);
    // Nothing the caller left unset reaches the wire.
    expect(JSON.stringify(built)).not.toContain("null");
    expect(Object.keys(built.entry).sort()).toEqual([
      "ledger",
      "parameters",
      "type",
      "typeVersion",
    ]);
  });

  it("does not offer lines when the operation does not bind them", () => {
    const built = disputePayoutSettleV1({
      ik: "dispute-1",
      ledgerIk: "marketplace",
      // @ts-expect-error this entry type's lines are fixed by the Schema, so its
      // operation does not bind them and the payload does not accept them.
      lines: [],
      parameters: {
        user_id: "user-1",
        disputes_id: "dispute-1",
        amount: "500",
        currency: "USD",
        order_id: "order-1",
      },
    });

    expect("lines" in built.entry).toBe(false);
  });
});
