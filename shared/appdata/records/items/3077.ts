const item: Item = {
  id: 3077,
  name: 'Tiamat',
  active: [
    {
      name: 'Crescent',
      effects:
        'Deal 75% AD physical damage to enemies within a 450 radius in front of you.',
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  buildsInto: [
    {
      id: 3074,
      name: 'Ravenous Hydra',
      gold: 3300,
    },
    {
      id: 3748,
      name: 'Titanic Hydra',
      gold: 3300,
    },
    {
      id: 6698,
      name: 'Profane Hydra',
      gold: 3200,
    },
    {
      id: 6631,
      name: 'Stridebreaker',
      gold: 3300,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3077_fighter_t2_tiamat.png',
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
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 480,
      total: 1200,
    },
    tags: ['FIGHTER', 'TANK', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Melee attacks hit nearby enemies',
  specialRecipe: 0,
  stats: {
    attackDamage: 20,
  },
}
export default item
