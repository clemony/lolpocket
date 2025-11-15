const item: Item = {
  id: 3916,
  name: 'Oblivion Orb',
  nicknames: ['grievous'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3916_mage_t2_oblivionorb.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Grievous Wounds',
      effects:
        'Dealing magic damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 400,
      sell: 320,
      total: 800,
    },
    tags: ['MAGE', 'SUPPORT'],
  },
  simpleDescription: 'Increases magic damage',
  specialRecipe: 0,
  stats: {
    abilityPower: 25,
  },
}
export default item
