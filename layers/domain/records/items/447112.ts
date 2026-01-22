// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Flesheater",
  "id": 447112,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Hack the Meat",
      "effects": "Dealing damage reduces the target's armor and magic resistance by 3 for 5 seconds, stacking up to 10 times for a total resistances reduction of 30. Stacks can be applied to each enemy only once every second."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Cannibalize",
      "effects": "If you or the allied champion on your team score a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion, you are both <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />healed for 18% of the taken down target's <b>maximum</b> health."
    }
  ],
  "stats": {
    "health": 500,
    "abilityHaste": 20
  },
  "description": "70 Adaptive Force\n500 Health\n20 Ability Haste\n\nHack the Meat\nDealing damage shreds 3 Armor and Magic Resist for 5 seconds, stacking up to 10 times. Applying stacks has a 1 second cooldown per Ability.\n\nCannibalize\nOn Champion Takedown, Heal yourself and your ally for 18% of the Target's Max Health.",
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