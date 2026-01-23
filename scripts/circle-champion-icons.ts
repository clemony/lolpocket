// scripts/circle-champion-icons.ts
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const iconsDir = path.resolve('./public/img/champions')
const outDir = path.join(iconsDir, 'circle')

const ICON_SIZE = 100
const STROKE = 0
const PADDING = 0
const STROKE_COLOR = '#000000'

async function run() {
  await fs.mkdir(outDir, { recursive: true })

  const files = await fs.readdir(iconsDir)
  const webps = files.filter(f => f.endsWith('.webp'))

  for (const file of webps) {
    const inputPath = path.join(iconsDir, file)
    const outputPath = path.join(outDir, file)

    const img = sharp(inputPath)
    const meta = await img.metadata()
    if (!meta.width || !meta.height)
      continue

    // 1️⃣ center-crop to square
    const side = Math.min(meta.width, meta.height)
    const left = Math.floor((meta.width - side) / 2)
    const top = Math.floor((meta.height - side) / 2)

    const cropped = await img
      .extract({ width: side, height: side, left, top })
      .resize(ICON_SIZE, ICON_SIZE)
      .toBuffer()

    // 2️⃣ circular mask
    const maskSvg = Buffer.from(`
      <svg width="${ICON_SIZE}" height="${ICON_SIZE}">
        <circle
          cx="${ICON_SIZE / 2}"
          cy="${ICON_SIZE / 2}"
          r="${ICON_SIZE / 2}"
          fill="white"
        />
      </svg>
    `)

    const masked = await sharp(cropped)
      .composite([{ blend: 'dest-in', input: maskSvg }])
      .toBuffer()

    // 3️⃣ final canvas
    const CANVAS = ICON_SIZE + PADDING * 2

    const ringSvg = Buffer.from(`
      <svg width="${CANVAS}" height="${CANVAS}" viewBox="0 0 ${CANVAS} ${CANVAS}">
        <circle
          cx="${CANVAS / 2}"
          cy="${CANVAS / 2}"
          r="${ICON_SIZE / 2 - STROKE / 2}"
          fill="none"
          stroke="${STROKE_COLOR}"
          stroke-width="${STROKE}"
        />
      </svg>
    `)

    // 4️⃣ compose everything
    await sharp({
      create: {
        width: CANVAS,
        background: { alpha: 0, b: 0, g: 0, r: 0 },
        channels: 4,
        height: CANVAS,
      },
    })
      .composite([
        { input: ringSvg },
        { input: masked, left: PADDING, top: PADDING },
      ])
      .webp({
        alphaQuality: 100,
        effort: 6,
        quality: 90,
      })
      .toFile(outputPath)

    console.log(`✔ ${file}`)
  }

  console.log('🎉 Done')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
