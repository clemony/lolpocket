// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Drunken Rage",
  "affects": "Enemies, Self",
  "castTime": "none",
  "cooldown": "5",
  "cost": "30",
  "damageType": "Magic damage",
  "effectRadius": "250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gragas channels for 0.75 seconds, drinking out of his brew, and gains damage reduction for 2.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 12 / 14 / 16 / 18"
            },
            {
              "unit": "% per 100 AP",
              "values": "4"
            }
          ]
        }
      ]
    },
    {
      "description": "Upon completing the channel, Gragas empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range and deal bonus magic damage to the target and nearby enemies, reduced to 50% against structures. The damage based on the target's health ratio is capped at 300 against monsters.",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "20 / 50 / 80 / 110 / 140"
            },
            {
              "unit": "% of target's maximum health",
              "values": "7"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/w",
  "notes": "The enhanced attack will apply other on-hit effects and can  critically strike as normal.\nThe empowered attack will trigger against structures.\nThe empowered attack will trigger against wards but not be consumed nor apply its effects against wards.\nThe following table refers for interactions while Gragas is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
  export default ability
