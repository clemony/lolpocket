// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3057,
  name: 'Sheen',
  nicknames: [
    'Jimmy Neutron'
  ],
  buildsFrom: [
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3100,
      name: 'Lich Bane',
      gold: 2900
    },
    {
      id: 6662,
      name: 'Iceborn Gauntlet',
      gold: 2900
    },
    {
      id: 2510,
      name: 'Dusk and Dawn',
      gold: 3100
    },
    {
      id: 3508,
      name: 'Essence Reaver',
      gold: 2900
    },
    {
      id: 3078,
      name: 'Trinity Force',
      gold: 3333
    },
    {
      id: 6632,
      name: 'Divine Sunderer',
      gold: 3450
    }
  ],
  description: '10 Ability Haste\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus physical damage On-Hit.\n',
  gold: {
    base: 650,
    sell: 630,
    total: 900
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
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds deals 100% <b>base</b> AD <b>bonus</b> physical damage on-hit (1.5 second cooldown, starts after using the empowered attack).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10
  }
}
export default item