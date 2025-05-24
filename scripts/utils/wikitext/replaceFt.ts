import { resolveTemplates } from './resolveTemplate'

export function replaceFt(wikitext: string): string {
  return wikitext.replace(/\{\{ft\|([^|]+)\|([^}]+)\}\}/gi, (_, text, tooltip) => {
    const resolvedText = resolveTemplates(text)
    const resolvedTooltip = resolveTemplates(tooltip)
    const flatTooltip = resolvedTooltip.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    return `${resolvedText} (${flatTooltip})`
  })
}

