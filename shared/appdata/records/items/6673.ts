const item: Item = {
  name: 'Immortal Shieldbow',
  id: 6673,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 6670,
      name: 'Noonquiver',
      gold: 1300
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6673_marksman_t4_crimsonshieldbow.png',
  passives: [
    {
      name: 'Lifeline',
      unique: true,
      effects: 'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs (<img src="/img/icons/melee.webp" class="inline-icon" />400 – 700 /<img src="/img/icons/ranged.webp" class="inline-icon" />320 – 560) damage for 3 seconds.',
      cooldown: '90'
    }
  ],
  stats: {
    attackDamage: 55,
    criticalStrikeChance: 25
  },
  shop: {
    prices: {
      total: 3000,
      combined: 825,
      sell: 1200
    },
    tags: [
      'MARKSMAN',
      'HEALTH_AND_REG'
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