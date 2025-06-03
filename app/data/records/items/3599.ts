export const BlackSpear: Item = {
  "name": "Black Spear",
  "id": 3599,
  "rank": [
    "Starter"
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "requiredChampion": "Kalista",
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3599_kalistapassiveitem.png",
  "simpleDescription": "Kalista's spear that binds an Oathsworn Ally.",
  "active": [
    {
      "name": "Oathsworn Bond",
      "unique": true,
      "effects": "Consumes this item to initiate a 3.5-second cast time and a 3-second <img src=\"/img/icons/channel.webp\" class=\"tip-icon\" />channel afterwards from the user and the target allied champion, both becoming bound allies. The target is unable to act for 6 seconds after the channel's duration. Afterwards, the target becomes an <i>Oathsworn</i>."
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 0,
      "combined": 0,
      "sell": 0
    },
    "purchasable": true
  },
  "maps": [
    11,
    12,
    21,
    30,
    35
  ]
}
