// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6675,
  name: 'Navori Flickerblade',
  nicknames: [
    'crit shojin'
  ],
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  description: '40% Attack Speed\n25% Critical Strike Chance\n4% Move Speed\n\nTranscendence\nAttacks reduce Basic Ability cooldowns by 15% of their remaining cooldown.',
  gold: {
    base: 950,
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
      name: 'Transcendence',
      effects: 'Basic attacks on-attack reduce the <b>remaining</b> cooldowns of your basic abilities by 15%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  }
}
export default item