// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Pick a Card",
  "affects": "Enemies, Self",
  "blurb": "Active:  Twisted Fate cycles through three cards over the next few seconds. Pick a Card can be recast within the duration, which selects the current card hovered.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effectRadius": "325",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twisted Fate cycles through three cards for 6 seconds, hovering each for 0.5 seconds at a time. Pick a Card can be recast within the duration, which selects the current card hovered.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Twisted Fate empowers his next basic attack within 6 seconds to have a 0.25-second cast time, deal modified magic damage, and apply an additional effect based on the card selected. This attack cannot critically strike but its damage is increased based on critical strike chance.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Blue Card Bonus:</span> Deals magic damage, increased by 0% - 57.5% (based on critical strike chance), and restores mana.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "unit": "% AD",
              "values": "100"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Mana Restored",
          "modifiers": [
            {
              "values": "70 / 90 / 110 / 130 / 150"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Red Card Bonus:</span> Deals magic damage to the target and surrounding enemies, increased by 0% - 35% (based on critical strike chance). All targets hit are slowed for 2.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "30 / 45 / 60 / 75 / 90"
            },
            {
              "unit": "% AD",
              "values": "100"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Gold Card Bonus:</span> Deals magic damage, increased by 0% - 25% (based on critical strike chance), and stuns the target for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "15 / 22.5 / 30 / 37.5 / 45"
            },
            {
              "unit": "% AD",
              "values": "100"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Stun Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.25 / 1.5 / 1.75 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "Pick a Card's recast resets Twisted Fate's basic attack timer. The recast can be used while affected by cast-inhibiting crowd control."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/w",
  "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nRecasting the ability does not.\nThe first card shown is random but the order always remains the same ( Blue Card,  Red Card,  Gold Card, repeat).\nUpon activation, an indicator visible to allies and enemies appears above Twisted Fate to show him shuffling his deck of cards while remaining in the same order, the card he can choose at every moment glows over the others. The selected card is specified for the duration of the enhanced attack.\nPENDING FOR TEST: The interval until the next card is hovered is 0.528 seconds every time, instead of some times 0.528 and other times 0.495.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack's cast time, it is cancelled but not consumed.\nThe empowered attack will trigger against structures and buildings but not wards and plants.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1500",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
