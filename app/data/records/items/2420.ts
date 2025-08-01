const item: Item =  {
  "name": "Seeker's Armguard",
  "id": 2420,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    },
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    }
  ],
  "buildsInto": [
    {
      "id": 3157,
      "name": "Zhonya's Hourglass",
      "gold": 3250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3191_battlemage_t2_seekersarmguard.png",
  "simpleDescription": "Activate to become invincible but unable to take actions",
  "nicknames": [
    "zhg",
    "zonyas",
    "zhonyas"
  ],
  "active": [
    {
      "name": "Time Stop",
      "unique": true,
      "effects": "Put yourself in <img src=\"/img/icons/stasis.webp\" class=\"tip-icon\" />stasis for 2.5 seconds, rendering you <img src=\"/img/icons/untargetable.webp\" class=\"tip-icon\" />untargetable and <img src=\"/img/icons/invulnerable.webp\" class=\"tip-icon\" />invulnerable for the duration but also unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items."
    }
  ],
  "stats": {
    "abilityPower": 40,
    "armor": 25
  },
  "shop": {
    "prices": {
      "total": 1600,
      "combined": 500,
      "sell": 640
    },
    "tags": [
      "MAGE"
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