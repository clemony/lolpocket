// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2501,
  name: 'Overlord\'s Bloodmail',
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    }
  ],
  description: '30 Attack Damage\n550 Health\n\nTyranny\nGain 2.5% of your bonus Health as Attack Damage. \n\nRetribution\nGain up to 12% increased Attack Damage based on your percent missing Health. ',
  gold: {
    base: 1000,
    sell: 2310,
    total: 3300
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
      name: 'Tyranny',
      effects: 'Gain <b>bonus</b> attack damage equal to 2.5% <b>bonus</b> health.',
      mythic: false,
      unique: true
    },
    {
      name: 'Retribution',
      effects: 'Gain <b>bonus</b> attack damage equal to 0% – 70% (based on missing health) of your <b>total</b> attack damage from other sources.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 30,
    health: 550
  }
}
export default item