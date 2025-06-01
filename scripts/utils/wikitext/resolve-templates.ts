import { evaluateTemplates } from './evaluate-templates'
import { parseTemplates } from './parse-templates'

export function resolveTemplates(str: string, depth: number = 0, vars: Map<string, string>): TemplateResult {
  const MAX_DEPTH = 20
  if (depth > MAX_DEPTH)
    return { html: str, isLevelScaling: false }

  const state = { i: 0, str }
  const output: TemplateResult[] = []

  while (state.i < state.str.length) {
    if (state.str[state.i] === '{' && state.str[state.i + 1] === '{') {
      state.i += 2
      const { template, params } = parseTemplates(depth + 1, MAX_DEPTH, state)
      const result = evaluateTemplates(template, params, depth + 1, vars)
      const wrapped = typeof result === 'string' ? { html: result, isLevelScaling: false } : result
      output.push(wrapped)
    }
    else {
      let literal = ''
      while (
        state.i < state.str.length
        && !(state.str[state.i] === '{' && state.str[state.i + 1] === '{')
      ) {
        literal += state.str[state.i++]
      }
      output.push({ html: literal, isLevelScaling: false })
    }
  }

  return {
    html: output.map(p => p.html).join(''),
    isLevelScaling: output.some(p => p.isLevelScaling),
  }
}