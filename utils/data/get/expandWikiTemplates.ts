import axios from 'axios'
import qs from 'qs'

export async function expandWikiTemplates(jsonData: object) {
  const wikiText = JSON.stringify(jsonData, null, 2) // Convert AST to formatted JSON

  try {
    const response = await axios.post(
      '/api/wiki',
      qs.stringify({
        action: 'expandtemplates',
        format: 'json',
        text: wikiText,
        prop: 'wikitext',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // Important!
      }
    )
    return response.data
  } catch (error) {
    console.error('Error in expandWikiTemplates:', error)
    return null
  }
}