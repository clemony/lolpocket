// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Solar Flare",
  "affects": "Enemies",
  "blurb": "Active:  Leona calls down a solar flare that strikes upon the target location, dealing magic damage to enemies hit.",
  "castTime": "0.25",
  "cooldown": "90 / 75 / 60",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "325 / 175 / 800",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Leona calls down a solar flare that strikes upon the target location after 0.625 seconds, granting sight of the area before impact and for another 3 seconds afterwards. Enemies hit are dealt magic damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 225 / 300"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "Targets are also slowed by 80% for 1.75 seconds, or stunned for the same duration if they are hit by the epicenter."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/r",
  "innerRadius": "100",
  "notes": "Solar Flare's visual effects are only visible to enemies if they have  sight of the area it was cast upon.\nThe cast indicator shows 300 radius for the area of effect and 120 radius for the epicenter, however the actual hitbox radii are larger than those values.\nThe revealed radius is not obstructed by terrain or  brush.",
  "resource": "Mana",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "1200"
}
  export default ability
