export function replaceAs(wikitext: string): string {
  return wikitext.replace(/\{\{as\|([^}|]+)(?:\|[^}]+)?\}\}/gi, (_, text) => {
    return text.trim()
  })
}
