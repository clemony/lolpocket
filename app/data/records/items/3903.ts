const item: Item =  {
  "name": "Raise Morale",
  "id": 3903,
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "requiredChampion": "Gangplank",
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3903_champ_t0_raisemoralecircle.png",
  "simpleDescription": "Allies in the Cannon Barrage gain <speed>bonus Move Speed</speed>.",
  "passives": [
    {
      "name": "Raise Morale",
      "unique": true,
      "effects": "{{ci|Gangplank|Gangplank}} and his allies within {{ai|Cannon Barrage|Gangplank|Gangplank}} gain 40% <b>bonus</b> movement speed, which persists for 2 seconds after leaving the area."
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