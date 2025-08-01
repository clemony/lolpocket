const item: Item =  {
  "name": "Experimental Hexplate",
  "id": 3073,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 3044,
      "name": "Phage",
      "gold": 1100
    },
    {
      "id": 1042,
      "name": "Dagger",
      "gold": 250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3073_hexaegis.png",
  "simpleDescription": "Increases maximum Mana as Mana is spent",
  "passives": [
    {
      "name": "Hexcharged",
      "unique": true,
      "effects": "Gain 30 ultimate haste."
    },
    {
      "name": "Overdrive",
      "unique": true,
      "effects": "Upon casting your ultimate ability, enter <i>Overdrive</i> to gain 30% <b>bonus</b> attack speed and 15% <b>bonus</b> movement speed for 8 seconds (30 second cooldown, starts on ultimate cast)."
    }
  ],
  "stats": {
    "attackDamage": 40,
    "attackSpeed": 20,
    "health": 450
  },
  "shop": {
    "prices": {
      "total": 3000,
      "combined": 500,
      "sell": 1200
    },
    "tags": [
      "FIGHTER",
      "ABILITY_HASTE",
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