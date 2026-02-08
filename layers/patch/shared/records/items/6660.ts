// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6660,
  name: 'Bami\'s Cinder',
  nicknames: [
    'fire'
  ],
  description: '150 Health\n5 Ability Haste\n\nImmolate\nAfter taking or dealing damage, deal magic damage to nearby enemies for 3 seconds.',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3068,
      name: 'Sunfire Aegis',
      gold: 2700
    },
    {
      id: 6664,
      name: 'Hollow Radiance',
      gold: 2800
    }
  ],
  gold: {
    base: 250,
    sell: 630,
    total: 900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Immolate',
      effects: 'Taking or dealing damage activates this passive for 3 seconds. Deal 15 magic damage every second to enemies within 325 (+100% <b>bonus</b> size) units, with the damage being increased to 150% against <img src="/img/icons/minions.webp" class="tip-icon light:invert" />minions and 200% against <img src="/img/icons/monsters.webp" class="tip-icon light:invert" />monsters. This executes minions that would be killed by one more tick of damage.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 5,
    health: 150
  }
}
export default item