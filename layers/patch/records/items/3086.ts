// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3086,
  name: 'Zeal',
  buildsFrom: [
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3046,
      name: 'Phantom Dancer',
      gold: 2650
    },
    {
      id: 6675,
      name: 'Navori Flickerblade',
      gold: 2650
    },
    {
      id: 6671,
      name: 'Galeforce',
      gold: 3500
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187
    },
    {
      id: 2512,
      name: 'Fiendhunter Bolts',
      gold: 2650
    },
    {
      id: 3085,
      name: 'Runaan\'s Hurricane',
      gold: 2650
    },
    {
      id: 3094,
      name: 'Rapid Firecannon',
      gold: 2650
    }
  ],
  description: '15% Attack Speed\n15% Critical Strike Chance\n4% Move Speed\n\n',
  gold: {
    base: 350,
    sell: 840,
    total: 1200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 15,
    criticalStrikeChance: 15,
    percentMovespeed: 4
  }
}
export default item