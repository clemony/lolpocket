// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1054,
  name: 'Doran\'s Shield',
  nicknames: [
    'dshield'
  ],
  description: '110 Health\n\nEnduring Focus\nRestore 4 Health every 5 seconds. \nAfter taking damage from a champion, restore Health over 8 seconds.\n\nHelping Hand\nAttacks deal 5 bonus physical damage to minions.',
  noEffects: false,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 450,
    sell: 180,
    total: 450
  },
  maps: [
    11,
    12,
    21
  ],
  passives: [
    {
      name: 'Enduring Focus',
      effects: 'After taking damage from a champion, gain <b>bonus</b> health regeneration per second equal to (<img src="/img/icons/melee.webp" class="inline-icon" />0 – 5 /<img src="/img/icons/ranged.webp" class="inline-icon" />0 – 3.75) health for 8 seconds, refreshing on subsequent champion damage taken. Area of effect, damage over time, or proc damage taken trigger this effect with the <img src="/img/icons/ranged.webp" class="tip-icon " />ranged values.',
      mythic: false,
      unique: true
    },
    {
      name: 'Helping Hand',
      effects: 'Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    health: 110,
    healthRegen: 4
  }
}
export default item