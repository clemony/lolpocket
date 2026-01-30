// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Brushmaker",
  "affects": "Self, Allies",
  "blurb": "Passive: While  Ivern is in  brush, his basic attacks deal bonus magic damage.",
  "castTime": "0.25",
  "cooldown": "0.5",
  "cost": "30",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Ivern is in brush, his basic attacks are empowered to deal bonus magic damage on-hit. This bonus persists for 3 seconds after leaving brush.</p>",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "20 / 27.5 / 35 / 42.5 / 50"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ivern grows a patch of brush at the target location for 45 seconds, granting sight of the area within and around it for 8 seconds. Brushes despawn instantly after allied vision within them is lost. Spawning brush near terrain or other brush increases its radius.</p>"
    },
    {
      "description": "While allied champions are in any brush when Ivern is within 1000 units, their basic attacks are empowered to fire a bolt at the target on-hit that deals them bonus magic damage. This bonus persists for 1.5 seconds after leaving brush.",
      "leveling": [
        {
          "attribute": "Ally Bonus Magic Damage",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% of Ivern's AP",
              "values": "10"
            }
          ]
        }
      ]
    },
    {
      "description": "Ivern periodically stocks a Brushmaker charge, up to a maximum of 3."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/w",
  "notes": "A  brush will be immediately  exposed if grown within the  sight of an enemy  turret.\nThe bonus damage does not apply to structures.\nThe bonus damage won't trigger through  block,  dodge, or  blinding effects.\nThe empowerment given to allies respects  enchantment redirection.\nEpic monsters can not be concealed within, or behind a  brush.\nBoth  Voidgrubs and  Atakhan can be concealed within, and behind a  brush(bug).\n Brushmaker locks on allies when hovered.\nThe indicator for Brushmaker's cast range has a radius of 1150, which is significantly higher than its actual cast range.(bug)",
  "projectile": "TRUE",
  "rechargeRate": "20 / 20 / 20 / 20 / 20",
  "resource": "Mana",
  "speed": "3500",
  "spellEffects": "spell",
  "spellshieldable": "False",
  "targeting": "Location",
  "targetRange": "1000"
}
  export default ability
