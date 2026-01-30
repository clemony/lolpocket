// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Lunar Rush",
  "affects": "Enemies",
  "blurb": "Active:  Diana  dashes to an enemy and deals magic damage.",
  "castTime": "none",
  "cooldown": "22 / 20 / 18 / 16 / 14",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Diana dashes to the target enemy's location, and upon completion, she deals them magic damage and consumes Moonlight from all enemies. If the target is within 400 range, Diana will dash through their location.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 70 / 90 / 110 / 130"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        }
      ]
    },
    {
      "description": "If Moonlight is consumed from the target, Lunar Rush's current cooldown is reduced to 0.25 seconds."
    },
    {
      "description": "Diana can cast any of her abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/e",
  "notes": "Diana will attempt to basic attack the target.\nLunar Rush's cooldown will also be reset if the target dies during the dash while being affected by Moonlight.\nLunar Rush consumes Moonlight upon ending the dash (even if  interrupted).\nLunar Rush will still deal damage even if the target is  untargetable by the end of the dash.\nIf Lunar Rush is blocked by  spell shield the Moonlight debuff is still consumed but Lunar Rush's cooldown is not reset.",
  "resource": "Mana",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "825"
}
  export default ability
