// Updated Patch 15.23.1 - 11/30/2025 12:23:58 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Consume",
  "affects": "Enemies, Self",
  "blurb": "Active:  Willump takes a bite out of the target enemy, dealing damage and  healing himself. The heal is increased when he is below half health.",
  "castTime": "0.3",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "60",
  "damageType": "Other damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Willump takes a bite out of the target enemy, dealing damage and healing himself. The heal is increased by 50% while he is below 50% maximum health.</p>"
    },
    {
      "description": "Against minions and monsters, he deals true damage. Additionally, if Consume would kill the target minion or small or medium monster, Willump devours the target, stunning and pulling them towards him over the cast time.",
      "leveling": [
        {
          "attribute": "Non-Champion True Damage",
          "modifiers": [
            {
              "values": "400 / 600 / 800 / 1000 / 1200"
            }
          ]
        },
        {
          "attribute": "Base Non-Champion Heal",
          "modifiers": [
            {
              "values": "65 / 95 / 125 / 155 / 185"
            },
            {
              "unit": "% AP",
              "values": "90"
            },
            {
              "unit": "% bonus health",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Empowered Non-Champion Heal",
          "modifiers": [
            {
              "values": "97.5 / 142.5 / 187.5 / 232.5 / 277.5"
            },
            {
              "unit": "% AP",
              "values": "135"
            },
            {
              "unit": "% bonus health",
              "values": "15"
            }
          ]
        }
      ]
    },
    {
      "description": "Against champions, he deals magic damage and the heal is reduced to 60%.",
      "leveling": [
        {
          "attribute": "Champion Magic Damage",
          "modifiers": [
            {
              "values": "60 / 100 / 140 / 180 / 220"
            },
            {
              "unit": "% AP",
              "values": "65"
            },
            {
              "unit": "% bonus health",
              "values": "5"
            }
          ]
        },
        {
          "attribute": "Base Champion Heal",
          "modifiers": [
            {
              "values": "39 / 57 / 75 / 93 / 111"
            },
            {
              "unit": "% AP",
              "values": "54"
            },
            {
              "unit": "% bonus health",
              "values": "6"
            }
          ]
        },
        {
          "attribute": "Empowered Champion Heal",
          "modifiers": [
            {
              "values": "58.5 / 85.5 / 112.5 / 139.5 / 166.5"
            },
            {
              "unit": "% AP",
              "values": "81"
            },
            {
              "unit": "% bonus health",
              "values": "9"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/q",
  "notes": "Icon border glows when he is within the maximum healing threshold.\n Spell shields will block the damage and the heal.\nWhile not on  cooldown, Consume's ability icon on the HUD can be pinged to announce its damage to  monsters in the ally chat.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "125"
}
export default ability
