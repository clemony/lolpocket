const item: Item =  {
  "name": "Puppeteer",
  "id": 447123,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447123_puppeteer.png",
  "passives": [
    {
      "name": "Pull Their Strings",
      "unique": true,
      "effects": "Basic attacks on-hit against enemy champions apply a <i>Puppeteer</i> stack for 15 seconds, stacking up to 4 times. The fourth stack against a target consumes them all to render the target <img src=\"/img/icons/berserk.webp\" class=\"tip-icon\" />berserk for 2 seconds, causing them to gain 50% as (+150% of your heal and shield power) <b>bonus</b> attack speed and 40% <b>bonus</b> movement speed (25 second cooldown). If only one champion is alive on the enemy team, instead <img src=\"/img/icons/fear.webp\" class=\"tip-icon\" />fear the target for the same duration."
    },
    {
      "unique": true,
      "effects": "Granting yourself or an ally a <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal, <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield, or ability-sourced buff reduces the cooldown of <i>Pull Their Strings</i> by 5 seconds, once per cast."
    }
  ],
  "stats": {
    "attackSpeed": 30,
    "healAndShieldPower": 15,
    "manaRegen": 150,
    "abilityHaste": 40
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
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