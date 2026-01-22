// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Timewinder",
  "width": "120 / 200",
  "affects": "Enemies",
  "blurb": "Active:  Ekko throws a temporal grenade that deals magic damage to enemies hit. It expands at max range or upon hitting an enemy  champion,  slowing nearby enemies.",
  "castTime": "0.25",
  "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
  "cost": "50 / 60 / 70 / 80 / 90",
  "damageType": "Magic damage",
  "effectRadius": "160 : 210",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko throws a temporal grenade in the target direction that deals magic damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 95 / 110 / 125 / 140"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "At 700 units or upon hitting an enemy champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that slows nearby enemies, travelling for another 190 units.",
      "leveling": [
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
      "description": "Afterwards, the grenade contracts and homes back to Ekko at an increased speed, dealing magic damage to enemies hit.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "40 / 65 / 90 / 115 / 140"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "120 / 160 / 200 / 240 / 280"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies can be hit only once per pass."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/q",
  "notes": "Spell shield will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1650 / 200 / 2300",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Direction",
  "targetRange": "1100"
}
export default ability
