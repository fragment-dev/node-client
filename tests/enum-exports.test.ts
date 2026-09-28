import { runInNewContext } from "node:vm";
import { generate } from "@graphql-codegen/cli";
import type { Types } from "@graphql-codegen/plugin-helpers";
import ts from "typescript";
import { expect, it } from "vitest";

import { generateEnumExports } from "../scripts/generateEnumExports.js";

const evaluateModule = (
  source: string,
  dependencies: Record<string, Record<string, unknown>>,
): Record<string, unknown> => {
  const exports: Record<string, unknown> = {};
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  runInNewContext(outputText, {
    exports,
    require: (name: string) => dependencies[name],
  });
  return exports;
};

it.each([
  {
    schema:
      "enum CheckoutChannel { CARD BANK } type Query { channel: CheckoutChannel }",
    enumName: "CheckoutChannel",
  },
  { schema: "type Query { id: ID }", enumName: undefined },
])(
  "generates usable public exports for $schema",
  async ({ schema, enumName }) => {
    const outputs: Types.FileOutput[] = await generate(
      {
        schema,
        generates: {
          "generated/generated.ts": { plugins: ["typescript"] },
        },
      },
      false,
    );
    const generatedSource = outputs.find(
      ({ filename }) => filename === "generated/generated.ts",
    )!;
    const source = `${generatedSource.content}
      enum PrivateChannel { INTERNAL }
      export const getSdk = () => ({});
    `;
    const generatedModule = evaluateModule(source, {});
    const publicModule = evaluateModule(generateEnumExports(source), {
      "../generated/generated.js": generatedModule,
    });

    expect(Object.keys(publicModule)).toEqual(enumName ? [enumName] : []);
    if (enumName) {
      expect(publicModule[enumName]).toBe(generatedModule[enumName]);
      expect(publicModule[enumName]).toEqual({ Card: "CARD", Bank: "BANK" });
    }
  },
);
