const item: Item = {
  id: 2065,
  name: 'Shurelya\'s Battlesong',
  nicknames: ['shurelya', 'reverie'],
  active: [
    {
      name: 'Inspiring Speech',
      effects:
        'Grants you and all allies within 1000 units 30% <b>bonus</b> movement speed for 4 seconds.',
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900,
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2065_tank_t4_shurelyasbattlesong.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 400,
      sell: 880,
      total: 2200,
    },
    tags: ['SUPPORT', 'MOVEMENT'],
  },
  simpleDescription: 'Activate to speed up nearby allies.',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 50,
    manaRegen: 125,
    percentMovespeed: 4,
  },
}
export default item
