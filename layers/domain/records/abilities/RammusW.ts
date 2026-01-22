// Updated Patch 15.24.1 - 12/26/2025 07:04:13 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Defensive Ball Curl",
  "affects": "Self, Enemies",
  "blurb": "Active:  Rammus enters a defensive stance for a few seconds, gaining  bonus armor and  bonus magic resist. During this time, enemies that land a basic attack against Rammus are dealt magic damage.",
  "castTime": "none",
  "cooldown": "7",
  "cost": "40",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus enters a defensive stance for 7 seconds, gaining bonus armor and bonus magic resistance. While active, enemies that use a basic attack on-hit against Rammus are dealt 15 (+ 10% total armor) (+ 10% total magic resistance) magic damage.</p>",
      "leveling": [
        {
          "attribute": "Bonus Armor",
          "modifiers": [
            {
              "values": "27 / 32 / 37 / 42 / 47"
            },
            {
              "tooltip": "Scaling per rank:\n30 / 37.5 / 45 / 52.5 / 60% total armor",
              "unit": "% total armor",
              "values": "30 - 60"
            }
          ]
        },
        {
          "attribute": "Bonus Magic Resistance",
          "modifiers": [
            {
              "values": "27 / 32 / 37 / 42 / 47"
            },
            {
              "tooltip": "Scaling per rank:\n30 / 37.5 / 45 / 52.5 / 60% total magic resistance",
              "unit": "% total magic resistance",
              "values": "30 - 60"
            }
          ]
        }
      ]
    },
    {
      "description": "Defensive Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting Powerball or Soaring Slam."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Rammus ends Defensive Ball Curl.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/w",
  "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDeactivating the ability manually does not.\nDefensive Ball Curl ends immediately if  Powerball is cast.\nDefensive Ball Curl will return damage from attacks and/or abilities that apply on-hit effects ( Mystic Shot) as well as from  Runaan's Hurricane's Wind's Fury (will not return damage from turrets,  H-28G Evolution Turret, or  Jack in the Box).\nThe resistance scaling will factor from all sources, including Defensive Ball Curl's flat bonus. This will recalculate over the duration.",
  "resource": "Mana",
  "spellEffects": "aoe",
  "spellshieldable": "False",
  "targeting": "Auto"
}
export default ability
