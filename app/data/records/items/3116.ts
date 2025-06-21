const item: Item = {
  name: 'Rylai\'s Crystal Scepter',
  id: 3116,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900,
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3116_mage_t3_rylajscrystalscepter.png',
  simpleDescription: 'Abilities slow enemies',
  nicknames: [
    'rylais',
  ],
  passives: [
    {
      name: 'Rimefrost',
      unique: true,
      effects: 'Dealing ability damage <img src="/img/icons/slow.webp" class="tip-icon" />slows affected units by 30% for 1 second.',
    },
  ],
  stats: {
    abilityPower: 65,
    health: 400,
  },
  shop: {
    prices: {
      total: 2600,
      combined: 450,
      sell: 1040,
    },
    tags: [
      'MAGE',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item