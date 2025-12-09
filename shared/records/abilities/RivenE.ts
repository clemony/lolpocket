// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Valor",
  "affects": "Self",
  "blurb": "Active:  Riven  dashes in the target direction and gains a brief  shield.",
  "castTime": "none",
  "cooldown": "10 / 9 / 8 / 7 / 6",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven dashes in the target direction, though not through terrain, while granting herself a shield for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "70 / 95 / 120 / 145 / 170"
            },
            {
              "unit": "% bonus AD",
              "values": "110"
            }
          ]
        }
      ]
    },
    {
      "description": "Riven can cast any of her abilities during the dash. Valor will cast at max range if cast beyond that."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/e",
  "notes": "This ability always employs Quick cast.\n Broken Wings may be cast during  Ki Burst or  Blade of the Exile cast times if they're used at the end or briefly after the dash.(bug)",
  "targeting": "Direction"
}
export default ability
