// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3119,
  name: 'Winter\'s Approach',
  nicknames: [
    'Fimbulwinter',
    'tear'
  ],
  buildsFrom: [
    {
      id: 3070,
      name: 'Tear of the Goddess',
      gold: 400
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    }
  ],
  description: '550 Health\n500 Mana\n15 Ability Haste\n\nAwe\nGain  Health.\n\nManaflow (8s, max 4 charges)\nLanding Attacks and Abilities grant 3 max Mana (doubled vs. champions).\nTransforms into Fimbulwinter at 360 max Mana.',
  gold: {
    base: 300,
    sell: 1680,
    total: 2400
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
      name: 'Awe',
      effects: 'Grants <b>bonus</b> health equal to 15% <b>bonus</b> mana.',
      mythic: false,
      unique: true
    },
    {
      name: 'Manaflow',
      effects: 'Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever affecting an enemy or ally with an ability to grant 3 <b>bonus</b> mana, increased to 6 mana for champion targets, up to a <b>maximum</b> of 360 <b>bonus</b> mana.',
      mythic: false,
      unique: true
    },
    {
      effects: 'Transforms into <img src="/img/icons/fimbulwinter.webp" class="tip-icon" />Fimbulwinter at 360 <b>bonus</b> mana.',
      mythic: false,
      unique: false
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    health: 550,
    mana: 500
  }
}
export default item