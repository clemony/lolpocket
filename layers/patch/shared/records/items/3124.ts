// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3124,
  name: 'Guinsoo\'s Rageblade',
  description: '30 Attack Damage\n30 Ability Power\n25% Attack Speed\n\nWrath\nAttacks deal 30 bonus magic damage On-Hit.\n\nSeething Strike\nAttacks grant 8% Attack Speed for 3 seconds. (stacks 4 times). \nWhile fully stacked, every third Attack applies On-Hit effects twice.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  gold: {
    base: 1025,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Wrath',
      effects: 'Basic attacks deal 30 <b>bonus</b> magic damage on-hit.',
      mythic: false,
      unique: true
    },
    {
      name: 'Seething Strike',
      effects: 'Basic attacks grant 8% <b>bonus</b> attack speed for 3 seconds, stacking up to 4 times for a total of 32% <b>bonus</b> attack speed. At maximum stacks, basic attacks also grant a <i>Phantom</i> stack for 6 seconds, up to 2 stacks. At 2 <i>Phantom</i> stacks, the next basic attack consumes all of those stacks to trigger a <i>Phantom Hit</i> that applies <img src="/img/icons/on-hit.webp" class="tip-icon " />on-hit effects to the target after a 0.15 second delay.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 30,
    attackDamage: 30,
    attackSpeed: 25
  }
}
export default item