// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3070,
  name: 'Tear of the Goddess',
  nicknames: [
    'archangel\'s staff',
    'Seraph\'s embrace',
    'Winter\'s approach',
    'Fimbulwinter',
    'Muramana',
    'Manamune'
  ],
  buildsInto: [
    {
      id: 3003,
      name: 'Archangel\'s Staff',
      gold: 2900
    },
    {
      id: 3004,
      name: 'Manamune',
      gold: 2900
    },
    {
      id: 3119,
      name: 'Winter\'s Approach',
      gold: 2400
    },
    {
      id: 2526,
      name: 'Whispering Circlet',
      gold: 2250
    }
  ],
  description: '240 Mana\n\nManaflow (8s, max 4 charges)\nLanding Abilities grants 3 max Mana (doubled vs. champions), up to 360.\n\nHelping Hand\nAttacks deal an additional 5 physical damage to minions.',
  gold: {
    base: 400,
    sell: 280,
    total: 400
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
      name: 'Manaflow',
      effects: 'Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an ability consumes a charge to grant 3 <b>bonus</b> mana, increased to 6 mana if they are a champion, up to <b>maximum</b> of 360 <b>bonus</b> mana. Can only be triggered if an ability was cast and only once per cast instance.',
      mythic: false,
      unique: true
    },
    {
      name: 'Helping Hand',
      effects: 'Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  stats: {
    mana: 240
  }
}
export default item