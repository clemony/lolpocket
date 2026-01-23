// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3068,
  name: 'Sunfire Aegis',
  nicknames: [
    'burn',
    'sunborn',
    'sunfire'
  ],
  buildsFrom: [
    {
      id: 6660,
      name: 'Bami\'s Cinder',
      gold: 900
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800
    }
  ],
  description: '350 Health\n50 Armor\n10 Ability Haste\n\nImmolate\nAfter taking or dealing damage, deal magic damage per second to nearby enemies for 3 seconds. ',
  gold: {
    base: 1000,
    sell: 1890,
    total: 2700
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
      name: 'Immolate',
      effects: 'Taking or dealing damage activates this passive for 3 seconds. Deal 20 (+1% <b>bonus</b> health) magic damage every second to enemies within 325 (+100% <b>bonus</b> size) units, with the damage being increased to 160% against <img src="/img/icons/minions.webp" class="tip-icon" />minions and to 200% against <img src="/img/icons/monsters.webp" class="tip-icon" />monsters. This executes minions that would be killed by one more tick of damage.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 50,
    health: 350
  }
}
export default item