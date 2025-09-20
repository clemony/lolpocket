const item: Item = {
  id: 6695,
  name: 'Serpent\'s Fang',
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6695_assassin_t3_serpentsfang.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Shield Reaver',
      effects:
        'Dealing damage to an enemy champion inflicts them with venom for 3 seconds, reducing any <img src="/img/icons/shield.webp" class="tip-icon" />shields they gain within the duration by (<img src="/img/icons/melee.webp" class="inline-icon" />50% /<img src="/img/icons/ranged.webp" class="inline-icon" />35%), and if the target was not already afflicted by the venom, reducing all of their active shields by the same amount.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 625,
      sell: 1000,
      total: 2500,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 55,
    lethality: 15,
  },
}
export default item
