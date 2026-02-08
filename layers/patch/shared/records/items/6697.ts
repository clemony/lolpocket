// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6697,
  name: 'Hubris',
  nicknames: [
    'lethality'
  ],
  description: '60 Attack Damage\n18 Lethality\n10 Ability Haste\n\nEminence\nWhen a champion that you damaged within 3 seconds dies, gain 15 Attack Damage plus 2 per champion killed for 90 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  gold: {
    base: 950,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    21
  ],
  passives: [
    {
      name: 'Eminence',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon light:invert" />takedown against an enemy champion within 3 seconds of damaging them generates a permanent stack and grants you 15 ad (+2 per stack) <b>bonus</b> attack damage for 90 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 10,
    attackDamage: 60,
    lethality: 18
  }
}
export default item