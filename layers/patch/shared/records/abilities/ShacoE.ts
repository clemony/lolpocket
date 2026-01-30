// Updated Patch 16.1 - 01/29/2026 04:27:08 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Two-Shiv Poison",
  "affects": "Enemies",
  "blurb": "Passive: While Two-Shiv Poison is not on cooldown,  Shaco's basic attacks will  slow enemies for a short time.",
  "castTime": "0.25",
  "cooldown": "8",
  "cost": "75",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Shaco's basic attacks slow enemies for 2 seconds while Two-Shiv Poison is not on cooldown.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 22.5 / 25 / 27.5 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shaco throws a dagger at the target enemy that deals magic damage, increased by 50% if they are below 30% of their maximum health, and slows them for 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 95 / 120 / 145 / 170"
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
          "attribute": "Increased Damage",
          "modifiers": [
            {
              "values": "105 / 142.5 / 180 / 217.5 / 255"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 22.5 / 25 / 27.5 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Backstab Bonus:</span> The dagger deals an additional 15 - 50 (based on level) (+ 10% AP) bonus magic damage, increased to 22.5 - 75 (based on level) (+ 15% AP) if the target is below 30% of their maximum health.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shaco/ability-icon/e",
  "notes": "Shaco replicates the last attack animation he performed for Two-Shiv Poison's animation.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1500",
  "spellEffects": "Spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "625"
}
  export default ability
