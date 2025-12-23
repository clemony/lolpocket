// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Toxic Shot",
  "affects": "Self",
  "blurb": "Passive:  Teemo's  basic attacks deal bonus magic damage and inflict  poison.",
  "cooldown": "0",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Teemo's basic attacks are empowered to deal bonus magic damage on-hit and inflict poison.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> poison:</span> The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage On-Hit",
          "modifiers": [
            {
              "values": "9 / 23 / 37 / 51 / 65"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Magic Damage per Tick",
          "modifiers": [
            {
              "values": "6 / 12 / 18 / 24 / 30"
            },
            {
              "unit": "% AP",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Total Poison Damage",
          "modifiers": [
            {
              "values": "24 / 48 / 72 / 96 / 120"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "Toxic Shot deals 145% damage against monsters.",
      "leveling": [
        {
          "attribute": "Monster Damage On-Hit",
          "modifiers": [
            {
              "values": "13.05 / 33.35 / 53.65 / 73.95 / 94.25"
            },
            {
              "unit": "% AP",
              "values": "43.5"
            }
          ]
        },
        {
          "attribute": "Monster Damage per Tick",
          "modifiers": [
            {
              "values": "8.7 / 17.4 / 26.1 / 34.8 / 43.5"
            },
            {
              "unit": "% AP",
              "values": "14.5"
            }
          ]
        },
        {
          "attribute": "Total Monster Poison Damage",
          "modifiers": [
            {
              "values": "34.8 / 69.6 / 104.4 / 139.2 / 174"
            },
            {
              "unit": "% AP",
              "values": "58"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/e",
  "notes": "The initial hit from Toxic Shot will consume  Manaflow Band if it is available.\nThe attacks do not affect  structures nor  wards.\nDespite dealing  proc damage, the damage over time is special-cased to trigger  Dark Harvest and not to trigger  Summon Aery.\nThe damage over time from Toxic Shot counts as proc damage for all other interactions.",
  "spellEffects": "proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
