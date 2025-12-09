// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "The Darkin Glaive",
  "affects": "Self, Enemies",
  "blurb": "Active:  Zaahen's next  basic attack strikes twice, dealing modified physical damage, applying  on-hit effects and  healing him based on his maximum health.",
  "castTime": "none",
  "cooldown": "9 / 8 / 7 / 6 / 5",
  "cost": "25",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zaahen empowers his next basic attack within 5 seconds to have an uncancelable windup and gain 25 bonus range. On-attack, he strikes the target twice and heals himself. The strikes deal modified physical damage and the heal is reduced to 50% against non-champions.Each strike applies on-hit effects and can critically strike for[ (37.5% + 20%) ][ 50% bonus critical damage ]AD bonus physical damage.</p>",
      "leveling": [
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "15 / 30 / 45 / 60 / 75"
            },
            {
              "unit": "% AD",
              "values": "100"
            },
            {
              "tooltip": "Scaling per rank:\n20 / 30 / 40 / 50 / 60% bonus AD",
              "unit": "% bonus AD",
              "values": "20 - 60"
            }
          ]
        },
        {
          "attribute": "Physical Damage per Hit",
          "modifiers": [
            {
              "values": "7.5 / 15 / 22.5 / 30 / 37.5"
            },
            {
              "unit": "% AD",
              "values": "50"
            },
            {
              "tooltip": "Scaling per rank:\n10 / 15 / 20 / 25 / 30% bonus AD",
              "unit": "% bonus AD",
              "values": "10 - 30"
            }
          ]
        },
        {
          "attribute": "Champion Healing",
          "modifiers": [
            {
              "unit": "% of his maximum health",
              "values": "5 / 6 / 7 / 8 / 9"
            }
          ]
        },
        {
          "attribute": "Non-Champion Healing",
          "modifiers": [
            {
              "unit": "% of his maximum health",
              "values": "2.5 / 3 / 3.5 / 4 / 4.5"
            }
          ]
        }
      ]
    },
    {
      "description": "After 1.5 seconds of using the empowered attack, The Darkin Glaive can be recast within the next 5 seconds at no additional cost, modifying it with a new effect."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Zaahen empowers his next basic attack within 5 seconds to have an uncancelable windup, gain 25 bonus range, deal bonus physical damage and knock up the target for 0.75 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "values": "25 / 50 / 75 / 100 / 125"
            },
            {
              "tooltip": "Scaling per rank:\n20 / 30 / 40 / 50 / 60% AD",
              "unit": "% AD",
              "values": "20 - 60"
            }
          ]
        }
      ]
    },
    {
      "description": "The Darkin Glaive deals 150% damage against monsters."
    },
    {
      "description": "Both casts of The Darkin Glaive reset Zaahen's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/q",
  "notes": "Spell shield will only block the knock up from the recast.\nSince the healing is granted on-attack, parrying effects will not prevent Zaahen from gaining the heal. Otherwise, parrying effects will negate all other aspects of The Darkin Glaive's attacks while consuming them.\nThe first cast's double-strike attack:\nRolls  critical strike once for both strikes.\nDoes not cause Zaahen to attack twice.\nEffects that trigger on-attack or interact with the attack windup will only trigger once and thus do not interact with The Darkin Glaive. (e.g.  Lethal Tempo,  Hail of Blades).\nWill consume  Bone Plating once.(bug)\nIf the first strike triggers the rune, the second one will get blocked by it.\nIf the first strike is blocked by the rune, the second one will not.\nPENDING FOR TEST: Is the 1.5-second delay is \"fuzzy\" (may take up to another 0.25 seconds) so it syncs up perfectly with  Sheen like  Camille's  Precision Protocol?",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
