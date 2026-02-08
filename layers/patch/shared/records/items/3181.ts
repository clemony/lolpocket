// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3181,
  name: 'Hullbreaker',
  nicknames: [
    'ahoy',
    'hull',
    'pirate',
    'yarrr'
  ],
  description: '40 Attack Damage\n500 Health\n4% Move Speed\n\nSkipper\nEvery fifth Attack against champions and epic monsters deals bonus physical damage, increased against Structures.\n\nBoarding Party\nNearby allied siege and super minions gain Armor and Magic Resist.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 3066,
      name: 'Winged Moonplate',
      gold: 800
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  gold: {
    base: 175,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    12,
    21
  ],
  passives: [
    {
      name: 'Skipper',
      effects: 'Basic attacks on-hit against any enemy grant a stack for 10 seconds, stacking up to 5 times. At <b>maximum</b> stacks, or 4 stacks, your next basic attack against a champion, epic monster, or structure consumes all stacks to deal (<img src="/img/icons/melee.webp" class="inline-icon" />120% /<img src="/img/icons/ranged.webp" class="inline-icon" />84%) <b>base</b> AD  (+(<img src="/img/icons/melee.webp" class="inline-icon" />5% /<img src="/img/icons/ranged.webp" class="inline-icon" />3.5%) <b>maximum</b> health) <b>bonus</b> physical damage, increased to (<img src="/img/icons/melee.webp" class="inline-icon" />300% /<img src="/img/icons/ranged.webp" class="inline-icon" />210%) <b>base</b> AD  (+(<img src="/img/icons/melee.webp" class="inline-icon" />10% /<img src="/img/icons/ranged.webp" class="inline-icon" />7%) <b>maximum</b> health) against structures.',
      mythic: false,
      unique: true
    },
    {
      name: 'Boarding Party',
      effects: 'Allied <img src="/img/icons/siege-minions.webp" class="tip-icon" />siege minions and <img src="/img/icons/super-minions.webp" class="tip-icon" />super minions within 1050 units gain (<img src="/img/icons/melee.webp" class="inline-icon" />70 – 130 /<img src="/img/icons/ranged.webp" class="inline-icon" />35 – 65) <b>bonus</b> armor and <b>bonus</b> magic resistance, as well as 10% increased size.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 40,
    health: 500,
    percentMovespeed: 4
  }
}
export default item