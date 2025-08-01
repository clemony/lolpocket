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
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3871_zazzaksrealmspike.png",
  "passives": [
    {
      "name": "Void Explosion",
      "unique": true,
      "effects": "Dealing ability damage to an enemy champion creates an explosion at their location after a 0.5-second delay, dealing 10 magic damage (+15% AP) (+3% of each target's <b>maximum</b> health) magic damage to enemies within the area, capped at 300 against <img src=\"/img/icons/monsters.webp\" class=\"tip-icon\" />monsters.",
      "cooldown": "10"
    },
    {
      "unique": true,
      "effects": "Receives diminishing gold from excessive minion kills."
    }
  ],
  "active": [
    {
      "name": "Ward",
      "unique": true,
      "effects": "Consumes a charge to place a <img src=\"/img/icons/stealth-ward.webp\" class=\"tip-icon\" />Stealth Ward at the target location, which grants <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the surrounding area. Charges refill upon visiting the shop.",
      "range": 600
    }
  ],
  "stats": {
    "goldPer10": 5,
    "health": 200,
    "healthRegen": 75,
    "manaRegen": 75
  },
  "shop": {
    "prices": {
      "total": 400,
      "combined": 0,
      "sell": 160
    },
    "tags": [
      "SUPPORT"
    ]
  },
  "maps": [
    11
  ]
}
export default item