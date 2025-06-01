/* eslint-disable no-eval */
export const templateUnits: Record<string, string> = {
  ap: '',
  ad: '',
  hp: ' HP',
  mp: ' mana',
  as: '% attack speed',
  ms: ' movement speed',
  fd: '',
  cd: '',
  pd: '%',
  ar: ' armor',
  mr: ' magic resist',
}

const plainTips = new Set([
  'ability damage',
  'true damage',
  'crowd control',
  'cast instance',
])

const deleteTips = new Set([
  'on-attack',
])

function normalizeName(str: string) {
  let name = str.toLowerCase()
  name = name.replace(/\s/g, '-')
  name = name.replace(/-\(buff\)/g, '')
  return name.replace(/'/g, '')
}

export const formatMap: FormatMap = {
  tip: ({ input, depth }) => {
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
  icon: (result) => {
    if (!result)
      return '[Missing icon]'
    const iconSrc = `/img/icons/${normalizeName(result)}.webp`
    return `<img src="${iconSrc}" class="tip-icon" />${result}`
  },
  g: (result) => {
    return `<img src="/img/icons/gold-coin.webp" class="inline-icon" />${result}`
  },
  pp: ({ input, depth }) => {
    const { values, type, levels, key, key1 } = input

    const basedOn = type || key1 || key || 'level'
    let cleanRange = ''
    if (levels.includes('for')) {
      cleanRange = levels.split('for')[0].trim()
    }
    else {
      cleanRange = levels.trim()
    }

    const suffix = key === '%' ? '%' : ''
    const valueRange = values ? values.split(';') : ''
    const match = cleanRange.match(/^(\d+)\s?to\s?(\d+)$/)
    const min = valueRange.at(0) ?? match?.[1]
    const max = valueRange.at(-1) ?? match?.[2]

    const html = min && max ? `${min}${suffix} – ${max}${suffix}` : `${cleanRange}${suffix}`
    if (html)
      return `${html} (based on ${basedOn})`
  },
  rd: ({ input, depth }) => {
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
  as: ({ input }: { input: AsInput }) => {
    const value = input[0]?.trim() ?? ''
    const suffix = input[1]?.trim() ?? ''
    const dedupedSuffix = suffix

      .split(/\s+/)
      .filter(word => !value.includes(word))
      .join(' ')
    return `${value}${dedupedSuffix ? ` ${dedupedSuffix}` : ''}`
  },
}