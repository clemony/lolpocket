export const RanduinsOmen: Item = {
  "name": "Randuin's Omen",
  "id": 3143,
  "rank": [
    "Legendary"
  ],
  "buildsFrom": [
    {
      "id": 3082,
      "name": "Warden's Mail",
      "gold": 1000
    },
    {
      "id": 1011,
      "name": "Giant's Belt",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3143_tank_t3_randuinsomen.png",
  "simpleDescription": "Greatly increases defenses, activate to slow nearby enemies",
  "passives": [
    {
      "name": "Resilience",
      "unique": true,
      "effects": "Reduces incoming damage from <img src=\"/img/icons/critical-strike.webp\" class=\"tip-icon\" />critical strikes by 30%."
    }
  ],
  "active": [
    {
      "name": "Humility",
      "unique": true,
      "effects": "Unleash a shockwave around you that <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slows nearby enemies by 70% for 2 seconds.",
      "range": 0
    }
  ],
  "stats": {
    "armor": 75,
    "health": 350
  },
  "shop": {
    "prices": {
      "total": 2700,
      "combined": 800,
      "sell": 1080
    },
    "purchasable": true,
    "tags": [
      "TANK"
    ]
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
