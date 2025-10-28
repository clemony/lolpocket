<<<<<<< HEAD
const item: Item =  {
  "name": "Blade of the Ruined King",
  "id": 3153,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1053,
      "name": "Vampiric Scepter",
      "gold": 900
    },
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
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
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3153_fighter_t3_bladeoftheruinedking.png",
  "simpleDescription": "Deals damage based on target's Health, can steal Move Speed",
  "nicknames": [
    "brk",
    "bork",
    "botrk",
    "mist"
  ],
  "passives": [
    {
      "name": "Mist's Edge",
      "effects": "Basic attacks deal <b>bonus</b> physical damage on-hit equal to (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />9% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />6%) of the target's <b>current</b> health, with a <b>maximum</b> of 100 against <img src=\"/img/icons/minions.webp\" class=\"tip-icon\" />minions and <img src=\"/img/icons/monsters.webp\" class=\"tip-icon\" />monsters.",
      "unique": true
    },
    {
      "name": "Clawing Shadows",
      "cooldown": "15",
      "effects": "Basic attacks on-hit against enemy champions apply a stack for 6 seconds, stacking up to 3 times. The third stack consumes them all to <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slow the target by 30% for 1 second.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 40,
    "attackSpeed": 25,
    "lifesteal": 10
  },
  "shop": {
    "prices": {
      "total": 3200,
      "combined": 725,
      "sell": 1280
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ONHIT_EFFECTS"
    ]
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item
=======
const item: Item = {
  id: 3153,
  name: 'Blade of the Ruined King',
  nicknames: ['brk', 'bork', 'botrk', 'mist'],
  buildsFrom: [
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900,
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3153_fighter_t3_bladeoftheruinedking.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Mist\'s Edge',
      effects:
        'Basic attacks deal <b>bonus</b> physical damage on-hit equal to (<img src="/img/icons/melee.webp" class="inline-icon" />9% /<img src="/img/icons/ranged.webp" class="inline-icon" />6%) of the target\'s <b>current</b> health, with a <b>maximum</b> of 100 against <img src="/img/icons/minions.webp" class="tip-icon" />minions and <img src="/img/icons/monsters.webp" class="tip-icon" />monsters.',
      unique: true,
    },
    {
      name: 'Clawing Shadows',
      cooldown: '15',
      effects:
        'Basic attacks on-hit against enemy champions apply a stack for 6 seconds, stacking up to 3 times. The third stack consumes them all to <img src="/img/icons/slow.webp" class="tip-icon" />slow the target by 30% for 1 second.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 725,
      sell: 1280,
      total: 3200,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ONHIT_EFFECTS'],
  },
  simpleDescription:
    'Deals damage based on target\'s Health, can steal Move Speed',
  specialRecipe: 0,
  stats: {
    attackDamage: 40,
    attackSpeed: 25,
    lifesteal: 10,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
