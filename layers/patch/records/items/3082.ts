// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3082,
  name: 'Warden\'s Mail',
  buildsFrom: [
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 3110,
      name: 'Frozen Heart',
      gold: 2500
    },
    {
      id: 323110,
      name: 'Frozen Heart',
      gold: 2700
    },
    {
      id: 3143,
      name: 'Randuin\'s Omen',
      gold: 2700
    }
  ],
  description: '40 Armor\n\nRock Solid\nReduce incoming damage from Attacks.',
  gold: {
    base: 400,
    sell: 700,
    total: 1000
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
      name: 'Rock Solid',
      effects: 'Every first incoming instance of post-mitigation <img src="/img/icons/basic-damage.webp" class="tip-icon" />basic damage per cast instance is reduced by 15, with a <b>maximum</b> of 20% reduction each.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    armor: 40
  }
}
export default item