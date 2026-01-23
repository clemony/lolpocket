// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2526,
  name: 'Whispering Circlet',
  nicknames: [
    'tear'
  ],
  buildsFrom: [
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 3070,
      name: 'Tear of the Goddess',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 2530,
      name: 'Diadem of Songs',
      gold: 2250
    }
  ],
  description: '200 Health\n8% Heal and Shield Power\n75% Base Mana Regen\n300 Mana\n\nHarmony\nGain % Heal and Shield Power.\n\nManaflow (8s, max 5 charges)\nLanding Abilities grants 4 max Mana (doubled vs. champions).\nTransforms into Diadem of Songs at 360 max Mana.',
  gold: {
    base: 850,
    sell: 1575,
    total: 2250
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  passives: [
    {
      name: 'Harmony',
      effects: 'Grants heal and shield power equal to 0.5% <b>bonus</b> mana.',
      mythic: false,
      unique: true
    },
    {
      name: 'Manaflow',
      effects: 'Grants a charge every 8 seconds, up to 5 charges. Affecting an enemy or ally with an ability consumes a charge to grant 4 <b>bonus</b> mana, increased to 8 mana if they are a champion, up to a <b>maximum</b> of 360 <b>bonus</b> mana.',
      mythic: false,
      unique: true
    },
    {
      effects: 'Transforms into <img src="/img/icons/diadem-of-songs.webp" class="tip-icon" />Diadem of Songs at 360 <b>bonus</b> mana.',
      mythic: false,
      unique: false
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    healAndShieldPower: 8,
    health: 200,
    mana: 300,
    manaRegen: 75
  }
}
export default item