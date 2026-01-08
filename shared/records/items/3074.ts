const item: Item =  {
  "name": "Ravenous Hydra",
  "id": 3074,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3077,
      "name": "Tiamat",
      "gold": 1200
    },
    {
      "id": 1053,
      "name": "Vampiric Scepter",
      "gold": 900
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
  "simpleDescription": "Melee attacks hit nearby enemies, dealing damage and restoring Health",
  "nicknames": [
    "rav hydra"
  ],
  "passives": [
    {
      "name": "Cleave",
      "effects": "Basic attacks on-hit deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />40% AD /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target. This damage benefits from <img src=\"/img/icons/life-steal.webp\" class=\"tip-icon\" />life steal at 100% effectiveness.",
      "unique": true
    }
  ],
  "active": [
    {
      "name": "Ravenous Crescent",
      "effects": "Deal 80% AD physical damage to enemies within a 450 radius in front of you. This damage benefits from <img src=\"/img/icons/life-steal.webp\" class=\"tip-icon\" />life steal at 100% effectiveness.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 65,
    "lifesteal": 12,
    "abilityHaste": 15
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 150,
    "total": 3300,
    "sell": 2310
  }
}
export default item