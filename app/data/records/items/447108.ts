export const Runecarver: Item = {
  "name": "Runecarver",
  "id": 447108,
  "rank": [
    "Special"
  ],
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "icon": "https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7108_runecarver.png",
  "passives": [
    {
      "name": "Energized",
      "unique": true,
      "effects": "Moving and basic attacking generates <i>Energize</i> stacks, up to 100."
    },
    {
      "name": "Helix",
      "unique": true,
      "effects": "Dealing damage with an ability generates 30 <i>Energize</i> stacks and triggers the effects of <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized attacks if they are ready (2.5-second cooldown per cast instance)."
    },
    {
      "name": "Spiral Out",
      "unique": true,
      "effects": "When fully <img src=\"/img/icons/energized.webp\" class=\"tip-icon\" />Energized, your next basic attack generates a <i>Rune</i> stack and fires a missile at the target for each <i>Rune</i> stack you have, dealing 20 – 45 (based on level) magic damage (+11% <b>bonus</b> AD) (+8% AP) (+0.3 per 100 <b>bonus</b> health) magic damage with each missile. Stacks are reset every round and between each phase in a round."
    }
  ],
  "stats": {
    "abilityPower": 80,
    "percentMovespeed": 8,
    "abilityHaste": 20
  },
  "shop": {
    "prices": {
      "total": 0,
      "combined": 1000,
      "sell": 0
    },
    "purchasable": true,
    "tags": [
      "MAGE"
    ]
  },
  "maps": [
    30
  ]
}
