// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Head Rush",
  "affects": "Enemies, Self",
  "blurb": "Active:  Briar  leaps to the target unit. If the target is an enemy, she deals physical damage,  stuns them briefly, and additionally reduces their  armor and  magic resistance for a few seconds.",
  "castTime": "none",
  "cooldown": "13 / 12 / 11 / 10 / 9",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar leaps to the target unit. If the target is an enemy, she deals physical damage, applies on-hit effects, triggers on-attack effects, stuns them for 0.85 seconds, and reduces their armor and magic resistance for 5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            },
            {
              "unit": "% bonus AD",
              "values": "80"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Resistances Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 12.5 / 15 / 17.5 / 20"
            }
          ]
        }
      ]
    },
    {
      "description": "Head Rush resets Briar's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/q",
  "notes": "Head Rush can be cast on jungle plants,  wards, and  traps.\nIt cannot be cast on  structures.\nHead Rush's damage benefits from  life steal.\nHead Rush is a non-following dash.\nIt picks its dash destination ~100 units in front of enemy targets, 75 units in front of enemy targets when already very close to them, 75 units in front of allied targets.\nIf already within 75 units of her target, she dashes to her current location, which takes 0 time but still triggers dash effects such as  Sudden Impact.\nIt does not force the target's resistance values to update immediately outside of the natural stat update cycle, which means it will typically still be mitigated by the unreduced armor value.",
  "resource": "Current health",
  "speed": "600 : 900 (based on distance)",
  "spellEffects": "spell",
  "spellshieldable": "true",
  "targeting": "Unit",
  "targetRange": "475"
}
export default ability
