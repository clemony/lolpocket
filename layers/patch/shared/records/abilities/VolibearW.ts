// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Frenzied Maul",
  "affects": "Enemies, Self",
  "blurb": "Active:  Volibear strikes the target enemy to deal physical damage based on his bonus health, apply  on-hit and  on-attack effects, and mark them Wounded for a period.",
  "castTime": "0.25",
  "cooldown": "5",
  "cost": "30 / 35 / 40 / 45 / 50",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Volibear slashes the target enemy with his claws to deal physical damage, apply on-hit effects, trigger on-attack effects, and mark the target Wounded for 8 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "5 / 30 / 55 / 80 / 105"
            },
            {
              "unit": "% AD",
              "values": "110"
            },
            {
              "unit": "% of his bonus health",
              "values": "6"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Wounded Bonus:</span> If the target is already Wounded, Volibear takes a bite out of them instead, dealing 50% (+ 15% per 100 bonus AD) increased damage and healing himself. The heal is halved against minions.</p>",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "20 / 35 / 50 / 65 / 80"
            },
            {
              "tooltip": "Scaling per rank:\n8 / 11 / 14 / 17 / 20% of his missing health",
              "unit": "% of his missing health",
              "values": "8 - 20"
            }
          ]
        },
        {
          "attribute": "Minion Heal",
          "modifiers": [
            {
              "values": "10 / 17.5 / 25 / 32.5 / 40"
            },
            {
              "tooltip": "Scaling per rank:\n4 / 5.5 / 7 / 8.5 / 10% of his missing health",
              "unit": "% of his missing health",
              "values": "4 - 10"
            }
          ]
        }
      ]
    },
    {
      "description": "Frenzied Maul applies life steal."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/w",
  "notes": "Volibear will be ordered to basic attack the target after casting Frenzied Maul.\nFrenzied Maul deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nFrenzied Maul's bite  heals even if it is blocked by  spell shield.\nFrenzied Maul's strike can be  dodged and  blocked, but it cannot miss if Volibear is  blinded. The Wound mark does not apply if  dodged, but will otherwise do so regardless.\nThe bite can be  blocked but Volibear still heals. It does not heal nor deal damage if the bite is  dodged. The bite cannot miss if Volibear is  blinded.\nFrenzied Maul deals bonus damage and heals if the target is still Wounded after the cast time. If the mark wears off before the cast time completes, the ability's animation will appear as if the bite was applied but there is no bonus damage or heal.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "resource": "Mana",
  "spellEffects": "Special",
  "spellshieldable": "true",
  "targeting": "Unit",
  "targetRange": "325 / 350"
}
  export default ability
