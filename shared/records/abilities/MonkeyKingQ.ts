// Updated Patch 15.24.1 - 12/26/2025 07:04:07 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Crushing Blow",
  "affects": "Self, Enemies",
  "blurb": "Active:  Wukong's next basic attack within a few seconds will gain  bonus range, deal bonus physical damage, and inflict  armor reduction for a short time.",
  "castTime": "none",
  "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
  "cost": "20",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Wukong empowers his next basic attack within 5 seconds to have an uncancellable windup, gain bonus range, deal bonus physical damage, and inflict armor reduction for 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Range",
          "modifiers": [
            {
              "values": "135 / 145 / 155 / 165 / 175"
            }
          ]
        },
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "values": "20 / 45 / 70 / 95 / 120"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Armor Reduction",
          "modifiers": [
            {
              "unit": "% of target's armor",
              "values": "10 / 15 / 20 / 25 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "Crushing Blow's cooldown is reduced by 0.5 seconds whenever Wukong or his clone damage an enemy."
    },
    {
      "description": "Crushing Blow resets Wukong's and his clone's basic attack timer. Other abilities can be used during the attack's animation."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/q",
  "notes": "Crushing Blow triggers on  structures and  wards but the armor reduction is not applied.\nIssuing a Hold command (default J) or Stop command (default S) after Crushing Blow's attack has started will cancel the animation, however the attack will still be launched and Wukong will be unable to move until that point.",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
