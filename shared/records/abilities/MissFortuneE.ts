// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Make It Rain",
  "affects": "Enemies",
  "blurb": "Active:  Miss Fortune casts a storm of bullets at the target location for a short time, which continually deals magic damage and  slows enemies within.",
  "castTime": "0.25",
  "cooldown": "18 / 17 / 16 / 15 / 14",
  "cost": "80",
  "damageType": "Magic damage",
  "effectRadius": "200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting sight of the area, dealing magic damage every 0.25 seconds to enemies within, and slowing them by 40% (+ 6% per 100 AP).</p>",
      "leveling": [
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "8.75 / 12.5 / 16.25 / 20 / 23.75"
            },
            {
              "unit": "% AP",
              "values": "15"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/e",
  "notes": "Make It Rain's  slow cannot be  cleansed.",
  "resource": "Mana",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Location",
  "targetRange": "1000"
}
export default ability
