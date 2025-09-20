const item: Item = {
  id: 3123,
  name: 'Executioner\'s Calling',
  nicknames: ['grievous'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3123_fighter_t2_executionerscalling.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Grievous Wounds',
      effects:
        'Dealing physical damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 320,
      total: 800,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN'],
  },
  simpleDescription: 'Overcomes enemies with high health gain',
  specialRecipe: 0,
  stats: {
    attackDamage: 15,
  },
}
export default item
