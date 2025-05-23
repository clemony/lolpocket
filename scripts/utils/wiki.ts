import { Parser } from 'expr-eval'

export async function handleWikiText(wikitext: string): Promise<string> {
  let text = wikitext

  text = text.replace(/([a-z0-9])\{\{/gi, '$1 {{')

  // Resolve all templates first
  text = resolveTemplates(text)

  // Run the rest of the cleanup
  text = replaceTips(text)
  text = replaceLinks(text)
  text = replacePP(text)
  text = replaceFt(text)
  text = replaceAS(text)
  text = replaceQuotes(text)

  return text.trim()
}

function replaceQuotes(wikitext: string): string {
  return wikitext
    // Bold italic: '''''text''''' → <b><i>text</i></b>
    .replace(/'''''(.*?)'''''/g, '<b><i>$1</i></b>')
    // Bold: '''text''' → <b>text</b>
    .replace(/'''(.*?)'''/g, '<b>$1</b>')
    // Italic: ''text'' → <i>text</i>
    .replace(/''(.*?)''/g, '<i>$1</i>')
}

function replaceLinks(wikitext: string): string {
  return wikitext.replace(/\[\[([^[\]|]+)(?:\|([^[\]]+))?\]\]/g, (_, target, display) => {
    return display?.trim() || target.trim()
  })
}

function replaceAS(wikitext: string): string {
  return wikitext.replace(/\{\{as\|([^}|]+)(?:\|[^}]+)?\}\}/gi, (_, text) => {
    return text.trim()
  })
}

function replaceTips(wikitext: string): string {
  return wikitext.replace(/\{\{tip\|([^}|]+)(?:\|([^}|]+))?(?:\|([^}]+))?\}\}/gi, (_, subjectRaw, labelRaw, paramRaw = '') => {
    const subject = subjectRaw.trim()
    const label = (labelRaw || subject).trim()
    const params = Object.fromEntries(
      paramRaw
        .split('|')
        .map(pair => pair.split('=').map(s => s.trim()))
        .filter(([k]) => k), // skip empty
    )

    const iconSrc = `/img/icons/${encodeURIComponent(subject)}.png`
    const showIcon = !params.noimg && !params.icononly
    const showLabel = !params.icononly && !params.nolink

    const iconHTML = showIcon ? `<img src="${iconSrc.toLowerCase()}" loading="lazy" class="tip-icon" decoding="async" />` : ''
    const labelHTML = showLabel ? label : ''

    return `${iconHTML}${labelHTML}`
  })
}

function replacePP(wikitext: string): string {
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

const templateUnits: Record<string, string> = {
  ap: '', // flat value
  ad: '',
  hp: ' HP',
  mp: ' mana',
  as: '% attack speed',
  ms: ' movement speed',
  fd: 's',
  cd: 's',
  pd: '%',
  ar: ' armor',
  mr: ' magic resist',
}

export function replaceFt(wikitext: string): string {
  return wikitext.replace(/\{\{ft\|([^|]+)\|([^}]+)\}\}/gi, (_, text, tooltip) => {
    const resolvedText = resolveTemplates(text)
    const resolvedTooltip = resolveTemplates(tooltip)
    const flatTooltip = resolvedTooltip.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    return `${resolvedText} (${flatTooltip})`
  })
}

function resolveTemplates(text: string): string {
  let i = 0
  const MAX_DEPTH = 20

  function parse(): string {
    let result = ''
    while (i < text.length) {
      if (text[i] === '{' && text[i + 1] === '{') {
        i += 2
        result += parseTemplate(1)
      }
      else if (text[i] === '}' && text[i + 1] === '}') {
        i += 2
        return result
      }
      else {
        result += text[i++]
      }
    }
    return result
  }

  function parseTemplate(depth: number): string {
    if (depth > MAX_DEPTH)
      throw new Error('Template recursion too deep')

    let templateName = ''
    const params: string[] = []
    let current = ''

    while (i < text.length) {
      if (text[i] === '|' && templateName === '') {
        templateName = current.trim().toLowerCase()
        current = ''
        i++
      }
      else if (text[i] === '|') {
        params.push(current.trim())
        current = ''
        i++
      }
      else if (text[i] === '{' && text[i + 1] === '{') {
        i += 2
        current += parseTemplate(depth + 1)
      }
      else if (text[i] === '}' && text[i + 1] === '}') {
        i += 2
        break
      }
      else {
        current += text[i++]
      }
    }

    params.push(current.trim())
    const resolvedParams = params.map(p => resolveTemplates(p.trim()))
    return evaluateTemplate(templateName, resolvedParams)
  }

  function evaluateTemplate(template: string, params: string[]): string {
    const clean = params[0]
    const evaluated = tryEval(clean)

    if (evaluated !== null) {
      const unit = templateUnits[template] || ''
      return `${evaluated}${unit}`
    }

    switch (template) {
      case 'pp': {
        const key = params.find(p => p.startsWith('key='))?.split('=')[1] ?? ''
        const value = params[1] ?? ''
        const scale = params[2] ?? '' // e.g., "0 to 10000"
        const type = params.find(p => p.startsWith('type='))?.split('=')[1]?.replace(/'''/g, '') ?? ''

        const percent = key === '%' ? '%' : ''
        return `+${value}${percent} ${type}`.trim()
      }
      case 'ft':
        return replaceFt(`{{ft|${params.join('|')}}}`)
      case 'as':
        return params.map(p => resolveTemplates(p)).join(' ')
      default:
        // fallback for unknown or unresolved template
        return `{{${template}|${params.join('|')}}}`
    }
  }

  return parse().trim()
}

// Safe math eval

function tryEval(expr: string): string | null {
  try {
    const result = Parser.evaluate(expr)
    console.log('💠 - tryEval - result:', result)
    return typeof result === 'number' && !Number.isNaN(result)
      ? Number.parseFloat(result.toFixed(2)).toString()
      : null
  }
  catch {
    return null
  }
}