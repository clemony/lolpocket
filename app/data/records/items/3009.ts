const item: Item =  {
  "name": "Boots of Swiftness",
  "id": 3009,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3170,
      "name": "Swiftmarch",
      "gold": 1500
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3009_class_t2_bootsofswiftness.png",
  "simpleDescription": "Enhances Move Speed and reduces the effect of slows",
  "nicknames": [
    "swifties"
  ],
  "passives": [
    {
      "name": "Fleetfooted",
      "unique": true,
      "effects": "Gain 25% slow resist."
    }
  ],
  "stats": {
    "flatMovespeed": 55
  },
  "shop": {
    "prices": {
      "total": 1000,
      "combined": 700,
      "sell": 400
    }
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item