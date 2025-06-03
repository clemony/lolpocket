export const SunfireAegis: Item = {
  "name": "Sunfire Aegis",
  "id": 3068,
  "rank": [
    "Legendary"
  ],
  "buildsFrom": [
    {
      "id": 6660,
      "name": "Bami's Cinder",
      "gold": 900
    },
    {
      "id": 1031,
      "name": "Chain Vest",
      "gold": 800
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3068_tank_t4_sunfireaegis.png",
  "simpleDescription": "High armor. Constantly deals damage to nearby enemies. Immobilize enemies to release a wave of damaging flame",
  "nicknames": [
    "funfire",
    "sunborn"
  ],
  "passives": [
    {
      "name": "Immolate",
      "unique": true,
      "effects": "Taking or dealing damage activates this passive for 3 seconds. Deal 20 (+1% <b>bonus</b> health) magic damage every second to enemies within 325 (+100% <b>bonus</b> size) units, with the damage being increased by 50% against <img src=\"/img/icons/minions.webp\" class=\"tip-icon\" />minions and <img src=\"/img/icons/monsters.webp\" class=\"tip-icon\" />monsters. This executes minions that would be killed by one more tick of damage."
    }
  ],
  "stats": {
    "armor": 50,
    "health": 350,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 2700,
      "combined": 1000,
      "sell": 1080
    },
    "purchasable": true,
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
