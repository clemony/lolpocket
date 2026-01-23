// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3046,
  name: 'Phantom Dancer',
  nicknames: [
    'pd'
  ],
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
  description: '65% Attack Speed\n25% Critical Strike Chance\n10% Move Speed\n\nSpectral Waltz\nBecome Ghosted.',
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
  noEffects: false,
  passives: [
    {
      name: 'Spectral Waltz',
      effects: 'Become permanently <img src="/img/icons/ghosted.webp" class="tip-icon" />ghosted.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 65,
    criticalStrikeChance: 25,
    percentMovespeed: 10
  }
}
export default item