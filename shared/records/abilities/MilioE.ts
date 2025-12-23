// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Warm Hugs",
  "affects": "Self, Allies",
  "blurb": "Active:  Milio envelops himself or the target ally in protective flames, granting them a  shield and  bonus move speed for a short time.",
  "castTime": "none",
  "cooldown": "0.5",
  "cost": "50 / 60 / 70 / 80 / 90",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Milio envelops himself or the target allied champion in protective flames, granting the target a shield and bonus movement speed for 2.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "45 / 75 / 105 / 135 / 165"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "12 / 14 / 16 / 18 / 20"
            }
          ]
        }
      ]
    },
    {
      "description": "Milio periodically stocks a Warm Hugs charge, up to a maximum of 2."
    },
    {
      "description": "Warm Hugs' effects can stack up to 2 times."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/e",
  "notes": "Warm Hugs has a  forgiveness radius of 175 units.",
  "rechargeRate": "17 / 16 / 15 / 14 / 13",
  "resource": "Mana",
  "targeting": "Unit",
  "targetRange": "650"
}
export default ability
