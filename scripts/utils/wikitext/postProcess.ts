export function postProcess(text: string): string {
  return text
    .replace(/\[\[([^[\]|]+)(?:\|([^[\]]+))?\]\]/g, (_, target, display) => display?.trim() || target.trim())
    .replace(/'''''(.*?)'''''/g, '<b><i>$1</i></b>')
    .replace(/'''(.*?)'''/g, '<b>$1</b>')
    .replace(/''(.*?)''/g, '<i>$1</i>')
    .replace('+color=pd ', '')
    .replace('+color=md ', '')
    .replace('+ +', '+')
    .replace('icononly=true', '')
  // .replace(/\(\+ \((.*\).*)\)/g, '(+$1')
    .replace(/([a-z])(\d)/gi, '$1 $2')
    .replace(/\(\+\s/g, '(+')
    .replace(/\s+/g, ' ')
    .replace(/AD\sad/g, 'AD ')
    .replace(/\(\d+% of <i>Immolate's<\/i> damage\)/g, '')
    .trim()
}
