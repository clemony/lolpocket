export const ScoutsSlingshot: Item = {
  "name": "Scout's Slingshot",
  "id": 3144,
  "rank": [
    "Epic"
  ],
  "buildsFrom": [
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    },
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "buildsInto": [
    {
      "id": 3032,
      "name": "Yun Tal Wildarrows",
      "gold": 3000
    },
    {
      "id": 3087,
      "name": "Statikk Shiv",
      "gold": 2700
    },
    {
      "id": 3085,
      "name": "Runaan's Hurricane",
      "gold": 2650
    },
    {
      "id": 3094,
      "name": "Rapid Firecannon",
      "gold": 2650
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3144_scoutslingshot.png",
  "simpleDescription": "Activate to deal magic damage and slow target champion",
  "passives": [
    {
      "name": "Bullseye",
      "unique": true,
      "effects": "Damaging an enemy champion deals 40 <b>bonus</b> magic damage (40 second cooldown, reduced by 1 second )."
    }
  ],
  "stats": {
    "attackSpeed": 20
  },
  "shop": {
    "prices": {
      "total": 600,
      "combined": 100,
      "sell": 240
    },
    "purchasable": true,
    "tags": [
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
