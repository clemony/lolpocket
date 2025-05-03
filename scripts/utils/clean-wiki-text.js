import { parse } from 'node-html-parser'

export function cleanWikitextHtml(input) {
  const root = parse(input)

  root.querySelectorAll('*').forEach(el => {
    const isTooltip = el.tagName === 'span' && el.classList.contains('pp-tooltip')
    if (isTooltip) {
      [...el.attributes].forEach(attr => {
        if (!attr.name.startsWith('data-')) el.removeAttribute(attr.name)
      })
    } else {
      el.replaceWith(el.text)
    }
  })

  return root.toString()
}