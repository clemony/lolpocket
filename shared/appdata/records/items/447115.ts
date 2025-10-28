<<<<<<< HEAD
const item: Item =  {
  "name": "Regicide",
  "id": 447115,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447115_regicide.png",
  "passives": [
    {
      "name": "End the Line",
      "effects": "At the start of the combat phase in each round, declare the enemy champion with the lowest <b>total maximum</b> health as the <i>Regent</i>. Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against the <i>Regent</i> for the first time in the combat phase grants you 10 <b>bonus</b> attack damage permanently and sets the <b>current</b> cooldown of your ultimate ability to 0.5 seconds.",
      "unique": true
    }
  ],
  "stats": {
    "attackDamage": 60,
    "lethality": 15,
    "percentMovespeed": 8
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "tags": [
      "ASSASSIN"
    ]
  },
  "maps": [
    30
  ]
}
export default item
=======
const item: Item = {
  id: 447115,
  name: 'Regicide',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447115_regicide.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'End the Line',
      effects:
        'At the start of the combat phase in each round, declare the enemy champion with the lowest <b>total maximum</b> health as the <i>Regent</i>. Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against the <i>Regent</i> for the first time in the combat phase grants you 10 <b>bonus</b> attack damage permanently and sets the <b>current</b> cooldown of your ultimate ability to 0.5 seconds.',
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
    tags: ['ASSASSIN'],
  },
  specialRecipe: 220007,
  stats: {
    attackDamage: 60,
    lethality: 15,
    percentMovespeed: 8,
  },
}
export default item
>>>>>>> refs/remotes/origin/main
