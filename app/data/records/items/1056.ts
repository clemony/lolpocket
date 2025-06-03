export const DoransRing: Item = {
  "name": "Doran's Ring",
  "id": 1056,
  "rank": [
    "Starter"
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1056_mage_t1_doransring.png",
  "simpleDescription": "Good starting item for casters",
  "nicknames": [
    "dring"
  ],
  "passives": [
    {
      "name": "Restoration",
      "unique": true,
      "effects": "Restore 1.25 mana every second. If you cannot gain mana, <img src=\"/img/icons/healing.webp\" class=\"tip-icon\" />heal 0.55 health instead."
    },
    {
      "name": "Helping Hand",
      "unique": true,
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions."
    }
  ],
  "stats": {
    "abilityPower": 18,
    "health": 90
  },
  "shop": {
    "prices": {
      "total": 400,
      "combined": 400,
      "sell": 160
    },
    "purchasable": true,
    "tags": [
      "MAGE",
      "MANA_AND_REG",
      "ONHIT_EFFECTS"
    ]
  },
  "maps": [
    11,
    12,
    21
  ]
}
