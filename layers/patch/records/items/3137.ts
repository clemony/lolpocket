// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3137,
  name: 'Cryptbloom',
  buildsFrom: [
    {
      id: 4630,
      name: 'Blighting Jewel',
      gold: 1100
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    }
  ],
  description: '75 Ability Power\n30% Magic Penetration\n20 Ability Haste\n\nLife from Death\nWhen a champion that you damaged within 3 seconds dies, a nova spreads from their corpse that heals.',
  gold: {
    base: 200,
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
      name: 'Life From Death',
      cooldown: '60',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion while alive and within 3 seconds of damaging them summons a nova that radiates from the location of their death over 1.75 seconds, <img src="/img/icons/heal.webp" class="tip-icon" />healing you and allied champions hit for 100 (+20% AP).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 75,
    percentMagicPenetration: 30
  }
}
export default item