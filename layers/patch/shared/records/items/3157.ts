// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3157,
  name: 'Zhonya\'s Hourglass',
  nicknames: [
    'zhg',
    'zonyas',
    'zhonyas',
    'Witchcap',
    'Wooglets'
  ],
  description: '105 Ability Power\n50 Armor\n\nTime Stop\nEnter Stasis for 2.5 seconds.',
  noEffects: false,
  rank: 'Legendary',
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
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200
    },
    {
      id: 2420,
      name: 'Seeker\'s Armguard',
      gold: 1600
    }
  ],
  gold: {
    base: 450,
    sell: 2275,
    total: 3250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityPower: 105,
    armor: 50
  }
}
export default item