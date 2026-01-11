// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Essence Reaver",
  "id": 3508,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3057,
      "name": "Sheen",
      "gold": 900
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    },
    {
      "id": 1018,
      "name": "Cloak of Agility",
      "gold": 600
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "er",
    "Spellblade"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Spellblade",
      "effects": "After using an ability, your next basic attack within 10 seconds deals 125% <b>base</b> AD (+50% critical strike chance) <b>bonus</b> physical damage on-hit and restores mana equal to 50% of that amount(1.5 second cooldown, starts after using the empowered attack)."
    }
  ],
  "stats": {
    "attackDamage": 50,
    "criticalStrikeChance": 25,
    "abilityHaste": 20
  },
  "description": "55 Attack Damage\n20 Ability Haste\n25% Critical Strike Chance\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus physical damage and grants Mana On-Hit.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 350,
    "total": 2900,
    "sell": 2030
  }
}
export default item