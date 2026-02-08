// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3803,
  name: 'Catalyst of Aeons',
  nicknames: [
    'protector'
  ],
  description: '300 Health\n375 Mana\n\nEternity\nRestores 10% of the damage taken from champions as Mana. \nCasting an Ability heals for 25% of Mana spent.',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 1027,
      name: 'Sapphire Crystal',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 326657,
      name: 'Rod of Ages',
      gold: 2600
    },
    {
      id: 4402,
      name: 'Innervating Locket',
      gold: 2950
    },
    {
      id: 6657,
      name: 'Rod of Ages',
      gold: 2600
    }
  ],
  gold: {
    base: 200,
    sell: 910,
    total: 1300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Eternity',
      effects: 'Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    health: 300,
    mana: 375
  }
}
export default item