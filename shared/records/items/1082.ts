const item: Item =  {
  "name": "Dark Seal",
  "id": 1082,
  "rank": "Starter",
  "buildsInto": [
    {
      "id": 3041,
      "name": "Mejai's Soulstealer",
      "gold": 1500
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Provides Ability Power and Mana.  Increases in power as you kill enemies.",
  "nicknames": [
    "Noxian"
  ],
  "passives": [
    {
      "name": "Glory",
      "effects": "Gain 2 stacks for each champion kill and 1 stack for each assist, up to a <b>maximum</b> of 10 stacks. For every stack, gain 4 ability power, up to 40 AP at <b>maximum</b> stacks. Lose 5 stacks on death. Stacks are preserved when upgrading to <img src=\"/img/icons/mejais-soulstealer.webp\" class=\"tip-icon\" />Mejai's Soulstealer.",
      "unique": true
    }
  ],
  "stats": {
    "abilityPower": 15,
    "health": 50
  },
  "maps": [
    11
  ],
  "gold": {
    "base": 350,
    "total": 350,
    "sell": 140
  }
}
export default item