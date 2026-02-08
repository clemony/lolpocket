// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3876,
  name: 'Solstice Sleigh',
  description: '200 Health\n75% Base Health Regen\n75% Base Mana Regen\n9 Gold Per 10 Seconds\n\nGoing Sledding\nSlowing or Immobilizing an enemy champion near allies restores Health and grants 20% decaying Move Speed for 2.5 seconds to you and a nearby ally. Active (4 charges)\nPlaces an Invisible Stealth Ward that grants vision.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Ward',
      effects: 'Consumes a charge to place a <img src="/img/icons/stealth-ward.webp" class="tip-icon " />Stealth Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon light:invert" />sight of the surrounding area. Charges refill upon visiting the shop.',
      range: 600,
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3867,
      name: 'Bounty of Worlds',
      gold: 400
    }
  ],
  gold: {
    base: 0,
    sell: 160,
    total: 400
  },
  maps: [
    11
  ],
  passives: [
    {
      name: 'Going Sledding',
      cooldown: '30',
      effects: '<img src="/img/icons/slow.webp" class="tip-icon " />Slowing or <img src="/img/icons/immobilize.webp" class="tip-icon " />immobilizing an enemy champion causes you and the most wounded allied champion within 1500 units to gain 20% <b>bonus</b> movement speed decaying over 2.5 seconds and 50 – 230 (based on your level) hp <b>bonus</b> health for 2.5 seconds.',
      mythic: false,
      unique: true
    },
    {
      effects: 'Receives diminishing gold from excessive minion kills.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  }
}
export default item