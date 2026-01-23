// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6697,
  name: 'Hubris',
  nicknames: [
    'lethality'
  ],
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  description: '60 Attack Damage\n18 Lethality\n10 Ability Haste\n\nEminence\nWhen a champion that you damaged within 3 seconds dies, gain 15 Attack Damage plus 2 per champion killed for 90 seconds.',
  gold: {
    base: 950,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    21
  ],
  noEffects: false,
  passives: [
    {
      name: 'Eminence',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them generates a permanent stack and grants you 15 ad (+2 per stack) <b>bonus</b> attack damage for 90 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 60,
    lethality: 18
  }
}
export default item