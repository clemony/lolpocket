const item: Item =  {
  "name": "Sundered Sky",
  "id": 6610,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6610_sunderedsky.png",
  "passives": [
    {
      "name": "Lightshield Strike",
      "unique": true,
      "effects": "Your next basic attack against a champion is empowered to <img src=\"/img/icons/critical-strike.webp\" class=\"tip-icon\" />critically strike for 175% damage and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal you for (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />100% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />50%) <b>base</b> AD (+6% of your <b>missing</b> health) (8 second cooldown per target). Excess healing beyond <b>maximum</b> health is converted to <b>bonus</b> health for 8 seconds."
    }
  ],
  "stats": {
    "attackDamage": 40,
    "health": 400,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 3100,
      "combined": 500,
      "sell": 1240
    },
    "tags": [
      "FIGHTER"
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