// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447107,
  name: 'Decapitator',
  description: '80 Adaptive Force\n50% Attack Speed\n8% Move Speed\n\nAttacks and Non-Ultimate Abilities grant stacks. Gain Ultimate Damage and Ultimate Ability Haste per stack.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Anticipation',
      effects: 'Basic attacks and basic ability casts generate 1 and 2 stacks of <i>Anticipation</i> for the rest of the round, respectively, stacking up to 40 times. For each stack, increase your ultimate ability\'s damage by 3% and gain 2 ultimate haste, up to 120% increased ultimate damage and 80 ultimate haste. Stacks are reset every round and between each phase in a round.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackSpeed: 50,
    percentMovespeed: 8
  }
}
export default item