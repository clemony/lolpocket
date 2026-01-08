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
  "simpleDescription": "Activate to become invincible but unable to take actions",
  "nicknames": [
    "zhg",
    "zonyas",
    "zhonyas",
    "Witchcap",
    "Wooglets"
  ],
  "active": [
    {
      "name": "Time Stop",
      "effects": "Put yourself in <img src=\"/img/icons/stasis.webp\" class=\"tip-icon\" />stasis for 2.5 seconds, rendering you <img src=\"/img/icons/untargetable.webp\" class=\"tip-icon\" />untargetable and <img src=\"/img/icons/invulnerable.webp\" class=\"tip-icon\" />invulnerable for the duration but also unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 105,
    "armor": 50
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 3250,
    "sell": 2275
  }
}
export default item