const item: Item =  {
  "name": "Anathema's Chains",
  "id": 228001,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "Helia",
    "Vendetta",
    "hel",
    "healia",
    "heal"
  ],
  "passives": [
    {
      "name": "Vendetta",
      "effects": "Take 30% reduced damage from your <i>Nemesis</i> and reduce their <img src=\"/img/icons/tenacity.webp\" class=\"tip-icon\" />tenacity by 20% while they are within 700 units of you.",
      "unique": true
    }
  ],
  "active": [
    {
      "name": "Vow",
      "effects": "Curse the target enemy champion, designating them as your <i>Nemesis</i>. Choosing a new <i>Nemesis</i> removes the curse from the old one. Cannot be cast for 15 seconds while in combat with enemy champions.",
      "range": 0,
      "unique": true
    }
  ],
  "stats": {
    "health": 650,
    "abilityHaste": 20
  },
  "maps": [
    30
  ],
  "gold": {
    "base": 2500,
    "total": 2500,
    "sell": 1250
  }
}
export default item