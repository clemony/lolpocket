// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Reverberation",
  "id": 447114,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Reverberate",
      "effects": "After 2 seconds from the start of the combat phase in each round, gain 5 <b>bonus</b> health per 1% <b>bonus</b> attack speed."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Resonate",
      "effects": "Basic attacks <img src=\"/img/icons/on-hit.webp\" class=\"tip-icon\" />on-hit deal 10 magic damage (+2% of your <b>bonus</b> health) <b>bonus</b> magic damage."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Rumble",
      "effects": "<img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />Immobilizing an enemy champion generates 25 stacks of <i>Reverberation</i> for 10 seconds, stacking up to 100 times and refreshing <img src=\"/img/icons/on-hit.webp\" class=\"tip-icon\" />on-hit as well as on subsequent immobilizations. At <b>maximum</b> stacks and upon <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilizing an enemy, your on-hit effects are applied to them 3 times."
    }
  ],
  "stats": {
    "armor": 35,
    "attackSpeed": 40,
    "magicResistance": 35
  },
  "description": "35 Armor\n35 Magic Resist\n40% Attack Speed\n\nReverberate\nAt combat start gain 50 max Health per 10% bonus Attack Speed.\n\nResonate\nAttacks deal  magic damage On-Hit.\n\nRumble\nImmobilizing or Grounding an enemy champion grants 25 stacks for 10 seconds. While at 100 stacks, Immobilizing an enemy champion applies On-Hit effects 3 times.",
  "maps": [
    30
  ],
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  }
}
export default item