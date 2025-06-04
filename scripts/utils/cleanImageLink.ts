export function cleanImageLink(link: string) {
  return link.split("/").pop().replace(".jpg", "")
}
