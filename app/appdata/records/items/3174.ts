const item: Item =  {
  "name": "Armored Advance",
  "id": 3174,
  "rank": "Boots",
  "buildsFrom": [
    {
      "id": 3047,
      "name": "Plated Steelcaps",
      "gold": 1200
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_platedsteelcaps_64.png",
  "simpleDescription": "Deal damage to empower your heals and shields",
  "passives": [
    {
      "name": "Plating",
      "unique": true,
      "effects": "Reduces incoming damage from all basic attacks by 10% (<i>excluding turret attacks</i>)."
    },
    {
      "name": "Noxian Endurance",
      "unique": true,
      "effects": "Taking physical damage from champions grants you a <img src=\"/img/icons/shield.webp\" class=\"tip-icon\" />shield that absorbs 10 – 120 (based on level) (+4% <b>maximum</b> health) physical damage for 4 seconds.",
      "cooldown": "15"
    }
  ],
  "stats": {
    "armor": 40,
    "flatMovespeed": 50
  },
  "shop": {
    "prices": {
      "total": 1700,
      "combined": 500,
      "sell": 680
    }
  },
  "maps": [
    11
  ]
}
export default item