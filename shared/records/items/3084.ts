const item: Item = {
  id: 3084,
  name: 'Heartsteel',
  buildsFrom: [
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
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3084_tank_t4_heartsteel.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Colossal Consumption',
      effects:
        'While within 700 units of an enemy champion, generate a stack on them each second, stacking up to 3 times. Your next basic attack against a target with 3 stacks is empowered to consume them all to deal 70 physical damage (+6% <b>maximum</b> health) <b>bonus</b> physical damage on-hit and grant you permanent <b>bonus</b> health equal to 8% of that amount (30 second cooldown per target).',
      unique: true,
    },
    {
      name: 'Goliath',
      effects: 'Gain 0% – 30% (based on maximum health) hp increased size.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 400,
      sell: 1200,
      total: 3000,
    },
    tags: ['TANK'],
  },
  simpleDescription: 'Restores Health on kill or assist',
  specialRecipe: 0,
  stats: {
    health: 900,
    healthRegen: 100,
  },
}
export default item
