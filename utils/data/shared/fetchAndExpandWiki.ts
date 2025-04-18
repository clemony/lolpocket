import axios from 'axios'
import qs from 'qs'

export async function fetchAndExpandWikiPage(title: string) {
  try {
    // Step 1: Get raw wikitext from the page
    const rawResponse = await axios.post(
      '/api/wiki',
      qs.stringify({
        action: 'query',
        format: 'json',
        titles: title,
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    )

    const pages = rawResponse.data?.query?.pages
    const pageId = Object.keys(pages)[0]
    const rawWikiText = pages[pageId]?.revisions?.[0]?.['*'] || pages[pageId]?.revisions?.[0]?.slots?.main?.['*']

    if (!rawWikiText) {
      throw new Error('Could not retrieve wikitext')
    }

    // Step 2: Expand templates if needed
    const expandedResponse = await axios.post(
      '/api/wiki',
      qs.stringify({
        action: 'expandtemplates',
        format: 'json',
        text: rawWikiText,
        prop: 'wikitext',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    )

    return expandedResponse.data
  } catch (error) {
    console.error('Error in fetchAndExpandWikiPage:', error)
    return null
  }
}