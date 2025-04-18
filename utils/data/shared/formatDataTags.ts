export function formatDataTags(text) {
  let a = text.replace(/\[\[:[^|]+|#?\|([A-Z]+)\]\]\s/gi, `$1 `)
  a = a.replace('「', '')
  a = a.replace('」', '')
 a = a.replace(/\[\[([A-Z0-9-]+(?:\s[A-Z0-9-]+)*)\]\]/gi, '$1 ')
 a = a.replace('|', ' ')
 a = a.replace('[[combat status ', '')
return a.replace(']]', '')
}