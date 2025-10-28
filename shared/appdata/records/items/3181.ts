<<<<<<< HEAD
const item: Item =  {
  "name": "Hullbreaker",
  "id": 3181,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 3066,
      "name": "Winged Moonplate",
      "gold": 800
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3181_hullbreaker.png",
  "nicknames": [
    "ahoy",
    "pirate",
    "yarrr"
  ],
  "passives": [
    {
      "name": "Skipper",
      "effects": "Basic attacks on-hit against any enemy grant a stack for 10 seconds, stacking up to 5 times. At <b>maximum</b> stacks, or 4 stacks, your next basic attack against a champion, epic monster, or structure consumes all stacks to deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />120% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />84%) <b>base</b> AD  (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />5% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />3.5%) <b>maximum</b> health) <b>bonus</b> physical damage, increased to (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />300% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />210%) <b>base</b> AD  (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />10% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />7%) <b>maximum</b> health) against structures.",
      "unique": true
    },
    {
      "name": "Boarding Party",
      "effects": "Allied <img src=\"/img/icons/siege-minions.webp\" class=\"tip-icon\" />siege minions and <img src=\"/img/icons/super-minions.webp\" class=\"tip-icon\" />super minions within 1050 units gain (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />70 – 130 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />35 – 65) <b>bonus</b> armor and <b>bonus</b> magic resistance, as well as 10% increased size.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 40,
    "health": 500,
    "percentMovespeed": 4
  },
  "shop": {
    "prices": {
      "total": 3000,
      "combined": 175,
      "sell": 1200
    },
    "tags": [
      "FIGHTER"
    ]
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item
=======
const item: Item = {
  id: 3181,
  name: 'Hullbreaker',
  nicknames: ['ahoy', 'pirate', 'yarrr'],
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
    {
      id: 3066,
      name: 'Winged Moonplate',
      gold: 800,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3181_hullbreaker.png',
  maps: [11, 12, 21],
  noEffects: false,
  passives: [
    {
      name: 'Skipper',
      effects:
        'Basic attacks on-hit against any enemy grant a stack for 10 seconds, stacking up to 5 times. At <b>maximum</b> stacks, or 4 stacks, your next basic attack against a champion, epic monster, or structure consumes all stacks to deal (<img src="/img/icons/melee.webp" class="inline-icon" />120% /<img src="/img/icons/ranged.webp" class="inline-icon" />84%) <b>base</b> AD  (+(<img src="/img/icons/melee.webp" class="inline-icon" />5% /<img src="/img/icons/ranged.webp" class="inline-icon" />3.5%) <b>maximum</b> health) <b>bonus</b> physical damage, increased to (<img src="/img/icons/melee.webp" class="inline-icon" />300% /<img src="/img/icons/ranged.webp" class="inline-icon" />210%) <b>base</b> AD  (+(<img src="/img/icons/melee.webp" class="inline-icon" />10% /<img src="/img/icons/ranged.webp" class="inline-icon" />7%) <b>maximum</b> health) against structures.',
      unique: true,
    },
    {
      name: 'Boarding Party',
      effects:
        'Allied <img src="/img/icons/siege-minions.webp" class="tip-icon" />siege minions and <img src="/img/icons/super-minions.webp" class="tip-icon" />super minions within 1050 units gain (<img src="/img/icons/melee.webp" class="inline-icon" />70 – 130 /<img src="/img/icons/ranged.webp" class="inline-icon" />35 – 65) <b>bonus</b> armor and <b>bonus</b> magic resistance, as well as 10% increased size.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 175,
      sell: 1200,
      total: 3000,
    },
    tags: ['FIGHTER'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 40,
    health: 500,
    percentMovespeed: 4,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
