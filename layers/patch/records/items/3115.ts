// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3115,
  name: 'Nashor\'s Tooth',
  nicknames: [
    'nashors'
  ],
  buildsFrom: [
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    }
  ],
  description: '80 Ability Power\n50% Attack Speed\n15 Ability Haste\n\nIcathian Bite\nAttacks deal bonus magic damage On-Hit.',
  gold: {
    base: 500,
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
      name: 'Icathian Bite',
      effects: 'Basic attacks deal 15 (+15% AP) <b>bonus</b> magic damage on-hit.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 80,
    attackSpeed: 50
  }
}
export default item