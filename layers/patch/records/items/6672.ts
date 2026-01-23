// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6672,
  name: 'Kraken Slayer',
  nicknames: [
    'Kraken Slayer'
  ],
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
  description: '45 Attack Damage\n40% Attack Speed\n4% Move Speed\n\nBring It Down\nEvery third Attack deals bonus physical damage On-Hit, increased based on their missing Health.',
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
  noEffects: false,
  passives: [
    {
      name: 'Bring It Down',
      effects: 'Basic attacks on-hit grant a stack for 3 seconds, up to 2 stacks. At 2 stacks, the next basic attack consumes all stacks to deal (<img src="/img/icons/melee.webp" class="inline-icon" />150 – 200 /<img src="/img/icons/ranged.webp" class="inline-icon" />120 – 160) <b>bonus</b> physical damage on-hit, increased by 0% – 100% (based on target\'s missing health), for up to (<img src="/img/icons/melee.webp" class="inline-icon" />262.5 – 350 /<img src="/img/icons/ranged.webp" class="inline-icon" />210 – 280) <b>bonus</b> physical damage.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 45,
    attackSpeed: 40,
    percentMovespeed: 4
  }
}
export default item