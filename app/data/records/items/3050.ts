const item: Item = {
  name: 'Zeke\'s Convergence',
  id: 3050,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3050_enchanter_t3_zekesconvergence.png',
  simpleDescription: 'Grants you and your ally bonuses when you cast your ultimate.',
  nicknames: [
    'haroldandkumar',
  ],
  passives: [
    {
      name: 'Frostfire Tempest',
      unique: true,
      effects: 'Upon casting your ultimate ability, you summon a storm of flame and ice around you for 5 seconds, dealing 7.5 magic damage every 0.25 seconds to enemies within 350 units and <img src="/img/icons/slow.webp" class="tip-icon" />slowing them by 30% (45 second cooldown, starts on ultimate cast).',
    },
  ],
  stats: {
    armor: 25,
    health: 300,
    magicResistance: 25,
    abilityHaste: 10,
  },
  shop: {
    prices: {
      total: 2200,
      combined: 700,
      sell: 880,
    },
    tags: [
      'TANK',
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