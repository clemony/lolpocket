import { evaluateTemplates } from './evaluateTemplates'
import { parseTemplates } from './parseTemplates'

export function resolveTemplates(str: string, depth: number = 0, vars: Map<string, string>): TemplateResult {
  const MAX_DEPTH = 20
  if (depth > MAX_DEPTH)
    return str

  const state = { i: 0, str }
  const output: (string | TemplateResult)[] = []

  while (state.i < state.str.length) {
    if (state.str[state.i] === '{' && state.str[state.i + 1] === '{') {
      state.i += 2
      const { template, params } = parseTemplates(depth + 1, MAX_DEPTH, state)
      const result = evaluateTemplates(template, params, depth + 1, vars)
      output.push(result)
    }
    else {
      // Accumulate plain text
      let literal = ''
      while (
        state.i < state.str.length
        && !(state.str[state.i] === '{' && state.str[state.i + 1] === '{')
      ) {
        literal += state.str[state.i++]
      }
      output.push(literal)
    }
  }

  // Join all pieces, preserving TemplateResult HTML
  return {
    html: output.map(p => (typeof p === 'string' ? p : p.html)).join(''),
    isLevelScaling: false, // or compute this if needed from pieces
  }
}