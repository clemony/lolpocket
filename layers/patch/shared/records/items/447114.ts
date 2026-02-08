// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447114,
  name: 'Reverberation',
  description: '35 Armor\n35 Magic Resist\n40% Attack Speed\n\nReverberate\nAt combat start gain 50 max Health per 10% bonus Attack Speed.\n\nResonate\nAttacks deal  magic damage On-Hit.\n\nRumble\nImmobilizing or Grounding an enemy champion grants 25 stacks for 10 seconds. While at 100 stacks, Immobilizing an enemy champion applies On-Hit effects 3 times.',
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
      name: 'Reverberate',
      effects: 'After 2 seconds from the start of the combat phase in each round, gain 5 <b>bonus</b> health per 1% <b>bonus</b> attack speed.',
      mythic: false,
      unique: true
    },
    {
      name: 'Resonate',
      effects: 'Basic attacks <img src="/img/icons/on-hit.webp" class="tip-icon " />on-hit deal 10 magic damage (+2% of your <b>bonus</b> health) <b>bonus</b> magic damage.',
      mythic: false,
      unique: true
    },
    {
      name: 'Rumble',
      effects: '<img src="/img/icons/immobilize.webp" class="tip-icon " />Immobilizing an enemy champion generates 25 stacks of <i>Reverberation</i> for 10 seconds, stacking up to 100 times and refreshing <img src="/img/icons/on-hit.webp" class="tip-icon " />on-hit as well as on subsequent immobilizations. At <b>maximum</b> stacks and upon <img src="/img/icons/immobilize.webp" class="tip-icon " />immobilizing an enemy, your on-hit effects are applied to them 3 times.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 35,
    attackSpeed: 40,
    magicResistance: 35
  }
}
export default item