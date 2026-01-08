const item: Item =  {
  "name": "Redemption",
  "id": 3107,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3114,
      "name": "Forbidden Idol",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Activate to heal allies and damage enemies in an area",
  "nicknames": [
    "burn"
  ],
  "active": [
    {
      "name": "Intervention",
      "effects": "Call upon a 550-radius beam of light to strike upon the target location after 2.5 seconds, granting <img src=\"/img/icons/sight.webp\" class=\"tip-icon\" />sight of the area for the duration. Allies within the area are <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />healed for 150 – 350 (based on target's level), while enemy champions within take 10% of target's <b>maximum</b> health as true damage. <b>Can be used while dead.</b>",
      "range": 5500,
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 30,
    "healAndShieldPower": 10,
    "manaRegen": 100,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 900,
    "total": 2300,
    "sell": 1610
  }
}
export default item