import { mkdir, readFile, writeFile } from "node:fs/promises"
import { resolve } from "node:path"
import type { Metadata, PatchNotesMeta } from "../.."
import { fromLolpocketRoot, fromPatchRoot } from "../patch/utils/paths"
import { fetchMeta } from "./fetch-meta"

const PATCH_INDEX_PATH = fromPatchRoot("misc/raw/patch-index.json")
const OUTPUT_DIR = fromLolpocketRoot("public/cdn/meta")

function getCurrentPatch(rawPatchList: string[]): string {
  const first = rawPatchList[0]
  if (!first) throw new Error("patch-index.json is empty")
  return first
}

function getMinorPatch(patch: string): number {
  const [, minor] = patch.split(".")
  const numericMinor = Number.parseInt(minor ?? "", 10)

  if (!Number.isFinite(numericMinor)) {
    throw new Error(`Could not parse minor patch from \"${patch}\"`)
  }

  return numericMinor
}

function getRiotPatchSlug(minorPatch: number): string {
  const yearShort = new Date().getUTCFullYear() % 100
  return `${yearShort}-${minorPatch}`
}

function getPatchNotesUrl(slug: string, locale = "en-us"): string {
  return `https://www.leagueoflegends.com/${locale}/news/game-updates/league-of-legends-patch-${slug}-notes/`
}

async function main() {
  const locale = process.env.NUXT_PUBLIC_LOCALE ?? "en-us"

  const patchListRaw = await readFile(PATCH_INDEX_PATH, "utf-8")
  const patchList = JSON.parse(patchListRaw) as string[]

  const currentPatch = getCurrentPatch(patchList)
  const minorPatch = getMinorPatch(currentPatch)
  const riotSlug = getRiotPatchSlug(minorPatch)
  const patchNotesUrl = getPatchNotesUrl(riotSlug, locale)

  const payload: PatchNotesMeta = {
    ...((await fetchMeta(patchNotesUrl, locale)) as Metadata),
    patch: currentPatch,
    riotSlug
  }

  await mkdir(OUTPUT_DIR, { recursive: true })

  const latestOutput = resolve(OUTPUT_DIR, "patch_latest.json")
  const patchOutput = resolve(OUTPUT_DIR, `patch-notes/${currentPatch}.json`)

  await Promise.all([
    writeFile(latestOutput, JSON.stringify(payload, null, 2)),
    writeFile(patchOutput, JSON.stringify(payload, null, 2))
  ])

  console.log(
    `✅ Riot patch notes metadata saved for patch ${currentPatch} (${riotSlug})`
  )
  console.log(`${latestOutput}`)
  console.log(`${patchOutput}`)
}

main().catch((error) => {
  console.error("❌ Failed to fetch Riot patch notes metadata")
  console.error(error)
  process.exit(1)
})
