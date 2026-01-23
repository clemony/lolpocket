// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6696,
  name: 'Axiom Arc',
  buildsFrom: [
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  description: '55 Attack Damage\n18 Lethality\n20 Ability Haste\n\nFlux\nWhen a champion that you damaged within 3 seconds dies, refund some of your Ultimate Ability\'s total cooldown.',
  gold: {
    base: 363,
    sell: 1925,
    total: 2750
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
      name: 'Flux',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them refunds 15% (+0.15% per 1 Lethality) of your ultimate ability\'s <b>total</b> cooldown.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    lethality: 18
  }
}
export default item