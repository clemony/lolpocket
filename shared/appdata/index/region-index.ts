export const regionKeys = [
  'br1',
  'eun1',
  'euw1',
  'jp1',
  'kr',
  'la1',
  'la2',
  'na1',
  'oc1',
  'ph2',
  'ru',
  'sg2',
  'th2',
  'tr1',
  'tw2',
  'vn2'
] as const

export type Region = typeof regionKeys[number]

export const regionIndex = {
  br1: 'Brazil',
  eun1: 'Europe Nordic & East',
  euw1: 'Europe West',
  jp1: 'Japan',
  kr: 'Korea',
  la1: 'Latin America North',
  la2: 'Latin America South',
  na1: 'North America',
  oc1: 'Oceania',
  ph2: 'Philippines',
  ru: 'Russia',
  sg2: 'Singapore',
  th2: 'Thailand',
  tr1: 'Turkey',
  tw2: 'Taiwan',
  vn2: 'Vietnam',
}
