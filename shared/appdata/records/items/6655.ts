const item: Item =  {
  "name": "Luden's Companion",
  "id": 6655,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3802,
      "name": "Lost Chapter",
      "gold": 1200
    },
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6655_casterscompanion.png",
  "simpleDescription": "High burst damage, good against fragile foes",
  "nicknames": [
    "boomstick",
    "gun"
  ],
  "passives": [
    {
      "name": "Fire",
      "cooldown": "12",
      "effects": "Gain 6 <i>Shot Charge</i> stacks to fire. Dealing ability damage to an enemy consumes all <i>Shot Charges</i> to deal 75 magic damage (+5% AP) <b>bonus</b> magic damage to them and, for each charge consumed beyond the first, an additional enemy within 600 units of them, firing an orb at each secondary target that impacts after 0.528 seconds to deal the damage. If the number of additional targets fired at is less than the number of charges consumed, deal an additional 15 - 75 (based on remaining Shot Charges) (+1% - 5% AP) magic damage to the primary target, for a total of <span class=\"text-nowrap whitespace-nowrap\">90 - 150</span> <span class=\"text-nowrap whitespace-nowrap\">(+6 - 10% AP).</span>",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 100,
    "mana": 600,
    "abilityHaste": 10
  },
  "shop": {
    "prices": {
      "total": 2750,
      "combined": 450,
      "sell": 1100
    },
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
export default item