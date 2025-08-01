const item: Item =  {
  "name": "Recurve Bow",
  "id": 1043,
  "rank": "Epic",
  "buildsFrom": [
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3115,
      "name": "Nashor's Tooth",
      "gold": 2900
    },
    {
      "id": 3302,
      "name": "Terminus",
      "gold": 3000
    },
    {
      "id": 3091,
      "name": "Wit's End",
      "gold": 2800
    },
    {
      "id": 3124,
      "name": "Guinsoo's Rageblade",
      "gold": 3000
    },
    {
      "id": 3153,
      "name": "Blade of The Ruined King",
      "gold": 3200
    },
    {
      "id": 6672,
      "name": "Kraken Slayer",
      "gold": 3000
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1043_base_t2_recurvebow.png",
  "simpleDescription": "Greatly increases Attack Speed",
  "passives": [
    {
      "name": "Sting",
      "unique": false,
      "effects": "Basic attacks deal 15 <b>bonus</b> physical damage on-hit."
    }
  ],
  "stats": {
    "attackSpeed": 15
  },
  "shop": {
    "prices": {
      "total": 700,
      "combined": 450,
      "sell": 280
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
      "ONHIT_EFFECTS"
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