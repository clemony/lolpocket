// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3050,
  name: 'Zeke\'s Convergence',
  nicknames: [
    'haroldandkumar'
  ],
  description: '300 Health\n25 Armor\n25 Magic Resist\n10 Ability Haste\n\nFrostfire Tempest\nCasting your Ultimate summons a storm around you for 5 seconds. The storm deals 30 magic damage per second to enemy champions and Slows them by 30%.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    }
  ],
  gold: {
    base: 700,
    sell: 1540,
    total: 2200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Cryocumbustion',
      effects: 'Gain 15 ultimate haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Frostfire Tempest',
      effects: 'Upon casting your ultimate ability, you summon a storm of flame and ice around you for 5 seconds, dealing 7.5 magic damage every 0.25 seconds to enemies within 350 units and <img src="/img/icons/slow.webp" class="tip-icon " />slowing them by 30% (45 second cooldown, starts on ultimate cast).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 10,
    armor: 25,
    health: 300,
    magicResistance: 25
  }
}
export default item