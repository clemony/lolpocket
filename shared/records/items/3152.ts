// Updated Patch 16.1.1 - 01/10/2026 05:42:34 PM CST
      const item: Item =  {
  "name": "Hextech Rocketbelt",
  "id": 3152,
  "rank": "Legendary",
  "buildsFrom": [
    {
      "id": 3145,
      "name": "Hextech Alternator",
      "gold": 1100
    },
    {
      "id": 3108,
      "name": "Fiendish Codex",
      "gold": 850
    },
    {
      "id": 1028,
      "name": "Ruby Crystal",
      "gold": 400
    }
  ],
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "protobelt",
    "rocket belt"
  ],
  "active": [
    {
      "unique": true,
      "name": "Supersonic",
      "effects": "<img src=\"/img/icons/dash.webp\" class=\"tip-icon\" />Dash 275 units in the target direction, though not through terrain, then unleash an arc of 7 rockets forward which upon collision explode in a 185-radius area. Enemies within 85 units of your dash, a 400 unit distance behind you {{bug|2|2}}, and ones hit by any rocket's explosion are dealt 100 (+10% AP) magic damage, once per cast.",
      "range": 0
    }
  ],
  "stats": {
    "abilityPower": 70,
    "health": 300,
    "abilityHaste": 20
  },
  "description": "70 Ability Power\n300 Health\n20 Ability Haste\n\nSupersonic\nDash in target direction, unleashing missiles that deal magic damage.",
  "maps": [
    11,
    12,
    21,
    35
  ],
  "gold": {
    "base": 300,
    "total": 2650,
    "sell": 1855
  }
}
export default item