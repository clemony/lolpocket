// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2517,
  name: 'Endless Hunger',
  buildsFrom: [
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  description: '60 Attack Damage\n5% Omnivamp\n20% Tenacity\n\nFamine\nGain  Ability Haste.\n\nFeast\nWhen a champion that you damaged within 3 seconds dies, gain 15% Omnivamp for 8 seconds. ',
  gold: {
    base: 1075,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  passives: [
    {
      name: 'Famine',
      effects: 'Gain 5 ah (+10% <b>bonus</b> AD) ability haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Feast',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them grants you 15% omnivamp for 8 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 60,
    omnivamp: 5,
    tenacity: 20
  }
}
export default item