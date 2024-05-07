import fs from "fs";
import { expect, test } from "vitest";

test("tsconfig.include is identical in tsconfig.json and tsconfig.base.json", () => {
  const tsConfig = JSON.parse(
    fs.readFileSync("tsconfig.json").toString("utf-8")
  );
  const baseTsConfig = JSON.parse(
    fs.readFileSync("tsconfig.base.json").toString("utf-8")
  );

  // These only belong in tsconfig.json, which our LSPs use for local development, so
  // we filter them out.
  const ignored = ["tests/", "vitest.config.ts", "scripts/*.ts"];

  const filteredInclude = tsConfig.include.filter(
    (i: string) => !ignored.some((ig) => i.includes(ig))
  );
  expect(filteredInclude).toEqual(baseTsConfig.include);
});
