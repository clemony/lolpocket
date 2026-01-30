// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Hullbreaker",
  "id": 3181,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 2021,
      "name": "Tunneler",
      "gold": 1150
    },
    {
      "id": 3066,
      "name": "Winged Moonplate",
      "gold": 800
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
  "nicknames": [
    "ahoy",
    "hull",
    "pirate",
    "yarrr"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Skipper",
      "effects": "Basic attacks on-hit against any enemy grant a stack for 10 seconds, stacking up to 5 times. At <b>maximum</b> stacks, or 4 stacks, your next basic attack against a champion, epic monster, or structure consumes all stacks to deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />120% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />84%) <b>base</b> AD  (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />5% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />3.5%) <b>maximum</b> health) <b>bonus</b> physical damage, increased to (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />300% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />210%) <b>base</b> AD  (+(<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />10% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />7%) <b>maximum</b> health) against structures."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Boarding Party",
      "effects": "Allied <img src=\"/img/icons/siege-minions.webp\" class=\"tip-icon\" />siege minions and <img src=\"/img/icons/super-minions.webp\" class=\"tip-icon\" />super minions within 1050 units gain (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />70 – 130 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />35 – 65) <b>bonus</b> armor and <b>bonus</b> magic resistance, as well as 10% increased size."
    }
  ],
  "stats": {
    "attackDamage": 40,
    "health": 500,
    "percentMovespeed": 4
  },
  "description": "40 Attack Damage\n500 Health\n4% Move Speed\n\nSkipper\nEvery fifth Attack against champions and epic monsters deals bonus physical damage, increased against Structures.\n\nBoarding Party\nNearby allied siege and super minions gain Armor and Magic Resist.",
  "gold": {
    "base": 175,
    "total": 3000,
    "sell": 2100
  },
  "maps": [
    11,
    12,
    21
  ]
}
export default item