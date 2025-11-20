const item: Item =  {
  "name": "Staff of Flowing Water",
  "id": 6616,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3744_enchanter_t3_staffofflowingwater.png",
  "simpleDescription": "Your heals and shields reduce crowd control and grant Move Speed",
  "nicknames": [
    "nami"
  ],
  "passives": [
    {
      "name": "Rapids",
      "effects": "<img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />Healing or <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shielding allied champions (<i>excluding yourself</i>) grants you and them 45 ability power for 6 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 35,
    "healAndShieldPower": 10,
    "manaRegen": 125,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2250,
      "combined": 800,
      "sell": 900
    },
    "tags": [
      "SUPPORT"
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