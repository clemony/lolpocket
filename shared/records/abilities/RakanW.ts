// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Grand Entrance",
  "affects": "Enemies",
  "blurb": "Active:  Rakan  dashes to the target location.",
  "castTime": "none",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "50 / 60 / 70 / 80 / 90",
  "damageType": "Magic damage",
  "effectRadius": "275",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rakan dashes to the target location. After a 0.35-second delay upon arrival, he deals magic damage to nearby enemies and knocks them up for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 120 / 170 / 220 / 270"
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
      "description": "Rakan will be knocked down by any immobilizing or polymorphing crowd control during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/w",
  "notes": "Sleep does not count for knocking the dash down.(bug)",
  "resource": "Mana",
  "speed": "1700",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "650"
}
export default ability
