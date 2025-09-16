const item: Item = {
  name: 'Lost Chapter',
  id: 3802,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
    {
      id: 1027,
      name: 'Sapphire Crystal',
      gold: 300,
    },
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 323003,
      name: 'Archangel\'s Staff',
      gold: 2900,
    },
    {
      id: 3003,
      name: 'Archangel\'s Staff',
      gold: 2900,
    },
    {
      id: 3118,
      name: 'Malignance',
      gold: 2700,
    },
    {
      id: 2503,
      name: 'Blackfire Torch',
      gold: 2800,
    },
    {
      id: 4644,
      name: 'Crown of the Shattered Queen',
      gold: 2865,
    },
    {
      id: 6655,
      name: 'Luden\'s Companion',
      gold: 2750,
    },
    {
      id: 6656,
      name: 'Everfrost',
      gold: 2865,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3802_mage_tier2_lostchapter.png',
  simpleDescription: 'Restores Mana upon levelling up.',
  nicknames: ['book'],
  passives: [
    {
      name: 'Enlighten',
      unique: true,
      effects:
        'Upon leveling up, restores 20% of <b>maximum</b> mana over 3 seconds.',
    },
  ],
  stats: {
    abilityPower: 40,
    mana: 300,
    abilityHaste: 10,
  },
  shop: {
    prices: {
      total: 1200,
      combined: 250,
      sell: 480,
    },
    tags: ['MAGE'],
  },
  maps: [11, 12, 21, 35],
}
export default item
