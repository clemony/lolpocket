export const LichBane: Item = {
  "name": "Lich Bane",
  "id": 3100,
  "rank": [
    "Legendary"
  ],
  "buildsFrom": [
    {
      "id": 3057,
      "name": "Sheen",
      "gold": 900
    },
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3100_mage_t3_lichbane.png",
  "simpleDescription": "Grants a bonus to next attack after spell cast",
  "passives": [
    {
      "name": "Spellblade",
      "unique": true,
      "effects": "After using an ability, your next basic attack within 10 seconds gains 50% <b>bonus</b> attack speed and deals 75% <b>base</b> AD (+40% AP) <b>bonus</b> magic damage on-hit (1.5 second cooldown, starts after using the empowered attack)."
    }
  ],
  "stats": {
    "abilityPower": 100,
    "percentMovespeed": 4,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 2900,
      "combined": 250,
      "sell": 1160
    },
    "purchasable": true,
    "tags": [
      "MAGE",
      "ONHIT_EFFECTS"
    ]
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
