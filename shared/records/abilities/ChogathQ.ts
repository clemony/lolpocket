// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Rupture",
  "affects": "Enemies",
  "blurb": "Active:  Cho'Gath ruptures the target location, dealing magic damage and  knocking up enemies within,  slowing them upon landing.",
  "castTime": "0.5",
  "cooldown": "6",
  "cost": "50",
  "damageType": "Magic damage",
  "effectRadius": "250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cho'Gath ruptures the target location after a 0.627 seconds delay, granting sight of the area before dealing magic damage to enemies within and knocking them up for 1 second, and afterwards slowing them by 60% for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic damage",
          "modifiers": [
            {
              "values": "80 / 135 / 190 / 245 / 300"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/q",
  "notes": "The delay before the rupture does not include the cast time.\nThe animation is visible in  brush and in fog of war.\n Cleansing the  airborne will not prevent the  slow.\nThe slow itself can also not be blocked by  spell shield, but will always be prevented if the airborne was.\nThe area will still rupture even if Cho'Gath dies during the delay.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "950"
}
export default ability
