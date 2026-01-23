import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const INPUT_DIR = './public/img/champions/circle'
const OUTPUT_DIR = './public/img/champions/circle/daylight'

const BORDER = 8 // px
const RING_COLOR = '#000000'

fs.mkdirSync(OUTPUT_DIR, { recursive: true })

const files = fs
  .readdirSync(INPUT_DIR)
  .filter(f => /\.(png|webp|jpg|jpeg)$/i.test(f))

for (const file of files) {
  const inputPath = path.join(INPUT_DIR, file)
  const outputPath = path.join(
    OUTPUT_DIR,
    file.replace(path.extname(file), '.webp')
  )

  const image = sharp(inputPath)
  const meta = await image.metadata()

  if (!meta.width || !meta.height) {
    console.warn(`⚠️ Skipping ${file} (invalid image)`)
    continue
  }

  const size = Math.min(meta.width, meta.height)
  const canvasSize = size + BORDER * 2
  const radius = size / 2

  const maskSvg = Buffer.from(`
    <svg width="${canvasSize}" height="${canvasSize}" viewBox="0 0 ${canvasSize} ${canvasSize}">
      <circle cx="${canvasSize / 2}" cy="${canvasSize / 2}" r="${radius}" fill="white"/>
    </svg>
  `)

  const ringSvg = Buffer.from(`
    <svg width="${canvasSize}" height="${canvasSize}" viewBox="0 0 ${canvasSize} ${canvasSize}">
      <circle
        cx="${canvasSize / 2}"
        cy="${canvasSize / 2}"
        r="${radius}"
        fill="none"
        opacity="0.1"
        stroke="${RING_COLOR}"
        stroke-width="${BORDER}"
      />
    </svg>
  `)

  await image
    .resize(size, size)
    .extend({
      background: { alpha: 0, b: 0, g: 0, r: 0 },
      bottom: BORDER,
      left: BORDER,
      right: BORDER,
      top: BORDER,
    })
    .composite([
      { blend: 'dest-in', input: maskSvg },
      { blend: 'over', input: ringSvg },
    ])
    .png()
    .toFile(outputPath)

  console.log(`✅ ${file} → ${outputPath}`)
}
