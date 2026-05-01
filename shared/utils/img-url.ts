import { skinIndex } from "#shared/constants/champions/skin-index"
import { bgArt } from "#shared/constants/misc/bg-art"
import type { Skin, SplashType } from "#shared/types/types.champion"
import { champKeyById } from "#shared/utils/dataHelpers"
import { getRandom } from "~~/layers/lib/shared/utils/array"

const CDRAGON_ASSET_BASE =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/"
const CDRAGON_ICON_BASE =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/"
const CDRAGON_ASSET_PATH_MARKER = "/assets/characters/"
const SKIN_TYPE_PLACEHOLDER = "<type>"
const SKIN_ID_DOT_SUFFIX_RE = /(\d+)\..*/
const SPLASH_FILE_PREFIX_RE = /^[a-z]+_splash_[a-z]+_/
const IMAGE_EXT_RE = /\.jpg$/i

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
  const partialUrl = skin.key.replace(SKIN_TYPE_PLACEHOLDER, type)

  return `${CDRAGON_ASSET_BASE}${champ}/skins/${folder}/images/${partialUrl}.jpg`
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

export function skinNameFromUrl(url: string): string | undefined {
  const assetIndex = url.indexOf(CDRAGON_ASSET_PATH_MARKER)
  if (assetIndex === -1) return undefined

  const path = url.slice(assetIndex + CDRAGON_ASSET_PATH_MARKER.length)
  const parts = path.split("/")
  const championPath = parts[0]
  const file = parts.at(-1)
  if (!championPath || !file) return undefined

  const championKey = championPathToKeyMap.get(championPath)
  if (!championKey) return undefined

  const id = normalizeSkinId(
    file.replace(SPLASH_FILE_PREFIX_RE, "").replace(IMAGE_EXT_RE, "")
  )
  if (!id) return undefined

  const skinName = getSkinNameMap(championKey).get(id)
  return skinName ? `${skinName} ${championKey}` : undefined
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
