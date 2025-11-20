const item: Item =  {
  "name": "Horizon Focus",
  "id": 4628,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4628_mage_t3_horizonfocus.png",
  "simpleDescription": "Immobilizing a champion causes lightning to strike them",
  "nicknames": [
    "snipe",
    "lock on"
  ],
  "passives": [
    {
      "name": "Hypershot",
      "effects": "Dealing ability damage to a champion at 600 or more units away from the cast position <img src=\"/img/icons/standard-sight.webp\" class=\"tip-icon\" />reveals them for 6 seconds.",
      "unique": true
    },
    {
      "name": "Focus",
      "cooldown": "30",
      "effects": "Upon triggering <i>Hypershot</i>, grant <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the area 1400 units around the target for 2 seconds and apply <i>Hypershot's</i> effects to enemy champions within the area for 3 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 115,
    "abilityHaste": 25
  },
  "shop": {
    "prices": {
      "total": 2800,
      "combined": 200,
      "sell": 1120
    },
    "tags": [
      "MAGE"
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