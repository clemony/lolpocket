const item: Item = {
  id: 3074,
  name: 'Ravenous Hydra',
  nicknames: ['rav hydra'],
  active: [
    {
      name: 'Ravenous Crescent',
      effects:
        'Deal 80% AD physical damage to enemies within a 450 radius in front of you.',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3074_fighter_t3_ravenoushydra.png',
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
      combined: 150,
      sell: 1320,
      total: 3300,
    },
    tags: ['FIGHTER'],
  },
  simpleDescription:
    'Melee attacks hit nearby enemies, dealing damage and restoring Health',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 65,
    lifesteal: 12,
  },
}
export default item
