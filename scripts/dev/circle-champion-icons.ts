// scripts/circle-champion-icons.ts
import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const iconsDir = path.resolve("./public/img/champions")
console.log("🥸 - iconsDir:", iconsDir)
const outDir = path.join(iconsDir, "circle")
console.log("🥸 - outDir:", outDir)

async function run() {
  await fs.mkdir(outDir, { recursive: true })

  const files = await fs.readdir(iconsDir)
  console.log("🥸 - run - files:", files)

  const webps = files.filter((f) => f.endsWith(".webp"))
  console.log("🥸 - run - webps:", webps)

  for (const file of webps) {
    console.log("🥸 - run - file:", file)
    const inputPath = path.join(iconsDir, file)
    const outputPath = path.join(outDir, file)

    const size = 100

    const circleSvg = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>`
    )

    await sharp(inputPath)
      .resize(size, size) // safety, no-op if already 100x100
      .composite([
        {
          input: circleSvg,
          blend: "dest-in",
        },
      ])
      .webp({ quality: 100 })
      .toFile(outputPath)

    console.log(`✔ ${file}`)
  }

  console.log("🎉 Done")
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
