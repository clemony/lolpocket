const item: Item = {
  name: 'Oblivion Orb',
  id: 3916,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
  ],
  buildsInto: [
    {
      id: 223011,
      name: 'Chemtech Putrifier',
      gold: 1900,
    },
    {
      id: 3011,
      name: 'Chemtech Putrifier',
      gold: 1900,
    },
    {
      id: 3165,
      name: 'Morellonomicon',
      gold: 2850,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3916_mage_t2_oblivionorb.png',
  simpleDescription: 'Increases magic damage',
  nicknames: [
    'grievous',
  ],
  passives: [
    {
      name: 'Grievous Wounds',
      unique: true,
      effects: 'Dealing magic damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
    },
  ],
  stats: {
    abilityPower: 25,
  },
  shop: {
    prices: {
      total: 800,
      combined: 400,
      sell: 320,
    },
    tags: [
      'MAGE',
      'SUPPORT',
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