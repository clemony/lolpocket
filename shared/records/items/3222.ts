const item: Item =  {
  "name": "Mikael's Blessing",
  "id": 3222,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3222_enchanter_t3_mikaelsblessing.png",
  "simpleDescription": "Activate to remove all disabling effects from an allied champion",
  "nicknames": [
    "crucible",
    "michael"
  ],
  "active": [
    {
      "name": "Purify",
      "effects": "Remove all crowd control debuffs (except <img src=\"/img/icons/airborne.webp\" class=\"tip-icon\" />Airborne, <img src=\"/img/icons/blind.webp\" class=\"tip-icon\" />Blind, <img src=\"/img/icons/disarm.webp\" class=\"tip-icon\" />Disarm, <img src=\"/img/icons/nearsight.webp\" class=\"tip-icon\" />Nearsight, and <img src=\"/img/icons/suppression.webp\" class=\"tip-icon\" />Suppression) from yourself or the target allied champion and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal the target for 100 – 250 (based on target's level).",
      "range": 0,
      "unique": true
    }
  ],
  "stats": {
    "healAndShieldPower": 12,
    "health": 250,
    "manaRegen": 100,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2300,
      "combined": 900,
      "sell": 920
    },
    "tags": [
      "SUPPORT"
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