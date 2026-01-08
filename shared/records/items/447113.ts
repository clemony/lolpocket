const item: Item =  {
  "name": "Detonation Orb",
  "id": 447113,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "The Bomb",
      "effects": "Dealing ability damage against enemy champions marks them for 3 seconds, storing 20% of the post-mitigation damage you deal to them, increased to 25% if they are <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilized. Each instance of your ability damage dealt to a marked target refreshes their mark. Once the mark expires, it detonates to deal true damage equal to the amount stored against the target. If a mark would deal lethal damage to the target, it is detonated immediately.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 90,
    "flatMagicPenetration": 12,
    "mana": 600,
    "abilityHaste": 20
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