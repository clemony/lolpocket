// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Riftwalk",
  "affects": "Enemies",
  "blurb": "Active:  Kassadin  blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk, stacking up to a cap.",
  "castTime": "0.25",
  "cooldown": "5 / 3.5 / 2",
  "cost": "40",
  "damageType": "Magic damage",
  "effectRadius": "270",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kassadin blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk for 15 seconds, refreshing on subsequent casts and stacking up to 4 times.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 90 / 110"
            },
            {
              "unit": "% AP",
              "values": "50"
            },
            {
              "unit": "% maximum mana",
              "values": "2"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Riftwalk:</span> For each stack, Riftwalk deals bonus magic damage at an increased mana cost.</p>",
      "leveling": [
        {
          "attribute": "Bonus Damage Per Stack",
          "modifiers": [
            {
              "values": "35 / 45 / 55"
            },
            {
              "unit": "% AP",
              "values": "7"
            },
            {
              "unit": "% maximum mana",
              "values": "1"
            }
          ]
        },
        {
          "attribute": "Maximum Bonus Damage",
          "modifiers": [
            {
              "values": "140 / 180 / 220"
            },
            {
              "unit": "% AP",
              "values": "28"
            },
            {
              "unit": "% maximum mana",
              "values": "4"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "210 / 270 / 330"
            },
            {
              "unit": "% AP",
              "values": "78"
            },
            {
              "unit": "% maximum mana",
              "values": "6"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/r",
  "notes": "Flash can be used during the cast time, allowing Kassadin to blink further away.",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "500"
}
export default ability
