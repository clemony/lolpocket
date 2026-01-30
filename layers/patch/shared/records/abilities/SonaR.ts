// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Crescendo",
  "width": "280",
  "affects": "Enemies",
  "blurb": "Active:  Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and briefly  stuns them.",
  "castTime": "0.25",
  "cooldown": "140 / 120 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and stuns them for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the start of the cast time.\nWhile stunned by Crescendo, enemies will perform their Dance emote.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2400",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
  export default ability
