// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6695,
  name: 'Serpent\'s Fang',
  nicknames: [
    'lethality'
  ],
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  description: '55 Attack Damage\n15 Lethality\n\nShield Reaver\nDamaging an enemy champion reduces Shields they gain by % for 3 seconds. \nIf they were not already affected by Shield Reaver, reduce Shields on them by %.',
  gold: {
    base: 625,
    sell: 1750,
    total: 2500
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Shield Reaver',
      effects: 'Dealing damage to an enemy champion inflicts them with venom for 3 seconds, reducing any <img src="/img/icons/shield.webp" class="tip-icon" />shields they gain within the duration by (<img src="/img/icons/melee.webp" class="inline-icon" />50% /<img src="/img/icons/ranged.webp" class="inline-icon" />35%), and if the target was not already afflicted by the venom, reducing all of their active shields by the same amount.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 55,
    lethality: 15
  }
}
export default item