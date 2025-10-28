<<<<<<< HEAD
const item: Item =  {
  "name": "Empyrean Promise",
  "id": 447105,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7105_angelicpromise.png",
  "active": [
    {
      "name": "Vigilance",
      "effects": "<img src=\"/img/icons/dash.webp\" class=\"tip-icon\" />Dash to the current location of your ally and upon completion grant both yourself and the ally a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs 100 – 250 (based on level) (+100% of your AP) (+10% of your <b>bonus</b> health) damage for 5 seconds. <b>Can be used even while the ally is dead.</b>",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 70,
    "healAndShieldPower": 18,
    "manaRegen": 125,
    "abilityHaste": 30
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
=======
const item: Item = {
  id: 447105,
  name: 'Empyrean Promise',
  active: [
    {
      name: 'Vigilance',
      effects:
        '<img src="/img/icons/dash.webp" class="tip-icon" />Dash to the current location of your ally and upon completion grant both yourself and the ally a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs 100 – 250 (based on level) (+100% of your AP) (+10% of your <b>bonus</b> health) damage for 5 seconds. <b>Can be used even while the ally is dead.</b>',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7105_angelicpromise.png',
  maps: [30],
  noEffects: false,
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 30,
    abilityPower: 70,
    healAndShieldPower: 18,
    manaRegen: 125,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
