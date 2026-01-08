const item: Item =  {
  "name": "Death's Dance",
  "id": 6333,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2019,
      "name": "Steel Sigil",
      "gold": 1100
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "dd"
  ],
  "passives": [
    {
      "name": "Ignore Pain",
      "effects": "Reduces (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />30% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />10%) of all post-mitigation physical damage and magic damage damage received and instead stores the damage to successively take it as true damage over 3 seconds, dealing a third of the stored damage each second.",
      "unique": true
    },
    {
      "name": "Defy",
      "effects": "If an enemy champion dies within 3 seconds of you damaging them, removes <i>Ignore Pain's</i> remaining stored damage and <img src=\"/img/icons/heals.webp\" class=\"tip-icon\" />heals you for 75% <b>bonus</b> AD over 2 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 50,
    "attackDamage": 60,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 275,
    "total": 3300,
    "sell": 2310
  }
}
export default item