const item: Item = {
  id: 3065,
  name: 'Spirit Visage',
  nicknames: ['sv'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3065_tank_t3_spiritvisage.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Boundless Vitality',
      effects:
        'Increases all <img src="/img/icons/heal.webp" class="tip-icon" />healing and <img src="/img/icons/shield.webp" class="tip-icon" />shielding received as well as <img src="/img/icons/health-regeneration.webp" class="tip-icon" />health regeneration by 25%.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 650,
      sell: 1080,
      total: 2700,
    },
    tags: ['TANK'],
  },
  simpleDescription: 'Increases Health and healing effects',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    health: 400,
    healthRegen: 100,
    magicResistance: 50,
  },
}
export default item
