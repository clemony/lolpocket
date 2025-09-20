const item: Item = {
  id: 3036,
  name: 'Lord Dominik\'s Regards',
  nicknames: ['lw', 'ldr', 'doms'],
  buildsFrom: [
    {
      id: 3035,
      name: 'Last Whisper',
      gold: 1450,
    },
    {
      id: 6670,
      name: 'Noonquiver',
      gold: 1300,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3036_marksman_t3_dominikregards.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 350,
      sell: 1240,
      total: 3100,
    },
    tags: ['MARKSMAN'],
  },
  simpleDescription: 'Overcomes enemies with high health and armor',
  specialRecipe: 0,
  stats: {
    armorPenetration: 40,
    attackDamage: 35,
    criticalStrikeChance: 25,
  },
}
export default item
