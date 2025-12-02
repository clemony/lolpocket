// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Twilight Shroud",
  "affects": "Self, Enemies",
  "blurb": "Active:  Akali restores  energy and gains a brief burst of  move speed. She also drops a smoke shroud that makes her  invisible, attacking or using abilities will briefly reveal her.",
  "castTime": "0.25",
  "cooldown": "20 / 19 / 18 / 17 / 16",
  "cost": "0",
  "effectRadius": "350 / 1175",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Akali restores 100 energy over 0.4 seconds and gains bonus movement speed that decays over 2 seconds. She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring. The shroud does not permeate terrain, and will expand toward nearby enemy champions. While the shroud is active, Akali's maximum energy is increased by 100.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        },
        {
          "attribute": "Shroud Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "5 / 5.5 / 6 / 6.5 / 7"
            }
          ]
        }
      ]
    },
    {
      "description": "Entering the shroud renders Akali invisible, unless she is dashing."
    },
    {
      "description": "Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 - 0.625 (based on minutes) seconds, refreshing on subsequent attacks and casts."
    },
    {
      "description": "The marked section of Twilight Shroud will linger for the mark's duration, even after the shroud ends."
    },
    {
      "description": "Akali can move during Twilight Shroud's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/w",
  "notes": "Akali will also not gain the  invisibility if she is  Recalling.\nIt is possible for Akali to detonate the smoke bomb on the far side of terrain from her current location.\nTwilight Shroud's effects begin at the start of the cast time.\nUsing a basic attack breaks the stealth at the start of the attack windup.",
  "targeting": "Direction",
  "targetRange": "250"
}
export default ability
