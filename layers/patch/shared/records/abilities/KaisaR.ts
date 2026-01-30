// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Killer Instinct",
  "affects": "Self",
  "blurb": "Active:  Kai'Sa briefly  shields herself and  dashes near an enemy champion affected by Plasma.",
  "castTime": "none",
  "cooldown": "130 / 100 / 70",
  "cost": "100",
  "effectRadius": "525",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kai'Sa grants herself a shield for 2 seconds and dashes to a target location near a visible enemy champion that was affected by Plasma within the last 4 seconds. The shield's duration is refreshed when the dash ends.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "70 / 90 / 110"
            },
            {
              "unit": "% AD",
              "values": "90 / 135 / 180"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "An enemy champion within range and affected by Plasma is required to cast this ability. Killer Instinct resets Kai'Sa's basic attack timer. Kai'Sa can cast any of her abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/r",
  "notes": "Kai'Sa will issue a movement command to the targeted location regardless of whether the target location is valid. The dash is not buffered during this movement command. Kai'Sa will not dash if the targeted location becomes valid by walking in range or a nearby enemy champion becomes affected by Plasma.\nIf the targeted location is not valid, the range indicator will glow.\nThe enemy champion recently affected by Plasma must be in range of Kai'Sa for the targeted location to be valid, and not the targeted location itself.\nThe basic attack reset is not considered one for  Hail of Blades.",
  "resource": "Mana",
  "targeting": "Location",
  "targetRange": "2000 / 2250 / 2500 / 2750 / 3000"
}
  export default ability
