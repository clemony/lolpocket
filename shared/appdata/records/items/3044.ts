const item: Item = {
  id: 3044,
  name: 'Phage',
  nicknames: ['mallet'],
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  buildsInto: [
    {
      id: 6631,
      name: 'Stridebreaker',
      gold: 3300,
    },
    {
      id: 3071,
      name: 'Black Cleaver',
      gold: 3000,
    },
    {
      id: 6630,
      name: 'Goredrinker',
      gold: 3200,
    },
    {
      id: 3073,
      name: 'Experimental Hexplate',
      gold: 3000,
    },
    {
      id: 3078,
      name: 'Trinity Force',
      gold: 3333,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3044_fighter_t2_phage.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Rage',
      effects:
        'Basic attacks on-hit grant (<img src="/img/icons/melee.webp" class="inline-icon" />20 /<img src="/img/icons/ranged.webp" class="inline-icon" />10) <b>bonus</b> movement speed for 2 seconds.',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 350,
      sell: 440,
      total: 1100,
    },
    tags: ['FIGHTER', 'TANK'],
  },
  simpleDescription: 'Attacks and kills give a small burst of speed',
  specialRecipe: 0,
  stats: {
    attackDamage: 15,
    health: 200,
  },
}
export default item
