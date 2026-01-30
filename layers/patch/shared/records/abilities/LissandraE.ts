// Updated Patch 16.1 - 01/29/2026 04:26:50 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Glacial Path",
  "width": "250",
  "affects": "Enemies, Self",
  "blurb": "Active:  Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through. Glacial Path can be recast while the claw is active.",
  "castTime": "0.25",
  "cooldown": "24 / 21 / 18 / 15 / 12",
  "cost": "80 / 85 / 90 / 95 / 100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through, decelerating over 1.25 seconds. Glacial Path can be recast after 0.5 seconds while the claw is active.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 105 / 140 / 175 / 210"
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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Lissandra consumes the claw and blinks to its current location.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/e",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nLissandra can reactivate Glacial Path for the duration (plus another 0.2-0.3 seconds after the claw 'sinks' into the ground).\nThe Claw can also hit enemies near the end point at this time, shortly after the missile has reached its maximum range.\nGlacial Path allows Lissandra to surpass through every single wall in all maps, so long as the claw is at least halfway through them.\nGlacial Path cannot be recast while  grounded or  rooted.\nGlacial Path's endpoint shows through terrain, fog of war and  brush to enemies within 600 range of it.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200 / 640",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Direction / Auto"
}
  export default ability
