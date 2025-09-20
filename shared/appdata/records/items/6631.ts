const item: Item = {
  id: 6631,
  name: 'Stridebreaker',
  nicknames: ['kneecapper', 'whipchain'],
  active: [
    {
      name: 'Breaking Shockwave',
      effects:
        'Deal 80% AD physical damage to enemies in a 450 radius centered around you and <img src="/img/icons/slow.webp" class="tip-icon" />slow them by 35% for 3 seconds. For each champion hit, gain 35% <b>bonus</b> movement speed decaying over 3 seconds. Can move while casting.',
      unique: true,
    },
  ],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6631_fighter_t4_stridebreaker.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Cleave',
      effects:
        'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 750,
      sell: 1320,
      total: 3300,
    },
    tags: ['FIGHTER', 'MOVEMENT'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 40,
    attackSpeed: 25,
    health: 450,
  },
}
export default item
