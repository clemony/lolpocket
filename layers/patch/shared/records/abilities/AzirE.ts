// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Shifting Sands",
  "affects": "Self, Enemies",
  "blurb": "Active:  Azir  shields himself and  dashes to the target Sand Soldier, dealing magic damage to enemies he passes through.",
  "castTime": "none",
  "cooldown": "22 / 20.5 / 19 / 17.5 / 16",
  "cost": "60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Azir grants himself a shield for 1.5 seconds and dashes to the Sand Soldier closest to the cursor, dealing magic damage to enemies within his path.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
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
      "description": "If Azir dashes into an enemy champion, he stops and gains a charge of Arise!."
    },
    {
      "description": "A summoned Sand Soldier is required to cast this ability. Azir can cast of any of his abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/e",
  "notes": "Azir will track the Sand Soldier if they change locations, such as by  Conquering Sands.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "1100"
}
  export default ability
