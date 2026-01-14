// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Unending Despair",
  "id": 2502,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 1031,
      "name": "Chain Vest",
      "gold": 800
    },
    {
      "id": 3067,
      "name": "Kindlegem",
      "gold": 800
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Anguish",
      "effects": "Every 4 seconds after entering combat with champions, sap all enemy champions around you within 650 units to deal magic damage equal to 3% of your <b>bonus</b> health to them and <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal yourself equal to 250% of the post-mitigation damage dealt."
    }
  ],
  "stats": {
    "armor": 50,
    "health": 400,
    "abilityHaste": 15
  },
  "description": "400 Health\n50 Armor\n15 Ability Haste\n\nAnguish\nEvery 4 seconds while in combat with champions, deal magic damage to nearby enemy champions and heal for 250% of the damage dealt.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 800,
    "total": 2800,
    "sell": 1960
  }
}
export default item