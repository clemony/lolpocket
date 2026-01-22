// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Defile",
  "affects": "Self, Enemies",
  "blurb": "Passive:  Karthus restores  mana whenever he kills an enemy.",
  "castTime": "none",
  "cooldown": "0.5",
  "cost": "30 / 42 / 54 / 66 / 78",
  "damageType": "Magic damage",
  "effectRadius": "550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Karthus restores mana whenever he kills an enemy.</p>",
      "leveling": [
        {
          "attribute": "Mana Restored",
          "modifiers": [
            {
              "values": "10 / 20 / 30 / 40 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Karthus surrounds himself in a necrotic aura that deals magic damage every 0.25 seconds to all nearby enemies. Toggling Defile off triggers a final tick of damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "7.5 / 12.5 / 17.5 / 22.5 / 27.5"
            },
            {
              "unit": "% AP",
              "values": "5"
            }
          ]
        },
        {
          "attribute": "Damage Per Second",
          "modifiers": [
            {
              "values": "30 / 50 / 70 / 90 / 110"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        }
      ]
    },
    {
      "description": "Defile cannot be toggled off during Death Defied."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/e",
  "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDefile will restore  mana if Karthus destroys an enemy structure.\nDefile re-calculates its damage with each tick based on changes in Karthus's ability power or an increase in the rank of Defile without the need to toggle it off and on again.\nDefile will toggle off automatically if Karthus enters  resurrection.",
  "resource": "Mana per second",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Auto"
}
export default ability
