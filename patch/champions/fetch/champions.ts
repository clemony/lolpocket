// npx tsx scripts/fetchChampions.ts
import fs from "node:fs"
import { resolve } from "node:path"
import { $fetch } from "ofetch"

const dataPath = resolve("./patch/misc/raw/patch-index-raw.json")
const loadPatch = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
const outputD = resolve("./patch/champions/raw/champions-raw-data-dragon.json")

const urlDD = `https://ddragon.leagueoflegends.com/cdn/${loadPatch[0]}/data/en_US/championFull.json`
async function foo() {
  const ddData = await $fetch(urlDD)
  fs.writeFileSync(outputD, JSON.stringify(ddData.data, null, 2))
  console.log(
    "✅ file written to ./champions/raw/champions-raw-data-dragon.json"
  )
}
foo()
