// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2022,
  name: 'Glowing Mote',
  nicknames: [
    'haste'
  ],
  description: '5 Ability Haste\n\n',
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    },
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    },
    {
      id: 6660,
      name: 'Bami\'s Cinder',
      gold: 900
    },
    {
      id: 3024,
      name: 'Glacial Buckler',
      gold: 900
    },
    {
      id: 3057,
      name: 'Sheen',
      gold: 900
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900
    }
  ],
  gold: {
    base: 250,
    sell: 175,
    total: 250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityHaste: 5
  }
}
export default item