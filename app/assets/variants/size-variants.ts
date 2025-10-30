const gc = 'relative grid aspect-square place-items-center p-0 shrink-0'
const sv = {
  5: [gc, 'size-5 text-2'],
  9: [gc, 'size-9 text-2'],
  10: [gc, 'size-10'],
  lg: [gc, 'h-12'],
  xl: [gc, 'size-14'],
  xs: [gc, 'size-8 text-2'],
  xxs: [gc, 'size-6 text-2'],
}

export const sizeVariants = {
  '7': 'h-7 text-2 rounded-md',
  '8': 'h-8 text-2 rounded-lg',
  'lg': 'rounded-lg h-12',
  'md': 'rounded-lg h-10',
  'none': '',
  'sm': 'h-9 text-2 rounded-lg',
  'xl': 'rounded-lg h-14',
  'xxs': 'h-6 text-2 rounded-md',

  /* square */
  'sq': [...gc, 'rounded-lg'],
  'sq-5': [...sv[5], 'rounded-md'],
  'sq-9': [...sv[9], 'rounded-lg'],
  'sq-10': [...sv[10], 'rounded-lg'],
  'sq-lg': [...sv.lg, 'rounded-lg'],
  'sq-xl': [...sv.xl, 'rounded-lg'],
  'sq-xs': [...sv.xs, 'rounded-md'],
  'sq-xxs': [...sv.xxs, 'rounded-md'],

  // anchor
  'icon': ' grid aspect-square relative place-items-center size-4.5 *:absolute',
  'icon-sm': ' grid aspect-square relative place-items-center size-4 *:absolute',

  /* circle */
  'c': [...gc, 'rounded-full'],
  'c-5': [...sv[5], 'rounded-full'],
  'c-9': [...sv[9], 'rounded-full'],
  'c-10': [...sv[10], 'rounded-full'],
  'c-lg': [...sv.lg, 'rounded-full'],
  'c-xl': [...sv.xl, 'rounded-full'],
  'c-xs': [...sv.xs, 'rounded-full'],
  'c-xxs': [...sv.xxs, 'rounded-full'],
}
