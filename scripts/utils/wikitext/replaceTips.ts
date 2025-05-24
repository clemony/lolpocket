export function replaceTips(wikitext: string): string {
  const plainTips = new Set([
    'ability damage',
    'true damage',
    'crowd control',
    'cast instance'
  ])

  const deleteTips = new Set([
    'on-attack'
  ])

  return wikitext.replace(
    /\{\{tip\|([^}|]+)(?:\|([^}|]+))?(?:\|([^}]+))?\}\}/gi,
    (_, subjectRaw, labelRaw, paramRaw = '') => {
      const subject = subjectRaw.trim()
      const label = (labelRaw || subject).trim()
      const params = Object.fromEntries(
        paramRaw
          .split('|')
          .map(pair => pair.split('=').map(s => s.trim()))
          .filter(([k]) => k),
      )

      if (plainTips.has(subject.toLowerCase())) {
        return subject
      }

      if (deleteTips.has(subject.toLowerCase())) {
        return ''
      }

      const iconSrc = `/img/icons/${subject.toLowerCase().replace(' ', '-')}.webp`
      const showIcon = !params.noimg && !params.icononly
      const showLabel = !params.icononly && !params.nolink

      const iconHTML = showIcon ? `<img src="${iconSrc}" class="tip-icon" />` : ''
      const labelHTML = showLabel ? label : ''

      return `${iconHTML}${labelHTML}`
    },
  )
}