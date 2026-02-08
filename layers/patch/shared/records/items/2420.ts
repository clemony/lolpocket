// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2420,
  name: 'Seeker\'s Armguard',
  nicknames: [
    'zhg',
    'zonyas',
    'zhonyas'
  ],
  description: '40 Ability Power\n25 Armor\n\nTime Stop (Single use)\nEnter Stasis for 2.5 seconds.',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Time Stop',
      effects: 'Put yourself in <img src="/img/icons/stasis.webp" class="tip-icon " />stasis for 2.5 seconds, rendering you <img src="/img/icons/untargetable.webp" class="tip-icon " />untargetable and <img src="/img/icons/invulnerable.webp" class="tip-icon " />invulnerable for the duration but also unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3157,
      name: 'Zhonya\'s Hourglass',
      gold: 3250
    }
  ],
  gold: {
    base: 500,
    sell: 640,
    total: 1600
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityPower: 40,
    armor: 25
  }
}
export default item