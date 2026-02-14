// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Dragonheart",
  "id": 447106,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Inner Flame",
      "effects": "Every 2 rounds, gain a random {{bi|Dragon Soul|Dragon Soul}}. Additionally, increase your <b>total</b> attack damage, ability power, attack speed, <b>maximum</b> health, armor, magic resistance, and ability haste by 4% for each {{bi|Dragon Soul|Dragon Soul}} you possess, up to 24% at maximum souls.<br><br>Once you have obtained all 6 {{bi|Dragon Soul|Dragon Souls|Dragon Souls}}, you also gain the {{bi|Aspect of the Dragon|Aspect of the Dragon}} buff permanently at the next phase. <i>Aspect of the Dragon</i> counts as an extra Soul for this effect, for a total stat increase of 28%."
    }
  ],
  "stats": {},
  "description": "Inner Flame\nIncreases your Health, Armor, Magic Resist, Attack Damage, Ability Power, Attack Speed, and Ability Haste by 4% per Dragon Soul you possess.\n\nEvery 2 rounds, gain a Dragon Soul.\n\nIf you already have every elemental soul and would gain another, an ancient power awakens within...\n\nWhen purchased, if it is past round 5, immediately gain 1 soul, plus 1 for every 2 rounds beyond round 5.",
  "gold": {
    "base": 1000,
    "purchasable": true,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item