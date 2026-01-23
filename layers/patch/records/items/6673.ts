// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6673,
  name: 'Immortal Shieldbow',
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
  description: '55 Attack Damage\n25% Critical Strike Chance\n\nLifeline\nTaking damage that would reduce your Health below 30% grants a Shield for 3 seconds.',
  gold: {
    base: 825,
    sell: 2100,
    total: 3000
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
      name: 'Lifeline',
      cooldown: '90',
      effects: 'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs (<img src="/img/icons/melee.webp" class="inline-icon" />400 – 700 /<img src="/img/icons/ranged.webp" class="inline-icon" />320 – 560) damage for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 55,
    criticalStrikeChance: 25
  }
}
export default item