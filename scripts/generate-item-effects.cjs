// node scripts/generate-item-effects.cjs
const { parse } = require('node-html-parser')


const fs = require('node:fs')
const path = require('node:path')
const fetch = require('node-fetch')

const inputPath = path.resolve(__dirname, '../public/api/items.json')
const outputPath = path.resolve(__dirname, '../public/api/lists/item-effects.json')

const raw = fs.readFileSync(inputPath, 'utf-8')
const fullData = JSON.parse(raw)

function cleanWikitextHtml(input) {
  const root = parse(input)

  root.querySelectorAll('*').forEach(el => {
    const isTooltip = el.tagName === 'span' && el.classList.contains('pp-tooltip')
    if (isTooltip) {
      [...el.attributes].forEach(attr => {
        if (!attr.name.startsWith('data-')) el.removeAttribute(attr.name)
      })
    } else {
      el.replaceWith(el.text)
    }
  })

  return root.toString()
}


async function expandWikitext(text) {
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

async function buildDetails() {
  const details = {}

   for (const id in fullData) {
    const item = fullData[id]
    const actives = item.actives || []
    const passives = item.passives || []

    const expandedActives = await Promise.all(
      actives.map(async (a) => cleanWikitextHtml(await expandWikitext(a.effects)))
    )

    const expandedPassives = await Promise.all(
      passives.map(async (p) => cleanWikitextHtml(await expandWikitext(p.effects)))
    )

    details[id] = {
      id: item.id,
      name: item.name,
      actives: expandedActives,
      passives: expandedPassives,
    }

    console.log(`✅ Expanded ${item.name}`)
  }

  fs.writeFileSync(outputPath, JSON.stringify(details, null, 2))
  console.log(`📝 items-details.json written to ${outputPath}`)
}

buildDetails()