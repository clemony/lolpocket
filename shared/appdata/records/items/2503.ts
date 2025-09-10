const item: Item = {
  name: 'Blackfire Torch',
  id: 2503,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2503_blackfiretorch64.png',
  nicknames: [
    'bft'
  ],
  passives: [
    {
      name: 'Baleful Blaze',
      unique: true,
      effects: 'Dealing ability damage burns enemies, causing them to take 10 (+1% AP) magic damage every 0.5 seconds over 3 seconds, for a total of 60 magic damage (+6% AP). Against monsters, the burn deals 10 <b>bonus</b> magic damage per tick, dealing a total of 20 (+1% AP) magic damage per tick for up to 120 magic damage (+6% AP).'
    },
    {
      name: 'Blackfire',
      unique: true,
      effects: 'For each champion, epic monster, and large monster afflicted with <i>Baleful Blaze\'s</i> burn, increase your ability power by 4%.'
    }
  ],
  stats: {
    abilityPower: 80,
    mana: 600,
    abilityHaste: 20
  },
  shop: {
    prices: {
      total: 2800,
      combined: 700,
      sell: 1120
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