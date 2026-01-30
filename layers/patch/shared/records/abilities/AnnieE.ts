// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Molten Shield",
  "affects": "Self, Enemies",
  "blurb": "Active:  Annie grants herself or an allied champion—and  Tibbers—a  shield with a burst of  move speed.",
  "castTime": "none",
  "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Annie grants herself or the target allied champion and Tibbers a shield for 3 seconds and 20% - 50% (based on level) bonus movement speed that decays over 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "60 / 95 / 130 / 165 / 200"
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
      "description": "While Molten Shield is active, enemies that deal damage to it take magic damage. This may only occur once per enemy per cast for each active Molten Shield.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "25 / 35 / 45 / 55 / 65"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/e",
  "notes": "Molten Shield casts on ally if targeted or if very close to targeting them (within a range of 225); otherwise self casts.\nMolten Shield does not deal damage to  turrets when attacked by them.\nMolten Shield has a  forgiveness radius of 175 units.\nAttacks that are  dodged or  miss against the shielded target will not cause the shield to deal damage, while  blocked attacks still deal damage to the attacker.\nThe reaction damage does not trigger from  Teemo's  Noxious Trap and  Shaco's  Jack in the Box.(bug)",
  "resource": "Mana",
  "spellEffects": "aoe",
  "targeting": "Unit / Auto",
  "targetRange": "800"
}
  export default ability
