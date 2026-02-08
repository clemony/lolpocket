// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3100,
  name: 'Lich Bane',
  nicknames: [
    'Spellblade'
  ],
  description: '100 Ability Power\n4% Move Speed\n10 Ability Haste\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus magic damage On-Hit.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3057,
      name: 'Sheen',
      gold: 900
    },
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    }
  ],
  gold: {
    base: 250,
    sell: 2030,
    total: 2900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds gains 50% <b>bonus</b> attack speed and deals 75% <b>base</b> AD (+40% AP) <b>bonus</b> magic damage on-hit (1.5 second cooldown, starts after using the empowered attack).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 10,
    abilityPower: 100,
    percentMovespeed: 4
  }
}
export default item