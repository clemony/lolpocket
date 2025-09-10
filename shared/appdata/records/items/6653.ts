const item: Item = {
  name: 'Liandry\'s Torment',
  id: 6653,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3147,
      name: 'Haunting Guise',
      gold: 1300
    },
    {
      id: 2508,
      name: 'Fated Ashes',
      gold: 900
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6653_mage_t4_liandrysanguish.png',
  simpleDescription: 'Charge up in combat to deal high damage over time, especially against durable enemies',
  nicknames: [
    'last shadow',
    'ls'
  ],
  passives: [
    {
      name: 'Torment',
      unique: true,
      effects: 'Dealing ability damage burns enemies, causing them to take 1% of the target\'s <b>maximum</b> health magic damage every 0.5 seconds over 3 seconds, capped at 20 per tick against monsters.'
    },
    {
      name: 'Suffering',
      unique: true,
      effects: 'For each second in combat with enemy champions, deal 2% increased damage, stacking up to 3 times for a total of 6%.'
    }
  ],
  stats: {
    abilityPower: 60,
    health: 300
  },
  shop: {
    prices: {
      total: 3000,
      combined: 800,
      sell: 1200
    },
    tags: [
      'MAGE'
    ]
  },
  maps: [
    11,
    12,
    21,
    35
  ]
}
export default item