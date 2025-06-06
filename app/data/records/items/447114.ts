const item: Item =  {
  "name": "Reverberation",
  "id": 447114,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447114_reverberation.png",
  "passives": [
    {
      "name": "Reverberate",
      "unique": true,
      "effects": "After 2 seconds from the start of the combat phase in each round, gain 5 <b>bonus</b> health per 1% <b>bonus</b> attack speed."
    },
    {
      "name": "Resonate",
      "unique": true,
      "effects": "Basic attacks on-hit deal 10 magic damage (+2% of your <b>bonus</b> health) <b>bonus</b> magic damage."
    },
    {
      "name": "Rumble",
      "unique": true,
      "effects": "<img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />Immobilizing an enemy champion generates 25 stacks of <i>Reverberation</i> for 10 seconds, stacking up to 100 times and refreshing on-hit as well as on subsequent immobilizations. At <b>maximum</b> stacks and upon <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilizing an enemy, your on-hit effects are applied to them 3 times."
    }
  ],
  "stats": {
    "armor": 35,
    "attackSpeed": 40,
    "magicResistance": 35
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "TANK"
    ]
  },
  "maps": [
    30
  ]
}
export default item