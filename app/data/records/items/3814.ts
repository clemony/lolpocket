const item: Item = {
  name: 'Edge of Night',
  id: 3814,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000,
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3814_assassin_t3_edgeofnight.png',
  simpleDescription: 'Periodically blocks enemy abilities',
  nicknames: [
    'eon',
    'spellshield',
    'spell shield',
  ],
  passives: [
    {
      name: 'Annul',
      unique: true,
      effects: 'Grants a <img src="/img/icons/spell-shield.webp" class="tip-icon" />spell shield that blocks the next hostile ability (40 second cooldown, timer restarts upon taking damage from champions).',
    },
  ],
  stats: {
    attackDamage: 50,
    health: 250,
    lethality: 15,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 850,
      sell: 1200,
    },
    tags: [
      'ASSASSIN',
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