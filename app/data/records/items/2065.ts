const item: Item =  {
  "name": "Shurelya's Battlesong",
  "id": 2065,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    },
    {
      "id": 4642,
      "name": "Bandleglass Mirror",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2065_tank_t4_shurelyasbattlesong.png",
  "simpleDescription": "Activate to speed up nearby allies.",
  "nicknames": [
    "shurelya",
    "reverie"
  ],
  "active": [
    {
      "name": "Inspiring Speech",
      "unique": true,
      "effects": "Grants you and all allies within 1000 units 30% <b>bonus</b> movement speed for 4 seconds."
    }
  ],
  "stats": {
    "abilityPower": 50,
    "manaRegen": 125,
    "percentMovespeed": 4,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2200,
      "combined": 400,
      "sell": 880
    },
    "tags": [
      "SUPPORT",
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