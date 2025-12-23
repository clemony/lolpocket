// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Undying Rage",
  "affects": "Self",
  "blurb": "Active:  Tryndamere becomes enraged, gaining  Fury and a  minimum health threshold for a few seconds.",
  "castTime": "none",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tryndamere becomes enraged, instantly gaining Fury and a minimum health threshold for 5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Fury Gained",
          "modifiers": [
            {
              "values": "50 / 75 / 100"
            }
          ]
        },
        {
          "attribute": "Minimum Health Threshold",
          "modifiers": [
            {
              "values": "30 / 50 / 70"
            }
          ]
        }
      ]
    },
    {
      "description": "Undying Rage can be used while affected by cast-inhibiting crowd control."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/r",
  "notes": "Undying Rage will prevent  Mel's  Overwhelm's stacks from being consumed.",
  "targeting": "Auto"
}
export default ability
