// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Rake",
  "width": "150",
  "affects": "Enemies",
  "angle": "22°",
  "blurb": "Active:  Talon throws a fan of daggers in the target direction that deals physical damage to enemies hit.",
  "castTime": "0.25",
  "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon throws a fan of daggers in a cone in the target direction that deals physical damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "50 / 60 / 70 / 80 / 90"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "At maximum range, the daggers linger for 0.7 seconds before homing back to Talon, dealing physical damage to enemies hit and slowing them for 1 second.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% bonus AD",
              "values": "90"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "110 / 150 / 190 / 230 / 270"
            },
            {
              "unit": "% bonus AD",
              "values": "130"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 45 / 50 / 55 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies can be hit only once per pass."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/w",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nCasting Rake when an enemy is within 650 radius and 26° angle in front of Talon will reveal him from the fog of war like a targeted cast.(bug)\nThis is because of Rake's internal Cone targeting type, which defaults to \"targeting\" all units in the preset area and thereby trigger revealing the caster if not toggled off for the spell.\nIf Talon dies while Rake is mid-air, the projectiles will still complete their travel.\nThe blades each will fail to return to Talon if he is somehow too far from them after the delay.\nThis maximum distance is 5000 units at ranks 1-4 of Rake, or 20000 units at rank 5 of Rake.(bug)\nThe latter distance is barely achievable between fountains on Summoner's Rift.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2571 / 2429 / 3000",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
