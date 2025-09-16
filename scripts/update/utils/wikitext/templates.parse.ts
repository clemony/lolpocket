export function parseTemplates(
  depth: number,
  MAX_DEPTH: number,
  state: { str: string, i: number }
) {
  let template = ''
  const params: string[] = []

  let buffer = ''
  let nesting = 0

  while (state.i < state.str.length) {
    const char = state.str[state.i]

    if (char === '|' && nesting === 0) {
      if (!template) {
        template = buffer.trim()
      }
      else {
        params.push(buffer.trim())
      }
      buffer = ''
      state.i++
      continue
    }

    if (char === '{' && state.str[state.i + 1] === '{') {
      nesting++
      buffer += '{{'
      state.i += 2
      continue
    }

    if (char === '}' && state.str[state.i + 1] === '}' && nesting > 0) {
      nesting--
      buffer += '}}'
      state.i += 2
      continue
    }

    if (char === '}' && state.str[state.i + 1] === '}' && nesting === 0) {
      if (!template) {
        template = buffer.trim()
      }
      else {
        params.push(buffer.trim())
      }
      state.i += 2
      break
    }

    buffer += char
    state.i++
  }

  // Final param if still in buffer
  if (buffer.trim()) {
    if (!template) {
      template = buffer.trim()
    }
    else {
      params.push(buffer.trim())
    }
  }

  // handle templates like `#var:foo` and split on first colon
  const colonIndex = template.indexOf(':')
  if (colonIndex !== -1) {
    const rawTemplate = template
    const prefix = rawTemplate.slice(0, colonIndex)
    const firstParam = rawTemplate.slice(colonIndex + 1)
    template = prefix
    params.unshift(firstParam)
  }

  return { template, params }
}
