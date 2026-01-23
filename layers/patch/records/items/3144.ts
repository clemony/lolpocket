// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3144,
  name: 'Scout\'s Slingshot',
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3032,
      name: 'Yun Tal Wildarrows',
      gold: 3100
    },
    {
      id: 3097,
      name: 'Stormrazor',
      gold: 3200
    },
    {
      id: 3095,
      name: 'Stormrazor',
      gold: 3000
    },
    {
      id: 2512,
      name: 'Fiendhunter Bolts',
      gold: 2650
    },
    {
      id: 3087,
      name: 'Statikk Shiv',
      gold: 2700
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
  description: '20% Attack Speed\n\nBullseye\nDamaging a champion deals bonus magic damage. \nAttacks reduce this cooldown by 1 second.',
  gold: {
    base: 100,
    sell: 420,
    total: 600
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
      name: 'Bullseye',
      effects: 'Damaging an enemy champion deals 40 <b>bonus</b> magic damage (40 second cooldown, reduced by 1 second ).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 20
  }
}
export default item