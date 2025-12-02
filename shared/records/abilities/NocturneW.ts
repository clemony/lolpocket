// Updated Patch 15.23.1 - 11/30/2025 12:23:57 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Shroud of Darkness",
  "affects": "Self",
  "blurb": "Passive:  Nocturne gains  bonus attack speed.",
  "castTime": "none",
  "cooldown": "20 / 18 / 16 / 14 / 12",
  "cost": "50",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Nocturne gains bonus attack speed.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nocturne gains a spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, Shroud of Darkness' bonus attack speed is doubled for 5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Enhanced Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "60 / 70 / 80 / 90 / 100"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/w",
  "notes": "If Shroud of Darkness is active when Nocturne re-casts  Paranoia to dash to a target, its duration is refreshed every 0.25 seconds during the dash.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
