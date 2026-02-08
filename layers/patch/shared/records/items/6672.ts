// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6672,
  name: 'Kraken Slayer',
  nicknames: [
    'Kraken Slayer'
  ],
  description: '45 Attack Damage\n40% Attack Speed\n4% Move Speed\n\nBring It Down\nEvery third Attack deals bonus physical damage On-Hit, increased based on their missing Health.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 6690,
      name: 'Rectrix',
      gold: 775
    },
    {
      id: 3051,
      name: 'Hearthbound Axe',
      gold: 1200
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    }
  ],
  gold: {
    base: 325,
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
      name: 'Bring It Down',
      effects: 'Basic attacks on-hit grant a stack for 3 seconds, up to 2 stacks. At 2 stacks, the next basic attack consumes all stacks to deal (<img src="/img/icons/melee.webp" class="inline-icon" />150 – 200 /<img src="/img/icons/ranged.webp" class="inline-icon" />120 – 160) <b>bonus</b> physical damage on-hit, increased by 0% – 100% (based on target\'s missing health), for up to (<img src="/img/icons/melee.webp" class="inline-icon" />262.5 – 350 /<img src="/img/icons/ranged.webp" class="inline-icon" />210 – 280) <b>bonus</b> physical damage.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 45,
    attackSpeed: 40,
    percentMovespeed: 4
  }
}
export default item