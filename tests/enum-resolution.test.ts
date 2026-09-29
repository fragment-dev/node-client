import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import ts from "typescript";
import { expect, it } from "vitest";

const consumerSource = `
import type { FragmentClient } from "@fragment-dev/node-client";
import { PaymentStatus } from "@fragment-dev/node-client/types";

declare const client: FragmentClient;
type Payment = NonNullable<Awaited<ReturnType<typeof client.getPayment>>["payment"]>;
declare const payment: Payment;
export const settledStatus: Payment["status"] = PaymentStatus.Settled;
export const isSettled = payment.status === PaymentStatus.Settled;
`;

it.each([
  {
    name: "node",
    resolution: ts.ModuleResolutionKind.Node10,
    module: ts.ModuleKind.ESNext,
    extension: "ts",
  },
  {
    name: "node16 ESM",
    resolution: ts.ModuleResolutionKind.Node16,
    module: ts.ModuleKind.Node16,
    extension: "mts",
  },
  {
    name: "node16 CommonJS",
    resolution: ts.ModuleResolutionKind.Node16,
    module: ts.ModuleKind.Node16,
    extension: "cts",
  },
  {
    name: "nodenext ESM",
    resolution: ts.ModuleResolutionKind.NodeNext,
    module: ts.ModuleKind.NodeNext,
    extension: "mts",
  },
  {
    name: "nodenext CommonJS",
    resolution: ts.ModuleResolutionKind.NodeNext,
    module: ts.ModuleKind.NodeNext,
    extension: "cts",
  },
  {
    name: "bundler",
    resolution: ts.ModuleResolutionKind.Bundler,
    module: ts.ModuleKind.ESNext,
    extension: "ts",
  },
])(
  "shares response and public enum types with $name resolution",
  ({ resolution, module, extension }) => {
    const directory = mkdtempSync(path.join(tmpdir(), "node-client-enum-"));
    const dependencyDirectory = path.join(
      directory,
      "node_modules",
      "@fragment-dev",
    );
    // Resolve the published entry points instead of importing source files directly.
    mkdirSync(dependencyDirectory, { recursive: true });
    symlinkSync(
      process.cwd(),
      path.join(dependencyDirectory, "node-client"),
      "dir",
    );
    const filename = path.join(directory, `consumer.${extension}`);
    writeFileSync(filename, consumerSource);
    const program = ts.createProgram([filename], {
      module,
      moduleResolution: resolution,
      target: ts.ScriptTarget.ES2022,
      strict: true,
      skipLibCheck: true,
      noEmit: true,
      types: [],
    });
    const diagnostics = ts
      .getPreEmitDiagnostics(program)
      .map((diagnostic) =>
        ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
      );
    const checker = program.getTypeChecker();
    const comparisons: {
      left: ts.Symbol | undefined;
      right: ts.Symbol | undefined;
    }[] = [];
    const visitNode = (node: ts.Node): void => {
      if (
        ts.isBinaryExpression(node) &&
        node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken
      ) {
        comparisons.push({
          left: checker
            .getBaseTypeOfLiteralType(checker.getTypeAtLocation(node.left))
            .getSymbol(),
          right: checker
            .getBaseTypeOfLiteralType(checker.getTypeAtLocation(node.right))
            .getSymbol(),
        });
      }
      ts.forEachChild(node, visitNode);
    };
    const source = program.getSourceFile(filename);
    if (source) visitNode(source);
    rmSync(directory, { recursive: true, force: true });

    expect(diagnostics).toEqual([]);
    expect(comparisons).toHaveLength(1);
    comparisons.forEach(({ left, right }) => {
      expect(left?.name).toBe("PaymentStatus");
      expect(
        right?.declarations?.map((node) => node.getSourceFile().fileName),
      ).toEqual(
        left?.declarations?.map((node) => node.getSourceFile().fileName),
      );
      expect(right).toBe(left);
    });
  },
);
