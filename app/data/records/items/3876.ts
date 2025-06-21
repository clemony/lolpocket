const item: Item = {
  name: 'Solstice Sleigh',
  id: 3876,
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
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3876_solticesleigh.png',
  passives: [
    {
      name: 'Going Sledding',
      unique: true,
      effects: '<img src="/img/icons/slow.webp" class="tip-icon" />Slowing or <img src="/img/icons/immobilize.webp" class="tip-icon" />immobilizing an enemy champion causes you and the most wounded allied champion within 1500 units to gain 20% <b>bonus</b> movement speed decaying over 2.5 seconds and 50 – 230 (based on your level) hp <b>bonus</b> health for 2.5 seconds.',
      cooldown: '30',
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