const item: Item = {
  name: 'Banshee\'s Veil',
  id: 3102,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200,
    },
    {
      id: 4632,
      name: 'Verdant Barrier',
      gold: 1600,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3102_mage_t3_bansheesveil.png',
  simpleDescription: 'Periodically blocks enemy abilities',
  nicknames: [
    'bv',
    'spellshield',
  ],
  passives: [
    {
      name: 'Annul',
      unique: true,
      effects: 'Grants a <img src="/img/icons/spell-shield.webp" class="tip-icon" />spell shield that blocks the next hostile ability (40 second cooldown, timer restarts upon taking damage from champions).',
    },
  ],
  stats: {
    abilityPower: 105,
    magicResistance: 40,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 200,
      sell: 1200,
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