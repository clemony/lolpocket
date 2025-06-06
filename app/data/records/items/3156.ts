const item: Item =  {
  "name": "Maw of Malmortius",
  "id": 3156,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3155,
      "name": "Hexdrinker",
      "gold": 1300
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
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3156_fighter_t3_mawofmalmortius.png",
  "simpleDescription": "Grants bonus Attack Damage when Health is low",
  "passives": [
    {
      "name": "Lifeline",
      "unique": true,
      "effects": "If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />200 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />150) magic damage (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />150% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />112.5%) <b>bonus</b> AD) magic damage for 3 seconds. Additionally, triggering this effect grants you 10% omnivamp until the end of combat.",
      "cooldown": "90"
    }
  ],
  "stats": {
    "attackDamage": 60,
    "magicResistance": 40,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 3100,
      "combined": 750,
      "sell": 1240
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