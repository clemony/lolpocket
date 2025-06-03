export const DeathsDaughter: Item = {
  "name": "Death's Daughter",
  "id": 3902,
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "requiredChampion": "Gangplank",
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3902_champ_t0_deathsdaughtercircle.png",
  "simpleDescription": "<mainText>Cannon Barrage additionally fires a mega-cannonball at the center of the Barrage, dealing <trueDamage>bonus true damage</trueDamage> and <status>Slowing</status>.</mainText>",
  "passives": [
    {
      "name": "Death's Daughter",
      "unique": true,
      "effects": "A massive cannonball lands after {{ais|Cannon Barrage|Gangplank|Gangplank}} first cluster of waves, dealing <img src=\"/img/icons/true-damage.webp\" class=\"tip-icon\" />true damage (+30% AP) true damage to enemies struck and <img src=\"/img/icons/slow.webp\" class=\"tip-icon\" />slowing them by 75% for 1.5 seconds."
    }
  ],
  "stats": {},
  "shop": {
    "prices": {
      "total": 0,
      "combined": 0,
      "sell": 0
    },
    "purchasable": false
  },
  "maps": [
    11,
    12,
    21,
    30,
    35
  ]
}
