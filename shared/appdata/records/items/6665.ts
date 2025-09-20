const item: Item = {
  id: 6665,
  name: 'Jak\'Sho, The Protean',
  buildsFrom: [
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900,
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800,
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6665_tank_t4_jakshotheprotean.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Voidborn Resilience',
      effects:
        'Gain a stack for each second in combat with enemy champions, stacking up to 5 times. At <b>maximum</b> stacks, increase your <b>bonus</b> armor and <b>bonus</b> magic resistance by 30% until the end of combat.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 650,
      sell: 1280,
      total: 3200,
    },
    tags: ['TANK'],
  },
  specialRecipe: 0,
  stats: {
    armor: 45,
    health: 350,
    magicResistance: 45,
  },
}
export default item
