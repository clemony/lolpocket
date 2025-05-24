
export function replaceSti(wikitext: string): string {
  return wikitext.replace(/\{\{stil\|([^}]+)\}\}/gi, (_, statRaw) => {
    const stat = statRaw.trim()
    const iconSrc = `/img/icons/${stat.replace(' ', '-')}.webp`
    return `<img src="${iconSrc.toLowerCase()}" class="tip-icon"  />${stat}`
  })
}

