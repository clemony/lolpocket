// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Relentless Force",
  "affects": "Enemies",
  "blurb": "Active:  Vi's next basic attack gains  bonus range and deals modified physical damage to enemies hit in a cone.",
  "castTime": "none",
  "cooldown": "1",
  "cost": "26 / 32 / 38 / 44 / 50",
  "damageType": "Physical damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vi empowers her next basic attack within 6 seconds to have an uncancellable windup, gain 50 bonus range and trigger a blast in the target's direction that deals modified physical damage to enemies hit in a cone.Relentless Force can critically strike for (75% + 40%) AD bonus physical damage against the primary target. Secondary targets take the same damage but do not count as being critically struck.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "10 / 30 / 50 / 70 / 90"
            },
            {
              "unit": "% AD",
              "values": "110"
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
      "description": "Vi periodically stocks a Relentless Force charge, up to a maximum of 2."
    },
    {
      "description": "Relentless Force resets Vi's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/e",
  "notes": "Applies  spell damage to the primary target, applies  basic damage required effects on the primary target, and applies  area damage to secondary targets.\nThe empowered attack has the same windup time as Vi's basic attacks.\nRelentless Force will only apply a stack of  Denting Blows to the primary target.\nIf the Relentless Force buff is about to run out as Vi starts the attack windup, the duration will be updated and extended to allow Vi to still sucessfully attack.",
  "rechargeRate": "12 / 11 / 10 / 9 / 8",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "true",
  "targeting": "Auto"
}
export default ability
