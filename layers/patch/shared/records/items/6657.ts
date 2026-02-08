// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6657,
  name: 'Rod of Ages',
  nicknames: [
    'RoA'
  ],
  description: '45 Ability Power\n350 Health\n500 Mana\n\nTimeless\nThis item gains 10 Health, 30 Mana and 3 Ability Power every 60 seconds up to 10 times. Upon reaching max stacks, gain a level.\n\nEternity\nTaking damage from champions restores 10% of the damage as Mana. \nCasting an ability heals for 25% of Mana spent.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 3803,
      name: 'Catalyst of Aeons',
      gold: 1300
    }
  ],
  gold: {
    base: 450,
    sell: 1820,
    total: 2600
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Timeless',
      effects: 'This item gains 10 <b>bonus</b> health, 30 <b>bonus</b> mana, and 3 ability power every minute, up to 10 times, for a maximum of 100 <b>bonus</b> health, 300 <b>bonus</b> mana, and 30 ability power. Upon reaching maximum stacks, gain a level that preserves your current experience (cap remains at level 18).',
      mythic: false,
      unique: true
    },
    {
      name: 'Eternity',
      effects: 'Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 45,
    health: 350,
    mana: 500
  }
}
export default item