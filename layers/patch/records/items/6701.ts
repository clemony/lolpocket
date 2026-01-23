// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6701,
  name: 'Opportunity',
  nicknames: [
    'lethality'
  ],
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  description: '55 Attack Damage\n18 Lethality\n\nPreparation\nAfter being out of combat with Champions for 8 seconds gain Lethality. This Lethality lasts for 3 seconds after dealing damage to champions.\n\nExtraction\nWhen a champion that you damaged within 3 seconds dies, gain 200 decaying Move Speed for 1.5 seconds.\n',
  gold: {
    base: 475,
    sell: 1890,
    total: 2700
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
      name: 'Preparation',
      effects: 'After being out-of-combat with enemy champions for 8 seconds, gain (<img src="/img/icons/melee.webp" class="inline-icon" />11 /<img src="/img/icons/ranged.webp" class="inline-icon" />5) lethality. This bonus remains for 3 seconds after dealing damage to an enemy champion.',
      mythic: false,
      unique: true
    },
    {
      name: 'Extraction',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them grants you 200 <b>bonus</b> movement speed that decays over 1.5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 55,
    lethality: 18
  }
}
export default item