// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Chain Lash",
  "affects": "Enemies",
  "blurb": "Active:  Sylas lashes out two chains that converge at the target location, dealing magic damage to enemies hit and  slowing them for a brief moment.",
  "castTime": "0.4",
  "cooldown": "10 / 9 / 8 / 7 / 6",
  "cost": "55",
  "damageType": "Magic damage",
  "effectRadius": "180 / 200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sylas lashes out two chains that converge to the target location and extend beyond it up to a maximum range, dealing magic damage to enemies hit and slowing them for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 20 / 25 / 30 / 35"
            }
          ]
        }
      ]
    },
    {
      "description": "After a 0.6-second delay, the chains' intersection explodes to deal magic damage to enemies within, reduced to 40% against minions.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 115 / 170 / 225 / 280"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "100 / 175 / 250 / 325 / 400"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        },
        {
          "attribute": "Minion Damage",
          "modifiers": [
            {
              "values": "24 / 46 / 68 / 90 / 112"
            },
            {
              "unit": "% AP",
              "values": "32"
            }
          ]
        },
        {
          "attribute": "Total Minion Damage",
          "modifiers": [
            {
              "values": "64 / 106 / 148 / 190 / 232"
            },
            {
              "unit": "% AP",
              "values": "72"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/q",
  "notes": "The detonation's effect radius center is placed at the intersection between the chains from the initial cast, meaning a max range cast can create a detonation that reaches further than the chains do.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "50 / 775"
}
export default ability
