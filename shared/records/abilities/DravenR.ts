// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Whirling Death",
  "width": "320",
  "affects": "Enemies",
  "blurb": "Active:  Draven hurls forth two massive axes that deal physical damage to enemies hit. This  executes enemy  champions with  health that would be left within the current number of  League of Draven stacks.",
  "castTime": "0.5",
  "cooldown": "100 / 90 / 80",
  "cost": "100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Draven hurls two massive axes in the target direction that briefly grant sight of their surroundings and deal physical damage to enemies hit. Enemy champions that are damaged to or while below a health threshold equal to the number of Adoration stacks are executed.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "tooltip": "Scaling per rank:\n110 / 130 / 150% bonus AD",
              "unit": "% bonus AD",
              "values": "110 - 150"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "400 / 600 / 800"
            },
            {
              "tooltip": "Scaling per rank:\n220 / 260 / 300% bonus AD",
              "unit": "% bonus AD",
              "values": "220 - 300"
            }
          ]
        }
      ]
    },
    {
      "description": "Whirling Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy champion or the edge of the map."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Draven forces the axes to reverse direction, slowly coming to a stop before homing back to him, dealing the same damage to enemies hit.</p>"
    },
    {
      "description": "Whirling Death deals 100% - 40% (based on enemies hit) damage, resetting upon reversing direction.",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160"
            },
            {
              "tooltip": "Scaling per rank:\n44 / 52 / 60% bonus AD",
              "unit": "% bonus AD",
              "values": "44 - 60"
            }
          ]
        },
        {
          "attribute": "Minimum Total Damage",
          "modifiers": [
            {
              "values": "160 / 240 / 320"
            },
            {
              "tooltip": "Scaling per rank:\n88 / 104 / 120% bonus AD",
              "unit": "% bonus AD",
              "values": "88 - 120"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies can be hit only once per pass."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/r",
  "notes": "Whirling Death's projectile has an  icon on the mini-map while it is in flight. It can be seen by only Draven and his allies.\n Spell shield will block one instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Direction / Auto",
  "targetRange": "Global"
}
export default ability
