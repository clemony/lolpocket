const item: Item = {
  id: 3814,
  name: 'Edge of Night',
  nicknames: ['eon', 'spellshield', 'spell shield'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3814_assassin_t3_edgeofnight.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Annul',
      effects:
        'Grants a <img src="/img/icons/spell-shield.webp" class="tip-icon" />spell shield that blocks the next hostile ability (40 second cooldown, timer restarts upon taking damage from champions).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 850,
      sell: 1200,
      total: 3000,
    },
    tags: ['ASSASSIN'],
  },
  simpleDescription: 'Periodically blocks enemy abilities',
  specialRecipe: 0,
  stats: {
    attackDamage: 50,
    health: 250,
    lethality: 15,
  },
}
export default item
