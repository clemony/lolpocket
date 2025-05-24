export function replacePp(wikitext: string): string {
  return wikitext.replace(/\{\{pp\|([^}]*)\}\}/gi, (_, params) => {
    const parts = params.split('|')
    const values = (parts[0] || '').split(';').map(v => v.trim()).filter(Boolean)
    const key = parts[8] || ''

    if (!values.length)
      return ''

    const rounded = values.map((v) => {
      const num = Number.parseFloat(v)
      return !Number.isNaN(num) ? `${num}${key}` : v
    })
    return rounded.join(' / ')
  })
}