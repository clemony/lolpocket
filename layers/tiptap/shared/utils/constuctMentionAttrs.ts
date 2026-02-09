import { champKeyToRole, itemRank, runeToPath } from '#layers/patch/shared/constants'

export function constructMentionAttrs(rawAttrs: any) {
  const item = attrsToProps(rawAttrs)

  const key = typeof item.key === 'string' ? item.key : undefined
  const label = key && ['item', 'rune', 'spell'].includes(key)
    ? key
    : 'champion'
  const id = typeof item.id === 'string' ? item.id : undefined
  const idNum = id && Number.isFinite(Number(id)) ? Number(id) : null

  return {
    'class': 'mention',
    'data-path':
      label === 'rune' && idNum !== null
        ? runeToPath[idNum]?.toLowerCase()
        : null,
    'data-role':
      label === 'champion' && key ? champKeyToRole[key]?.toLowerCase() : null,
    'data-tier':
      label === 'item' && idNum !== null
        ? itemRank[idNum]?.toLowerCase()
        : null,
    'data-type': label,
  }
}
