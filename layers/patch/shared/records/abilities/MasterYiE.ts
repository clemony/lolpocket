// Updated Patch 16.1 - 01/29/2026 04:26:53 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Wuju Style",
  "affects": "Self",
  "blurb": "Active:  Master Yi empowers his sword, causing his basic attacks to deal  bonus true damage  on-hit for a few seconds.",
  "castTime": "none",
  "cooldown": "14",
  "cost": "0",
  "damageType": "True damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Master Yi empowers his basic attacks within the next 5 seconds to deal bonus true damage on-hit.</p>",
      "leveling": [
        {
          "attribute": "Bonus True Damage",
          "modifiers": [
            {
              "values": "20 / 25 / 30 / 35 / 40"
            },
            {
              "unit": "% bonus AD",
              "values": "35"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/e",
  "notes": "Wuju Style can be cast during  Alpha Strike.\nWuju Style cannot be cast while it is already active.\nWuju Style's bonus true damage does not interact with  critical strikes.\nWuju Style's bonus true damage cannot be  blocked but can be  dodged and/or missed if Master Yi is  blinded.\nThe attacks do not deal the bonus damage against structures.\nWhile Wuju Style is active, the damage will dynamically update its calculations.",
  "spellEffects": "Proc",
  "targeting": "Auto"
}
  export default ability
