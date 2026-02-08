// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3114,
  name: 'Forbidden Idol',
  description: '50% Base Mana Regen\n8% Heal and Shield Power\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1004,
      name: 'Faerie Charm',
      gold: 200
    }
  ],
  buildsInto: [
    {
      id: 323107,
      name: 'Redemption',
      gold: 2800
    },
    {
      id: 323222,
      name: 'Mikael\'s Blessing',
      gold: 2800
    },
    {
      id: 124011,
      name: 'Sword of Blossoming Dawn',
      gold: 2350
    },
    {
      id: 223011,
      name: 'Chemtech Putrifier',
      gold: 1900
    },
    {
      id: 2526,
      name: 'Whispering Circlet',
      gold: 2250
    },
    {
      id: 3504,
      name: 'Ardent Censer',
      gold: 2200
    },
    {
      id: 3011,
      name: 'Chemtech Putrifier',
      gold: 1900
    },
    {
      id: 3107,
      name: 'Redemption',
      gold: 2300
    },
    {
      id: 3222,
      name: 'Mikael\'s Blessing',
      gold: 2300
    },
    {
      id: 322526,
      name: 'Whispering Circlet',
      gold: 2250
    },
    {
      id: 323504,
      name: 'Ardent Censer',
      gold: 2600
    },
    {
      id: 326616,
      name: 'Staff of Flowing Water',
      gold: 2600
    },
    {
      id: 326621,
      name: 'Dawncore',
      gold: 2900
    },
    {
      id: 6616,
      name: 'Staff of Flowing Water',
      gold: 2250
    },
    {
      id: 6621,
      name: 'Dawncore',
      gold: 2500
    }
  ],
  gold: {
    base: 400,
    sell: 420,
    total: 600
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    healAndShieldPower: 8,
    manaRegen: 50
  }
}
export default item