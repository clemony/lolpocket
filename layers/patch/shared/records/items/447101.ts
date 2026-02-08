// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447101,
  name: 'Gambler\'s Blade',
  description: '70% Attack Speed\n40 Ability Haste\n8% Move Speed\n\nMoney In The Bank\nYour Attacks and Abilities have a 12% chance to bank between 30 and 245 Gold when they hit an enemy. On Round Win, cash out. On Round Lose, lose 25% of your bank.',
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
      name: 'Money In The Bank',
      effects: 'Basic attacks on-hit and ability hits have a 12% chance to store between <img src="/img/icons/gold-coin.webp" class="inline-icon" />30 and 240 gold (2.5-second cooldown per attack/ability). If you win the round, gain <img src="/img/icons/gold-coin.webp" class="inline-icon" />gold equal to the stored amount, otherwise lose 25% of it.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 40,
    attackSpeed: 70,
    percentMovespeed: 8
  }
}
export default item