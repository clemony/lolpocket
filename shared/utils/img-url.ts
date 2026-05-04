import { skinIndex } from "#shared/constants/champions/skin-index"
import { bgArt } from "#shared/constants/misc/bg-art"
import type { Skin, SkinKey, SplashType } from "#shared/types/types.champion"
import { champKeyById } from "#shared/utils/dataHelpers"
import { getRandom } from "~~/layers/lib/shared/utils/array"

const CDRAGON_ASSET_BASE =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/"
const CDRAGON_ICON_BASE =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/"
const CDRAGON_ASSET_PATH_MARKER = "/assets/characters/"
const SKIN_TYPE_PLACEHOLDER = "<type>"
const SKIN_ID_DOT_SUFFIX_RE = /(\d+)\..*/
const SKINS_SUFFIX_RE = /\.skins_[^.]+$/i
const IMAGE_EXT_RE = /\.jpg$/i
const SKIN_FOLDER_RE = /^skin(\d+)$/i
const SPLASH_TYPE_RE = /_splash_(centered|uncentered|tile)_/

const skinNameMapCache = new Map<string, Map<string, string>>()

export function formatUrlChampKey(key: string): string {
  if (!key) return ""
  return key.toLowerCase().replace("'", "").replace(". ", "")
}

const championPathToKeyMap = new Map(
  Object.keys(skinIndex).map((championKey) => [
    formatUrlChampKey(championKey),
    championKey
  ])
)

function normalizeChampionKey(keyOrId: string | number): string {
  return typeof keyOrId === "number" ? champKeyById(keyOrId) ?? "" : keyOrId
}

function skinIdToFolderId(championKey: string, skinId: string): string {
  const normalized = skinId.replace(SKIN_ID_DOT_SUFFIX_RE, "$1")
  return normalized.length === 1 && championKey !== "Hwei"
    ? `0${normalized}`
    : normalized
}

function normalizeSkinId(id: string): string {
  return id.replace(SKIN_ID_DOT_SUFFIX_RE, "$1")
}

function skinNameSlug(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[\u{0300}-\u{036F}]/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function splashFileToSkinKey(file: string): string {
  return file
    .replace(IMAGE_EXT_RE, "")
    .replace(SPLASH_TYPE_RE, "_splash_<type>_")
}

function stripSkinsSuffix(key: string): string {
  return key.replace(SKINS_SUFFIX_RE, "")
}

export function getSkinKey(
  championKey: string,
  skin: Skin | string | number
): SkinKey {
  const id = typeof skin === "object" ? skin.id : String(skin)
  const slug = typeof skin === "object" ? skinNameSlug(skin.name) : "skin"
  return `${championKey}:${normalizeSkinId(id)}:${slug}` as SkinKey
}

export function parseSkinKey(
  skinKey: string | null | undefined
): { championKey: string, skinId: string, skinSlug: string } | null {
  if (!skinKey) return null

  const [championKey, skinId, skinSlug, ...rest] = skinKey.split(":")
  if (!championKey || !skinId || !skinSlug || rest.length) return null

  return { championKey, skinId: normalizeSkinId(skinId), skinSlug }
}

export function getSkinFromKey(skinKey: string | null | undefined): Skin | null {
  const parsed = parseSkinKey(skinKey)
  if (!parsed) return null

  return skinIndex[parsed.championKey]?.find(
    (skin) =>
      normalizeSkinId(skin.id) === parsed.skinId &&
      skinNameSlug(skin.name) === parsed.skinSlug
  ) ?? null
}

function findSkinBySplashKey(championKey: string, key: string): Skin | null {
  return skinIndex[championKey]?.find((skin) => skin.key === key) ?? null
}

function getSkinNameMap(championKey: string): Map<string, string> {
  const cached = skinNameMapCache.get(championKey)
  if (cached) return cached

  const map = new Map<string, string>()
  for (const skin of skinIndex[championKey] ?? []) {
    map.set(skin.id, skin.name)
  }
  skinNameMapCache.set(championKey, map)
  return map
}

function getSkinImageFile(skin: Skin, type: SplashType): string {
  return type === "load"
    ? skin.load
    : skin.key.replace(SKIN_TYPE_PLACEHOLDER, type)
}

export function getSplash(
  keyOrId: string | number,
  type: SplashType,
  s?: Skin
): string {
  const key = normalizeChampionKey(keyOrId)
  const champ = formatUrlChampKey(key)
  const skin = s || skinIndex[key]?.[0]
  if (!skin) return ""
  const folder =
    skin.name === "Original" && key !== "Hwei"
      ? "base"
      : `skin${skinIdToFolderId(key, skin.id)}`
  const partialUrl = getSkinImageFile(skin, type)

  return `${CDRAGON_ASSET_BASE}${champ}/skins/${folder}/images/${partialUrl}.jpg`
}

export function getLoadScreen(
  keyOrId: string | number,
  skin?: Skin
): string {
  return getSplash(keyOrId, "load", skin)
}

export function getSplashFromSkinKey(
  skinKey: string | null | undefined,
  type: SplashType
): string {
  const parsed = parseSkinKey(skinKey)
  if (!parsed) return ""

  const skin = getSkinFromKey(skinKey)
  if (!skin) return ""

  return getSplash(parsed.championKey, type, skin)
}

export function getRandomBg() {
  return getRandom(Object.values(bgArt))
}

export function getSkinName(
  key: string,
  id: number | string
): string | undefined {
  return getSkinNameMap(key).get(id.toString())
}

export function skinNameFromKey(
  skinKey: string | null | undefined
): string | undefined {
  const parsed = parseSkinKey(skinKey)
  if (!parsed) return undefined

  const skin = getSkinFromKey(skinKey)
  return skin ? `${skin.name} ${parsed.championKey}` : undefined
}

export function skinKeyFromUrl(url: string): SkinKey | null {
  const assetIndex = url.indexOf(CDRAGON_ASSET_PATH_MARKER)
  if (assetIndex === -1) return null

  const path = url.slice(assetIndex + CDRAGON_ASSET_PATH_MARKER.length)
  const parts = path.split("/")
  const championPath = parts[0]
  const skinFolder = parts[2]
  const file = parts.at(-1)
  if (!championPath || !skinFolder || !file) return null

  const championKey = championPathToKeyMap.get(championPath)
  if (!championKey) return null

  const splashKey = splashFileToSkinKey(file)
  const skinFromFile =
    findSkinBySplashKey(championKey, splashKey) ??
    findSkinBySplashKey(championKey, stripSkinsSuffix(splashKey))
  if (skinFromFile) return getSkinKey(championKey, skinFromFile)

  const skinFolderMatch = skinFolder.match(SKIN_FOLDER_RE)
  const id = skinFolder === "base"
    ? "0"
    : skinFolderMatch?.[1] != null
      ? String(Number(skinFolderMatch[1]))
      : null
  if (!id) return null

  const matchingSkins = skinIndex[championKey]?.filter(
    (skin) => normalizeSkinId(skin.id) === id
  ) ?? []
  const skin = matchingSkins.length === 1 ? matchingSkins[0] : null

  return skin ? getSkinKey(championKey, skin) : null
}

export function skinNameFromUrl(url: string): string | undefined {
  return skinNameFromKey(skinKeyFromUrl(url))
}

export function getSummonerIconUrl(
  icon: number | string | null | undefined
): string {
  return icon ? `${CDRAGON_ICON_BASE}${icon}.jpg` : ""
}

export function tileSplash(src: string | undefined | null): string {
  if (!src) return ""
  return src.replace("uncentered", "tile").replace("centered", "tile")
}

export function centeredSplash(src: string | undefined | null): string {
  if (!src) return ""
  return src.replace("uncentered", "centered").replace("tile", "centered")
}

export function uncenteredSplash(src: string | undefined | null): string {
  if (!src) return ""
  return src.replace("tile", "uncentered").replace("centered", "uncentered")
}
