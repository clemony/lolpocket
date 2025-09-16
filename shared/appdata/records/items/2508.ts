const item: Item = {
  name: 'Fated Ashes',
  id: 2508,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
  ],
  buildsInto: [
    {
      id: 6653,
      name: 'Liandry\'s Torment',
      gold: 3000,
    },
    {
      id: 2503,
      name: 'Blackfire Torch',
      gold: 2800,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2508_fatedashes64.png',
  passives: [
    {
      name: 'Inflame',
      unique: true,
      effects:
        'Dealing ability damage burns enemies, causing them to take 2.5 magic damage every 0.5 seconds over 3 seconds, for a total of 15 magic damage. Against monsters, the burn deals 7.5 <b>bonus</b> magic damage per tick, dealing a total of 10 magic damage per tick for up to 60 magic damage.',
    },
  ],
  stats: {
    abilityPower: 30,
  },
  shop: {
    prices: {
      total: 900,
      combined: 500,
      sell: 360,
    },
    tags: ['MAGE'],
  },
  maps: [11, 12, 21, 35],
}
export default item
