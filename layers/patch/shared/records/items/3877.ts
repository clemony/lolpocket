// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3877,
  name: 'Bloodsong',
  nicknames: [
    'Spellblade'
  ],
  description: '200 Health\n75% Base Health Regen\n75% Base Mana Regen\n9 Gold Per 10 Seconds\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus physical damage On-Hit. If the target is a champion, they take increased damage for 4 seconds.Active (4 charges)\nPlaces an Invisible Stealth Ward that grants vision.',
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
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds deals 100% <b>base</b> AD <b>bonus</b> physical damage on-hit. If the target is a champion, inflict them with <i>Expose Weakness</i> for 4 seconds, causing them to take (<img src="/img/icons/melee.webp" class="inline-icon" />8% /<img src="/img/icons/ranged.webp" class="inline-icon" />5%) increased damage from all sources (1.5 second cooldown, starts after using the empowered attack).',
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