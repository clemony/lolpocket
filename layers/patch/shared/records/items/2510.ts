// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2510,
  name: 'Dusk and Dawn',
  nicknames: [
    'Spellblade'
  ],
  description: '300 Health\n70 Ability Power\n20 Ability Haste\n25% Attack Speed\n\nSpellblade (0s)\nAfter using an Ability, your next Attack deals  bonus magic damage On-Hit and applies On-Hit effects an additional time.',
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
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  gold: {
    base: 300,
    sell: 2170,
    total: 3100
  },
  maps: [
    11,
    12,
    21
  ],
  passives: [
    {
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds deals 100% <b>base</b> AD (+10% AP) <b>bonus</b> magic damage on-hit and applies on-hit effects twice (1.5 second cooldown, starts after using the empowered attack).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    abilityPower: 70,
    attackSpeed: 25,
    health: 300
  }
}
export default item