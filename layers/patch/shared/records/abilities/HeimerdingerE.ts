// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "CH-3X Lightning Grenade",
  "affects": "Enemies",
  "blurb": "UPGRADE:  Heimerdinger's grenade now bounces 3 times, each dealing magic damage in a larger area.",
  "castTime": "0.25",
  "cooldown": "11",
  "cost": "85",
  "damageType": "Magic damage",
  "effectRadius": "300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">UPGRADE!!! - Active:</span> Heimerdinger hurls a massive grenade at the target location that bounces a fixed distance 3 times in the cast direction. The grenade explodes upon landing each time to deal magic damage to nearby enemies and slow them by 35% for 2 seconds. Enemies hit at the center of the grenade's impact are additionally stunned for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "CH-3X Lightning Grenade scales with UPGRADE!!!'s rank",
          "modifiers": [
            {
              "unit": "Magic Damage:",
              "values": "0"
            }
          ]
        },
        {
          "attribute": "100 / 200 / 300 (+ 60% AP)"
        }
      ]
    },
    {
      "description": "Enemy champions can only be damaged once per cast, but can be slowed and stunned multiple times if circumstances permit."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/e",
  "innerRadius": "150",
  "notes": "No additional details.",
  "projectile": "TRUE",
  "speed": "1200",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "925"
}
  export default ability
