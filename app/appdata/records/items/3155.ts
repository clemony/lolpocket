const item: Item =  {
  "name": "Hexdrinker",
  "id": 3155,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    },
    {
      "id": 1033,
      "name": "Null-Magic Mantle",
      "gold": 400
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "buildsInto": [
    {
      "id": 3156,
      "name": "Maw of Malmortius",
      "gold": 3100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3155_fighter_t2_hexdrinker.png",
  "simpleDescription": "Increases Attack Damage and Magic Resist",
  "passives": [
    {
      "name": "Lifeline",
      "unique": true,
      "effects": "If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />110 – 280 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />82.5 – 210) magic damage for 2.5 seconds.",
      "cooldown": "90"
    }
  ],
  "stats": {
    "attackDamage": 25,
    "magicResistance": 25
  },
  "shop": {
    "prices": {
      "total": 1300,
      "combined": 200,
      "sell": 520
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ASSASSIN"
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