export const Zephyr: Item = {
  "name": "Zephyr",
  "id": 3172,
  "rank": [
    "Legendary"
  ],
  "buildsFrom": [
    {
      "id": 3006,
      "name": "Berserker's Greaves",
      "gold": 1100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_berserkersgreaves_64.png",
  "simpleDescription": "Mobility and Tenacity",
  "passives": [
    {
      "name": "Like the Wind",
      "unique": true,
      "effects": "Basic attacks on-hit grant a stack of <i>Like The Wind</i> for 6 seconds, refreshing on subsequent attacks. For each stack, gain 5% <b>bonus</b> movement speed ms, stacking up to 5 times for a total of 25% ms."
    }
  ],
  "stats": {
    "attackSpeed": 50,
    "percentMovespeed": 10,
    "abilityHaste": 30,
    "tenacity": 20
  },
  "shop": {
    "prices": {
      "total": 2500,
      "combined": 500,
      "sell": 1000
    },
    "purchasable": true,
    "tags": [
      "MARKSMAN",
      "FIGHTER"
    ]
  },
  "maps": [
    11,
    21,
    35
  ]
}
