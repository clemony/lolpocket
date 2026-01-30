// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Sigil of Malice",
  "affects": "Enemies",
  "blurb": "Active:  LeBlanc projects an orb at the target enemy, dealing magic damage and marking them for a short time.",
  "castTime": "0.25",
  "cooldown": "6",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> LeBlanc projects an orb at the target enemy that deals magic damage and marks them for 3.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "65 / 90 / 115 / 140 / 165"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "LeBlanc's next damaging ability against the marked target will consume the mark to deal the same magic damage again.",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "130 / 180 / 230 / 280 / 330"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "Sigil of Malice's orb deals 10 - 146 (based on level) bonus magic damage against minions and refunds 100% of its mana cost and 30% of its remaining cooldown if either the orb or its mark's consumption kills the target."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/q",
  "notes": "Sigil of Malice and  Mimic: Sigil of Malice can detonate each other's marks.\nThe floating damage text upon the mark's detonation currently displays a real  critical strike icon instead of a success indicator.(bug)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "Spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "700"
}
  export default ability
