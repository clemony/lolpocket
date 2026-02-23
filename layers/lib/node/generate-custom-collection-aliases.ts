import fs from "node:fs"
import path, { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

interface IconifyIcon {
  body: string
  width?: number
  height?: number
}

interface IconifyCollection {
  prefix: string
  icons: Record<string, IconifyIcon>
}

const __dirname = dirname(fileURLToPath(import.meta.url))

const root = resolve(__dirname, "../../..")
const iconsRoot = resolve(root, "layers/ui/app/assets/icons")
const outputRoot = resolve(root, ".vscode/.iconify")

if (!fs.existsSync(outputRoot)) {
  fs.mkdirSync(outputRoot)
}

const collections = fs
  .readdirSync(iconsRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)

for (const collection of collections) {
  const collectionDir = path.join(iconsRoot, collection)
  const svgFiles = fs
    .readdirSync(collectionDir)
    .filter((f) => f.endsWith(".svg"))

  const icons: IconifyCollection["icons"] = {}

  for (const file of svgFiles) {
    const filePath = path.join(collectionDir, file)
    const raw = fs.readFileSync(filePath, "utf-8")

    const body = raw
      .replace(/<\?xml.*?\?>/g, "")
      .replace(/<!DOCTYPE.*?>/g, "")
      .replace(/<svg[^>]*>/, "")
      .replace("</svg>", "")
      .trim()

    const name = path.basename(file, ".svg")
    const viewBoxMatch = raw.match(/viewBox="([^"]+)"/)
    const viewBox = viewBoxMatch?.[1] ?? "0 0 24 24"

    const [, , width, height] = viewBox.split(" ")

    icons[name] = {
      body,
      width: Number(width),
      height: Number(height),
    }
  }

  const json = {
    prefix: collection,
    icons,
  }

  fs.writeFileSync(
    path.join(outputRoot, `${collection}.json`),
    JSON.stringify(json, null, 2)
  )

  console.log(`✓ Generated ${collection}.json`)
}
