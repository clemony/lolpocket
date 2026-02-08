// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4642,
  name: 'Bandleglass Mirror',
  nicknames: [
    'yordle'
  ],
  description: '20 Ability Power\n100% Base Mana Regen\n10 Ability Haste\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1004,
      name: 'Faerie Charm',
      gold: 200
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    },
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 322065,
      name: 'Shurelya\'s Battlesong',
      gold: 2600
    },
    {
      id: 2065,
      name: 'Shurelya\'s Battlesong',
      gold: 2200
    },
    {
      id: 6620,
      name: 'Echoes of Helia',
      gold: 2200
    },
    {
      id: 324005,
      name: 'Imperial Mandate',
      gold: 2750
    },
    {
      id: 326617,
      name: 'Moonstone Renewer',
      gold: 2900
    },
    {
      id: 326620,
      name: 'Echoes of Helia',
      gold: 2600
    },
    {
      id: 4005,
      name: 'Imperial Mandate',
      gold: 2250
    },
    {
      id: 6617,
      name: 'Moonstone Renewer',
      gold: 2200
    }
  ],
  gold: {
    base: 50,
    sell: 630,
    total: 900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityHaste: 10,
    abilityPower: 20,
    manaRegen: 100
  }
}
export default item