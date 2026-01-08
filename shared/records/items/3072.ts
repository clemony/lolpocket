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
  "simpleDescription": "Grants Attack Damage, Life Steal and Life Steal now overheals",
  "nicknames": [
    "bt",
    "healsword"
  ],
  "passives": [
    {
      "name": "Ichorshield",
      "effects": "Convert the <img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />healing received from <img src=\"/img/icons/life-steal.webp\" class=\"tip-icon\" />life steal in excess of <b>maximum</b> health into a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for up to 165 – 315 (based on level), which lasts until destroyed.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 80,
    "lifesteal": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 325,
    "total": 3400,
    "sell": 2380
  }
}
export default item