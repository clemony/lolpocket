// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 8020,
  name: 'Abyssal Mask',
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    }
  ],
  description: '350 Health\n45 Magic Resist\n15 Ability Haste\n\nUnmake\nNearby enemy champions take 12% more magic damage.',
  gold: {
    base: 1000,
    sell: 1855,
    total: 2650
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
      name: 'Unmake',
      effects: 'Enemy champions within 700 units of you become cursed, causing them to receive 12% increased magic damage from all sources.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    health: 350,
    magicResistance: 45
  }
}
export default item