const item: Item =  {
  "name": "Seraph's Embrace",
  "id": 3040,
  "rank": "Legendary",
  "specialRecipe": 3003,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3048_mage_t3_seraphsembrace.png",
  "passives": [
    {
      "name": "Awe",
      "unique": true,
      "effects": "Grants ability power equal to 2% <b>bonus</b> mana."
    },
    {
      "name": "Lifeline",
      "unique": true,
      "effects": "If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield for 3 seconds that absorbs damage equal to 18% <b>maximum</b> mana for 3 seconds.",
      "cooldown": "90"
    }
  ],
  "stats": {
    "abilityPower": 70,
    "mana": 1000,
    "abilityHaste": 25
  },
  "shop": {
    "prices": {
      "total": 2900,
      "combined": 2900,
      "sell": 1160
    },
    "purchasable": false
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
export default item