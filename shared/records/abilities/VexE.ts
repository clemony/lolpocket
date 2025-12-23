// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Looming Darkness",
  "affects": "Enemies",
  "blurb": "Active:  Vex tosses her Shadow to explode at the target location, dealing magic damage and  slowing enemies hit for a short time. The explosion widens based on cast distance.",
  "castTime": "0.25",
  "cooldown": "13",
  "cost": "70 / 80 / 90 / 100 / 110",
  "damageType": "Magic damage",
  "effectRadius": "200 : 300 (based on cast distance)",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex tosses her Shadow to explode at the target location, dealing magic damage to enemies hit and slowing them for 2 seconds. The explosion's radius increases based on cast distance.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 70 / 90 / 110 / 130"
            },
            {
              "tooltip": "Scaling per rank:\n40 / 45 / 50 / 55 / 60% AP",
              "unit": "% AP",
              "values": "40 - 60"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "Killing an enemy with Looming Darkness refunds 10% of Doom's cooldown, increased to 25% for champion kills."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/e",
  "notes": "No additional details.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1300",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Location",
  "targetRange": "800"
}
export default ability
