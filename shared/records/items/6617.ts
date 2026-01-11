// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Moonstone Renewer",
  "id": 6617,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 4642,
      "name": "Bandleglass Mirror",
      "gold": 900
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "yuumi"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Starlit Grace",
      "effects": "<img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />Healing or <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shielding an allied champion chains the effect to the other nearest allied champion within 800 units of them (<i>excluding yourself</i>), granting them 30% of the heal or 35% of the shield's initial strength. If no other allied champions are in the radius, grant the same target an additional 30% of the heal or 35% of the shield."
    }
  ],
  "stats": {
    "abilityPower": 25,
    "health": 200,
    "manaRegen": 125,
    "abilityHaste": 20
  },
  "description": "25 Ability Power\n200 Health\n20 Ability Haste\n125% Base Mana Regen\n\nStarlit Grace\nHealing or shielding an ally chains the effect to another ally (excluding yourself), healing 30% or shielding 35% of the original amount.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 500,
    "total": 2200,
    "sell": 1540
  }
}
export default item