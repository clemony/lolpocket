// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Mantra",
  "affects": "Self",
  "blurb": "Active:  Karma empowers her next ability within a period to apply an additional effect.",
  "castTime": "none",
  "cooldown": "40 / 38 / 36 / 34",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Karma empowers her next basic ability within 8 seconds for an additional effect. Mantra can be used while affected by cast-inhibiting crowd control.</p>"
    },
    {
      "description": "Karma begins the game with one rank in Mantra. Her empowered abilities scale based on Mantra's rank."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/r",
  "targeting": "Auto"
}
export default ability
