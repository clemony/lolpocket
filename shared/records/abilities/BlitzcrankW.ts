// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Overdrive",
  "affects": "Self",
  "blurb": "Active:  Blitzcrank shifts into overdrive, gaining  bonus attack speed and a burst of  movement speed.",
  "castTime": "none",
  "cooldown": "15",
  "cost": "75",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank shifts into overdrive, gaining bonus attack speed for 5 seconds and bonus movement speed that decays to 10% over the first 2.9 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 40 / 50 / 60 / 70"
            }
          ]
        },
        {
          "attribute": "Initial Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "60 / 65 / 70 / 75 / 80"
            }
          ]
        }
      ]
    },
    {
      "description": "When Overdrive ends, Blitzcrank is slowed by 30% for 1.5 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/w",
  "notes": "The movement speed boost's decay is linear. On the first stat update after the buff is gained, the boost does not decay.\nThe self-slow is affected by  slow resist and  Tenacity.",
  "resource": "Mana",
  "spellEffects": "proc",
  "targeting": "Auto"
}
export default ability
