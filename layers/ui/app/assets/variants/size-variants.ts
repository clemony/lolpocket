// size.builder.ts
export function buildSizeVariants() {
  const STEP = 0.25
  const MAX = 16

  const range = (step: number, max: number) => {
    const out: number[] = []
    for (let v = step; v <= max; v += step) out.push(+v.toFixed(2))
    return out
  }

  const sizes = range(STEP, MAX)

  const gc
    = 'relative grid aspect-square place-items-center p-0 shrink-0 *:absolute'

  const heightVariants: Record<string, string> = {}
  for (const h of sizes) {
    heightVariants[h] = `h-${h} ${h <= 7 ? 'rounded-md' : 'rounded-lg'}`
  }

  const sVariants: Record<string, any> = {
    ...heightVariants,
    auto: 'h-max w-full rounded-lg',
    fit: 'w-fit h-fit rounded-lg',
    max: 'w-max h-fit rounded-lg',
    none: '',
  }

  for (const s of sizes) {
    sVariants[`sq-${s}`] = [
      [gc, `size-${s} text-sm`],
      s < 9 ? 'rounded-md' : 'rounded-lg',
    ]
    sVariants[`c-${s}`] = [[gc, `size-${s} text-sm`], 'rounded-full']
  }

  Object.assign(sVariants, {
    'icon': 'grid aspect-square relative place-items-center size-4.5 *:absolute',
    'icon-sm':
      'grid aspect-square relative place-items-center size-4 *:absolute',
    'c': [gc, 'rounded-full'],
    'sq': [gc, 'rounded-lg'],
  })

  return sVariants
}
