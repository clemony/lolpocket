// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6621,
  name: 'Dawncore',
  nicknames: [
    'dawncore'
  ],
  buildsFrom: [
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    }
  ],
  description: '45 Ability Power\n16% Heal and Shield Power\n100% Base Mana Regen\n\nFirst Light\nGain 2% Heal and Shield Power and 10 Ability Power per 100% Base Mana Regen.',
  gold: {
    base: 450,
    sell: 1750,
    total: 2500
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
      name: 'First Light',
      effects: 'Gain 2% heal and shield power hsp and 10 ability power for every additional 100% <b>base</b> mana regeneration.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 45,
    healAndShieldPower: 16,
    manaRegen: 100
  }
}
export default item