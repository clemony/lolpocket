import { postProcess } from './wikitext/postProcess'
import { resolveTemplates } from './wikitext/resolveTemplates'

export function normalize(result: string | TemplateResult): string {
  return typeof result === 'string' ? result : result.html
}
export async function handleWikiText(wikitext: string, vars = new Map<string, string>()): Promise<string> {
  let text = wikitext.replace(/([a-z0-9])\{\{/gi, '$1 {{')
  text = wikitext.replace(/\}\}([a-z0-9])/gi, '}} $1')
  const resolved = normalize(resolveTemplates(text, 0, vars))
  text = postProcess(resolved)
  return text.trim()
}

// HOLLOW RADIANCE, ludens
// doran shield