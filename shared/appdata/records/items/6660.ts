const item: Item =  {
  "name": "Bami's Cinder",
  "id": 6660,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    },
    {
      "id": 2022,
      "name": "Glowing Mote",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3068,
      "name": "Sunfire Aegis",
      "gold": 2700
    },
    {
      "id": 6664,
      "name": "Hollow Radiance",
      "gold": 2800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6660_tank_t2_bamiscinder.png",
  "nicknames": [
    "fire"
  ],
  "passives": [
    {
      "name": "Immolate",
      "effects": "Taking or dealing damage activates this passive for 3 seconds. Deal 15 magic damage every second to enemies within 325 (+100% <b>bonus</b> size) units, with the damage being increased by 50% against <img src=\"/img/icons/minions.webp\" class=\"tip-icon\" />minions and <img src=\"/img/icons/monsters.webp\" class=\"tip-icon\" />monsters. This executes minions that would be killed by one more tick of damage.",
      "unique": true
    }
  ],
  "stats": {
    "health": 150,
    "abilityHaste": 5
  },
  "shop": {
    "prices": {
      "total": 900,
      "combined": 250,
      "sell": 360
    },
    "tags": [
      "TANK"
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