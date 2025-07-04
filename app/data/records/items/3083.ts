const item: Item = {
  name: 'Warmog\'s Armor',
  id: 3083,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900,
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900,
    },
    {
      id: 3801,
      name: 'Crystalline Bracer',
      gold: 800,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3083_tank_t3_warmogs.png',
  simpleDescription: 'Grants massive Health and Health Regen',
  passives: [
    {
      unique: true,
      effects: 'Grants <i>Warmog\'s Heart</i> if you have at least 2000 <b>bonus</b> health.',
    },
    {
      name: 'Warmog\'s Heart',
      unique: true,
      effects: '<img src="/img/icons/health-regeneration.webp" class="tip-icon" />Health regeneration 1.5% <b>maximum</b> health every 0.5 seconds if damage has not been taken in the last 8 seconds (3 seconds for damage from non-champions).',
    },
    {
      name: 'Warmog\'s Vitality',
      unique: true,
      effects: 'Gain <b>bonus</b> health equal to 12% <b>bonus</b> health <b>from items</b>.',
    },
  ],
  stats: {
    health: 1000,
    healthRegen: 100,
  },
  shop: {
    prices: {
      total: 3100,
      combined: 500,
      sell: 1240,
    },
    tags: [
      'TANK',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item