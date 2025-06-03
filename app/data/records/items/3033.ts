export const MortalReminder: Item = {
  "name": "Mortal Reminder",
  "id": 3033,
  "rank": [
    "Legendary"
  ],
  "buildsFrom": [
    {
      "id": 3123,
      "name": "Executioner's Calling",
      "gold": 800
    },
    {
      "id": 3035,
      "name": "Last Whisper",
      "gold": 1450
    },
    {
      "id": 1018,
      "name": "Cloak of Agility",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3033_marksman_t3_mortalreminder.png",
  "simpleDescription": "Overcomes enemies with high Health recovery and Armor",
  "nicknames": [
    "lw",
    "grievous"
  ],
  "passives": [
    {
      "name": "Grievous Wounds",
      "unique": true,
      "effects": "Dealing physical damage to enemy champions inflicts them with <img src=\"/img/icons/grievous-wounds.webp\" class=\"tip-icon\" />Grievous Wounds for 3 seconds."
    }
  ],
  "stats": {
    "armorPenetration": 35,
    "attackDamage": 35,
    "criticalStrikeChance": 25
  },
  "shop": {
    "prices": {
      "total": 3300,
      "combined": 450,
      "sell": 1320
    },
    "purchasable": true,
    "tags": [
      "MARKSMAN"
    ]
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
