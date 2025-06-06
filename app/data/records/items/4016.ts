const item: Item =  {
  "name": "Wordless Promise",
  "id": 4016,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4016_wordlesspromise.png",
  "passives": [
    {
      "name": "Promise",
      "unique": true,
      "effects": "While your <i>Promised</i> ally is tethered to you, gain ability power equal to 20% of <i>Promised</i> ally's AP, and grant your <i>Promised</i> ally ability haste equal to 20% of your ability haste. <i>Increases and decreases to each teammate's stats recalculate this effect.</i>"
    }
  ],
  "active": [
    {
      "name": "Promise",
      "unique": true,
      "effects": "Make a <i>Promise</i> to the target allied champion, forming a <img src=\"/img/icons/tether.webp\" class=\"tip-icon\" />tether between you and them."
    }
  ],
  "stats": {
    "abilityPower": 50,
    "healAndShieldPower": 25,
    "abilityHaste": 25
  },
  "shop": {
    "prices": {
      "total": 2500,
      "combined": 2500,
      "sell": 1000
    },
    "tags": [
      "SUPPORT"
    ]
  },
  "maps": [
    30
  ]
}
export default item