export function formatDataText(text) {
  let a = text

  const format = {
    '<scaleAP>': '<span class="font-medium tracking-tight ">',

    '</scaleAP>': '</span>',

    '<scaleAD>': '<span class="font-medium tracking-tight ">',

    '</scaleAD>': '</span>',

    '<scaleLevel>': '<span class="font-medium tracking-tight ">',

    '</scaleLevel>': '</span>',

    '<scalehealth>': '<span class="font-medium tracking-tight t">',

    '</scalehealth>': '</span>',

    '<speed>': '<span class="font-medium tracking-tight ">',

    '</speed>': '</span>',

    '<status>': '<span class="font-medium ">',

    '</status>': '</span>',

    '<gold>': '<span class="font-medium >',

    '</gold>': '</span>',

    '<truedamage>': '<span class="font-medium ">',

    '</truedamage>': '</span>',

    '<healing>': '<span class="font-medium >',

    '</healing>': '</span>',
  }
  Object.keys(format).forEach((key) => {
    a = a.replaceAll(key, format[key])
  })

  return a
}
