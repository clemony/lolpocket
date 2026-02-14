// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Zaz'Zak's Realmspike",
  "id": 3871,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3867,
      "name": "Bounty of Worlds",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Void Explosion",
      "effects": "Dealing ability damage to an enemy champion creates an explosion at their location after a 0.5-second delay, dealing 10 magic damage (+15% AP) (+3% of each target's <b>maximum</b> health) magic damage to enemies within the area, capped at 300 against <img src=\"/img/icons/monsters.webp\" class=\"tip-icon light:invert\" />monsters.",
      "cooldown": "10"
    },
    {
      "unique": true,
      "mythic": false,
      "effects": "Receives diminishing gold from excessive minion kills."
    }
  ],
  "active": [
    {
      "unique": true,
      "name": "Ward",
      "effects": "Consumes a charge to place a <img src=\"/img/icons/stealth-ward.webp\" class=\"tip-icon \" />Stealth Ward at the target location, which grants <img src=\"/img/icons/sight.webp\" class=\"tip-icon light:invert\" />sight of the surrounding area. Charges refill upon visiting the shop.",
      "range": 600
    }
  ],
  "stats": {
    "goldPer10": 9,
    "health": 200,
    "healthRegen": 75,
    "manaRegen": 75
  },
  "description": "200 Health\n75% Base Health Regen\n75% Base Mana Regen\n9 Gold Per 10 Seconds\n\nVoid Explosion\nDealing Ability damage to a champion causes an explosion that deals magic damage.\n\nActive (4 charges)\nPlaces an Invisible Stealth Ward that grants vision.",
  "gold": {
    "base": 0,
    "purchasable": true,
    "total": 400,
    "sell": 160
  },
  "maps": [
    11
  ]
}
export default item