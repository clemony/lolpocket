// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4017,
  name: 'Hellfire Hatchet',
  nicknames: [
    'burn'
  ],
  description: '35 Attack Damage\n12 Lethality\n\nChar (0s)\nYour next Ability hit Burns enemies for % to % current Health physical damage over 4 seconds, based on how much more max Health they have than you.\n\nBonus damage maximum is reached at 2000 health difference',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 2500,
    sell: 1250,
    total: 2500
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Char',
      cooldown: 15,
      effects: 'Your next ability hit applies a Burn that deals 0% – 2000% (based on maximum health difference) (+0% – 2000% (based on maximum health difference) per 1 Lethality) lethality (based on <b>maximum</b> health difference) hp of the target\'s <b>current</b> health physical damage seconds over 4 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 35,
    lethality: 12
  }
}
export default item