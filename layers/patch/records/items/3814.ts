// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3814,
  name: 'Edge of Night',
  nicknames: [
    'eon',
    'lethality',
    'spellshield',
    'spell shield'
  ],
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    }
  ],
  description: '50 Attack Damage\n15 Lethality\n250 Health\n\nAnnul\nGrants a Spell Shield that blocks the next enemy Ability.',
  gold: {
    base: 850,
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
      name: 'Annul',
      effects: 'Grants a <img src="/img/icons/spell-shield.webp" class="tip-icon" />spell shield that blocks the next hostile ability (40 second cooldown, timer restarts upon taking damage from champions).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 50,
    health: 250,
    lethality: 15
  }
}
export default item