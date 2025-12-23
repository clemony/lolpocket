// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Hammer Shock",
  "width": "160",
  "affects": "Enemies",
  "blurb": "Active:  Poppy smashes the area in the target direction, dealing physical damage to enemies hit based on their maximum health.",
  "castTime": "0.3325",
  "cooldown": "8 / 7 / 6 / 5 / 4",
  "cost": "35 / 40 / 45 / 50 / 55",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Poppy smashes the area in the target direction, dealing physical damage to enemies hit. Against minions and monsters, the damage based on their health ratio is capped.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "30 / 55 / 80 / 105 / 130"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            },
            {
              "unit": "% of target's maximum health",
              "values": "9"
            }
          ]
        },
        {
          "attribute": "Capped Minion/Monster Health Damage",
          "modifiers": [
            {
              "values": "50 / 80 / 110 / 140 / 170"
            }
          ]
        },
        {
          "attribute": "Maximum Minion/Monster Damage",
          "modifiers": [
            {
              "values": "80 / 135 / 190 / 245 / 300"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "The impact creates a field for 1 second that slows enemies within, which then ruptures to deal the same physical damage.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "60 / 110 / 160 / 210 / 260"
            },
            {
              "unit": "% bonus AD",
              "values": "200"
            },
            {
              "unit": "% of target's maximum health",
              "values": "18"
            }
          ]
        },
        {
          "attribute": "Total Maximum Minion/Monster Damage",
          "modifiers": [
            {
              "values": "160 / 270 / 380 / 490 / 600"
            },
            {
              "unit": "% bonus AD",
              "values": "200"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/q",
  "notes": "Spell shields will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Direction"
}
export default ability
