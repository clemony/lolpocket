const item: Item =  {
  "name": "Jarvan I's",
  "id": 1111,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "name": "Jarvan One",
      "effects": "This item gains the stats and passive effects of all Boots items.",
      "unique": true
    },
    {
      "name": "Fleetfooted",
      "effects": "Gain 25% slow resist.",
      "unique": true
    },
    {
      "name": "Ionian Insight",
      "effects": "Gain 10 summoner spell haste.",
      "unique": true
    },
    {
      "name": "Plating",
      "effects": "Reduces all incoming <img src=\"/img/icons/basic-damage.webp\" class=\"tip-icon\" />basic damage by 10% (<i>excluding from turret attacks</i>).",
      "unique": true
    }
  ],
  "stats": {
    "armor": 25,
    "attackSpeed": 25,
    "flatMagicPenetration": 12,
    "magicResistance": 20,
    "flatMovespeed": 100,
    "abilityHaste": 10,
    "tenacity": 30
  },
  "maps": [
    12
  ],
  "gold": {
    "base": 300,
    "purchasable": false,
    "total": 300,
    "sell": 210
  }
}
export default item