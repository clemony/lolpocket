const item: Item = {
  id: 3116,
  name: 'Rylai\'s Crystal Scepter',
  nicknames: ['rylais'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3116_mage_t3_rylajscrystalscepter.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Rimefrost',
      effects:
        'Dealing ability damage <img src="/img/icons/slow.webp" class="tip-icon" />slows affected units by 30% for 1 second.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1040,
      total: 2600,
    },
    tags: ['MAGE'],
  },
  simpleDescription: 'Abilities slow enemies',
  specialRecipe: 0,
  stats: {
    abilityPower: 65,
    health: 400,
  },
}
export default item
