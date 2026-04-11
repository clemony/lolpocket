import { mkdir, writeFile } from "node:fs/promises"
import { resolve } from "node:path"
import type { PbeMeta } from "../.."
import { fromLolpocketRoot } from "../patch/utils/paths"
import { fetchHtml, fetchMeta } from "./fetch-meta"

const OUTPUT_DIR = fromLolpocketRoot("public/cdn/meta")
const PBE_URL = "https://wiki.leagueoflegends.com/en-us/VPBE"
const PBE_INFOBOX_IMAGE_RE =
  /<div class="infobox-gallery"[\s\S]*?<img[^>]+src=["']([^"']+)["']/i

function extractWikiLastModified(html: string): string | null {
  const footerMatch = html.match(
    /<li[^>]*id=["']footer-info-lastmod["'][^>]*>([\s\S]*?)<\/li>/i
  )
  if (!footerMatch?.[1]) {
    return null
  }

  const footerText = footerMatch[1]
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()

  const dateText =
    footerText.match(/last edited on\s+(.+?)\.?$/i)?.[1]?.trim() ?? null
  if (!dateText) {
    return null
  }

  const normalized = dateText.replace(/,\s*at\s*/i, " ")
  const parsed = new Date(`${normalized} UTC`)

  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString()
}

function extractPbeImage(html: string): string | null {
  const imagePath = html.match(PBE_INFOBOX_IMAGE_RE)?.[1]
  if (!imagePath) {
    return null
  }

  return new URL(imagePath, PBE_URL).toString()
}

async function main() {
  const locale = process.env.NUXT_PUBLIC_LOCALE ?? "en-us"

  const html = await fetchHtml(PBE_URL)
  const metadata = await fetchMeta(PBE_URL, locale, html)
  const wikiLastModified = extractWikiLastModified(html)
  const articleImage = extractPbeImage(html)

  if (articleImage) {
    metadata.metadata.image = articleImage
  }

  const payload: PbeMeta = {
    ...metadata,
    wikiLastModified
  }

  await mkdir(OUTPUT_DIR, { recursive: true })

  const latestOutput = resolve(OUTPUT_DIR, "pbe_latest.json")

  await writeFile(latestOutput, JSON.stringify(payload, null, 2))

  console.log(`✅ PBE metadata updated`)
  console.log(`   ${latestOutput}`)
}

main().catch((error) => {
  console.error("❌ Failed to fetch PBE metadata")
  console.error(error)
  process.exit(1)
})
