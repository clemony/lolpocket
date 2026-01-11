// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Diamond-Tipped Spear",
  "id": 447120,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Reach Weapon",
      "effects": "Gain <img src=\"/img/icons/range.webp\" class=\"tip-icon\" />range."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Sweet Spot",
      "effects": "Basic attacks deal 0% – 30% (based on distance) increased damage and abilities deal 0% – 40% (based on distance) increased damage. The distance is calculated from your current position to the target's position when the triggering attack or ability hits them."
    }
  ],
  "stats": {
    "attackSpeed": 30
  },
  "description": "75 Adaptive Force\n30% Attack Speed\n\nReach Weapon\nIncrease your attack range by 75.\n\nSweet Spot\nDeal up to 30% increased damage with Attacks and 40% with Abilities based on how far your target is from you. Damage caps at 1000 units. ",
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