import fs from "fs";
import { test, expect } from "vitest";

import { version } from "../generated/version.js";

// If this test fails, you most probably will need to run `yarn gen-version` to generate
// the version.ts file.
test("Version in package.json matches version in version.ts", async () => {
  const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const pkgVersion = pkgJson.version as string;
  expect(pkgVersion).toEqual(version);
});
