const item: Item = {
  name: 'Hubris',
  id: 6697,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6697_hubris.png',
  passives: [
    {
      name: 'Eminence',
      unique: true,
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them generates a permanent stack and grants you 15 ad (+2 per stack) <b>bonus</b> attack damage for 90 seconds.',
    },
  ],
  stats: {
    attackDamage: 60,
    lethality: 18,
    abilityHaste: 10,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 950,
      sell: 1200,
    },
    tags: [
      'ASSASSIN',
    ],
  },
  maps: [
    11,
    21,
  ],
}
export default item