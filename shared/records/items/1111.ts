const item: Item =  {
  "name": "Jarvan I's",
  "id": 1111,
  "rank": "Special",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.23/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3013_voidwalkers.png",
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
  "shop": {
    "prices": {
      "total": 0,
      "combined": 300,
      "sell": 0
    }
  },
  "maps": [
    12
  ]
}
export default item