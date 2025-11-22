const item: Item =  {
  "name": "Doran's Blade",
  "id": 1055,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.23/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1055_marksman_t1_doransblade.png",
  "simpleDescription": "Good starting item for attackers",
  "nicknames": [
    "dblade"
  ],
  "passives": [
    {
      "name": "Life Draining",
      "effects": "<img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />Heal for 2.5% of post-mitigation damage dealt, reduced to 33.3% effectiveness for area of effect and pet damage.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 10,
    "health": 80
  },
  "shop": {
    "prices": {
      "total": 450,
      "combined": 450,
      "sell": 180
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ASSASSIN",
      "LIFESTEAL_VAMP"
    ]
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item