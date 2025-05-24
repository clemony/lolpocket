import { parseTemplate } from './parseTemplate'

export function resolveTemplates(text: string): string {
  const state = { i: 0, text }
  const MAX_DEPTH = 20

  function parse(): string {
    let result = ''
    while (state.i < state.text.length) {
      if (state.text[state.i] === '{' && state.text[state.i + 1] === '{') {
        state.i += 2
        result += parseTemplate(1, MAX_DEPTH, state)
      }
      else if (state.text[state.i] === '}' && state.text[state.i + 1] === '}') {
        state.i += 2
        return result
      }
      else {
        result += state.text[state.i++]
      }
    }
    return result
  }

  return parse().trim()
}