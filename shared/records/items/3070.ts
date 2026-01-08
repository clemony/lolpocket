const item: Item =  {
  "name": "Tear of the Goddess",
  "id": 3070,
  "rank": "Starter",
  "buildsInto": [
    {
      "id": 3003,
      "name": "Archangel's Staff",
      "gold": 2900
    },
    {
      "id": 3004,
      "name": "Manamune",
      "gold": 2900
    },
    {
      "id": 3119,
      "name": "Winter's Approach",
      "gold": 2400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Increases maximum Mana as Mana is spent",
  "nicknames": [
    "archangel's staff",
    "Seraph's embrace",
    "Winter's approach",
    "Fimbulwinter",
    "Muramana",
    "Manamune"
  ],
  "passives": [
    {
      "name": "Manaflow",
      "effects": "Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an ability consumes a charge to grant 3 <b>bonus</b> mana, increased to 6 mana if they are a champion, up to <b>maximum</b> of 360 <b>bonus</b> mana.",
      "unique": true
    },
    {
      "name": "Helping Hand",
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.",
      "unique": true
    }
  ],
  "stats": {
    "mana": 240
  },
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 400,
    "total": 400,
    "sell": 280
  }
}
export default item