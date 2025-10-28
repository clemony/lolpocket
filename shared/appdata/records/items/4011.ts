<<<<<<< HEAD
const item: Item =  {
  "name": "Sword of Blossoming Dawn",
  "id": 4011,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4011_swordofblossomingdawn.png",
  "passives": [
    {
      "name": "Effervescence",
      "effects": "Gain 1.2% <b>bonus</b> attack speed per 1% <img src=\"/img/icons/heal-and-shield-power.webp\" class=\"tip-icon\" />heal and shield power.",
      "unique": true
    },
    {
      "name": "Peppermint",
      "effects": "Basic attacks on-hit cause the most wounded and nearest allied champion to be <img src=\"/img/icons/heal.webp\" class=\"tip-icon\" />healed for 15 – 45 (based on level) (+10% <b>bonus</b> AD) (+7% AP).",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 45,
    "healAndShieldPower": 12,
    "health": 200,
    "abilityHaste": 15
  },
  "shop": {
    "prices": {
      "total": 2500,
      "combined": 2500,
      "sell": 1000
    },
    "tags": [
      "SUPPORT"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 4011,
  name: 'Sword of Blossoming Dawn',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4011_swordofblossomingdawn.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Effervescence',
      effects:
        'Gain 1.2% <b>bonus</b> attack speed per 1% <img src="/img/icons/heal-and-shield-power.webp" class="tip-icon" />heal and shield power.',
      unique: true,
    },
    {
      name: 'Peppermint',
      effects:
        'Basic attacks on-hit cause the most wounded and nearest allied champion to be <img src="/img/icons/heal.webp" class="tip-icon" />healed for 15 – 45 (based on level) (+10% <b>bonus</b> AD) (+7% AP).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 2500,
      sell: 1000,
      total: 2500,
    },
    tags: ['SUPPORT'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 45,
    healAndShieldPower: 12,
    health: 200,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
