const item: Item = {
  name: 'Executioner\'s Calling',
  id: 3123,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  buildsInto: [
    {
      id: 3033,
      name: 'Mortal Reminder',
      gold: 3300,
    },
    {
      id: 6609,
      name: 'Chempunk Chainsword',
      gold: 3100,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3123_fighter_t2_executionerscalling.png',
  simpleDescription: 'Overcomes enemies with high health gain',
  nicknames: [
    'grievous',
  ],
  passives: [
    {
      name: 'Grievous Wounds',
      unique: true,
      effects: 'Dealing physical damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
    },
  ],
  stats: {
    attackDamage: 15,
  },
  shop: {
    prices: {
      total: 800,
      combined: 450,
      sell: 320,
    },
    tags: [
      'FIGHTER',
      'MARKSMAN',
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