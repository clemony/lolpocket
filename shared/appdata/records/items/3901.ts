const item: Item =  {
  "name": "Fire at Will",
  "id": 3901,
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "requiredChampion": "Gangplank",
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3901_champ_t0_fireatwillcircle.png",
  "simpleDescription": "Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
  "passives": [
    {
      "name": "Fire at Will",
      "unique": true,
      "effects": "{{ai|Cannon Barrage|Gangplank|Gangplank}} fires 2 additional clusters of 3 waves over the duration at an increased rate of fire (1 cluster per 1.33 seconds), for a total of 18 waves over the 8 seconds."
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 0,
      "combined": 0,
      "sell": 0
    },
    "purchasable": false
  },
  "maps": [
    11,
    12,
    21,
    30,
    35
  ]
}
export default item