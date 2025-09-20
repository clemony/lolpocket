const item: Item = {
  id: 3050,
  name: 'Zeke\'s Convergence',
  nicknames: ['haroldandkumar'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3050_enchanter_t3_zekesconvergence.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Frostfire Tempest',
      effects:
        'Upon casting your ultimate ability, you summon a storm of flame and ice around you for 5 seconds, dealing 7.5 magic damage every 0.25 seconds to enemies within 350 units and <img src="/img/icons/slow.webp" class="tip-icon" />slowing them by 30% (45 second cooldown, starts on ultimate cast).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 700,
      sell: 880,
      total: 2200,
    },
    tags: ['TANK', 'SUPPORT'],
  },
  simpleDescription:
    'Grants you and your ally bonuses when you cast your ultimate.',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 25,
    health: 300,
    magicResistance: 25,
  },
}
export default item
