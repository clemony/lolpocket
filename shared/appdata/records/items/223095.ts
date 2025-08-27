const item: Item =  {
  "name": "Stormrazor",
  "id": 223095,
  "rank": "Legendary",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3095_windblade.png",
  "nicknames": [
    "Windblade"
  ],
  "passives": [
    {
      "name": "Energized",
      "unique": true,
      "effects": "Moving and basic attacking generates <i>Energize</i> stacks, up to 100."
    },
    {
      "name": "Bolt",
      "unique": true,
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized, your next basic attack deals 100 <b>bonus</b> magic damage on-hit and grants you 45% <b>bonus</b> movement speed for 1.5 seconds."
    }
  ],
  "stats": {
    "attackDamage": 45,
    "attackSpeed": 25,
    "criticalStrikeChance": 25
  },
  "shop": {
    "prices": {
      "total": 2500,
      "combined": 2500,
      "sell": 1000
    },
    "tags": [
      "MARKSMAN",
      "ONHIT_EFFECTS"
    ]
  },
  "maps": [
    30
  ]
}
export default item