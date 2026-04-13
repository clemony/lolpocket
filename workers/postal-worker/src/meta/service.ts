import patchIndex from "../patch/patch-index.json"
import { decode } from "html-entities"
import type { MetadataPayload, PatchNotesMeta, PbeMeta } from "../types"

const USER_AGENT = "postal-worker/1.0 (+https://github.com)"
const PBE_URL = "https://wiki.leagueoflegends.com/en-us/VPBE"
const PBE_INFOBOX_IMAGE_RE =
  /<div class="infobox-gallery"[\s\S]*?<img[^>]+src=["']([^"']+)["']/i
const FOOTER_LAST_MODIFIED_RE =
  /<li[^>]*id=["']footer-info-lastmod["'][^>]*>([\s\S]*?)<\/li>/i

export type ManualRefreshTarget = "all" | "patch" | "pbe"
export type StoredPbeMeta = PbeMeta
export type StoredPatchNotesMeta = PatchNotesMeta

export async function refreshPbeMeta(locale: string): Promise<StoredPbeMeta> {
  const html = await fetchHtml(PBE_URL)
  const metadata = extractMetadataFromHtml(PBE_URL, locale, html)
  const wikiLastModified = extractWikiLastModified(html)
  const articleImage = extractPbeImage(html)

  if (articleImage) {
    metadata.metadata.image = articleImage
  }

  return {
    ...metadata,
    wikiLastModified
  }
}

export async function refreshPatchNotesMeta(
  locale: string,
): Promise<StoredPatchNotesMeta> {
  const currentPatch = getCurrentPatch(patchIndex)
  const riotSlug = getRiotPatchSlug(currentPatch)
  const url = getPatchNotesUrl(riotSlug, locale)
  const html = await fetchHtml(url)

  return {
    ...extractMetadataFromHtml(url, locale, html),
    patch: currentPatch,
    riotSlug
  }
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "user-agent": USER_AGENT
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
  }

  return await response.text()
}

function extractMetadataFromHtml(
  url: string,
  locale: string,
  html: string,
): MetadataPayload {
  const title =
    getMetaContent(html, "property", "og:title") ??
    getMetaContent(html, "name", "twitter:title") ??
    extractTitle(html)

  const description =
    getMetaContent(html, "property", "og:description") ??
    getMetaContent(html, "name", "description") ??
    getMetaContent(html, "name", "twitter:description")

  const image =
    getMetaContent(html, "property", "og:image") ??
    getMetaContent(html, "name", "twitter:image")

  const author =
    getMetaContent(html, "name", "author") ??
    getMetaContent(html, "property", "article:author")

  const date =
    getMetaContent(html, "property", "article:published_time") ??
    getMetaContent(html, "name", "pubdate")

  const canonicalUrl =
    extractCanonicalUrl(html) ??
    getMetaContent(html, "property", "og:url") ??
    url

  return {
    fetchedAt: new Date().toISOString(),
    locale,
    metadata: {
      author,
      date: normalizeDate(date),
      description,
      image,
      title,
      url: canonicalUrl
    },
    url: canonicalUrl
  }
}

function getMetaContent(
  html: string,
  attributeName: "name" | "property",
  attributeValue: string,
) {
  const escapedValue = escapeRegExp(attributeValue)
  const patterns = [
    new RegExp(
      `<meta[^>]*${attributeName}=["']${escapedValue}["'][^>]*content=["']([^"']+)["'][^>]*>`,
      "i",
    ),
    new RegExp(
      `<meta[^>]*content=["']([^"']+)["'][^>]*${attributeName}=["']${escapedValue}["'][^>]*>`,
      "i",
    )
  ]

  for (const pattern of patterns) {
    const match = html.match(pattern)?.[1]
    if (match) {
      return decode(match.trim())
    }
  }

  return null
}

function extractTitle(html: string) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
  return title ? decode(stripTags(title)).trim() : null
}

function extractCanonicalUrl(html: string) {
  const canonical = html.match(
    /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
  )?.[1]

  return canonical ? decode(canonical.trim()) : null
}

function extractWikiLastModified(html: string): string | null {
  const footerHtml = html.match(FOOTER_LAST_MODIFIED_RE)?.[1]
  if (!footerHtml) {
    return null
  }

  const footerText = stripTags(footerHtml)
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

function extractPbeImage(html: string) {
  const imagePath = html.match(PBE_INFOBOX_IMAGE_RE)?.[1]
  if (!imagePath) {
    return null
  }

  return new URL(imagePath, PBE_URL).toString()
}

function getCurrentPatch(patches: string[]) {
  const current = patches[0]
  if (!current) {
    throw new Error("Patch index is empty")
  }

  return current
}

function getRiotPatchSlug(patch: string) {
  const [, minor] = patch.split(".")
  const numericMinor = Number.parseInt(minor ?? "", 10)

  if (!Number.isFinite(numericMinor)) {
    throw new Error(`Could not parse patch slug from "${patch}"`)
  }

  const yearShort = new Date().getUTCFullYear() % 100
  return `${yearShort}-${numericMinor}`
}

function getPatchNotesUrl(slug: string, locale: string) {
  return `https://www.leagueoflegends.com/${locale}/news/game-updates/league-of-legends-patch-${slug}-notes/`
}

function normalizeDate(input: string | null) {
  if (!input) {
    return null
  }

  const parsed = new Date(input)
  return Number.isNaN(parsed.getTime()) ? input : parsed.toISOString()
}

function stripTags(value: string) {
  return decode(value.replace(/<[^>]+>/g, " "))
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
