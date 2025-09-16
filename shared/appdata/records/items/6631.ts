const item: Item = {
  name: 'Stridebreaker',
  id: 6631,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3077,
      name: 'Tiamat',
      gold: 1200,
    },
    {
      id: 3044,
      name: 'Phage',
      gold: 1100,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6631_fighter_t4_stridebreaker.png',
  nicknames: ['kneecapper', 'whipchain'],
  passives: [
    {
      name: 'Cleave',
      unique: true,
      effects:
        'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.',
    },
  ],
  active: [
    {
      name: 'Breaking Shockwave',
      unique: true,
      effects:
        'Deal 80% AD physical damage to enemies in a 450 radius centered around you and <img src="/img/icons/slow.webp" class="tip-icon" />slow them by 35% for 3 seconds. For each champion hit, gain 35% <b>bonus</b> movement speed decaying over 3 seconds. Can move while casting.',
    },
  ],
  stats: {
    attackDamage: 40,
    attackSpeed: 25,
    health: 450,
  },
  shop: {
    prices: {
      total: 3300,
      combined: 750,
      sell: 1320,
    },
    tags: ['FIGHTER', 'MOVEMENT'],
  },
  maps: [11, 12, 21, 35],
}
export default item
