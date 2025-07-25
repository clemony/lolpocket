const item: Item = {
  name: 'Imperial Mandate',
  id: 4005,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4005_enchanter_t4_imperialmandate.png',
  simpleDescription: 'Defer damage until later.',
  nicknames: [
    'banner of command',
    'flag',
  ],
  passives: [
    {
      name: 'Coordinated Fire',
      unique: true,
      effects: 'Abilities that <img src="/img/icons/slow.webp" class="tip-icon" />slow or <img src="/img/icons/immobilize.webp" class="tip-icon" />immobilize enemy champions mark them for 5 seconds. Allied champions that damage marked enemies consume the mark to deal 10% of the target\'s <b>current</b> health <b>bonus</b> magic damage (9 second cooldown per target, starts upon mark application).',
    },
  ],
  stats: {
    abilityPower: 60,
    manaRegen: 125,
    abilityHaste: 20,
  },
  shop: {
    prices: {
      total: 2250,
      combined: 500,
      sell: 900,
    },
    tags: [
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