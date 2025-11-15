const item: Item = {
  id: 3089,
  name: 'Rabadon\'s Deathcap',
  nicknames: ['banksys', 'dc', 'dcap', 'hat'],
  buildsFrom: [
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200,
    },
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3089_mage_t3_deathcap.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Magical Opus',
      effects: 'Increase your ability power by 30%.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 1100,
      sell: 1400,
      total: 3500,
    },
    tags: ['MAGE'],
  },
  simpleDescription: 'Massively increases Ability Power',
  specialRecipe: 0,
  stats: {
    abilityPower: 130,
  },
}
export default item
