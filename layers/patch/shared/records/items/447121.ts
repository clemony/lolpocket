// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447121,
  name: 'Twilight\'s Edge',
  description: '70 Attack Damage\n100 Ability Power\n\nThe Path Between\nThreshold 130 bonus AD and 180 AP: Chakram orbit you, dealing continuous damage to enemies they strike.\n\nSpirit World: Gain Ability Power and Ability Haste.\nMaterial World: Gain Attack Damage and Attack Speed.',
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
      name: 'The Path Between',
      effects: 'If you have at least 130 <b>bonus</b> attack damage and 180 ability power, enter either the <i>Material World</i> or the <i>Spirit World</i>, determined randomly, at the start of the combat phase in each round:<br><br>• <b>Material World</b>: Increase your attack damage by 25% and gain 50% – 150% (based on %) <b>bonus</b> attack speed.<br>• <b>Spirit World</b>: Increase your ability power by 25% and gain 30 – 120 (based on level) ability haste.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 100,
    attackDamage: 70
  }
}
export default item