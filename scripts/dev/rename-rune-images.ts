import fs from "node:fs"
import path from "node:path"
/* import { runeIndex } from "shared/rune-index"; */

const imagesDir = path.resolve /* ("./public/img/runes/grayscale");

for (const rune of runeIndex) {
  const oldName = `${rune.name.replace(/\s+/g, "")}.webp`; // <- use .webp
  const oldPath = path.join(imagesDir, oldName);
  const newPath = path.join(imagesDir, `${rune.id}.webp`); // <- rename to id.webp

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ Renamed ${oldName} → ${rune.id}.webp`);
  } else {
    console.warn(`⚠️  File not found for rune "${rune.name}"`);
  }
}
 */
console.log("🎉 Rune images renamed by ID!")
