export function formatDataTags(text) {
  //[[:Ranged|ranged]]
  // [[:Healing|heal]]
  let a = text.replace(/\[\[:[^|]+|#?\|([A-Z]+)\]\]\s/gi, `$1 `)
  a = a.replace(/「/g, '')
  a = a.replace(/」/g, '')
 a = a.replace(/\[\[([A-Z0-9-]+(?:\s[A-Z0-9-]+)*)\]\]/gi, '$1 ')
 a = a.replace('|', ' ')
 a = a.replace('[[combat status ', '')
 a = a.replace(/'''/g, '')
 a = a.replace(/\[\[champion ability/gi, '')
 
 a = a.replace(/\'\'/g, '')
 a = a.replace('[[Haste#Ultimate haste ultimate haste', 'ultimate haste')
return a.replace(']]', '')
}