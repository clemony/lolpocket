// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Despair",
  "affects": "Enemies",
  "blurb": "Toggle:  Amumu begins crying, continually dealing magic damage to nearby enemies based on their maximum health.",
  "castTime": "none",
  "cooldown": "1",
  "cost": "8",
  "damageType": "Magic damage",
  "effectRadius": "350",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Amumu cries a continuous pool of tears, dealing magic damage every 0.5 seconds to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "5"
            },
            {
              "tooltip": "Scaling per rank:\n0.5 / 0.63 / 0.75 / 0.88 / 1% (+ 0.25% per 100 AP) of target's maximum health",
              "unit": "% (+ 0.25% per 100 AP) of target's maximum health",
              "values": "0.5 - 1"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/w",
  "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDespite the rounding in Despair's tooltip, it will deal increased damage for every point of ability power.",
  "resource": "Mana per second",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Auto"
}
export default ability
