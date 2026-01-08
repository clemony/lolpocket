const item: Item =  {
  "name": "Base Turret Reinforced Armor (Turret Item)",
  "id": 1506,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "effects": "While no enemy <img src=\"/img/icons/minions.webp\" class=\"tip-icon\" />minions or <img src=\"/img/icons/rift-herald-mercenary.webp\" class=\"tip-icon\" />Rift Herald Mercenary are within range, gain 80% damage reduction, including against true damage.",
      "unique": true
    },
    {
      "effects": "Base turrets have health regeneration, but cannot regenerate past their current segment. They are segmented at 33% health, 66% health and 100% health.",
      "unique": true
    }
  ],
  "stats": {},
  "maps": [
    11,
    12,
    21,
    30,
    35
  ],
  "gold": {
    "base": 0,
    "purchasable": false,
    "total": 0,
    "sell": 0
  }
}
export default item