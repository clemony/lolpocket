const item: Item =  {
  "name": "Cryptbloom",
  "id": 3137,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 4630,
      "name": "Blighting Jewel",
      "gold": 1100
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Activate to remove all debuffs and grant massive Move Speed",
  "passives": [
    {
      "name": "Life From Death",
      "cooldown": "60",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion while alive and within 3 seconds of damaging them summons a nova that radiates from the location of their death over 1.75 seconds, <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />healing you and allied champions hit for 100 (+20% AP).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 75,
    "percentMagicPenetration": 30,
    "abilityHaste": 20
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 200,
    "total": 3000,
    "sell": 2100
  }
}
export default item