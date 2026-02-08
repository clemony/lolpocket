// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2525,
  name: 'Protoplasm Harness',
  description: '600 Health\n15 Ability Haste\n\nLifeline (0s)\nTaking damage that would reduce your Health below 30% causes you to gain  maximum Health for 5 seconds, then heal  Health over the duration. While regenerating Health, you gain 15% increased Size, 10% Move Speed, and 25% Tenacity. ',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    }
  ],
  gold: {
    base: 800,
    sell: 1750,
    total: 2500
  },
  maps: [
    11,
    12,
    21
  ],
  passives: [
    {
      name: 'Lifeline',
      effects: 'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, gain 200 <b>bonus</b> health for 5 seconds and <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal yourself for 200 – 400 (based on level) (+250% <b>bonus</b> armor) (+250% <b>bonus</b> magic resistance) over the same duration, during which you also gain 15% increased size, 10% <b>bonus</b> movement speed, and 25% <img src="/img/icons/tenacity.webp" class="tip-icon light:invert" />tenacity.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    health: 600
  }
}
export default item