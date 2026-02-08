// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443061,
  name: 'Force Of Entropy',
  description: '900 Health\n30 Ability Haste\n25% Critical Strike Chance\n\nAtrophy\nImmobilizing Crowd Control effects you apply roll your Critical Chance to increase their duration by 0.25 +33% seconds.',
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
      name: 'Atrophy',
      effects: '<img src="/img/icons/immobilize.webp" class="tip-icon " />Immobilizing effects against <img src="/img/icons/champions.webp" class="tip-icon " />champions have a 0% – 100% (based on critical strike chance) chance to increase in duration by 0.25 seconds (+33% of immobilizing effect\'s duration).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 30,
    criticalStrikeChance: 25,
    health: 900
  }
}
export default item