import fs from "fs";

const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const pkgVersion = pkgJson.version as string;
const versionMatch = /^(\d+)\.(\d+)\.(\d+)(-\w+)?$/.exec(pkgVersion);
if (!versionMatch) {
  throw new Error(`Invalid version: ${pkgVersion}`);
}

const body = `
// Note: This file is auto-generated using "scripts/genVersion.ts"

/**
 * A string representing the current version of the package.
 */
export const version = '${pkgVersion}' as const;
`;

fs.writeFileSync("generated/version.ts", body.trimLeft());
