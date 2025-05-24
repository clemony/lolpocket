import { replaceFt } from './replaceFt'
import { resolveTemplates } from './resolveTemplate'
import { tryEval } from './tryEval'

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


export function evaluateTemplate(template: string, params: string[]): string {
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
      case 'as': {
        const units = ['ad'] // Extend as needed
        const last = params[params.length - 1]?.toLowerCase()
        const body = units.includes(last) ? params.slice(0, -1) : params
        return body.map(p => resolveTemplates(p)).join(' ')
      }
    default:
      // fallback for unknown or unresolved template
      return `{{${template}|${params.join('|')}}}`
  }
}