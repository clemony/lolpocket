import { parse } from 'luaparse'
import { traverseAst } from './traverseAst'
import { expandWikiTemplates } from './expandWikiTemplates'

export async function createDataObjects(data: string, text: string, type?: string) {
  console.log('💠 - getWikiData - type:', type)
  const url
    = data
      + new URLSearchParams({
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

    try {
      const ast = parse(input, { luaVersion: '5.1' })

      // Convert AST to JSON
      let jsonData = traverseAst(ast)
      jsonData = expandWikiTemplates(jsonData)
      console.log('💠 - Converted JSON:', JSON.stringify(jsonData, null, 2))

      return jsonData
    }
    catch (parseError) {
      console.error('Error parsing Lua:', parseError)
    }
  }
  catch (fetchError) {
    console.error('Error during fetch or parse:', fetchError)
  }
}