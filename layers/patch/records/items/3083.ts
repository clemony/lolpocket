// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3083,
  name: 'Warmog\'s Armor',
  buildsFrom: [
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    },
    {
      id: 3801,
      name: 'Crystalline Bracer',
      gold: 800
    }
  ],
  description: '1000 Health\n100% Base Health Regen\n\nWarmog\'s Heart \nIf you have 2000 bonus Health and have not taken damage within 8 seconds, restore  Health per second.\n\nWarmog\'s Vitality\nGain bonus Health equal to 12% of your Item Health (0).',
  gold: {
    base: 500,
    sell: 2170,
    total: 3100
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
      effects: 'Grants <i>Warmog\'s Heart</i> if you have at least 2000 <b>bonus</b> health.',
      mythic: false,
      unique: true
    },
    {
      name: 'Warmog\'s Heart',
      effects: '<img src="/img/icons/health-regeneration.webp" class="tip-icon" />Health regeneration 1.5% <b>maximum</b> health every 0.5 seconds if damage has not been taken in the last 8 seconds (3 seconds for damage from non-champions).',
      mythic: false,
      unique: true
    },
    {
      name: 'Warmog\'s Vitality',
      effects: 'Gain <b>bonus</b> health equal to 12% <b>bonus</b> health <b>from items</b>.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    health: 1000,
    healthRegen: 100
  }
}
export default item