const item: Item =  {
  "name": "Ardent Censer",
  "id": 3504,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3113,
      "name": "Aether Wisp",
      "gold": 900
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
  "simpleDescription": "Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.",
  "nicknames": [
    "censer"
  ],
  "passives": [
    {
      "name": "Sanctify",
      "effects": "<img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />Healing or <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shielding allied champions (<i>excluding yourself</i>) enhances you and them for 6 seconds, granting 25% <b>bonus</b> attack speed and 20 <b>bonus</b> magic damage on-hit on basic attacks.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 45,
    "healAndShieldPower": 10,
    "manaRegen": 125,
    "percentMovespeed": 4
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 700,
    "total": 2200,
    "sell": 1540
  }
}
export default item