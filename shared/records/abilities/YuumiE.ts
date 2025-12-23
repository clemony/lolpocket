// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Zoomies",
  "affects": "Self / Allies",
  "blurb": "Active:  Yuumi  shields herself and gains  bonus movement speed and  bonus attack speed for a short time.",
  "castTime": "none",
  "cooldown": "10",
  "cost": "80 / 90 / 100 / 110 / 120",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi grants herself a shield and gains bonus attack speed for 3 seconds. She also gains 20% bonus movement speed while the shield holds.</p>",
      "leveling": [
        {
          "attribute": "Shield",
          "modifiers": [
            {
              "values": "65 / 90 / 115 / 140 / 165"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "25 / 27.5 / 30 / 32.5 / 35"
            },
            {
              "unit": "% per 100 AP",
              "values": "8"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Attached Bonus:</span> Zoomies affects the Anchor instead of Yuumi and additionally restores mana to the Anchor, increased by 0% - 100% (based on Anchor's missing mana).</p>",
      "leveling": [
        {
          "attribute": "Minimum Mana Restored",
          "modifiers": [
            {
              "values": "20 / 24 / 28 / 32 / 36"
            }
          ]
        },
        {
          "attribute": "Maximum Mana Restored",
          "modifiers": [
            {
              "values": "40 / 48 / 56 / 64 / 72"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/e",
  "notes": "The Anchor's mana bar will briefly become a light blue upon restoring the mana.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
