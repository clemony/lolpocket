const item: Item = {
  id: 6697,
  name: 'Hubris',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6697_hubris.png',
  maps: [11, 21],
  noEffects: false,
  passives: [
    {
      name: 'Eminence',
      effects:
        'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them generates a permanent stack and grants you 15 ad (+2 per stack) <b>bonus</b> attack damage for 90 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 950,
      sell: 1200,
      total: 3000,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 60,
    lethality: 18,
  },
}
export default item
