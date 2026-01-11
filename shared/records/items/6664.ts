// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Hollow Radiance",
  "id": 6664,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 6660,
      "name": "Bami's Cinder",
      "gold": 900
    },
    {
      "id": 3211,
      "name": "Spectre's Cowl",
      "gold": 1250
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "catastrophe"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Immolate",
      "effects": "Taking or dealing damage activates this passive for 3 seconds. Deal 15 (+1% <b>bonus</b> health) magic damage every second to enemies within 325 (+100% <b>bonus</b> size) units, with the damage being increased to 125% against <img src=\"/img/icons/minions.webp\" class=\"tip-icon\" />minions and <img src=\"/img/icons/monsters.webp\" class=\"tip-icon\" />monsters. This executes minions that would be killed by one more tick of damage."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Desolate",
      "effects": "Killing a non-champion unit causes an eruption around their death location that deals 30 (+2% <b>bonus</b> health) magic damage to enemies within 350 units. Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them causes a larger eruption that deals 60 (+4% <b>bonus</b> health) magic damage to enemies within 500 units."
    }
  ],
  "stats": {
    "health": 400,
    "healthRegen": 100,
    "magicResistance": 40,
    "abilityHaste": 10
  },
  "description": "400 Health\n40 Magic Resist\n10 Ability Haste\n100% Base Health Regen\n\nImmolate\nAfter taking or dealing damage, deal magic damage per second to nearby enemies for 3 seconds. \n\nDesolate\nKilling an enemy deals magic damage around them.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 650,
    "total": 2800,
    "sell": 1960
  }
}
export default item