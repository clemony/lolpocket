// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Bastionbreaker",
  "id": 2520,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2020,
      "name": "The Brutalizer",
      "gold": 1337
    },
    {
      "id": 3134,
      "name": "Serrated Dirk",
      "gold": 1000
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "lethality"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Shaped Charge",
      "effects": "Your next instance of ability damage to a champion or epic monster with a champion ability deals (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />30 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />15) (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />1.5 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />0.75) per 1 lethality) <b>bonus</b> true damage.",
      "cooldown": 45
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Sabotage",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them grants you <i>Sabotage</i> for 90 seconds, empowering your next basic attack against a <img src=\"/img/icons/turret.webp\" class=\"tip-icon\" />turret or epic <img src=\"/img/icons/monster.webp\" class=\"tip-icon\" />monster to consume the effect to deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />300 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />240) (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />25 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />20) per 1 lethality) <b>bonus</b> true damage over 3 seconds."
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 22,
    "abilityHaste": 15
  },
  "description": "55 Attack Damage\n22 Lethality\n15 Ability Haste\n\nShaped Charge (0s)\nDealing Ability damage to a Champion or Epic Monster deals an additional  true damage.\n\nSabotage\nTaking down a champion within 3 seconds of damaging them grants Sabotage for 90 seconds. While you have Sabotage, your next Attack against an Epic Monster or Turret deals an additional  true damage over 3 seconds. ",
  "gold": {
    "base": 863,
    "total": 3200,
    "sell": 2240
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item