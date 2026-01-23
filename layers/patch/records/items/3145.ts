// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3145,
  name: 'Hextech Alternator',
  nicknames: [
    'revolver',
    'pewpew'
  ],
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3146,
      name: 'Hextech Gunblade',
      gold: 3000
    },
    {
      id: 4646,
      name: 'Stormsurge',
      gold: 2800
    },
    {
      id: 4645,
      name: 'Shadowflame',
      gold: 3200
    },
    {
      id: 3152,
      name: 'Hextech Rocketbelt',
      gold: 2650
    },
    {
      id: 4636,
      name: 'Night Harvester',
      gold: 2765
    },
    {
      id: 6655,
      name: 'Luden\'s Echo',
      gold: 2750
    }
  ],
  description: '45 Ability Power\n\nRevved\nDamaging a champion deals bonus magic damage.',
  gold: {
    base: 300,
    sell: 770,
    total: 1100
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
      name: 'Revved',
      cooldown: '40',
      effects: 'Damaging an enemy champion deals 65 <b>bonus</b> magic damage.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 45
  }
}
export default item