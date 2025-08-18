const item: Item =  {
  "name": "Sanguine Gift",
  "id": 443062,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3062_sanguinegift.png",
  "passives": [
    {
      "name": "Patronage",
      "unique": true,
      "effects": "Store 15% of post-mitigation damage dealt. Whenever the stored amount exceeds a value of 333, consume it to <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />heal yourself and the nearest allied champion for that same amount. Stored damage is reset every round and between each phase in a round."
    }
  ],
  "stats": {
    "abilityPower": 80,
    "healAndShieldPower": 15,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "MAGE"
    ]
  },
  "maps": [
    30
  ]
}
export default item