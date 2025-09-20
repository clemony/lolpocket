const item: Item = {
  id: 6701,
  name: 'Opportunity',
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000,
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6701_opportunity.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Preparation',
      effects:
        'After being out-of-combat with enemy champions for 8 seconds, gain (<img src="/img/icons/melee.webp" class="inline-icon" />11 /<img src="/img/icons/ranged.webp" class="inline-icon" />5) lethality. This bonus remains for 3 seconds after dealing damage to an enemy champion.',
      unique: true,
    },
    {
      name: 'Extraction',
      effects:
        'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them grants you 200 <b>bonus</b> movement speed that decays over 1.5 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 475,
      sell: 1080,
      total: 2700,
    },
    tags: ['ASSASSIN', 'MOVEMENT'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 55,
    lethality: 18,
  },
}
export default item
