// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3140,
  name: 'Quicksilver Sash',
  nicknames: [
    'qss',
    'mercurial scimitar',
    'silvermere dawn'
  ],
  active: [
    {
      name: 'Quicksilver',
      effects: 'Removes all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon" />Airborne) from your champion.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 6035,
      name: 'Silvermere Dawn',
      gold: 3000
    },
    {
      id: 3139,
      name: 'Mercurial Scimitar',
      gold: 3200
    }
  ],
  description: '30 Magic Resist\n\nQuicksilver\nRemove all crowd control debuffs (excluding Airborne).',
  gold: {
    base: 900,
    sell: 910,
    total: 1300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    magicResistance: 30
  }
}
export default item