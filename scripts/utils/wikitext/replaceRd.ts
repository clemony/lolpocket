
export function replaceRd(wikitext: string): string {
  return wikitext.replace(/\{\{rd\|([^|]+)\|([^|}]+)(?:\|[^}]+)?\}\}/gi, (_, meleeRaw, rangedRaw) => {
    const melee = meleeRaw.trim().replace('to', '–')
    const ranged = rangedRaw.trim().replace('to', '–')

    const meleeIcon = `<img src="/img/icons/melee.webp" class="span-tip-icon " />`
    const rangedIcon = `<img src="/img/icons/ranged.webp" class="span-tip-icon" />`

    return `<span class="tip-span">(${meleeIcon}${melee}&nbsp/&nbsp${rangedIcon}${ranged})</span>`
  })
}
