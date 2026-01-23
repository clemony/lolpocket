import type { AllyDataPoint } from '.'

export function getAllyColorMap(data: AllyDataPoint[]) {
  const palette = [
    '#b48dac',
    '#90bdc2',
    '#bf616a',
    '#ebcb8b',
    '#a3be8c',
    '#abd2b5',
    '#df9372',
    '#e3a3b1',
  ]

  const map = new Map<string, string>()
  let i = 0

  for (const d of data) {
    if (!map.has(d.allyPuuid)) {
      map.set(d.allyPuuid, palette[i % palette.length])
      i++
    }
  }

  return map
}
