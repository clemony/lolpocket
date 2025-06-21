const item: Item = {
  name: 'Ravenous Hydra',
  id: 3074,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3077,
      name: 'Tiamat',
      gold: 1200,
    },
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900,
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
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3074_fighter_t3_ravenoushydra.png',
  simpleDescription: 'Melee attacks hit nearby enemies, dealing damage and restoring Health',
  nicknames: [
    'rav hydra',
  ],
  passives: [
    {
      name: 'Cleave',
      unique: true,
      effects: 'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.',
    },
  ],
  active: [
    {
      name: 'Ravenous Crescent',
      unique: true,
      effects: 'Deal 80% AD physical damage to enemies within a 450 radius in front of you.',
    },
  ],
  stats: {
    attackDamage: 65,
    lifesteal: 12,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 3300,
      combined: 150,
      sell: 1320,
    },
    tags: [
      'FIGHTER',
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