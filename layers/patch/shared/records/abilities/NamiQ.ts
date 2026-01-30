// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Aqua Prison",
  "affects": "Enemies",
  "blurb": "Active:  Nami tosses a bubble that lands at the target location, dealing magic damage to enemies within as well as briefly  revealing and  suspending them.",
  "castTime": "0.25",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "60",
  "damageType": "Magic damage",
  "effectRadius": "200 / 225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nami launches a bubble at the target location that lands after 0.726 seconds, dealing magic damage to enemies hit and suspending them for 1.5 seconds, during which they are revealed.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "90 / 145 / 200 / 255 / 310"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Allied champions are granted Surging Tides in a slightly larger area."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/q",
  "notes": "The combined time from the start of the cast time to the bubble landing is 0.264 seconds + 0.726 seconds = 0.99 seconds.\nAqua Prison provides the status effect that allows  Last Breath to be cast.[2]",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "850"
}
  export default ability
