// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2504,
  name: 'Kaenic Rookern',
  buildsFrom: [
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    }
  ],
  description: '400 Health\n80 Magic Resist\n100% Base Health Regen\n\nMagebane\nAfter not taking magic damage for 15 seconds, gain a magic shield. ',
  gold: {
    base: 800,
    sell: 2030,
    total: 2900
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
      name: 'Magebane',
      effects: 'After not taking magic damage for 15 seconds, gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs magic damage equal to 15% of <b>maximum</b> health until destroyed.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    health: 400,
    healthRegen: 100,
    magicResistance: 80
  }
}
export default item