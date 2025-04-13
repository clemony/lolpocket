/* import { parse } from 'node-html-parser'

export default defineEventHandler(async (event) => {
const query = getQuery(event)
const targetUrl = 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-25-07-notes/'

if (!targetUrl?.startsWith('http')) {
  return { error: 'Invalid URL' }
}

console.log('🔎 Requesting OG data for:', targetUrl)

  try {

const html = await $fetch<string>(targetUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0',
  },
})

    const root = parse(html)

    const getMeta = (prop: string) =>
      root.querySelector(`meta[property="${prop}"]`)?.getAttribute('content') ?? ''

    return {
      title: getMeta('og:title'),
      description: getMeta('og:description'),
      image: getMeta('og:image'),
      url: targetUrl,
    }
  } catch (err) {
    console.error('❌ Failed to fetch OG data:', err)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch OG metadata',
    })
  }
}) */