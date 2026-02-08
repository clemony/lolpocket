// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447110,
  name: 'Moonflair Spellblade',
  description: '85 Ability Power\n400 Health\n30% Tenacity\n\nRelentless\nWhen you use an Ability, reset your auto attack timer and gain 90% Attack Speed for your next 2 Attacks.\n\nWhen you Attack, reduce your Ability Cooldowns by 0.5 seconds.',
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
      name: 'Relentless',
      effects: 'Casting an ability <img src="/img/icons/basic-attack-reset.webp" class="tip-icon " />resets your basic attack timer and empowers your next two basic attacks with 90% <b>bonus</b> attack speed. Additionally, each basic attack on-attack reduces the cooldowns of all your abilities by 0.5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 85,
    health: 400,
    tenacity: 30
  }
}
export default item