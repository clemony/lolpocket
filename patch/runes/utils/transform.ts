export function transformDescription(desc: string) {
  return desc
    .replaceAll(
      /<truedamage>(.*?)<\/truedamage>/g,
      '<span class="truedamage">$1</span>'
    )
    .replaceAll(/<gold>(.*?)<\/gold>/g, '<span class="gold">$1</span>')
    .replaceAll(
      /<scaleLevel>(.*?)<\/scaleLevel>/g,
      '<span class="scale-level">$1</span>'
    )
}

export function transformShardDescription(desc: string) {
  return desc
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      '$1'
    )
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      '$1'
    )
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      '$1'
    )
    .replaceAll(/<font color='#48C4B7'>(.*?)<\/font>/g, '$1')
}