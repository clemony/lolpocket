// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3073,
  name: 'Experimental Hexplate',
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 3044,
      name: 'Phage',
      gold: 1100
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  description: '40 Attack Damage\n20% Attack Speed\n450 Health\n\nHexcharged\nGain 30 Ultimate Ability Haste.\n\nOverdrive\nAfter casting your Ultimate, gain 50% Attack Speed and 20% Move Speed for 8 seconds. ',
  gold: {
    base: 500,
    sell: 2100,
    total: 3000
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
      name: 'Hexcharged',
      effects: 'Gain 30 ultimate haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Overdrive',
      effects: 'Upon casting your ultimate ability, enter <i>Overdrive</i> to gain 50% <b>bonus</b> attack speed and 20% <b>bonus</b> movement speed for 8 seconds (30 second cooldown, starts on ultimate cast).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 40,
    attackSpeed: 20,
    health: 450
  }
}
export default item