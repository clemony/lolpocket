// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Bloodthirster",
  "id": 3072,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1038,
      "name": "B. F. Sword",
      "gold": 1300
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 1053,
      "name": "Vampiric Scepter",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "bt",
    "healsword"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Ichorshield",
      "effects": "Convert the <img src=\"/img/icons/healing.webp\" class=\"tip-icon \" />healing received from <img src=\"/img/icons/life-steal.webp\" class=\"tip-icon\" />life steal in excess of <b>maximum</b> health into a <img src=\"/img/icons/shield.webp\" class=\"tip-icon light:invert\" />shield for up to 165 – 315 (based on level), which lasts until destroyed."
    }
  ],
  "stats": {
    "attackDamage": 80,
    "lifesteal": 15
  },
  "description": "80 Attack Damage\n15% Life Steal\n\nIchorshield\nConvert excess healing from your Lifesteal to a Shield.",
  "gold": {
    "base": 325,
    "purchasable": true,
    "total": 3400,
    "sell": 2380
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item