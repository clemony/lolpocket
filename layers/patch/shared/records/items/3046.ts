// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3046,
  name: 'Phantom Dancer',
  nicknames: [
    'pd'
  ],
  description: '65% Attack Speed\n25% Critical Strike Chance\n10% Move Speed\n\nSpectral Waltz\nBecome Ghosted.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  gold: {
    base: 950,
    sell: 1855,
    total: 2650
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Spectral Waltz',
      effects: 'Become permanently <img src="/img/icons/ghosted.webp" class="tip-icon " />ghosted.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackSpeed: 65,
    criticalStrikeChance: 25,
    percentMovespeed: 10
  }
}
export default item