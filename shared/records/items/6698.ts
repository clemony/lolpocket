const item: Item =  {
  "name": "Profane Hydra",
  "id": 6698,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3077,
      "name": "Tiamat",
      "gold": 1200
    },
    {
      "id": 2020,
      "name": "The Brutalizer",
      "gold": 1337
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
      "name": "Cleave",
      "effects": "Damaging basic attacks deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />40% AD /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.",
      "unique": true
    }
  ],
  "active": [
    {
      "name": "Heretical Cleave",
      "effects": "Deal 80% AD physical damage to enemies in a 450 radius.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 55,
    "lethality": 18,
    "abilityHaste": 10
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 313,
    "total": 2850,
    "sell": 1995
  }
}
export default item