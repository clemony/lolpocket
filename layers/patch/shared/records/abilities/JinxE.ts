// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Flame Chompers!",
  "affects": "Enemies",
  "blurb": "Active:  Jinx tosses a line of Chompers at the target location that explode after a few seconds, dealing magic damage.",
  "castTime": "none",
  "collisionRadius": "115",
  "cooldown": "24 / 20.5 / 17 / 13.5 / 10",
  "cost": "90",
  "damageType": "Magic damage",
  "effectRadius": "225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jinx tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.75 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "90 / 140 / 190 / 240 / 290"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "Each Chomper explodes on contact with an enemy champion, knocking them down and rooting them for 1.5 seconds. Enemy champions can be affected by only one Chomper."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/e",
  "notes": "Chompers will halt when encountering  Wind Wall and  Unbreakable.\n Spell shield does not negate the explosion.\nEach Chomper gives vision of its surrounding area.",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Location",
  "targetRange": "925"
}
  export default ability
