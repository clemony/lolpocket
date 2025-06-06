const item: Item =  {
  "name": "Redemption",
  "id": 3107,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3107_enchanter_t3_redemption.png",
  "simpleDescription": "Activate to heal allies and damage enemies in an area",
  "active": [
    {
      "name": "Intervention",
      "unique": true,
      "effects": "Call upon a 550-radius beam of light to strike upon the target location after 2.5 seconds, granting <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the area for the duration. Allies within the area are <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />healed for 200 – 400 (based on target's level), while enemy champions within take 10% of target's <b>maximum</b> health as true damage. <b>Can be used while dead.</b>",
      "range": 5500
    }
  ],
  "stats": {
    "healAndShieldPower": 10,
    "health": 200,
    "manaRegen": 100,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2300,
      "combined": 900,
      "sell": 920
    },
    "tags": [
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