// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6696,
  name: 'Axiom Arc',
  description: '55 Attack Damage\n18 Lethality\n20 Ability Haste\n\nFlux\nWhen a champion that you damaged within 3 seconds dies, refund some of your Ultimate Ability\'s total cooldown.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  gold: {
    base: 363,
    sell: 1925,
    total: 2750
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Flux',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon light:invert" />takedown against an enemy champion within 3 seconds of damaging them refunds 15% (+0.15% per 1 Lethality) of your ultimate ability\'s <b>total</b> cooldown.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    lethality: 18
  }
}
export default item