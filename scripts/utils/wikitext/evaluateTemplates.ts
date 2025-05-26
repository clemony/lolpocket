import { formatMap } from './formatMap'
import { resolveTemplates } from './resolveTemplates'
import { evalAp, evaluateExpressions, evaluateMathExpression, tryEval } from './tryEval'

export function evaluateTemplates(
  template: string,
  params: string[],
  depth: number,
  vars: Map<string, string>,
): string | TemplateResult {
  const fullyResolvedParams = params.map((p) => {
    const result = resolveTemplates(p, depth + 1, vars)
    return typeof result === 'string' ? result : result.html
  })

  const evaluatedParams = fullyResolvedParams.map(p => evaluateExpressions(p))

  switch (template) {
    case '#vardefineecho': {
      const [key = '', value = ''] = evaluatedParams
      if (key)
        vars.set(key, value)
      return value
    }

    case '#var': {
      const [key = ''] = evaluatedParams
      return vars.get(key) ?? ''
    }

    case '#expr': {
      const [expression = ''] = evaluatedParams
      return evaluateMathExpression(expression)
    }

    case 'pp': {
      const named = Object.fromEntries(
        evaluatedParams
          .filter(p => p.includes('='))
          .map((p) => {
            const [k, v] = p.split('=')
            return [k.trim(), v?.replace(/'''/g, '').trim()]
          }),
      )

      const values = evaluatedParams.find(p => /^\d+(?:\.\d+)?(?:;[\d.]+)+$/.test(p)) ?? ''
      const levels = evaluatedParams.find(p => /^\d+(?:\s?to\s?\d+)?(?:\s?for\s?\d+)?$/.test(p)) ?? ''

      const type = named.type || ''
      const key = named.key || ''
      const key1 = named.key1 || ''
      const color = named.color || ''

      return formatMap.pp?.({
        type: 'pp',
        input: { values, type, levels, key, key1, color },
        depth,
      })
    }

    case 'ap': {
      const [expr] = evaluatedParams
      if (!expr)
        return ''

      // Handle expressions like 25*0.5
      if (!expr.includes('x')) {
        const result = tryEval(expr)
        return result ?? expr
      }

      // Handle formulas like 2*x
      if (expr.includes('x')) {
        try {
          return evalAp (expr)
        }
        catch {
          return expr
        }
      }

      // Handle static values like 10|20|30
      return evaluatedParams.join(' / ')
    }

    case 'ft': {
      const [text = '', tooltip = ''] = evaluatedParams
      const flatTooltip = tooltip.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
      return `${text} (${flatTooltip})`
    }

    case 'as': {
      const units = ['ad']
      const last = evaluatedParams[evaluatedParams.length - 1]?.toLowerCase()
      const body = units.includes(last) ? evaluatedParams.slice(0, -1) : evaluatedParams

      const pieces = body.map((param) => {
        const resolved = resolveTemplates(param, depth + 1, vars)
        if (typeof resolved === 'object') {
          const suffix = resolved.isLevelScaling ? ' (based on level)' : ''
          return `${resolved.html}${suffix}`
        }
        return resolved
      })

      return formatMap.as?.({
        type: 'as',
        input: pieces,
        depth,
      })
    }

    case 'rd': {
      const [meleeRaw = '', rangedRaw = '', , , , , , , , , , maybePp = ''] = evaluatedParams
      const isPp = maybePp.toLowerCase() === 'pp=true'

      return formatMap.rd?.({
        type: 'rd',
        input: {
          melee: evaluateExpressions(meleeRaw),
          ranged: evaluateExpressions(rangedRaw),
          isPp,
        },
        depth,
      })
    }

    case 'tip': {
      return formatMap.tip?.({
        type: 'tip',
        input: evaluatedParams,
        depth,
      })
    }

    case 'tt':
    case 'texttip': {
      return evaluatedParams[0]?.trim() ?? ''
    }

    case 'stil':
    case 'si':
    case 'sti':
    case 'ii': {
      const iconName = evaluatedParams[0] ?? ''
      return formatMap.icon?.(iconName)
    }

    case 'ui': {
      const iconName = evaluatedParams[evaluatedParams.length - 1] ?? ''
      return formatMap.icon?.(iconName)
    }

    case 'g': {
      const [value = ''] = evaluatedParams
      return formatMap.g?.(value)
    }

    case 'fd': {
      const deduped = [...new Set(evaluatedParams.map(p => p.trim()))]
      return deduped.join(' ')
    }

    default: {
      return `{{${template}|${params.join('|')}}}`
    }
  }
}