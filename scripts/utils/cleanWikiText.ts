import { parse } from 'node-html-parser'
import fetch from 'node-fetch'


export async function expandWikitext(text) {
  const url = 'https://wiki.leagueoflegends.com/en-us/api.php'
  const params = new URLSearchParams({
    action: 'expandtemplates',
    format: 'json',
    text,
  })

  try {
    const res = await fetch(`${url}?${params.toString()}`, {
      headers: { 'User-Agent': 'lolpocket/1.0' },
    })
    const json = await res.json()
    return json.expandtemplates?.['*'] ?? ''
  } catch (err) {
    console.error('❌ Error expanding wikitext:', err)
    return ''
  }
}


export function cleanWikitextHtml(input) {
  const root = parse(input)

  root.querySelectorAll('*').forEach(el => {
    const isTooltip = el.tagName === 'span' && el.classList.contains('pp-tooltip')
    if (isTooltip) {
Object.entries(el.attributes).forEach(([name, _value]) => {
  if (!name.startsWith('data-')) el.removeAttribute(name)
})
    } else {
      el.replaceWith(el.text)
    }
  })

  return root.toString()
}
