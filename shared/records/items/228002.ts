const item: Item =  {
  "name": "Wooglet's Witchcap",
  "id": 228002,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "Quest",
    "Deathcap"
  ],
  "passives": [
    {
      "name": "Magical Opus",
      "effects": "Increase your ability power by 50%.",
      "unique": true
    }
  ],
  "active": [
    {
      "name": "Stasis",
      "effects": "Put yourself in <img src=\"/img/icons/stasis.webp\" class=\"tip-icon\" />stasis for 2.5 seconds, rendering you <img src=\"/img/icons/untargetable.webp\" class=\"tip-icon\" />untargetable and <img src=\"/img/icons/invulnerable.webp\" class=\"tip-icon\" />invulnerable for the duration but also unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 300,
    "armor": 50,
    "abilityHaste": 20
  },
  "maps": [
    12,
    30
  ],
  "gold": {
    "base": 6000,
    "total": 6000,
    "sell": 4200
  }
}
export default item