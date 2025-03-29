import { formatEffects } from './item/formatEffects'
import { parse } from 'luaparse'

function fixInvalidJson(jsonString: string): string {
  return jsonString
    .replace(/\[(?!\d+\])([^\]]+)\]/g, '$1') // Remove brackets from keys
    .replace(/\[(\d+)\]/g, '$1') // Remove array-like brackets from numbers
    .replace(/=/g, ':') // Change equals to colons for JSON format
    .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
    .replace(/"([^"]+)"\s*:\s*(?=,|\})/g, '$1: null') // Ensure empty properties get null
    .replace(/:\s*\{([^:{}]+)\}/g, (_, values) => { // Convert objects with values into arrays
      return `: [${values.split(',').map(v => v.trim()).join(', ')}]`
    })
    .replace(/,(\s*[}\]])/g, '$1') // Clean up extra commas
    .replace(/:\s*\{\s*"([^"]+)"\s*\}/g, ': ["$1"]') // Convert single key objects to arrays
    .replace(/\s+/g, ' ') // Collapse excessive whitespace
    .replace(/(\d+)\s:/g, '"$1":') // Ensure numeric keys are quoted
    .replace('Invalid Number', '0') // Replace invalid numbers
}

const cleanupAramUrf = [
  { regex: /"urf"\s*:\s*\{[^}]*\}\s*,?/g, replacement: '' },
  { regex: /"aram"\s*:\s*\{[^}]*\}\s*,?/g, replacement: '' },
]

const cleanupTrailingCommas = { regex: /,\s*(?=[}\]])/g, replacement: '' }

export async function getWikiData(data: string, text: string, type?: string) {
  console.log('💠 - getWikiData - type:', type)
  const url = data + new URLSearchParams({
    action: 'expandtemplates',
    format: 'json',
    text,
    prop: 'wikitext',
  })

  try {
    const req = await fetch(url)
    if (!req.ok)
      throw new Error(`Response status: ${req.status}`)

    const json = await req.json()
    const input = json?.expandtemplates?.wikitext
    if (!input)
      throw new Error('Missing expanded wikitext in response.')

    let cleanedJsonString = input
    console.log('💠 - getWikiData - cleanedJsonString:', cleanedJsonString)

    const parser = parse
    const ast = parser.parse('i = 0')
    console.log(JSON.stringify(ast))

    const transformations = [
      { regex: /^[\s\S]*?return\s\{/, replacement: '{' },
      { regex: /=/g, replacement: ':' },
      { regex: /text: × none × \}\}\{\{/, replacement: '' },
      { regex: /\|type:target's kill color:gold\}\}/, replacement: '' },
      { regex: /:\s*\{\s*"([^"]+)"\s*\}/g, replacement: ': ["$1"]' },
      { regex: /\s*--.*$/, replacement: '' },
      { regex: /<s>|<\/s>|-- <\/pre>/g, replacement: '' },
      { regex: /"skill_([iqwer])"\s*:\s*\{[^}]*\},?/g, replacement: '' },
      { regex: /"skills"\s*:\s*\{[^}]*\}?,?/g, replacement: '' },
      { regex: /\n+/g, replacement: '' },
      { regex: /,(\s*[}\]])/g, replacement: '$1' },
      { regex: /"(\w+)"\s*:\s*([^",{}[\]\s][^,}\n]*)/g, replacement: (_, key, value) => `"${key}": "${value.trim()}"` },
      { regex: /^\s*\d+\s*:[^,}]+,?/gm, replacement: '' },
      { regex: /\s+/g, replacement: ' ' },
      { regex: /"\s:/g, replacement: '":' },
    ]

    cleanedJsonString = transformations.reduce(
      (result, { regex, replacement }) => result.replace(regex, replacement),
      cleanedJsonString,
    )

    const championTransformations = [
      {
        regex: /"stats"\s*:\s*\{[^}]*\}/g,
        replacement: (match: string) => match.replace(/,\s*\}/g, '}').replace(/:\s*([^",{}[\]\s][^,}\n]*)/g, ': $1'),
      },
      { regex: /(84\+1150\/17)/g, replacement: '"$1"' },
      {
        regex: /"role"\s*:\s*\{([^}]+)\}/g,
        replacement: (_, roles) => `"role": [${roles.split(',').map(r => `"${r.trim()}"`).join(', ')}]`,
      },
      {
        regex: /"skillArray"\s*:\s*\[([^\]]+)\]/g,
        replacement: (_, skills) => `"skillArray": ["${skills.split(',').map(s => s.trim()).filter(Boolean).join('", "')}"]`,
      },
    ]

    cleanedJsonString = championTransformations.reduce(
      (result, { regex, replacement }) => result.replace(regex, replacement),
      cleanedJsonString,
    )

    cleanedJsonString = fixInvalidJson(cleanedJsonString)

    cleanupAramUrf.forEach(({ regex, replacement }) => {
      cleanedJsonString = cleanedJsonString.replace(regex, replacement)
    })

    cleanedJsonString = cleanedJsonString.replace(cleanupTrailingCommas.regex, cleanupTrailingCommas.replacement)

    try {
      const jsonObject = JSON.parse(cleanedJsonString)

      if (type === 'item' && jsonObject.effects) {
        jsonObject.effects = formatEffects(JSON.stringify(jsonObject.effects))
      }

      return jsonObject
    }
    catch (error) {
      console.error('Error parsing or processing JSON:', error, cleanedJsonString)
    }
  }
  catch (e) {
    console.error('Error during fetch or parse:', e)
  }
}