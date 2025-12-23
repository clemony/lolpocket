// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Hate Spike",
  "width": "120 / 180",
  "affects": "Enemies",
  "blurb": "Active:  Evelynn fires her Lasher, dealing magic damage to the first enemy hit and marking them. Evelynn's next few attacks against the marked target will deal bonus magic damage.",
  "castTime": "0.3 / None",
  "cooldown": "4",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effectRadius": "550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Evelynn launches a dart in the target direction, dealing magic damage to the first enemy hit and marking them for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "25 / 30 / 35 / 40 / 45"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "Evelynn's next 3 basic attacks or abilities against the marked target deal bonus magic damage.",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "15 / 25 / 35 / 45 / 55"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Total Bonus Damage",
          "modifiers": [
            {
              "values": "45 / 75 / 105 / 135 / 165"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        }
      ]
    },
    {
      "description": "Hate Spike may be recast up to 3 times at no cost until the ability comes off cooldown."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Evelynn unleashes a line of deadly spikes in the direction of the nearest visible enemy that deals magic damage to all enemies struck.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "25 / 30 / 35 / 40 / 45"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "75 / 90 / 105 / 120 / 135"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "145 / 195 / 245 / 295 / 345"
            },
            {
              "unit": "% AP",
              "values": "175"
            }
          ]
        }
      ]
    },
    {
      "description": "Hate Spike's recast prioritizes targeting Evelynn's attack target, then the nearest enemy champion, then the nearest non-champion."
    },
    {
      "description": "A nearby visible enemy is required to recast this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/q",
  "notes": "Each cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nHate Spike prioritizes:\nThe last champion Evelynn hit\nThe last non-champion Evelynn hit\nThe lowest-health champion\nThe lowest-health non-champion\nThe dart applies  spell damage and the spikes deal  area damage.\nThis ability will cast from wherever the caster is at the start of the cast time.\nRecasts can be buffered up to 0.5 seconds before becoming castable at a maximum range of approximately 500 units.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2400",
  "spellEffects": "Special",
  "spellshieldable": "True",
  "targeting": "Direction / Proximity",
  "targetRange": "800 / 680"
}
export default ability
