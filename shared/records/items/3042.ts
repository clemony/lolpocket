const item: Item =  {
  "name": "Muramana",
  "id": 3042,
  "rank": "Legendary",
  "specialRecipe": 3004,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Awe",
      "effects": "Grants <b>bonus</b> attack damage equal to 2% <b>maximum</b> mana.",
      "unique": true
    },
    {
      "name": "Shock",
      "effects": "Basic attacks on-hit against champions deal 1.2% <b>maximum</b> mana <b>bonus</b> physical damage. Dealing ability damage to champions with a <img src=\"/img/icons/champion-ability.webp\" class=\"tip-icon\" />champion ability deals (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />4% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />3%) <b>maximum</b> mana <b>bonus</b> physical damage, unless the damage also counts as <img src=\"/img/icons/proc-damage.webp\" class=\"tip-icon\" />proc damage. Can only be triggered on the same target once every 6.5 seconds from the same attack or cast.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 35,
    "mana": 1000,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 2900,
    "purchasable": false,
    "total": 2900,
    "sell": 2030
  }
}
export default item