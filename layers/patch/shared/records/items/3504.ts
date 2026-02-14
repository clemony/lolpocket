// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

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
  "nicknames": [
    "censer"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Sanctify",
      "effects": "<img src=\"/img/icons/heal.webp\" class=\"tip-icon light:invert\" />Healing or <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shielding allied champions (<i>excluding yourself</i>) enhances you and them for 6 seconds, granting 25% <b>bonus</b> attack speed and 20 <b>bonus</b> magic damage on-hit on basic attacks."
    }
  ],
  "stats": {
    "abilityPower": 45,
    "healAndShieldPower": 10,
    "manaRegen": 125,
    "percentMovespeed": 4
  },
  "description": "45 Ability Power\n10% Heal and Shield Power\n125% Base Mana Regen\n4% Move Speed\n\nSanctify\nHealing or Shielding an ally enhances you both for 6 seconds, granting 25% Attack Speed and 20 magic damage On-Hit.",
  "gold": {
    "base": 700,
    "purchasable": true,
    "total": 2200,
    "sell": 1540
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item