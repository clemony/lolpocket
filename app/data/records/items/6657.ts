export const RodOfAges: Item = {
  "name": "Rod of Ages",
  "id": 6657,
  "rank": [
    "Legendary"
  ],
  "buildsFrom": [
    {
      "id": 1026,
      "name": "Blasting Wand",
      "gold": 850
    },
    {
      "id": 3803,
      "name": "Catalyst of Aeons",
      "gold": 1300
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6657_mage_t4_rodofages.png",
  "passives": [
    {
      "name": "Timeless",
      "unique": true,
      "effects": "This item gains 10 <b>bonus</b> health, 20 <b>bonus</b> mana, and 3 ability power every minute, up to 10 times, for a maximum of 100 <b>bonus</b> health, 200 <b>bonus</b> mana, and 30 ability power. Upon reaching maximum stacks, gain a level that preserves your current experience (cap remains at level 18)."
    },
    {
      "name": "Eternity",
      "unique": true,
      "effects": "Restore mana equal to 10% of pre-mitigation damage taken from champions, and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal for an amount equal to 25% of mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second."
    }
  ],
  "stats": {
    "abilityPower": 45,
    "health": 350,
    "mana": 400
  },
  "shop": {
    "prices": {
      "total": 2600,
      "combined": 450,
      "sell": 1040
    },
    "purchasable": true,
    "tags": [
      "MAGE"
    ]
  },
  "maps": [
    11,
    12,
    21,
    35
  ]
}
