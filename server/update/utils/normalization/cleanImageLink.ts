import type { Skin } from '../../../types/types.import'
import type { RawSkin } from '../../champions/generate-champion-skins'

export function cleanImageLink(link: string) {
  if (!link)
    return null

  else return link?.split('/')?.pop()?.replace('.jpg', '').replace('centered', '<type>')
}

export function cleanImageNum(link: string) {
  const regex = /_.*\.jpg/g
  const a = link.match(regex)
  const b = a?.[0].replace(/_splash_tile_(.*)\.jpg/g, '$1')
  return b
}
