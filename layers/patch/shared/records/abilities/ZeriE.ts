// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Spark Surge",
  "affects": "Enemies, Self",
  "blurb": "Active:  Zeri  dashes in the target direction, she will dash across any terrain she hits. Afterwards, she gains Lightning Rounds for a short time.",
  "castTime": "None",
  "cooldown": "22 / 21 / 20 / 19 / 18",
  "cost": "90 / 85 / 80 / 75 / 70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zeri dashes in the target direction. She will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining unobstructed vision of the surrounding 800 units and revealing herself while there are enemy champions within 1500 units of her.</p>"
    },
    {
      "description": "Afterwards, she gains Lightning Rounds for 5 seconds, empowering Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% - 85% (based on critical strike chance), and pierce through enemies. Targets after the first take modified damage which does not apply on-hit effects or life steal nor trigger on-attack effects, but is affected by critical strike modifiers.",
      "leveling": [
        {
          "attribute": "Burst Fire Bonus Magic Damage",
          "modifiers": [
            {
              "values": "20 / 22 / 24 / 26 / 28"
            },
            {
              "unit": "% bonus AD",
              "values": "12"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        },
        {
          "attribute": "Burst Fire Secondary Target Damage",
          "modifiers": [
            {
              "unit": "%",
              "values": "80 / 85 / 90 / 95 / 100"
            }
          ]
        }
      ]
    },
    {
      "description": "Spark Surge's current cooldown is reduced by 0.5 seconds for every champion Zeri hits with charged basic attacks or abilities, increased to 1.5 seconds if she does so with a cast of Burst Fire or Ultrashock Laser that critically strikes."
    },
    {
      "description": "Spark Surge resets Zeri's basic attack timer and Burst Fire's cooldown. Ultrashock Laser and Lightning Crash can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/e",
  "notes": "Spark Surge's extended dash travels based on the thickness of the terrain, up to a maximum distance.\nThe following table refers for interactions while Zeri is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Burst Fire is disabled.  Ultrashock Laser and  Lightning Crash are usable.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "speed": "600 + 100% movement speed",
  "spellEffects": "proc",
  "targeting": "Direction"
}
  export default ability
