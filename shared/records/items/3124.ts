// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Guinsoo's Rageblade",
  "id": 3124,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1052,
      "name": "Amplifying Tome",
      "gold": 400
    },
    {
      "id": 1043,
      "name": "Recurve Bow",
      "gold": 700
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
      "name": "Wrath",
      "effects": "Basic attacks deal 30 <b>bonus</b> magic damage on-hit."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Seething Strike",
      "effects": "Basic attacks grant 8% <b>bonus</b> attack speed for 3 seconds, stacking up to 4 times for a total of 32% <b>bonus</b> attack speed. At maximum stacks, basic attacks also grant a <i>Phantom</i> stack for 6 seconds, up to 2 stacks. At 2 <i>Phantom</i> stacks, the next basic attack consumes all of those stacks to trigger a <i>Phantom Hit</i> that applies <img src=\"/img/icons/on-hit.webp\" class=\"tip-icon\" />on-hit effects to the target after a 0.15 second delay."
    }
  ],
  "stats": {
    "abilityPower": 30,
    "attackDamage": 30,
    "attackSpeed": 25
  },
  "description": "30 Attack Damage\n30 Ability Power\n25% Attack Speed\n\nWrath\nAttacks deal 30 bonus magic damage On-Hit.\n\nSeething Strike\nAttacks grant 8% Attack Speed for 3 seconds. (stacks 4 times). \nWhile fully stacked, every third Attack applies On-Hit effects twice.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 1025,
    "total": 3000,
    "sell": 2100
  }
}
export default item