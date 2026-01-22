// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Statikk Shiv",
  "id": 3087,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3144,
      "name": "Scout's Slingshot",
      "gold": 600
    },
    {
      "id": 6690,
      "name": "Rectrix",
      "gold": 775
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Electrospark",
      "effects": "Your next 3 basic attacks <img src=\"/img/icons/on-hit.webp\" class=\"tip-icon\" />on-hit within 8 seconds are empowered to deal 60 <b>bonus</b> magic damage, increased to 85 magic damage against non-champions. This bounces to the closest target within 500 units, repeating from the new target to strike up to 5 targets (25 – 10 (based on level) second cooldown, starts after using the first empowered attack)."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Electroshock",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them resets <i>Electrospark's</i> cooldown."
    }
  ],
  "stats": {
    "attackDamage": 45,
    "attackSpeed": 30,
    "percentMovespeed": 4
  },
  "description": "45 Attack Damage\n30% Attack Speed\n4% Move Speed\n\nElectrospark\nAttacks trigger chain lightning On-Hit, dealing magic damage with a cooldown.\n\nElectroshock \nTakedowns within 3 seconds of damaging the target reset Electrospark's cooldown.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 450,
    "total": 2700,
    "sell": 1890
  }
}
export default item