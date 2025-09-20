const item: Item = {
  id: 6610,
  name: 'Sundered Sky',
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6610_sunderedsky.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Lightshield Strike',
      effects:
        'Your next basic attack against a champion is empowered to <img src="/img/icons/critical-strike.webp" class="tip-icon" />critically strike for 175% damage and <img src="/img/icons/heal.webp" class="tip-icon" />heal you for (<img src="/img/icons/melee.webp" class="inline-icon" />100% /<img src="/img/icons/ranged.webp" class="inline-icon" />50%) <b>base</b> AD (+6% of your <b>missing</b> health) (8 second cooldown per target). Excess healing beyond <b>maximum</b> health is converted to <b>bonus</b> health for 8 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 1240,
      total: 3100,
    },
    tags: ['FIGHTER'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 40,
    health: 400,
  },
}
export default item
