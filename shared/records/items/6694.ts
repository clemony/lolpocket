const item: Item = {
  id: 6694,
  name: 'Serylda\'s Grudge',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6694_assasin_t3_seryldasgrudge.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Bitter Cold',
      effects:
        'Dealing ability damage to an enemy that is at or below 50% of their <b>maximum</b> health <img src="/img/icons/slow.webp" class="tip-icon" />slows them by 30% for 1 second.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 1200,
      total: 3000,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    armorPenetration: 35,
    attackDamage: 45,
  },
}
export default item
