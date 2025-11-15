export function formatDataText(text) {
  let a = text

  const format = {
    '</gold>': '</span>',
    '</healing>': '</span>',
    '</scaleAD>': '</span>',
    '</scaleAP>': '</span>',
    '</scalehealth>': '</span>',
    '</scaleLevel>': '</span>',
    '</speed>': '</span>',
    '</status>': '</span>',
    '</truedamage>': '</span>',
    '<gold>': '<span class="font-medium >',
    '<healing>': '<span class="font-medium >',
    '<scaleAD>': '<span class="font-medium tracking-tight ">',
    '<scaleAP>': '<span class="font-medium tracking-tight ">',
    '<scalehealth>': '<span class="font-medium tracking-tight t">',
    '<scaleLevel>': '<span class="font-medium tracking-tight ">',
    '<speed>': '<span class="font-medium tracking-tight ">',
    '<status>': '<span class="font-medium ">',
    '<truedamage>': '<span class="font-medium ">',
  }
  Object.keys(format).forEach((key) => {
    a = a.replaceAll(key, format[key])
  })

  return a
}
