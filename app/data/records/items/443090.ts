export const ReapersToll: Item = {
  "name": "Reaper's Toll",
  "id": 443090,
  "rank": [
    "Special"
  ],
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/443090_reaperstoll.png",
  "passives": [
    {
      "name": "Reap",
      "unique": true,
      "effects": "Basic attacks on-hit apply a <i>Reap</i> stack to the target, stacking infinitely and lasting for the remainder of the combat phase, and deal <b>bonus</b> true damage equal to (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />0.7% /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />0.5%) (+0.1% per target's <i>Reap</i> stack) of the target's <b>maximum</b> health. Additionally, the target is inflicted a health threshold equal to 100% of their <b>maximum</b> health minus the <b>total</b> amount of <b>bonus</b> damage dealt against them, lasting until the end of the round and capped at a threshold of 50% of their <b>maximum</b> health."
    },
    {
      "name": "Sow",
      "unique": true,
      "effects": "Increases the attack speed gained from all sources by 25%."
    }
  ],
  "stats": {
    "attackSpeed": 50,
    "percentMovespeed": 10
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "purchasable": true,
    "tags": [
      "MARKSMAN"
    ]
  },
  "maps": [
    30
  ]
}
