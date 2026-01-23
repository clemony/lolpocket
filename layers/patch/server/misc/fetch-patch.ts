import { writeFile } from "node:fs/promises"
import { ofetch } from "ofetch"
import { getFormattedDateTime } from "../utils/markUpdate"

async function main() {
  try {
    const versions = await ofetch<string[]>(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    )

    const p = versions.map((v) => v.split(".").slice(0, 2).join(".")) // trim to major.minor

    await writeFile(
      "./server/patch/misc/raw/patch-index.json",
      JSON.stringify(p, null, 2)
    )

    await writeFile(
      "./server/patch/misc/raw/patch-index-raw.json",
      JSON.stringify(versions, null, 2)
    )
    await writeFile(
      "./layers/domain/constants/patch-index.ts",
      `// ${getFormattedDateTime()}

export const patchIndex = ${JSON.stringify(p, null, 2)}`
    )

    console.log(
      "✅ Patches written to rawPatches.json and normalizedPatches.json"
    )
  } catch (e) {
    console.error("❌ Error fetching or writing patches:", e)
  }
}

main()
