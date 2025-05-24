export function replaceLinks(wikitext: string): string {
  return wikitext.replace(/\[\[([^[\]|]+)(?:\|([^[\]]+))?\]\]/g, (_, target, display) => {
    return display?.trim() || target.trim()
  })
}