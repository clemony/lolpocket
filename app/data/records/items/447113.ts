export const DetonationOrb: Item = {
  "name": "Detonation Orb",
  "id": 447113,
  "rank": [
    "Special"
  ],
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7113_detonationorb.png",
  "passives": [
    {
      "name": "The Bomb",
      "unique": true,
      "effects": "Dealing ability damage against enemy champions marks them for 3 seconds, storing 20% of the post-mitigation damage you deal to them, increased to 25% if they are <img src=\"/img/icons/immobilize.webp\" class=\"tip-icon\" />immobilized. Each instance of your ability damage dealt to a marked target refreshes their mark. Once the mark expires, it detonates to deal true damage equal to the amount stored against the target. If a mark would deal lethal damage to the target, it is detonated immediately."
    }
  ],
  "stats": {
    "abilityPower": 90,
    "flatMagicPenetration": 12,
    "mana": 600,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "purchasable": true,
    "tags": [
      "MAGE"
    ]
  },
  "maps": [
    30
  ]
}
