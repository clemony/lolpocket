// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "High Note",
  "affects": "Enemies",
  "blurb": "Active:  Seraphine hurls a soundwave to the target location that quickly expands upon arrival, dealing magic damage to enemies within based on their missing health.",
  "castTime": "0.25",
  "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
  "cost": "60 / 70 / 80 / 90 / 100",
  "damageType": "Magic damage",
  "effectRadius": "350",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Seraphine hurls a soundwave to the target location that upon arrival expands in a radius over 0.4 seconds, dealing magic damage to enemies within the area.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Against champions and monsters, the damage is increased by 0% - 75% (based on target's missing health).",
      "leveling": [
        {
          "attribute": "Maximum Enhanced Damage",
          "modifiers": [
            {
              "values": "105 / 148.75 / 192.5 / 236.25 / 280"
            },
            {
              "unit": "% AP",
              "values": "87.5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/q",
  "notes": "High Note uses a modified icon for the  second and  third stack of  Stage Presence.\nThe maximum damage of High Note uses a  cosmetic critical strike.\nHigh Note will fire from wherever Seraphine is at the end of the cast time.\nThe impact delay depends solely on the missile speed. It is 0 seconds to 0.75 seconds (after end of cast time) within the standard cast radius, but can be increased further by Seraphine being moved away from the cast location during the cast time.\nThe area of effect is covered via expansion in seven distinct rings and targets can only be hit once.\nThe range indicator for the target range has a radius of 950 units, but the center of High Note can only be cast up to 900 units. The area indicator shows the proper 350 area of effect radius and cast location.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1300 / 875",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Location",
  "targetRange": "900"
}
export default ability
