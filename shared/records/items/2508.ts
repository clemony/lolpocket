const item: Item = {
  id: 2508,
  name: 'Fated Ashes',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2508_fatedashes64.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Inflame',
      effects:
        'Dealing ability damage burns enemies, causing them to take 2.5 magic damage every 0.5 seconds over 3 seconds, for a total of 15 magic damage. Against monsters, the burn deals 7.5 <b>bonus</b> magic damage per tick, dealing a total of 10 magic damage per tick for up to 60 magic damage.',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 360,
      total: 900,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityPower: 30,
  },
}
export default item
