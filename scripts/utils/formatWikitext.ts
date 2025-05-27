import { postProcess, preProcess } from './wikitext/processing'
import { resolveTemplates } from './wikitext/resolveTemplates'

export function normalize(result: string | TemplateResult): string {
  return typeof result === 'string' ? result : result.html
}

export async function handleWikiText(wikitext: string, vars = new Map<string, string>()): Promise<string> {
  const text = preProcess(wikitext)
  const resolved = resolveTemplates(text, 0, vars)
  return postProcess(normalize(resolved))
}

// HOLLOW RADIANCE, ludens
// doran shield