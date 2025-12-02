// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Tidecaller's Blessing",
  "affects": "Self, Allies",
  "blurb": "Active:  Nami blesses herself or an allied champion for a few seconds, empowering their next three basic attacks or abilities to deal bonus magic damage and briefly  slow enemies.",
  "castTime": "none",
  "cooldown": "11",
  "cost": "55 / 60 / 65 / 70 / 75",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nami blesses herself or an allied champion for 6 seconds, empowering their next 3 basic attacks or abilities to each deal bonus magic damage and slow enemies for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage Per Hit",
          "modifiers": [
            {
              "values": "20 / 30 / 40 / 50 / 60"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        },
        {
          "attribute": "Total Bonus Magic Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 20 / 25 / 30 / 35"
            },
            {
              "unit": "% per 100 AP",
              "values": "5"
            }
          ]
        }
      ]
    },
    {
      "description": "Empowered abilities that apply area damage only deal 33% - 66% (based on level) of the bonus damage to non-champions."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/e",
  "notes": "Tidecaller's Blessing has a  forgiveness radius of 175 units.\nThe effect will not trigger against structures nor wards.\nThe empowerment given to allies respects  enchantment redirection.\nDamage instances of Tidecaller's Blessing beyond the first do not count as separate applications for the purposes of  Electrocute and  Phase Rush.",
  "resource": "Mana",
  "spellEffects": "proc",
  "spellshieldable": "False",
  "targeting": "Unit",
  "targetRange": "800"
}
export default ability
