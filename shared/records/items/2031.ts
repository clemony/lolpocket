const item: Item =  {
  "name": "Refillable Potion",
  "id": 2031,
  "rank": "Consumable",
  "buildsInto": [
    {
      "id": 2033,
      "name": "Corrupting Potion",
      "gold": 500
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.23/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/autoatlas/smallicons/2031_refillablepotion_64px.milkshake_env.png",
  "simpleDescription": "Restores Health over time. Refills at shop.",
  "nicknames": [
    "consumable",
    "Green Potion"
  ],
  "passives": [
    {
      "effects": "Holds charges that refill upon visiting the shop.",
      "unique": true
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 150,
      "combined": 150,
      "sell": 60
    },
    "tags": [
      "HEALTH_AND_REG"
    ]
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item