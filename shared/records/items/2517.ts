// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Endless Hunger",
  "id": 2517,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3133,
      "name": "Caulfield's Warhammer",
      "gold": 1050
    },
    {
      "id": 1037,
      "name": "Pickaxe",
      "gold": 875
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Famine",
      "effects": "Gain 5 ah (+10% <b>bonus</b> AD) ability haste."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Feast",
      "effects": "Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them grants you 15% omnivamp for 8 seconds."
    }
  ],
  "stats": {
    "attackDamage": 60,
    "omnivamp": 5,
    "tenacity": 20
  },
  "description": "60 Attack Damage\n5% Omnivamp\n20% Tenacity\n\nFamine\nGain  Ability Haste.\n\nFeast\nWhen a champion that you damaged within 3 seconds dies, gain 15% Omnivamp for 8 seconds. ",
  "maps": [
    11,
    12,
    21
  ],
  "gold": {
    "base": 1075,
    "total": 3000,
    "sell": 2100
  }
}
export default item