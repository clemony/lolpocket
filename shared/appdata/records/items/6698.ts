const item: Item = {
  name: 'Profane Hydra',
  id: 6698,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3077,
      name: 'Tiamat',
      gold: 1200
    },
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6698_profanehydra.png',
  passives: [
    {
      name: 'Cleave',
      unique: true,
      effects: 'Damaging basic attacks deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.'
    }
  ],
  active: [
    {
      name: 'Heretical Cleave',
      unique: true,
      effects: 'Deal 80% AD physical damage to enemies in a 450 radius.'
    }
  ],
  stats: {
    attackDamage: 60,
    lethality: 18,
    abilityHaste: 10
  },
  shop: {
    prices: {
      total: 3200,
      combined: 663,
      sell: 1280
    },
    tags: [
      'ASSASSIN'
    ]
  },
  maps: [
    11,
    12,
    21,
    35
  ]
}
export default item