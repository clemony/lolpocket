// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3173,
  name: 'Chainlaced Crushers',
  nicknames: [
    'boots'
  ],
  buildsFrom: [
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250
    }
  ],
  description: '30 Magic Resist\n45 Move Speed\n30% Tenacity\n\nNoxian Persistence (0s)\nAfter taking magic damage from a Champion, gain a  magic shield for 5 seconds.',
  gold: {
    base: 0,
    sell: 875,
    total: 1250
  },
  maps: [
    11
  ],
  noEffects: false,
  passives: [
    {
      name: 'Noxian Persistence',
      cooldown: '15',
      effects: 'Taking magic damage from champions grants you a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) magic damage for 5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    flatMovespeed: 45,
    magicResistance: 30,
    tenacity: 30
  }
}
export default item