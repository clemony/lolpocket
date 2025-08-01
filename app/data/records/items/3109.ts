const item: Item =  {
  "name": "Knight's Vow",
  "id": 3109,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1031,
      "name": "Chain Vest",
      "gold": 800
    },
    {
      "id": 1006,
      "name": "Rejuvenation Bead",
      "gold": 300
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3109_tank_t3_knightsvow.png",
  "simpleDescription": "Partner with an ally to protect each other",
  "nicknames": [
    "kv"
  ],
  "passives": [
    {
      "name": "Sacrifice",
      "unique": true,
      "effects": "While your <i>Worthy</i> ally is tethered to you and you are above 30% of your <b>maximum</b> health, redirect 12% of the pre-mitigation physical damage and magic damage damage they take to you as the respective damage type. Additionally, you <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal for 10% of the post-mitigation damage dealt by your <i>Worthy</i> ally to champions."
    }
  ],
  "active": [
    {
      "name": "Pledge",
      "unique": true,
      "effects": "Designate the target allied champion as being <i>Worthy</i>, forming a <img src=\"/img/icons/tether.webp\" class=\"tip-icon\" />tether between you and them. Champions can only be designated as <i>Worthy</i> by one <b>Knight's Vow</b> at a time. You cannot be designated as <i>Worthy</i> by an ally's <b>Knight's Vow</b>.",
      "range": 0
    }
  ],
  "stats": {
    "armor": 40,
    "health": 200,
    "healthRegen": 100,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 2300,
      "combined": 400,
      "sell": 920
    },
    "tags": [
      "TANK",
      "SUPPORT"
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