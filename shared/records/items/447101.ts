const item: Item =  {
  "name": "Gambler's Blade",
  "id": 447101,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Money In The Bank",
      "effects": "Basic attacks on-hit and ability hits have a 12% chance to store between <img src=\"/img/icons/gold-coin.webp\" class=\"inline-icon\" />30 and 240 gold (2.5-second cooldown per attack/ability). If you win the round, gain <img src=\"/img/icons/gold-coin.webp\" class=\"inline-icon\" />gold equal to the stored amount, otherwise lose 25% of it.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 70,
    "percentMovespeed": 8,
    "abilityHaste": 40
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