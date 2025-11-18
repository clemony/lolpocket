const gc
  = 'relative grid aspect-square place-items-center p-0 shrink-0 *:absolute'
const sv = {
  3: [gc, 'size-3 text-2'],
  4: [gc, 'size-4 text-2'],
  5: [gc, 'size-5 text-2'],
  6: [gc, 'size-6 text-2'],
  7: [gc, 'size-7 text-2'],
  8: [gc, 'size-8 text-2'],
  9: [gc, 'size-9 text-2'],
  10: [gc, 'size-10'],
  11: [gc, 'size-11'],
  12: [gc, 'size-12'],
  14: [gc, 'size-14'],
  15: [gc, 'size-15'],
}

export const sizeVariants = {
  '5': 'h-5 text-2 px-2 rounded-md',
  '6': 'h-6 text-2 px-2 rounded-md',
  '7': 'h-7 text-2 rounded-md',
  '8': 'h-8 text-2 rounded-lg',
  '9': 'h-9 text-2 rounded-lg',
  '10': 'h-10 text-2 rounded-lg',
  '11': 'h-11 text-2 rounded-lg',
  '12': 'rounded-lg h-12',
  '14': 'rounded-lg h-14',
  '15': 'rounded-lg h-15',
  '16': 'rounded-lg h-16',
  'auto': 'h-max w-full rounded-lg',
  'fit': ' w-fit h-fit rounded-lg',
  'max': ' w-max h-fit rounded-lg',
  'md': 'rounded-lg h-10',
  'none': '',
  'sm': 'h-9 text-2 rounded-lg',
  'xl': 'rounded-lg h-14',

  /* square */
  'sq': [gc, 'rounded-lg'],
  'sq-3': [sv[3], 'rounded-md'],
  'sq-4': [sv[4], 'rounded-md'],
  'sq-5': [sv[5], 'rounded-md'],
  'sq-6': [sv[6], 'rounded-md'],
  'sq-7': [sv[7], 'rounded-md'],
  'sq-8': [sv[8], 'rounded-md'],
  'sq-9': [sv[9], 'rounded-lg'],
  'sq-10': [sv[10], 'rounded-lg'],
  'sq-11': [sv[11], 'rounded-lg'],
  'sq-12': [sv[12], 'rounded-lg'],
  'sq-14': [sv[14], 'rounded-lg'],
  'sq-15': [sv[15], 'rounded-lg'],

  // anchor
  'icon': ' grid aspect-square relative place-items-center size-4.5 *:absolute',
  'icon-sm':
    ' grid aspect-square relative place-items-center size-4 *:absolute',

  /* circle */
  'c': [gc, 'rounded-full'],
  'c-3': [sv[3], 'rounded-full'],
  'c-4': [sv[4], 'rounded-full'],
  'c-5': [sv[5], 'rounded-full'],
  'c-6': [sv[6], 'rounded-full'],
  'c-7': [sv[7], 'rounded-full'],
  'c-8': [sv[8], 'rounded-full'],
  'c-9': [sv[9], 'rounded-full'],
  'c-10': [sv[10], 'rounded-full'],
  'c-11': [sv[11], 'rounded-full'],
  'c-12': [sv[12], 'rounded-full'],
  'c-14': [sv[14], 'rounded-full'],
  'c-15': [sv[15], 'rounded-full'],
}
