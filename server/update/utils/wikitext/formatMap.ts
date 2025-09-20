import type { TemplateResult } from './templates.evaluate'

/* eslint-disable no-eval */
export interface PpInput {
  key?: string
  key1?: string
  color?: string
  levels: string
  type: string
  values: string // from raw param[0], possibly cleaned
}

export interface RdInput {
  isPp: boolean
  melee: string
  ranged: string
}

export type TipInput = string[]
export type AsInput = any

export type FormatMapArgs
  = | { type: 'pp', input: PpInput, depth: number }
    | { type: 'rd', input: RdInput, depth: number }
    | { type: 'tip', input: TipInput, depth: number }
    | { type: 'as', input: AsInput, depth: number }

export type FormatFn<T> = (args: T) => string | TemplateResult

export type SimpleFormatFn = (
  result: string,
  params?: string[]
) => string | TemplateResult

export type FormatMap = Partial<ComplexFormatMap> & {
  [key: string]: SimpleFormatFn | FormatFn<any>
}

export type ComplexFormatMap = {
  [K in FormatMapArgs['type']]: FormatFn<Extract<FormatMapArgs, { type: K }>>
}

export const templateUnits: Record<string, string> = {
  ad: '',
  ap: '',
  ar: ' armor',
  as: '% attack speed',
  cd: '',
  fd: '',
  hp: ' HP',
  mp: ' mana',
  mr: ' magic resist',
  ms: ' movement speed',
  pd: '%',
}

const plainTips = new Set([
  'ability damage',
  'true damage',
  'crowd control',
  'cast instance',
])

const deleteTips = new Set(['on-attack'])

function normalizeName(str: string) {
  let name = str.toLowerCase()
  name = name.replace(/\s/g, '-')
  name = name.replace(/-\(buff\)/g, '')
  return name.replace(/'/g, '')
}

export const formatMap: FormatMap = {
  as: ({ input }: { input: AsInput }) => {
    const value = input[0]?.trim() ?? ''
    const suffix = input[1]?.trim() ?? ''
    const dedupedSuffix = suffix

      .split(/\s+/)
      .filter(word => !value.includes(word))
      .join(' ')
    return `${value}${dedupedSuffix ? ` ${dedupedSuffix}` : ''}`
  },
  g: (result) => {
    return `<img src="/img/icons/gold-coin.webp" class="inline-icon" />${result}`
  },
  icon: (result) => {
    if (!result)
      return '[Missing icon]'
    const iconSrc = `/img/icons/${normalizeName(result)}.webp`
    return `<img src="${iconSrc}" class="tip-icon" />${result}`
  },
  pp: ({ depth, input }: { input: PpInput, depth: number }): string => {
    const { key, key1, levels, type, values } = input

    const basedOn = type || key1 || key || 'level'
    let cleanRange = ''
    if (levels.includes('for')) {
      cleanRange = levels.split('for')[0].trim()
    }
    else {
      cleanRange = levels.trim()
    }

    const suffix: string = key === '%' ? '%' : ''
    const valueRange: string[] = values ? values.split(';') : []

    const match = cleanRange.match(/^(\d+)\s?to\s?(\d+)$/)

    const min: string = valueRange.length ? valueRange[0] : match?.[1] || ''
    const max: string
      = valueRange.length ? valueRange[valueRange.length - 1] : match?.[2] || ''

    const html: string
      = min && max
        ? `${min}${suffix} – ${max}${suffix}`
        : `${cleanRange}${suffix}`
    if (html)
      return `${html} (based on ${basedOn})`
    return ''
  },
  rd: ({ depth, input }) => {
    const formatValue = (v: string) => v.replace('to', '–')
    const suffix = input.isPp ? ' (based on level)' : ''

    const clean = (val: string) =>
      val
        .replace(/ for \d+/, '') // remove "for 11"
        .replace(/\*\d+(\.\d+)?/g, (match) => {
          try {
            return eval(match).toFixed(0)
          }
          catch {
            return match
          }
        })
    const meleeIcon = `<img src="/img/icons/melee.webp" class="inline-icon" />`
    const rangedIcon = `<img src="/img/icons/ranged.webp" class="inline-icon" />`
    return `(${meleeIcon}${formatValue(clean(input.melee))} /${rangedIcon}${formatValue(clean(input.ranged))})${suffix}`
  },
  tip: ({ depth, input }) => {
    const [subjectRaw = '', labelRaw = '', paramRaw = ''] = input
    const subject = subjectRaw.trim()
    const label = (labelRaw || subject).trim()
    const paramPairs = paramRaw
      .split('|')
      .map(p => p.split('=').map(s => s.trim()))
      .filter(([k]) => k)

    const tipParams = Object.fromEntries(paramPairs)

    if (plainTips.has(subject.toLowerCase()))
      return subject
    if (deleteTips.has(subject.toLowerCase()))
      return ''

    const showIcon = !tipParams.noimg && !tipParams.icononly
    const showLabel = !tipParams.icononly && !tipParams.nolink
    const iconSrc = `/img/icons/${normalizeName(subject)}.webp`

    const iconHTML = showIcon ? `<img src="${iconSrc}" class="tip-icon" />` : ''
    const labelHTML = showLabel ? label : ''
    return `${iconHTML}${labelHTML}`
  },
}
