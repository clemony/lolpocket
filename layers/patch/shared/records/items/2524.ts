// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Bandlepipes",
  "id": 2524,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Fanfare",
      "effects": "<img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />Slowing or <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilizing an enemy champion empowers you with <i>Fanfare</i> for (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />8 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />4) seconds, granting you 20 <b>bonus</b> movement speed. While empowered, you and nearby allied champions also gain (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />30 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />20)% <b>bonus</b> attack speed."
    }
  ],
  "stats": {
    "armor": 20,
    "health": 200,
    "magicResistance": 20,
    "abilityHaste": 15
  },
  "description": "200 Health\n15 Ability Haste\n20 Armor\n20 Magic Resist\n\nFanfare\nSlowing or Immobilizing an enemy champion grants Fanfare for  seconds. Fanfare grants you 20 Move Speed. While you have Fanfare, nearby allies, including yourself, gain  Attack Speed.",
  "gold": {
    "base": 500,
    "total": 2000,
    "sell": 1400
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item