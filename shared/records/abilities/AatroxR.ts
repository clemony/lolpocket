// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "World Ender",
  "affects": "Self, Enemies",
  "blurb": "Active:  Aatrox unleashes his true form for a period, gaining a burst of  move speed. During this time, Aatrox has increased  attack damage,  self-healing, and is  ghosted.",
  "castTime": "0.25",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aatrox unleashes his true form for 10 seconds, fearing nearby enemy minions and monsters for 3 seconds, during which they are gradually slowed by up to 99% over the duration. He also gains bonus movement speed that decays by 10% of the current bonus every 0.25 seconds, lasting until World Ender has ended.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "60 / 80 / 100"
            }
          ]
        }
      ]
    },
    {
      "description": "Whenever Aatrox scores a champion takedown, he extends the duration by 5 seconds, up to its original length, and becomes unleashed again."
    },
    {
      "description": "During World Ender, Aatrox gains bonus attack damage, has 5% increased size, is ghosted, and receives increased self-healing from all sources.",
      "leveling": [
        {
          "attribute": "Bonus Attack Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "20 / 30 / 40"
            }
          ]
        },
        {
          "attribute": "Increased Healing",
          "modifiers": [
            {
              "unit": "%",
              "values": "50 / 75 / 100"
            }
          ]
        }
      ]
    },
    {
      "description": "Aatrox can move during World Ender's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/r",
  "notes": "His resource bar indicates the remaining duration of World Ender.\nWhile World Ender is active, the screen will have a red tint. Near the end of the duration, the tint is intensified.\nWorld Ender persists through  resurrection effects.\nWorld Ender's healing amplification applies to the health gained by resurrecting.\nWorld Ender will cast from wherever Aatrox is at the end of the cast time.\nCasting World Ender while it is still active removes the timer on the resource bar. (bug)\nIf this happens while using  Primordian Aatrox, the intensified tint effect of World Ender will stay on the screen for the rest of the game. (bug)",
  "targeting": "Auto"
}
export default ability
