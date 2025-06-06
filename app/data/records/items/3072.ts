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
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3072_fighter_t3_bloodthirster.png",
  "simpleDescription": "Grants Attack Damage, Life Steal and Life Steal now overheals",
  "nicknames": [
    "bt",
    "healsword"
  ],
  "passives": [
    {
      "name": "Ichorshield",
      "unique": true,
      "effects": "Convert the <img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />healing received from <img src=\"/img/icons/life-steal.webp\" class=\"tip-icon\" />life steal in excess of <b>maximum</b> health into a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for up to 165 – 315 (based on level), which lasts until destroyed."
    }
  ],
  "stats": {
    "attackDamage": 80,
    "lifesteal": 15
  },
  "shop": {
    "prices": {
      "total": 3400,
      "combined": 325,
      "sell": 1360
    },
    "tags": [
      "MARKSMAN"
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