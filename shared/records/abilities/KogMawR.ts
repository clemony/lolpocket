// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Living Artillery",
  "affects": "Enemies",
  "blurb": "Active:  Kog'Maw spits a globule of acid into the air that drops to the target location, dealing magic damage to enemies hit based on their missing health. The damage is further  doubled against enemies at low health.",
  "castTime": "0.25",
  "cooldown": "2 / 1.5 / 1",
  "cost": "40",
  "damageType": "Magic damage",
  "effectRadius": "240",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw spits a globule of acid into the air that drops to the target location after 0.6 seconds, granting sight of the area before dealing magic damage to enemies hit and revealing them for 2 seconds. Living Artillery's damage is increased by 0% - 50% (based on target's missing health), or instead by 100% if the target is below 40% maximum health.</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "100 / 140 / 180"
            },
            {
              "unit": "% bonus AD",
              "values": "75"
            },
            {
              "tooltip": "Scaling per rank:\n35 / 40 / 45% AP",
              "unit": "% AP",
              "values": "35 - 45"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "200 / 280 / 360"
            },
            {
              "unit": "% bonus AD",
              "values": "150"
            },
            {
              "tooltip": "Scaling per rank:\n70 / 80 / 90% AP",
              "unit": "% AP",
              "values": "70 - 90"
            }
          ]
        }
      ]
    },
    {
      "description": "Kog'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Living Artillery:</span> For each stack, Living Artillery's mana cost is increased by 40.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/r",
  "notes": "Living Artillery will not reveal  stealthed champions.",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "1300 / 1425 / 1550 / 1675 / 1800"
}
export default ability
