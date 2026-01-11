// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Maw of Malmortius",
  "id": 3156,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3155,
      "name": "Hexdrinker",
      "gold": 1300
    },
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Lifeline",
      "effects": "If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />200 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />150) magic damage (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />150% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />112.5%) <b>bonus</b> AD) magic damage for 3 seconds. Additionally, triggering this effect grants you 10% omnivamp until the end of combat.",
      "cooldown": "90"
    }
  ],
  "stats": {
    "attackDamage": 60,
    "magicResistance": 40,
    "abilityHaste": 15
  },
  "description": "60 Attack Damage\n15 Ability Haste\n40 Magic Resist\n\nLifeline\nTaking magic damage that would reduce your Health below 30% grants a magic damage Shield for 3 seconds and 10% Omnivamp until end of combat.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 750,
    "total": 3100,
    "sell": 2170
  }
}
export default item