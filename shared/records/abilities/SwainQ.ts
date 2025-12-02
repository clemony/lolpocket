// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Death's Hand",
  "affects": "Enemies",
  "angle": "32°",
  "blurb": "Active:  Swain unleashes five bolts of eldritch power over 0.264 seconds in a cone in the target direction that deal magic damage to enemies hit. Subsequent bolts against an enemy deal bonus magic damage.",
  "castTime": "0.25",
  "cooldown": "7 / 6 / 5 / 4 / 3",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effectRadius": "725",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain unleashes five bolts of eldritch power over 0.264 seconds in a cone in the target direction that deal magic damage to enemies hit. Subsequent bolts against an enemy deal 25% bonus damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        },
        {
          "attribute": "Bonus Damage Per Bolt",
          "modifiers": [
            {
              "values": "15 / 22.5 / 30 / 37.5 / 45"
            },
            {
              "unit": "% AP",
              "values": "11.25"
            }
          ]
        },
        {
          "attribute": "Total Damage",
          "modifiers": [
            {
              "values": "120 / 180 / 240 / 300 / 360"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/q",
  "notes": "Death's Hand will still cast and deal damage if Swain dies during the cast time.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe total damage to a single target will be split evenly among each bolt that hits, meaning that hitting with more bolts will deal less damage per hit (but more overall damage).\n Spell shield will block all bolts.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
