// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3869,
  name: 'Celestial Opposition',
  active: [
    {
      name: 'Ward',
      effects: 'Consumes a charge to place a <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area. Charges refill upon visiting the shop.',
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
  description: '200 Health\n75% Base Health Regen\n75% Base Mana Regen\n9 Gold Per 10 Seconds\n\nBlessing of the Mountain\nReduce incoming champion damage for 2 seconds after taking damage from a champion. When the effect ends, slow nearby enemies by 50% for 1.5 seconds.\nActive (4 charges)\nPlaces an Invisible Stealth Ward that grants vision.',
  gold: {
    base: 0,
    sell: 160,
    total: 400
  },
  maps: [
    11
  ],
  noEffects: false,
  passives: [
    {
      name: 'Blessing of the Mountain',
      effects: 'Become <i>Blessed</i> to reduce incoming champion damage by (<img src="/img/icons/melee.webp" class="inline-icon" />35% /<img src="/img/icons/ranged.webp" class="inline-icon" />25%), lingering for 2 seconds after taking damage from a champion. After the linger ends, you lose <i>Blessed</i> to unleash a shockwave around you that <img src="/img/icons/slow.webp" class="tip-icon" />slows enemies within 500 units by 50% for 1.5 seconds (18 second cooldown, timer restarts upon taking damage from champions).',
      mythic: false,
      unique: true
    },
    {
      effects: 'Receives diminishing gold from excessive minion kills.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  }
}
export default item