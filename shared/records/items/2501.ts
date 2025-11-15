const item: Item = {
  id: 2501,
  name: 'Overlord\'s Bloodmail',
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7111_overlordsbloodmail.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Tyranny',
      effects:
        'Gain <b>bonus</b> attack damage equal to 2.5% <b>bonus</b> health.',
      unique: true,
    },
    {
      name: 'Retribution',
      effects:
        'Gain <b>bonus</b> attack damage equal to 0% – 70% (based on missing health) of your <b>total</b> attack damage from other sources.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 1320,
      total: 3300,
    },
    tags: ['FIGHTER', 'TANK'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 30,
    health: 550,
  },
}
export default item
