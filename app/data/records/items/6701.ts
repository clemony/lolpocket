const item: Item =  {
  "name": "Opportunity",
  "id": 6701,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    },
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
    },
    {
      "id": 1036,
      "name": "Long Sword",
      "gold": 350
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6701_opportunity.png",
  "passives": [
    {
      "name": "Preparation",
      "unique": true,
      "effects": "After being out-of-combat with enemy champions for 8 seconds, gain (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />11 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />5) lethality. This bonus remains for 3 seconds after dealing damage to an enemy champion."
    },
    {
      "name": "Extraction",
      "unique": true,
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them grants you 200 <b>bonus</b> movement speed that decays over 1.5 seconds."
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 18
  },
  "shop": {
    "prices": {
      "total": 2700,
      "combined": 475,
      "sell": 1080
    },
    "tags": [
      "ASSASSIN",
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