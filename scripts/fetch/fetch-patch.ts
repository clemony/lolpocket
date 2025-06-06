import { writeFile } from "node:fs/promises"
import { ofetch } from "ofetch"
import { getFormattedDateTime } from "../utils/mark-update"

const MIN_PATCH_MAJOR = 15

function normalizePatch(patch: string): number {
  const [major, minor] = patch.split(".").map(Number)
  const formattedMinor = minor.toString().padStart(2, "0")
  return Number.parseFloat(`25.${formattedMinor}`) // assuming current year is 2025
}

async function main() {
  try {
    const versions = await ofetch<string[]>(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    )

    const filtered = versions
      .map((v) => v.split(".").slice(0, 2).join(".")) // trim to major.minor
      .filter((v) => {
        const [major] = v.split(".").map(Number)
        return major >= MIN_PATCH_MAJOR
      })

    const normalized = filtered.map((patch) => normalizePatch(patch))

    await writeFile(
      "./data/index/patch-index.json",
      JSON.stringify(normalized, null, 2)
    )

    await writeFile(
      "./data/raw/patch-index-raw.json",
      JSON.stringify(filtered, null, 2)
    )
    await writeFile(
      "./app/data/index/patch-index.ts",
      `// ${getFormattedDateTime()}

export const patchIndex = ${JSON.stringify(normalized, null, 2)}`
    )

    console.log(
      "✅ Patches written to rawPatches.json and normalizedPatches.json"
    )
  } catch (e) {
    console.error("❌ Error fetching or writing patches:", e)
  }
}

main()
