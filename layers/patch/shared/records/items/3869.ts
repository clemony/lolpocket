// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3869,
  name: 'Celestial Opposition',
  description: '200 Health\n75% Base Health Regen\n75% Base Mana Regen\n9 Gold Per 10 Seconds\n\nBlessing of the Mountain\nReduce incoming champion damage for 2 seconds after taking damage from a champion. When the effect ends, slow nearby enemies by 50% for 1.5 seconds.\nActive (4 charges)\nPlaces an Invisible Stealth Ward that grants vision.',
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
      name: 'Blessing of the Mountain',
      effects: 'Become <i>Blessed</i> to reduce incoming champion damage by (<img src="/img/icons/melee.webp" class="inline-icon" />35% /<img src="/img/icons/ranged.webp" class="inline-icon" />25%), lingering for 2 seconds after taking damage from a champion. After the linger ends, you lose <i>Blessed</i> to unleash a shockwave around you that <img src="/img/icons/slow.webp" class="tip-icon " />slows enemies within 500 units by 50% for 1.5 seconds (18 second cooldown, timer restarts upon taking damage from champions).',
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