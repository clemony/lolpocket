export const colorB3 = computed(() => {
  return getComputedStyle(document.documentElement).getPropertyValue('--color-b3')
})

// from = location of primary or secondary color identifier
export function getColor(from: string, prefix: string, opacity?: number) {
  const a = from != 'empty' ? from : 'b2'
  const b = `${prefix}-${a}`
  const c = opacity ? `${b}/${opacity}` : b
  return c
}
export function getLightColor(from: string, prefix: string, opacity?: number) {
  const a = from != 'empty' ? from : 'b2'
  const b = `${prefix}-${a}-light`
  const c = opacity ? `${b}/${opacity}` : b
  return c
}

/* "getColor(set.primary, 'from', 60), getColor(set.secondary, 'to', 60)"
 */
