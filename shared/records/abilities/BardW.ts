// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Caretaker's Shrine",
  "affects": "Allies",
  "blurb": "Active:  Bard conjures a shrine which powers up over a period, disappearing when a champion steps on it.",
  "castTime": "0.25",
  "cooldown": "0",
  "cost": "70",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bard conjures a shrine at the target location that grants sight of its surroundings for 1 second and gathers power over 5 seconds. Up to 3 shrines may be active at a time. Shrines may last indefinitely until being consumed by a champion moving over them.</p>"
    },
    {
      "description": "If the champion is an ally or Bard himself, they are healed for an amount based on the shrine's power and gain bonus movement speed decaying over 1.5 seconds. The bonus movement speed can stack with subsequent shrines triggered. If the champion is an enemy, the shrine is destroyed.",
      "leveling": [
        {
          "attribute": "Minimum Heal",
          "modifiers": [
            {
              "values": "25 / 50 / 75 / 100 / 125"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Maximum Heal",
          "modifiers": [
            {
              "values": "50 / 87.5 / 125 / 162.5 / 200"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 22.5 / 25 / 27.5 / 30"
            },
            {
              "unit": "% per 100 AP",
              "values": "6"
            }
          ]
        }
      ]
    },
    {
      "description": "Bard periodically stocks a Caretaker's Shrine charge, up to a maximum of 2."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/w",
  "notes": "Caretaker's Shrine can be cast directly on an ally and it will be treated as a unit-targeted ability for effects such as  Guardian. This version also has a  forgiveness radius of 175 units.\nIf Bard has 3 shrines on the map and creates a new one that is cast directly on himself or an ally, the oldest shrine will not be destroyed. This is because the shrine is used as an actual targeted heal on himself or someone else, and not a permanent shrine, so the other 3 may stay.\nThe spell indicator of Caretaker's Shrine shows the area in which it can be used as a targeted heal. After a shrine has been placed on the ground its activation area becomes smaller: allies or enemies have to step directly on the shrine to use it or destroy it.\nLeveling up Caretaker's Shrine will update the healing of existing shrines.",
  "rechargeRate": "18 / 18 / 18 / 18 / 18",
  "resource": "Mana",
  "targeting": "Location / Unit",
  "targetRange": "800"
}
export default ability
