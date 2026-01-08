const item: Item =  {
  "name": "Warden's Mail",
  "id": 3082,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    },
    {
      "id": 1029,
      "name": "Cloth Armor",
      "gold": 300
    }
  ],
  "buildsInto": [
    {
      "id": 3110,
      "name": "Frozen Heart",
      "gold": 2500
    },
    {
      "id": 323110,
      "name": "Frozen Heart",
      "gold": 2700
    },
    {
      "id": 3143,
      "name": "Randuin's Omen",
      "gold": 2700
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Rock Solid",
      "effects": "Every first incoming instance of post-mitigation <img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon\" />basic damage per cast instance is reduced by 15, with a <b>maximum</b> of 20% reduction each.",
      "unique": true
    }
  ],
  "stats": {
    "armor": 40
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 400,
    "total": 1000,
    "sell": 700
  }
}
export default item