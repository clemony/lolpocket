const item: Item = {
  name: 'Thornmail',
  id: 3075,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3076,
      name: 'Bramble Vest',
      gold: 800,
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800,
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
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3075_tank_t3_thornmail.png',
  nicknames: [
    'grievous wounds',
  ],
  passives: [
    {
      name: 'Thorns',
      unique: true,
      effects: 'When struck by a basic attack on-hit, deal 20 (+10% <b>bonus</b> armor) magic damage to the attacker and, if they are a champion, inflict them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
    },
  ],
  stats: {
    armor: 75,
    health: 150,
  },
  shop: {
    prices: {
      total: 2450,
      combined: 450,
      sell: 980,
    },
    tags: [
      'TANK',
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