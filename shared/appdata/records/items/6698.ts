const item: Item = {
  id: 6698,
  name: 'Profane Hydra',
  active: [
    {
      name: 'Heretical Cleave',
      effects: 'Deal 80% AD physical damage to enemies in a 450 radius.',
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
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6698_profanehydra.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Cleave',
      effects:
        'Damaging basic attacks deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 663,
      sell: 1280,
      total: 3200,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 60,
    lethality: 18,
  },
}
export default item
