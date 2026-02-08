// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 223185,
  name: 'Guardian\'s Dirk',
  description: '25 Attack Damage\n11 Lethality\n10 Ability Haste\n\nAgricultural Reaper \nIncreases effects of Power Flower by 20%. Gain 100 Move speed for 3s after attacking a plant.',
  noEffects: false,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 500,
    sell: 250,
    total: 500
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Agricultural Reaper',
      effects: 'Increases the effects of 20px|link=Arena#Power Flowers <i>Power Flowers</i> by 20%. Additionally, dealing damage to a <i>Power Flower</i> grants you 100 <b>bonus</b> movement speed for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 10,
    attackDamage: 25,
    lethality: 11
  }
}
export default item