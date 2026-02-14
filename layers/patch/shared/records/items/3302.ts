// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Terminus",
  "id": 3302,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3051,
      "name": "Hearthbound Axe",
      "gold": 1200
    },
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "bow",
    "sentinel"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Shadow",
      "effects": "Basic attacks deal 30 <b>bonus</b> magic damage on-hit."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Juxtaposition",
      "effects": "Basic attacks <img src=\"/img/icons/on-hit.webp\" class=\"tip-icon \" />on-hit against champions alternate between <i>Light</i> and <i>Dark</i> hits, each one granting a bonus for 5 seconds that stacks up to 3 times. <i>Light</i> hits grant 1 – 14 (based on level) <b>bonus</b> armor and <b>bonus</b> magic resistance while <i>Dark</i> hits grant 10% armor penetration and magic penetration, for a total of 1 – 14 (based on level) <b>bonus</b> resistances and 30% resistances penetration at maximum stacks of each."
    }
  ],
  "stats": {
    "attackDamage": 30,
    "attackSpeed": 35
  },
  "description": "30 Attack Damage\n35% Attack Speed\n\nShadow\nAttacks deal 30 bonus magic damage On-Hit.\n\nJuxtaposition\nAlternate between Light and Dark Attacks against champions: Light Attacks grant Armor and Magic Resist for 5s. Dark Attacks grant 10% Armor Penetration and Magic Penetration for 5s. ",
  "gold": {
    "base": 1100,
    "purchasable": true,
    "total": 3000,
    "sell": 2100
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item