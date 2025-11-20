const item: Item =  {
  "name": "Serpent's Fang",
  "id": 6695,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6695_assassin_t3_serpentsfang.png",
  "passives": [
    {
      "name": "Shield Reaver",
      "effects": "Dealing damage to an enemy champion inflicts them with venom for 3 seconds, reducing any <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shields they gain within the duration by (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />50% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />35%), and if the target was not already afflicted by the venom, reducing all of their active shields by the same amount.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 15
  },
  "shop": {
    "prices": {
      "total": 2500,
      "combined": 625,
      "sell": 1000
    },
    "tags": [
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