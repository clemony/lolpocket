// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3078,
  name: 'Trinity Force',
  nicknames: [
    'Spellblade',
    'triforce',
    'tons of damage',
    '33333'
  ],
  buildsFrom: [
    {
      id: 3057,
      name: 'Sheen',
      gold: 900
    },
    {
      id: 3044,
      name: 'Phage',
      gold: 1100
    },
    {
      id: 3051,
      name: 'Hearthbound Axe',
      gold: 1200
    }
  ],
  description: '36 Attack Damage\n30% Attack Speed\n333 Health\n15 Ability Haste\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus physical damage On-Hit.\n \nQuicken\nAttacking grants 20 Move Speed for 2 seconds.',
  gold: {
    base: 133,
    sell: 2333,
    total: 3333
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
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds deals 200% <b>base</b> AD <b>bonus</b> physical damage on-hit (1.5 second cooldown, starts after using the empowered attack).',
      mythic: false,
      unique: true
    },
    {
      name: 'Quicken',
      effects: 'Basic attacks on-hit grant 20 <b>bonus</b> movement speed for 2 seconds',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 36,
    attackSpeed: 30,
    health: 333
  }
}
export default item