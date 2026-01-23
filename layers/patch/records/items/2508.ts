// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2508,
  name: 'Fated Ashes',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 6653,
      name: 'Liandry\'s Torment',
      gold: 3000
    },
    {
      id: 2503,
      name: 'Blackfire Torch',
      gold: 2800
    }
  ],
  description: '30 Ability Power\n\nInflame\nDamaging Abilities deal 15 bonus magic damage over 3 seconds.\nDeals an additional 45 magic damage to monsters.',
  gold: {
    base: 500,
    sell: 630,
    total: 900
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
      name: 'Inflame',
      effects: 'Dealing ability damage burns enemies, causing them to take 2.5 magic damage every 0.5 seconds over 3 seconds, for a total of 15 magic damage. Against monsters, the burn deals 7.5 <b>bonus</b> magic damage per tick, dealing a total of 10 magic damage per tick for up to 60 magic damage.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 30
  }
}
export default item