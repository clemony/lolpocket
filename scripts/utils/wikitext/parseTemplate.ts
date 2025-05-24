import { evaluateTemplate } from './evaluateTemplate'
import { resolveTemplates } from './resolveTemplate'

interface ParseState {
  i: number
  text: string
}

export function parseTemplate(depth: number, MAX_DEPTH: number, state: ParseState): string {
  if (depth > MAX_DEPTH)
    throw new Error('Template recursion too deep')

  let templateName = ''
  const params: string[] = []
  let current = ''

  while (state.i < state.text.length) {
    if (state.text[state.i] === '|' && templateName === '') {
      templateName = current.trim().toLowerCase()
      current = ''
      state.i++
    }
    else if (state.text[state.i] === '|') {
      params.push(current.trim())
      current = ''
      state.i++
    }
    else if (state.text[state.i] === '{' && state.text[state.i + 1] === '{') {
      state.i += 2
      current += parseTemplate(depth + 1, MAX_DEPTH, state)
    }
    else if (state.text[state.i] === '}' && state.text[state.i + 1] === '}') {
      state.i += 2
      break
    }
    else {
      current += state.text[state.i++]
    }
  }

  params.push(current.trim())
  const resolvedParams = params.map(p => resolveTemplates(p.trim()))
  return evaluateTemplate(templateName, resolvedParams)
}