// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Bladework",
  "affects": "Self",
  "blurb": "Active:  Fiora gains  bonus range and  bonus attack speed for the next two attacks.",
  "castTime": "none",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "40",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora empowers her next two basic attacks on-attack within 4 seconds to gain 25 bonus range and bonus attack speed.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "50 / 60 / 70 / 80 / 90"
            }
          ]
        }
      ]
    },
    {
      "description": "The first attack slows the target by 30% for 1 second but cannot critically strike. The second attack will critically strike for modified critical damage, including to structures.",
      "leveling": [
        {
          "attribute": "Critical damage",
          "modifiers": [
            {
              "unit": "%",
              "values": "160 / 170 / 180 / 190 / 200"
            }
          ]
        }
      ]
    },
    {
      "description": "Bladework resets Fiora's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/e",
  "notes": "Spell shield will only block the slow from the first hit.\n Sundered Sky's Lightshield Strike's critical damage will override Bladework's if the resulting damage would be higher.\nThis does not account for any critical damage bonuses that may affect Lightshield Strike.\nBladework's first basic attack will slow even if it is  dodged,  blocked or  missed.\nNeither Bladework attack will deal damage if it is  dodged,  blocked or  missed.",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
