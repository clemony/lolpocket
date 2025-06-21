const item: Item = {
  name: 'Serylda\'s Grudge',
  id: 6694,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
    {
      id: 3035,
      name: 'Last Whisper',
      gold: 1450,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6694_assasin_t3_seryldasgrudge.png',
  passives: [
    {
      name: 'Bitter Cold',
      unique: true,
      effects: 'Dealing ability damage to an enemy that is at or below 50% of their <b>maximum</b> health <img src="/img/icons/slow.webp" class="tip-icon" />slows them by 30% for 1 second.',
    },
  ],
  stats: {
    armorPenetration: 35,
    attackDamage: 45,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 500,
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