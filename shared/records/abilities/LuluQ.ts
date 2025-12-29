// Updated Patch 15.24.1 - 12/26/2025 07:03:59 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Glitterlance",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Active:  Lulu and  Pix each fire a magic bolt toward the target location, dealing magic damage and  slowing enemies hit for a short time.",
  "castTime": "0.25",
  "cooldown": "7",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lulu and Pix each fire a magic bolt towards the target point, each one dealing magic damage to enemies hit, reduced to 70% against minions, and slowing them by 80% decaying over 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 95 / 130 / 165 / 200"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Minion Damage",
          "modifiers": [
            {
              "values": "42 / 66.5 / 91 / 115.5 / 140"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies take 50% damage from a second bolt.",
      "leveling": [
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "30 / 47.5 / 65 / 82.5 / 100"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "90 / 142.5 / 195 / 247.5 / 300"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        },
        {
          "attribute": "Reduced Minion Damage",
          "modifiers": [
            {
              "values": "21 / 33.25 / 45.5 / 57.75 / 70"
            },
            {
              "unit": "% AP",
              "values": "17.5"
            }
          ]
        },
        {
          "attribute": "Total Minion Damage",
          "modifiers": [
            {
              "values": "63 / 99.75 / 136.5 / 173.25 / 210"
            },
            {
              "unit": "% AP",
              "values": "52.5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nPix fires his bolt from wherever he is when Lulu casts Glitterlance. Lulu's bolt will fire from wherever she is at the end of the cast time.\nDepending on cursor position both bolts can either crossfire, fire in parallel, or in opposite directions.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1450",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
