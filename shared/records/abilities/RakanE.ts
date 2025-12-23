// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Battle Dance",
  "affects": "Allies",
  "blurb": "Passive:  Rakan can cast or re-cast Battle Dance at an increased  range when targeting  Xayah.",
  "castTime": "none",
  "cooldown": "0",
  "cost": "40 / 45 / 50 / 55 / 60",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rakan grants a shield to the target allied champion for 3 seconds and then dashes to and around them. Battle Dance can be recast within 5 seconds at no additional cost.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "50 / 75 / 100 / 125 / 150"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Rakan mimics the first cast's effects.</p>"
    },
    {
      "description": "Rakan will be knocked down by any immobilizing or polymorphing crowd control during the dash."
    },
    {
      "description": "If Xayah is the target, Battle Dance can be cast from an increased range."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/e",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe shields do not stack if Battle Dance is cast on the same target twice. Only the duration and shield amount is refreshed.\nBattle Dance, its recast, and its empowered version on  Xayah all have a  forgiveness radius of 175 units.\n Sleep does not count for knocking the dash down.(bug)",
  "resource": "Mana",
  "speed": "1250 + 80% movement speed",
  "targeting": "Unit",
  "targetRange": "700 / 1000"
}
export default ability
