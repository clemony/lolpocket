// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3170,
  name: 'Swiftmarch',
  nicknames: [
    'boots'
  ],
  buildsFrom: [
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000
    }
  ],
  description: '65 Move Speed\n\nFleetfooted\nReduce the effectiveness of Slows by 40%.\n\nNoxian Fervor\nGain 5% of your Move Speed as Adaptive Force.',
  gold: {
    base: 0,
    sell: 700,
    total: 1000
  },
  maps: [
    11
  ],
  noEffects: false,
  passives: [
    {
      name: 'Fleetfooted',
      effects: 'Gain 40% slow resist.',
      mythic: false,
      unique: true
    },
    {
      name: 'Noxian Fervor',
      effects: 'Gain <img src="/img/icons/adaptive-force.webp" class="tip-icon" />adaptive force equal to 5% of your <b>total</b> movement speed.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    flatMovespeed: 65
  }
}
export default item