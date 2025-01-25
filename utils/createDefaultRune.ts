export default function createDefaultRune(): {
  id: number
  key: string
  icon: string
  name: string
  shortDesc: string
  longDesc: string
  tier?: number
  type?: string
  img?: string
  stats?: string
  path?: string
} {
  return {
    name: 'empty',
    id: 0,
    key: '',
    icon: '',
    shortDesc: '',
    longDesc: '',
    tier: 0,
    type: '',
    img: '/img/runes/blankRune.webp',
    stats: '',
    path: 'empty',
  }
}
