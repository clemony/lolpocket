const item: Item =  {
  "name": "Runaan's Hurricane",
  "id": 3085,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3086,
      "name": "Zeal",
      "gold": 1200
    },
    {
      "id": 3144,
      "name": "Scout's Slingshot",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3085_marksman_t3_runaans.png",
  "simpleDescription": "Ranged attacks fire two bolts at nearby enemies",
  "passives": [
    {
      "name": "Wind's Fury",
      "effects": "Basic attacks on-attack fire additional bolts at up to 2 enemies in front of you, each dealing 55% AD physical damage. Bolts apply <img src=\"/img/icons/on-hit.webp\" class=\"tip-icon\" />on-hit effects and are affected by <img src=\"/img/icons/critical-strike.webp\" class=\"tip-icon\" />critical strike modifiers.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 40,
    "criticalStrikeChance": 25,
    "percentMovespeed": 4
  },
  "shop": {
    "prices": {
      "total": 2650,
      "combined": 850,
      "sell": 1060
    },
    "tags": [
      "MARKSMAN",
      "ONHIT_EFFECTS",
      "MOVEMENT"
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