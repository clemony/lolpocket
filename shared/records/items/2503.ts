const item: Item = {
  id: 2503,
  name: 'Blackfire Torch',
  nicknames: ['bft'],
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200,
    },
    {
      id: 2508,
      name: 'Fated Ashes',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2503_blackfiretorch64.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Baleful Blaze',
      effects:
        'Dealing ability damage burns enemies, causing them to take 10 (+1% AP) magic damage every 0.5 seconds over 3 seconds, for a total of 60 magic damage (+6% AP). Against monsters, the burn deals 10 <b>bonus</b> magic damage per tick, dealing a total of 20 (+1% AP) magic damage per tick for up to 120 magic damage (+6% AP).',
      unique: true,
    },
    {
      name: 'Blackfire',
      effects:
        'For each champion, epic monster, and large monster afflicted with <i>Baleful Blaze\'s</i> burn, increase your ability power by 4%.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 700,
      sell: 1120,
      total: 2800,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 80,
    mana: 600,
  },
}
export default item
