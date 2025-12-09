// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Dragon's Descent",
  "affects": "Enemies, Self",
  "castTime": "0.25",
  "cooldown": "0",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Fury:</span> Dragon's Descent requires 100 Fury to be cast. Shyvana generates Fury per second while alive and in Human form and 2 Fury per basic attack on-hit in either form. Shyvana gains 100 Fury upon learning Dragon's Descent.</p>",
      "leveling": [
        {
          "attribute": "Fury Generation per Second",
          "modifiers": [
            {
              "values": "1 / 1.5 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana transforms into Dragon Form and dashes with displacement immunity to the target location, dealing magic damage to enemies she passes through and carrying them alongside her.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form:</span> Shyvana gains bonus health, bonus attack range, and increased size. Her abilities are also empowered to apply an additional effect. She maintains Dragon Form at a recurring cost of Fury, returning to Human Form once all Fury has been depleted.</p>",
      "leveling": [
        {
          "attribute": "Bonus Health",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            }
          ]
        },
        {
          "attribute": "Bonus Range",
          "modifiers": [
            {
              "values": "50 / 65 / 80"
            }
          ]
        },
        {
          "attribute": "Size Increase",
          "modifiers": [
            {
              "unit": "%",
              "values": "0 / 8.5 / 16"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/r",
  "notes": "Dragon Descent's  displacement immunity begins from the start of the cast time.\nDragon's Descent has a 100 / 80 / 66.67 / 57.14 / 50 seconds effective cooldown when not attacking and not dead.\nPENDING FOR TEST: Fury generation with parrying effects ( blind,  dodge,  block)\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "resource": "Fury",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "850"
}
export default ability
