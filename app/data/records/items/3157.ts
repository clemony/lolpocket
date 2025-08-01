const item: Item =  {
  "name": "Zhonya's Hourglass",
  "id": 3157,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1058,
      "name": "Needlessly Large Rod",
      "gold": 1200
    },
    {
      "id": 2420,
      "name": "Seeker's Armguard",
      "gold": 1600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3157_mage_t3_zhonyashourglass.png",
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
    "abilityPower": 105,
    "armor": 50
  },
  "shop": {
    "prices": {
      "total": 3250,
      "combined": 450,
      "sell": 1300
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