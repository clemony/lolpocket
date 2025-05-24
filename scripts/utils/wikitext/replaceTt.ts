export function replaceTt(wikitext: string): string {
  return wikitext.replace(
    /\{\{(?:tt|Texttip)\|([^|}]+)(?:\|[^}]*?)?\}\}/gi,
    (_, text) => text.trim()
  )
}
