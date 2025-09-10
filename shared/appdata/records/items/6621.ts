const item: Item = {
  name: 'Dawncore',
  id: 6621,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6621_dawncore.png',
  passives: [
    {
      name: 'First Light',
      unique: true,
      effects: 'Gain 2% heal and shield power hsp and 10 ability power for every additional 100% <b>base</b> mana regeneration.'
    }
  ],
  stats: {
    abilityPower: 45,
    healAndShieldPower: 16,
    manaRegen: 100
  },
  shop: {
    prices: {
      total: 2500,
      combined: 450,
      sell: 1000
    },
    tags: [
      'SUPPORT'
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