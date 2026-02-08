// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447115,
  name: 'Regicide',
  description: '60 Attack Damage\n15 Lethality\n8% Move Speed\n\nEnd the Line\nAt the start of each round, declare the lowest health enemy the Regent. Getting a takedown on the Regent grants you a permanent 10 Attack Damage and refreshes your Ultimate\'s Cooldown.',
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
      name: 'End the Line',
      effects: 'At the start of the combat phase in each round, declare the enemy champion with the lowest <b>total maximum</b> health as the <i>Regent</i>. Scoring a <img src="/img/icons/takedown.webp" class="tip-icon light:invert" />takedown against the <i>Regent</i> for the first time in the combat phase grants you 10 <b>bonus</b> attack damage permanently and sets the <b>current</b> cooldown of your ultimate ability to 0.5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 60,
    lethality: 15,
    percentMovespeed: 8
  }
}
export default item