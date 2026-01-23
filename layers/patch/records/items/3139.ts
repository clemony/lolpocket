// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3139,
  name: 'Mercurial Scimitar',
  nicknames: [
    'merc scim',
    'qss',
    'quicksilver sash',
    'silvermere dawn'
  ],
  active: [
    {
      name: 'Quicksilver',
      effects: 'Removes all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon" />Airborne) from your champion and grants 50% <b>bonus total</b> movement speed and <img src="/img/icons/ghosted.webp" class="tip-icon" />ghosting for 2 seconds.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3140,
      name: 'Quicksilver Sash',
      gold: 1300
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900
    }
  ],
  description: '50 Attack Damage\n35 Magic Resist\n10% Life Steal\n\nACTIVE\nQuicksilver\nRemoves all crowd control debuffs (excluding Airborne) and grants Move Speed.',
  gold: {
    base: 125,
    sell: 2240,
    total: 3200
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
    attackDamage: 50,
    lifesteal: 10,
    magicResistance: 35
  }
}
export default item