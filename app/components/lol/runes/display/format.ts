export function formatDataText(text: string) {
  if (!text) return null
  let a = text

  const format: Record<string, string> = {
    "</gold>": "</span>",
    "</healing>": "</span>",
    "</scaleAD>": "</span>",
    "</scaleAP>": "</span>",
    "</scalehealth>": "</span>",
    "</scaleLevel>": "</span>",
    "</speed>": "</span>",
    "</status>": "</span>",
    "</truedamage>": "</span>",
    "<gold>": '<span class="font-medium >',
    "<healing>": '<span class="font-medium >',
    "<scaleAD>": '<span class="font-medium tracking-tight ">',
    "<scaleAP>": '<span class="font-medium tracking-tight ">',
    "<scalehealth>": '<span class="font-medium tracking-tight t">',
    "<scaleLevel>": '<span class="font-medium tracking-tight ">',
    "<speed>": '<span class="font-medium tracking-tight ">',
    "<status>": '<span class="font-medium ">',
    "<truedamage>": '<span class="font-medium ">',
  }
  Object.keys(format).forEach((key) => {
    const replacement = format[key]
    if (a && key && replacement) a = a.replaceAll(key, replacement)
  })

  return a
}
