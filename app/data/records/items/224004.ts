const item: Item =  {
  "name": "Spectral Cutlass",
  "id": 224004,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4004_assassin_t3_spectralcutlass.png",
  "active": [
    {
      "name": "Soul Anchor",
      "unique": true,
      "effects": "Mark your current location. After 4 seconds, you automatically <img src=\"/img/icons/blink.webp\" class=\"tip-icon\" />blink to the marked location after a 0.5-second delay. <i>Soul Anchor</i> may be recast within its duration to manually blink to the marked location after the same delay (45 second cooldown, starts after the blink).",
      "cooldown": 45
    }
  ],
  "stats": {
    "attackDamage": 50,
    "lethality": 15,
    "percentMovespeed": 4
  },
  "shop": {
    "prices": {
      "total": 2800,
      "combined": 2500,
      "sell": 1120
    },
    "tags": [
      "ASSASSIN"
    ]
  },
  "maps": [
    30
  ]
}
export default item