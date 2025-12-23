// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Absolute Zero",
  "affects": "Enemies",
  "castTime": "none",
  "cooldown": "110 / 100 / 90",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "650",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nunu and Willump channel a blizzard for up to 3 seconds, granting themselves a shield and slowing nearby enemies by 0% - 95% (based on channel time).</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "65 / 75 / 85"
            },
            {
              "unit": "% AP",
              "values": "150"
            },
            {
              "tooltip": "Scaling per rank:\n30 / 40 / 50% bonus health",
              "unit": "% bonus health",
              "values": "30 - 50"
            }
          ]
        }
      ]
    },
    {
      "description": "Absolute Zero can be recast after 0.5 seconds during the channel, and does so automatically when the channel ends by any means."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Nunu and Willump cause the blizzard to explode, dealing magic damage to nearby enemies, modified to 0% - 100% (based on channel time). Affected enemies will remain slowed for 0 - 3 (based on channel time) seconds and any of the duo's remaining shield will decay over 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "625 / 950 / 1275"
            },
            {
              "unit": "% AP",
              "values": "300"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/r",
  "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and  Force Pulse.\nThe affected area is hidden if the duo is not  visible to the enemy team.\nWhile it's unlikely to happen normally, it is possible to deal zero damage with Absolute Zero if canceled as soon as it's started.\nThe following table refers for interactions while Nunu & Willump are  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
