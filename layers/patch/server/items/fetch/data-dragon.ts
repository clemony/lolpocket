import fs, { writeFileSync } from "node:fs"
import path from "node:path"
import { $fetch } from "ofetch"
import { i_DIR, m_DIR } from "../../utils"

const dataPath = path.resolve(`${m_DIR}raw/patch-index-raw.json`)
const loadPatch = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
const outputPath = path.resolve(`${i_DIR}raw/dd-items.json`)
async function run() {
  try {
    const urlDD = `https://ddragon.leagueoflegends.com/cdn/${loadPatch[0]}/data/en_US/item.json`
    const ddData = await $fetch(urlDD)

    writeFileSync(outputPath, JSON.stringify(ddData.data, null, 2))
    console.log(`✅ data dragon fetch complete~!`)
  } catch (error) {
    console.error("❌ Fetchfailed:", error)
  }
}

run()
