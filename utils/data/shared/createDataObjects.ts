import { parse } from 'luaparse'

export async function createDataObjects(data: string, text: string, type?: string) {
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
    console.log('💠 - createDataObjects - json:', json)
    const input = json?.expandtemplates?.wikitext
    if (!input)
      throw new Error('Missing expanded wikitext in response.')

    try {
      const ast = parse(input, { luaVersion: '5.1' })
      let jsonData = traverseAst(ast)
      console.log('💠 - createDataObjects - jsonData:', jsonData)
      jsonData = await expandWikiTemplates(jsonData)
      console.log('💠 - createDataObjects - jsonData:', jsonData)
      return jsonData.expandtemplates.wikitext
    }
    catch (parseError) {
      console.error('Error parsing Lua:', parseError)
    }
  }
  catch (fetchError) {
    console.error('Error during fetch or parse:', fetchError)
  }
}