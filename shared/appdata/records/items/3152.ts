const item: Item =  {
  "name": "Hextech Rocketbelt",
  "id": 3152,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
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
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3152_mage_t4_hextechrocketbelt.png",
  "simpleDescription": "Activate to dash forward and unleash a fiery explosion",
  "nicknames": [
    "protobelt",
    "rocket belt"
  ],
  "active": [
    {
      "name": "Supersonic",
      "unique": true,
      "effects": "<img src=\"/img/icons/dash.webp\" class=\"tip-icon\" />Dash 275 units in the target direction, though not through terrain, then unleash an arc of 7 rockets forward which upon collision explode in a 185-radius area. Enemies within 85 units of your dash, a 400 unit distance behind you {{bug|2|2}}, and ones hit by any rocket's explosion are dealt 100 (+10% AP) magic damage, once per cast.",
      "range": 0
    }
  ],
  "stats": {
    "abilityPower": 70,
    "health": 300,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 2650,
      "combined": 300,
      "sell": 1060
    },
    "tags": [
      "MAGE",
      "MOVEMENT"
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