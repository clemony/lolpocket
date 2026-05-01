import { getSummonerIconUrl } from "#shared/utils/img-url"

export * from "#shared/utils/img-url"

export function getSummonerIcon(icon: number | string | null | undefined) {
  const img = useImage()
  const url = getSummonerIconUrl(icon)
  if (!url) return ""
  return img(url, {
    format: "webp",
    quality: 80,
    width: 100,
    height: 100
  })
}
