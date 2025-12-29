// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Final Hour",
  "affects": "Self",
  "blurb": "Active:  Vayne equips her crossbow for a long duration, gaining  attack damage.",
  "castTime": "none",
  "cooldown": "100 / 85 / 70",
  "cost": "80",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vayne equips her crossbow, gaining bonus attack damage for a duration.</p>",
      "leveling": [
        {
          "attribute": "Effect Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "8 / 10 / 12"
            }
          ]
        },
        {
          "attribute": "Bonus Attack Damage",
          "modifiers": [
            {
              "values": "35 / 50 / 65"
            }
          ]
        }
      ]
    },
    {
      "description": "While active, Final Hour empowers Night Hunter to have tripled bonus movement speed and Tumble to have a reduced cooldown. Additionally, Tumble's cast grants Vayne invisibility for 1 second. Attacking or casting abilities ends the stealth immediately.",
      "leveling": [
        {
          "attribute": "Tumble Cooldown Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 40 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "Scoring an enemy champion takedown within 3 seconds of damaging them will extend Final Hour's duration by 4 seconds, up to its original duration."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/r",
  "notes": "Vayne's animations and basic attack projectiles change slightly during Final Hour.\nTumble's visual effects can be seen by enemies upon Vayne becoming invisible.\nUsing a basic attack breaks the stealth at the start of the attack windup.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
