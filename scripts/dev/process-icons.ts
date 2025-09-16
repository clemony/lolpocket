import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const iconsDir = path.resolve('./public/img/champions')

async function processIcons() {
  const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.png'))

  for (const file of files) {
    const inputPath = path.join(iconsDir, file)
    const outputPath = path.join(iconsDir, file.replace(/\.png$/, '.webp'))

    try {
      const image = sharp(inputPath)
      const { width, height } = await image.metadata()

      if (!width || !height) {
        console.warn(`⚠️ Skipping ${file} (invalid metadata)`)
        continue
      }

      const left = Math.floor((width - 100) / 2)
      const top = Math.floor((height - 100) / 2)

      await image
        .extract({ left, top, width: 100, height: 100 })
        .webp({ quality: 90 })
        .toFile(outputPath)

      fs.unlinkSync(inputPath) // remove PNG after conversion
      console.log(
        `✅ Cropped & converted ${file} → ${path.basename(outputPath)}`
      )
    }
    catch (err) {
      console.error(`❌ Error processing ${file}:`, err)
    }
  }
}

processIcons()
  .then(() => console.log('🎉 All icons processed!'))
  .catch(err => console.error('🚨 Batch error:', err))
