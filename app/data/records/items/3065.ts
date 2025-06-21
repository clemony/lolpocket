const item: Item = {
  name: 'Spirit Visage',
  id: 3065,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250,
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3065_tank_t3_spiritvisage.png',
  simpleDescription: 'Increases Health and healing effects',
  nicknames: [
    'sv',
  ],
  passives: [
    {
      name: 'Boundless Vitality',
      unique: true,
      effects: 'Increases all <img src="/img/icons/heal.webp" class="tip-icon" />healing and <img src="/img/icons/shield.webp" class="tip-icon" />shielding received as well as <img src="/img/icons/health-regeneration.webp" class="tip-icon" />health regeneration by 25%.',
    },
  ],
  stats: {
    health: 400,
    healthRegen: 100,
    magicResistance: 50,
    abilityHaste: 10,
  },
  shop: {
    prices: {
      total: 2700,
      combined: 650,
      sell: 1080,
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