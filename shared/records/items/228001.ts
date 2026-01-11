// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
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
      "unique": true,
      "mythic": false,
      "name": "Vendetta",
      "effects": "Take 30% reduced damage from your <i>Nemesis</i> and reduce their <img src=\"/img/icons/tenacity.webp\" class=\"tip-icon\" />tenacity by 20% while they are within 700 units of you."
    }
  ],
  "active": [
    {
      "unique": true,
      "name": "Vow",
      "effects": "Curse the target enemy champion, designating them as your <i>Nemesis</i>. Choosing a new <i>Nemesis</i> removes the curse from the old one. Cannot be cast for 15 seconds while in combat with enemy champions.",
      "range": 0
    }
  ],
  "stats": {
    "health": 650,
    "abilityHaste": 20
  },
  "description": "650 Health\n20 Ability Haste\n\nVendetta:\nTake reduced damage against your Nemesis. They have reduced Tenacity while near you.\n\nActive can be cast at global range.\n\n\"She swore to dedicate her life to his destruction...\"Active - Vow: Choose a Nemesis (90s).",
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