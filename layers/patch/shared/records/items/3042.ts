// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3042,
  name: 'Muramana',
  description: '35 Attack Damage\n1000 Mana\n15 Ability Haste\n\nAwe\nGain 2% max Mana as bonus Attack Damage.\n\nShock\nAttacks against champions deal 1.2% max Mana as bonus physical damage On-Hit. \nDamaging Abilities against champions deal 3% - 4% max Mana as bonus physical damage.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 3004,
  gold: {
    base: 2900,
    purchasable: false,
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
      name: 'Awe',
      effects: 'Grants <b>bonus</b> attack damage equal to 2% <b>maximum</b> mana.',
      mythic: false,
      unique: true
    },
    {
      name: 'Shock',
      effects: 'Basic attacks on-hit against champions deal 1.2% <b>maximum</b> mana <b>bonus</b> physical damage. Can only be triggered on the same target once every 6.5 seconds from the same cast instance.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    attackDamage: 35,
    mana: 1000
  }
}
export default item