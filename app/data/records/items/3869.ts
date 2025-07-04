const item: Item = {
  name: 'Celestial Opposition',
  id: 3869,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3867,
      name: 'Bounty of Worlds',
      gold: 400,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3869_celestialopposition.png',
  passives: [
    {
      name: 'Blessing of the Mountain',
      unique: true,
      effects: 'Become <i>Blessed</i> to reduce incoming champion damage by (<img src="/img/icons/melee.webp" class="inline-icon" />35% /<img src="/img/icons/ranged.webp" class="inline-icon" />25%), lingering for 2 seconds after taking damage from a champion. After the linger ends, you lose <i>Blessed</i> to unleash a shockwave around you that <img src="/img/icons/slow.webp" class="tip-icon" />slows enemies within 500 units by 50% for 1.5 seconds (18 second cooldown, timer restarts upon taking damage from champions).',
    },
    {
      unique: true,
      effects: 'Receives diminishing gold from excessive minion kills.',
    },
  ],
  active: [
    {
      name: 'Ward',
      unique: true,
      effects: 'Consumes a charge to place a <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area. Charges refill upon visiting the shop.',
      range: 600,
    },
  ],
  stats: {
    goldPer10: 5,
    health: 200,
    healthRegen: 75,
    manaRegen: 75,
  },
  shop: {
    prices: {
      total: 400,
      combined: 0,
      sell: 160,
    },
    tags: [
      'SUPPORT',
    ],
  },
  maps: [
    11,
  ],
}
export default item