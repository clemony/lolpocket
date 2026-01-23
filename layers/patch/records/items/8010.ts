// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 8010,
  name: 'Bloodletter\'s Curse',
  buildsFrom: [
    {
      id: 3147,
      name: 'Haunting Guise',
      gold: 1300
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    }
  ],
  description: '65 Ability Power\n400 Health\n15 Ability Haste\n\nVile Decay\nDealing magic damage with abilities or passives to champions reduces their Magic Resist by 7.5% for 6 seconds, up to 30%.',
  gold: {
    base: 750,
    sell: 2030,
    total: 2900
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
      name: 'Vile Decay',
      effects: 'Dealing magic damage to an enemy champion with a champion ability applies a stack of <i>Vile Decay</i> to them for 6 seconds, stacking up to 4 times and up to once per basic attack or ability per cast instance every 0.3 seconds. Each stack inflicts 7.5% magic resistance reduction, up to 30% mr at 4 stacks.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 65,
    health: 400
  }
}
export default item