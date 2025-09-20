import { escapeHtml } from '../normalization/escapeHtml'
import { formatMap } from './formatMap'
import { resolveTemplates } from './templates.resolve'
import {
  evalAp,
  evalRange,
  evaluateExpressions,
  evaluateMathExpression,
  tryEval,
} from './tryEval'

export interface TemplateResult {
  exportType?: string
  html: string
  isLevelScaling?: boolean
  isPp?: boolean
}

export function evaluateTemplates(
  template: string,
  params: string[],
  depth: number,
  vars: Map<string, string>
): TemplateResult {
  const fullyResolvedParams = params.map((p) => {
    const result = resolveTemplates(p, depth + 1, vars)
    return result.html
  })

  const evaluatedParams = fullyResolvedParams.map(p => evaluateExpressions(p))

  const wrap = (html: string, isLevelScaling = false): TemplateResult => ({
    html,
    isLevelScaling,
  })

  switch (template) {
    case '#vardefineecho': {
      const [key = '', value = ''] = evaluatedParams
      if (key)
        vars.set(key, value)
      return wrap(value)
    }

    case '#var': {
      const [key = ''] = evaluatedParams
      return wrap(vars.get(key) ?? '')
    }

    case '#expr': {
      const [expression = ''] = evaluatedParams
      return wrap(evaluateMathExpression(expression))
    }

    case 'pp': {
      const named = Object.fromEntries(
        evaluatedParams
          .filter(p => p.includes('='))
          .map((p) => {
            const [k, ...v] = p.split('=')
            return [k.trim(), v.join('=').replace(/'''/g, '').trim()]
          })
      )

      const values
        = evaluatedParams.find(p => /^\d+(?:\.\d+)?(?:;[\d.]+)+$/.test(p)) ?? ''
      const levels
        = evaluatedParams.find(p =>
          /^\d+(?:\s?to\s?\d+)?(?:\s?for\s?\d+)?$/.test(p)
        ) ?? ''

      const type = named.type || ''
      const key = named.key || ''
      const key1 = named.key1 || ''
      const color = named.color || ''

      const html
        = formatMap.pp?.({
          depth,
          input: { key, key1, color, levels, type, values },
          type: 'pp',
        }) ?? ''

      return wrap(typeof html === 'string' ? html : (html?.html ?? ''), true)
    }

    case 'ap': {
      const [expr] = evaluatedParams
      if (!expr)
        return wrap('')

      if (!expr.includes('x')) {
        const result = tryEval(expr)
        return wrap(result ?? expr)
      }

      try {
        return wrap(evalAp(expr), true)
      }
      catch {
        return wrap(expr)
      }
    }

    case 'ft': {
      const [text = '', tooltip = ''] = evaluatedParams
      const flatText = text
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
      const flatTooltip = tooltip
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
      return wrap(flatText)
    }

    case 'as': {
      const units = ['ad']
      const last = evaluatedParams[evaluatedParams.length - 1]?.toLowerCase()
      const body
        = units.includes(last) ? evaluatedParams.slice(0, -1) : evaluatedParams

      const pieces = body.map((param) => {
        const resolved = resolveTemplates(param, depth + 1, vars)
        const suffix = resolved.isLevelScaling ? ' (based on level)' : ''
        return `${resolved.html}${suffix}`
      })

      const html = formatMap.as?.({ depth, input: pieces, type: 'as' }) ?? ''

      return wrap(typeof html === 'string' ? html : (html?.html ?? ''), true)
    }

    case 'rd': {
      const [meleeRaw = '', rangedRaw = '', , , , , , , , , , maybePp = '']
        = evaluatedParams
      const isPp = maybePp.toLowerCase() === 'pp=true'

      const html = formatMap.rd?.({
        depth,
        input: {
          isPp,
          melee: evaluateExpressions(meleeRaw),
          ranged: evaluateExpressions(rangedRaw),
        },
        type: 'rd',
      })
      return wrap(typeof html === 'string' ? html : (html?.html ?? ''))
    }

    case 'tip': {
      const html = formatMap.tip?.({
        depth,
        input: evaluatedParams,
        type: 'tip',
      })
      return wrap(typeof html === 'string' ? html : (html?.html ?? ''))
    }

    case 'tt':
    case 'texttip': {
      return wrap(evaluatedParams[0]?.trim() ?? '')
    }

    case 'stil':
    case 'si':
    case 'sti':
    case 'ii': {
      const iconName = evaluatedParams[0] ?? ''
      const icon = formatMap.icon?.(iconName)
      return wrap(typeof icon === 'string' ? icon : (icon?.html ?? ''))
    }

    case 'ui': {
      const iconName = evaluatedParams[evaluatedParams.length - 1] ?? ''
      const icon = formatMap.icon?.(iconName)
      return wrap(typeof icon === 'string' ? icon : (icon?.html ?? ''))
    }

    case 'g': {
      const [value = ''] = evaluatedParams
      const g = formatMap.g?.(value)
      return wrap(typeof g === 'string' ? g : (g?.html ?? ''))
    }

    case 'fd': {
      const deduped = [...new Set(evaluatedParams.map(p => p.trim()))]
      return wrap(deduped.join(' '))
    }

    case 'rutngt': {
      const raw = evaluatedParams[0]
      const value = Number.parseFloat(raw)
      if (Number.isNaN(value))
        return wrap(raw)

      const ticks = Math.ceil(value / 0.033)
      const rounded = (ticks * 0.033).toFixed(3)
      return wrap(`${rounded} seconds`)
    }

    default: {
      return wrap(
        `{{${escapeHtml(template)}|${params.map(escapeHtml).join('|')}}}`
      )
    }
  }
}
