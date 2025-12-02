// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Celestial Blessing",
  "affects": "Self, Allies",
  "blurb": "Active:  Kayle  heals herself and an allied champion. Additionally, both of them gains  move speed for a brief time.",
  "castTime": "0.25",
  "cooldown": "15",
  "cost": "70 / 75 / 80 / 85 / 90",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kayle and the target allied champion are healed and gain bonus movement speed for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "55 / 80 / 105 / 130 / 155"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "24 / 28 / 32 / 36 / 40"
            },
            {
              "unit": "% per 100 AP",
              "values": "8"
            }
          ]
        }
      ]
    },
    {
      "description": "If cast without a valid target, or self-cast, Celestial Blessing will automatically target the closest allied champion in range, prioritizing the one with the lowest health."
    },
    {
      "description": "Kayle can move during Celestial Blessing's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/w",
  "notes": "Details\n\nCelestial Blessing's cast time does not interrupt movement and the effects are applied at the start.\nInteractions & Other\n\nIf cast with auto-targeting, Celestial Blessing may target allies who are  untargetable, or allied clones that cannot be targeted by allies (such as  Wukong's  Warrior Trickster).",
  "resource": "Mana",
  "targeting": "Unit / Auto",
  "targetRange": "900"
}
export default ability
