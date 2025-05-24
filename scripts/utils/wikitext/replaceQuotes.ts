export function replaceQuotes(wikitext: string): string {
  return wikitext
    // Bold italic: '''''text''''' → <b><i>text</i></b>
    .replace(/'''''(.*?)'''''/g, '<b><i>$1</i></b>')
    // Bold: '''text''' → <b>text</b>
    .replace(/'''(.*?)'''/g, '<b>$1</b>')
    // Italic: ''text'' → <i>text</i>
    .replace(/''(.*?)''/g, '<i>$1</i>')
}
