const item: Item = {
  name: 'Warden\'s Mail',
  id: 3082,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 3110,
      name: 'Frozen Heart',
      gold: 2500,
    },
    {
      id: 323110,
      name: 'Frozen Heart',
      gold: 2700,
    },
    {
      id: 3143,
      name: 'Randuin\'s Omen',
      gold: 2700,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3082_tank_t2_wardensmail.png',
  passives: [
    {
      name: 'Rock Solid',
      unique: true,
      effects: 'Every first incoming instance of post-mitigation <img src="/img/icons/basic-damage.webp" class="tip-icon" />basic damage per cast instance is reduced by 15, with a <b>maximum</b> of 20% reduction each.',
    },
  ],
  stats: {
    armor: 40,
  },
  shop: {
    prices: {
      total: 1000,
      combined: 400,
      sell: 400,
    },
    tags: [
      'TANK',
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