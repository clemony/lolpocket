// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Jubilant Veil",
  "affects": "Self, Allies",
  "blurb": "Active:  Nilah briefly envelops herself in mist, during which she gains  ghosting,  move speed and magic damage reduction, and  dodges all non-turret basic attacks.",
  "castTime": "None",
  "collisionRadius": "150",
  "cooldown": "26 / 25 / 24 / 23 / 22",
  "cost": "60 / 45 / 30 / 15 / 0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nilah envelops herself in mist for 2.25 seconds, during which she becomes ghosted, gains bonus movement speed, reduces all incoming magic damage taken by 25%, and dodges all non- turret basic attacks.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 17.5 / 20 / 22.5 / 25"
            }
          ]
        }
      ]
    },
    {
      "description": "Allied champions she touches will also be enveloped for 1.5 seconds, gaining the same effects."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/w",
  "notes": "Allies may only be affected by Jubilant Veil once every 6 seconds.\nJubilant Veil's cooldown is not affected by  Spear of Shojin Dragonforce.(bug)",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
