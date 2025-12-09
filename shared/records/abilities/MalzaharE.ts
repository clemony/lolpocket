// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Malefic Visions",
  "affects": "Enemies",
  "blurb": "Active:  Malzahar infects the target enemy's mind, continually dealing magic damage over a few seconds, which refreshes upon damaging them with  Call of the Void or  Nether Grasp.",
  "castTime": "0.25",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "60 / 70 / 80 / 90 / 100",
  "damageType": "Magic damage",
  "effectRadius": "500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malzahar infects the target enemy's mind, dealing magic damage every 0.25 seconds over 4 seconds, which refreshes upon damaging them with Call of the Void or Nether Grasp. Malefic Visions executes minions if they would be damaged below 10 - 30 (based on level) health.</p>",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "80 / 115 / 150 / 185 / 220"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "5 / 7.19 / 9.38 / 11.56 / 13.75"
            },
            {
              "unit": "% AP",
              "values": "5"
            }
          ]
        }
      ]
    },
    {
      "description": "If the target dies while infected, they spread Malefic Visions onto the closest nearby enemy and Malzahar restores 2% of his maximum mana."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/e",
  "notes": "No additional notes.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "DoT",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "650"
}
export default ability
