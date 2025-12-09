// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Unbreakable Will",
  "affects": "Self",
  "blurb": "Active:  Alistar lets out a wild roar,  cleansing all  crowd control effects and gaining damage reduction for a few seconds.",
  "castTime": "0.25",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Alistar cleanses himself of all crowd control. For the next 7 seconds, he reduces incoming damage taken.</p>",
      "leveling": [
        {
          "attribute": "Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "55 / 65 / 75"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/r",
  "notes": "True damage cannot be reduced by any means and will deal full damage to Alistar during Unbreakable Will.\nUnbreakable Will's modifier to incoming damage stacks additively with  Vladimir's  Hemoplague for a total reduction of 45/55/65%.(note)",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
