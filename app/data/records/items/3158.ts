const item: Item =  {
  "name": "Ionian Boots of Lucidity",
  "id": 3158,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 1001,
      "name": "Boots",
      "gold": 300
    },
    {
      "id": 2022,
      "name": "Glowing Mote",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3171,
      "name": "Crimson Lucidity",
      "gold": 1400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3158_class_t2_ionianbootsoflucidity.png",
  "simpleDescription": "Increases Move Speed and Cooldown Reduction",
  "passives": [
    {
      "name": "Ionian Insight",
      "unique": true,
      "effects": "Gain 10 summoner spell haste."
    }
  ],
  "stats": {
    "flatMovespeed": 45,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 900,
      "combined": 350,
      "sell": 360
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