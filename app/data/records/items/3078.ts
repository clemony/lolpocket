const item: Item =  {
  "name": "Trinity Force",
  "id": 3078,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3057,
      "name": "Sheen",
      "gold": 900
    },
    {
      "id": 3044,
      "name": "Phage",
      "gold": 1100
    },
    {
      "id": 3051,
      "name": "Hearthbound Axe",
      "gold": 1200
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3078_fighter_t4_trinityforce.png",
  "simpleDescription": "Tons of Damage",
  "nicknames": [
    "triforce",
    "tons of damage",
    "3333"
  ],
  "passives": [
    {
      "name": "Spellblade",
      "unique": true,
      "effects": "After using an ability, your next basic attack within 10 seconds deals 200% <b>base</b> AD <b>bonus</b> physical damage on-hit (1.5 second cooldown, starts after using the empowered attack)."
    },
    {
      "name": "Quicken",
      "unique": true,
      "effects": "Basic attacks on-hit grant 20 <b>bonus</b> movement speed for 2 seconds"
    }
  ],
  "stats": {
    "attackDamage": 36,
    "attackSpeed": 30,
    "health": 333,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 3333,
      "combined": 133,
      "sell": 1333
    },
    "tags": [
      "FIGHTER",
      "MARKSMAN",
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