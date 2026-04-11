import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const utilsDir = fileURLToPath(new URL(".", import.meta.url));

export const patchRoot = resolve(utilsDir, "..");
export const lolpocketRoot = resolve(patchRoot, "../../lolpocket");

export function fromApiRoot(...segments: string[]): string {
  return resolve(patchRoot, ...segments);
}

export function fromLolpocketRoot(...segments: string[]): string {
  return resolve(lolpocketRoot, ...segments);
}
