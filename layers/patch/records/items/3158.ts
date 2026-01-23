// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3158,
  name: 'Ionian Boots of Lucidity',
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300
    },
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3171,
      name: 'Crimson Lucidity',
      gold: 900
    }
  ],
  description: '10 Ability Haste\n45 Move Speed\n\nIonian Insight\nGain 10 Summoner Spell Haste.\n\n',
  gold: {
    base: 350,
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
      name: 'Ionian Insight',
      effects: 'Gain 10 summoner spell haste.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    flatMovespeed: 45
  }
}
export default item