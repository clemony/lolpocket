// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Blazing Stampede",
  "affects": "Self, Enemies",
  "blurb": "Stampede Stance:  Udyr gains  ghosting and a burst of  movement speed that decays over a few seconds. His attacks in this stance briefly  stun his target, but this cannot affect them more than once every few seconds.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "40",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active - Stance:</span> Udyr enters Stampede Stance, empowering his basic attacks to have an uncancellable windup and pounce on the target to stun them for 0.75 seconds. This cannot affect the same target more than once every few seconds.</p>"
    },
    {
      "description": "Additionally, Udyr becomes ghosted and gains bonus movement speed for 4 seconds, which decays to 30% effectiveness over 1.5 seconds.",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "25 / 31 / 37 / 43 / 49 / 55"
            }
          ]
        },
        {
          "attribute": "Decayed Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "7.5 / 9.3 / 11.1 / 12.9 / 14.7 / 16.5"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Awaken:</span> Udyr gains 75 bonus attack range and an additional 30% - 40% (based on level) bonus movement speed. He also gains immunity to crowd control for 1.5 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/e",
  "notes": "Udyr cannot dash while  grounded or  rooted, but he will still declare the empowered attack.\nThe empowered attack will still apply its effects even if the dash is interrupted.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.\nThe immunity to the stun is not applied in any case.",
  "onTargetCdStatic": "6 / 5.6 / 5.2 / 4.8 / 4.4 / 4",
  "resource": "Mana",
  "spellshieldable": "true",
  "targeting": "Auto"
}
export default ability
