// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443079,
  name: 'Turbo Chemtank',
  nicknames: [
    'catastrophe'
  ],
  active: [
    {
      name: 'Supercharged',
      effects: 'Removes all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon" />Airborne) from your champion and grants you <img src="/img/icons/cc-immune.webp" class="tip-icon" />total crowd control immunity for the next 3 seconds.',
      unique: true
    }
  ],
  description: '600 Health\n80 Adaptive Force\n\nACTIVE (0s)\nSupercharged\nRemove all crowd control debuffs (excluding Airborne) and become Unstoppable for 3 seconds.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    health: 600
  }
}
export default item