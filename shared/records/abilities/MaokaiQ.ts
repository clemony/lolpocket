// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Bramble Smash",
  "affects": "Enemies",
  "blurb": "Active:  Maokai sends a shockwave in the target direction that deals magic damage and briefly  slows enemies hit.",
  "castTime": "0.3",
  "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
  "cost": "40",
  "damageType": "Magic damage",
  "effectRadius": "325",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai sends a shockwave in the target direction that deals magic damage to enemies hit and slows them by 99% for 0.25 seconds. Bramble Smash deals bonus magic damage to monsters.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "65 / 110 / 155 / 200 / 245"
            },
            {
              "unit": "% of the target's maximum health",
              "values": "2 / 2.5 / 3 / 3.5 / 4"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Bonus Monster Damage",
          "modifiers": [
            {
              "values": "120 / 130 / 140 / 150 / 160"
            }
          ]
        },
        {
          "attribute": "Total Monster Damage",
          "modifiers": [
            {
              "values": "185 / 240 / 295 / 350 / 405"
            },
            {
              "unit": "% of the target's maximum health",
              "values": "2 / 2.5 / 3 / 3.5 / 4"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies near Maokai are also stunned for 0.5 seconds and knocked back up to 300 units based on their proximity to him."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nBramble Smash's damage based on the target's health ratio is capped at 9999 against non-champions.\n Displacement immunity will also resist the application of the  stun.\nMaokai remains locked out from the cast time for another 0.075 seconds after it.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "600"
}
export default ability
