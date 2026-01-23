

export function computeKeystoneStyle(item: any) {
  const isRune = item['data-key'] === 'rune'
  const isKeystone = keystoneIndex.includes(item['data-id'])
  return isRune || isKeystone ? 'scale-110 object-contain' : ''
}

export function computeRuneStyle(item: any) {
  const isRune = item['data-key'] === 'rune'
  const isKeystone = keystoneIndex.includes(item['data-id'])
  return isRune && !isKeystone
    ? '!rounded-full inset-ring inset-ring-black/80'
    : ''
}

export function computeImageSrc(item: any) {
  if (['item', 'rune', 'spell'].includes(item['data-key']))
    return `/img/${item['data-key']}s/${item['data-id']}.webp`
  return `/img/champions/${item['data-id']}.webp`
}
