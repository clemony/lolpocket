import axios from 'axios'

export async function expandWikiTemplates(jsonData: object) {
  const wikiText = JSON.stringify(jsonData, null, 2) // Convert AST to formatted JSON
  try {
    const response = await axios.get('/api/wiki/Special:ExpandTemplates', {
      params: {
        action: 'expandtemplates',
        format: 'json',
        text: wikiText,
        prop: 'wikitext',
      },
    })
    const data = response.data
    return data
  }
  catch (error) {
    console.error(error)
    return null
  }
}