const item: Item =  {
  "name": "Overlord's Bloodmail",
  "id": 2501,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7111_overlordsbloodmail.png",
  "passives": [
    {
      "name": "Tyranny",
      "unique": true,
      "effects": "Gain <b>bonus</b> attack damage equal to 2.5% <b>bonus</b> health."
    },
    {
      "name": "Retribution",
      "unique": true,
      "effects": "Gain <b>bonus</b> attack damage equal to 0% – 70% (based on missing health) of your <b>total</b> attack damage from other sources."
    }
  ],
  "stats": {
    "attackDamage": 30,
    "health": 550
  },
  "shop": {
    "prices": {
      "total": 3300,
      "combined": 1000,
      "sell": 1320
    },
    "tags": [
      "FIGHTER",
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
export default item