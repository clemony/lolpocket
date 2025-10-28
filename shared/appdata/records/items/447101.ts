<<<<<<< HEAD
const item: Item =  {
  "name": "Gambler's Blade",
  "id": 447101,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7101_gamblers_blade.png",
  "passives": [
    {
      "name": "Money In The Bank",
      "effects": "Basic attacks on-hit and ability hits have a 12% chance to store between <img src=\"/img/icons/gold-coin.webp\" class=\"inline-icon\" />30 and 240 gold (2.5-second cooldown per attack/ability). If you win the round, gain <img src=\"/img/icons/gold-coin.webp\" class=\"inline-icon\" />gold equal to the stored amount, otherwise lose 25% of it.",
      "unique": true
    }
  ],
  "stats": {
    "attackSpeed": 70,
    "percentMovespeed": 8,
    "abilityHaste": 40
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    }
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 447101,
  name: 'Gambler\'s Blade',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7101_gamblers_blade.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Money In The Bank',
      effects:
        'Basic attacks on-hit and ability hits have a 12% chance to store between <img src="/img/icons/gold-coin.webp" class="inline-icon" />30 and 240 gold (2.5-second cooldown per attack/ability). If you win the round, gain <img src="/img/icons/gold-coin.webp" class="inline-icon" />gold equal to the stored amount, otherwise lose 25% of it.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 40,
    attackSpeed: 70,
    percentMovespeed: 8,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
