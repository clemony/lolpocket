export function cleanImageLink(link: string) {
  return link.split("/").pop().replace(".jpg", "")
}

export function cleanImageNum(link: string) {
  const regex = /_.*\.jpg/g
  const a = link.match(regex)
  const b = a[0].replace(/_splash_tile_(.*)\.jpg/g, "$1")
  return b
}
