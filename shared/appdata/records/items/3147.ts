const item: Item = {
  name: 'Haunting Guise',
  id: 3147,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 6653,
      name: 'Liandry\'s Torment',
      gold: 3000
    },
    {
      id: 4633,
      name: 'Riftmaker',
      gold: 3100
    },
    {
      id: 8010,
      name: 'Bloodletter\'s Curse',
      gold: 2900
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3147_hauntingguise.png',
  simpleDescription: 'Deals additional physical damage when ambushing enemies',
  nicknames: [
    'mask'
  ],
  passives: [
    {
      name: 'Madness',
      unique: false,
      effects: 'For each second in combat with enemy champions, deal 2% increased damage, stacking up to 3 times for a total of 6%.'
    }
  ],
  stats: {
    abilityPower: 30,
    health: 200
  },
  shop: {
    prices: {
      total: 1300,
      combined: 500,
      sell: 520
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