// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2065,
  name: 'Shurelya\'s Battlesong',
  nicknames: [
    'shurelya',
    'reverie'
  ],
  active: [
    {
      name: 'Inspiring Speech',
      effects: 'Grants you and all allies within 1000 units 30% <b>bonus</b> movement speed for 4 seconds.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900
    }
  ],
  description: '50 Ability Power\n15 Ability Haste\n4% Move Speed\n125% Base Mana Regen\n\nInspiring Speech\nGrant nearby allies 30% Move Speed for 4 seconds.',
  gold: {
    base: 400,
    sell: 1540,
    total: 2200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 50,
    manaRegen: 125,
    percentMovespeed: 4
  }
}
export default item