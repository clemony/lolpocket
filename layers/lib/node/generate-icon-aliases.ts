import { writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import process from "node:process"
import { fileURLToPath, pathToFileURL } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

// Adjust this if script location changes
const root = resolve(__dirname, "../../..")

const sourcePath = resolve(root, "layers/ui/app/assets/icons/index.icons.ts")

const outputPath = resolve(root, ".vscode/icon-alias.json")

async function run() {
  try {
    const moduleUrl = pathToFileURL(sourcePath).href
    const mod = await import(moduleUrl)

    if (!mod.icon?.aliases) {
      throw new Error("Could not find icon.aliases in source file.")
    }

    const aliases = mod.icon.aliases

    await writeFile(outputPath, JSON.stringify(aliases, null, 2), "utf8")

    console.log(`✅ Generated icon aliases → ${outputPath}`)
  } catch (err) {
    console.error("❌ Failed to generate icon alias JSON")
    console.error(err)
    process.exit(1)
  }
}

run()
