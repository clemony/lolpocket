const item: Item =  {
  "name": "Diamond-Tipped Spear",
  "id": 447120,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Reach Weapon",
      "effects": "Gain <img src=\"/img/icons/range.webp\" class=\"tip-icon\" />range.",
      "unique": true
    },
    {
      "name": "Sweet Spot",
      "effects": "Basic attacks deal 0% – 30% (based on distance) increased damage and abilities deal 0% – 40% (based on distance) increased damage. The distance is calculated from your current position to the target's position when the triggering attack or ability hits them.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 30
  },
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