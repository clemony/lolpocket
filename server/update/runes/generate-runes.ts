import fs from "node:fs";
import path from "node:path";
import { resolvePath } from "../resolvePath";
import { markUpdate } from "../utils";

const dataPath = resolvePath("./runes/raw/runes.json");
const runeOutputDir = path.resolve("./shared/records/runes");
const raw = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const outputIndex: Record<string, any> = {};

fs.rmSync(runeOutputDir, { force: true, recursive: true }); // clean old runes
fs.mkdirSync(runeOutputDir, { recursive: true });

for (const runePath of raw) {
  const pathName = runePath.name;
  fs.mkdirSync(runeOutputDir, { recursive: true });

  const slots = runePath.slots.map((slot: any) =>
    slot.runes.map((rune: any, tierSlot: number) => {
      const enriched = {
        ...rune,
        description: rune.description.replace(/\|\|/g, "/"),
        path: runePath.name,
        pathId: runePath.id,
        tier: slot.tier,
        tierLabel: slot.label,
        tierSlot,
      };

      const filePath = path.join(runeOutputDir, `${rune.id}.ts`);
      fs.writeFileSync(
        filePath,
        `// ${markUpdate()}

const rune: Rune = ${JSON.stringify(enriched, null, 2)}

export default rune`,
      );

      return enriched;
    }),
  );

  outputIndex[pathName] = slots;
}

console.log("✅ Split rune files generated per rune");
