export const Regicide: Item = {
  "name": "Regicide",
  "id": 447115,
  "rank": [
    "Special"
  ],
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447115_regicide.png",
  "passives": [
    {
      "name": "End the Line",
      "unique": true,
      "effects": "At the start of the combat phase in each round, declare the enemy champion with the lowest <b>total maximum</b> health as the <i>Regent</i>. Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against the <i>Regent</i> for the first time in the combat phase grants you 10 <b>bonus</b> attack damage permanently and sets the <b>current</b> cooldown of your ultimate ability to 0.5 seconds."
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
    "purchasable": true,
    "tags": [
      "ASSASSIN"
    ]
  },
  "maps": [
    30
  ]
}
