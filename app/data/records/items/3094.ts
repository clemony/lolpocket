export const RapidFirecannon: Item = {
  "name": "Rapid Firecannon",
  "id": 3094,
  "rank": [
    "Legendary"
  ],
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
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3094_marksman_t3_rapidfirehandcannon.png",
  "simpleDescription": "Movement builds charges that release a sieging fire attack on release",
  "nicknames": [
    "canon",
    "gun",
    "rapidfire",
    "rfc"
  ],
  "passives": [
    {
      "name": "Energized",
      "unique": true,
      "effects": "Moving and basic attacking generates <i>Energize</i> stacks, up to 100."
    },
    {
      "name": "Sharpshooter",
      "unique": true,
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized, your next basic attack deals 40 <b>bonus</b> magic damage on-hit. <i>Energized</i> attacks gain 35% <b>bonus</b> range, capped at 150."
    }
  ],
  "stats": {
    "attackSpeed": 35,
    "criticalStrikeChance": 25,
    "percentMovespeed": 4
  },
  "shop": {
    "prices": {
      "total": 2650,
      "combined": 850,
      "sell": 1060
    },
    "purchasable": true,
    "tags": [
      "MARKSMAN",
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
