const item: Item = {
  name: 'Hextech Rocketbelt',
  id: 3152,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3145,
      name: 'Hextech Alternator',
      gold: 1100,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3152_mage_t4_hextechrocketbelt.png',
  simpleDescription: 'Activate to dash forward and unleash a fiery explosion',
  nicknames: [
    'protobelt',
    'rocket belt',
  ],
  active: [
    {
      name: 'Supersonic',
      unique: true,
      effects: '<img src="/img/icons/dash.webp" class="tip-icon" />Dash 125 to 275 units in the target direction, though not through terrain, unleashing an arc of 7 rockets in the same direction that deal 100 (+10% AP) magic damage to enemies hit.',
    },
  ],
  stats: {
    abilityPower: 70,
    health: 300,
    abilityHaste: 20,
  },
  shop: {
    prices: {
      total: 2650,
      combined: 300,
      sell: 1060,
    },
    tags: [
      'MAGE',
      'MOVEMENT',
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