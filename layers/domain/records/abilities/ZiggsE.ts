// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Hexplosive Minefield",
  "affects": "Enemies",
  "blurb": "Active:  Ziggs scatters proximity mines over the target location that remain a period. Each mine will explode upon contact with an enemy or terrain, dealing magic damage and briefly  slowing them.",
  "castTime": "0.25",
  "cooldown": "16",
  "cost": "70 / 80 / 90 / 100 / 110",
  "damageType": "Magic damage",
  "effectRadius": "335 /  135",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs scatters a cluster of 11 proximity mines over the target location that grant sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.</p>"
    },
    {
      "description": "Each mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and slowing them for 1.5 seconds, as well as granting sight of the area around the explosion for 2 seconds. An enemy takes 40% damage from subsequent mines.",
      "leveling": [
        {
          "attribute": "Magic Damage per Mine",
          "modifiers": [
            {
              "values": "30 / 70 / 110 / 150 / 190"
            },
            {
              "tooltip": "Scaling per rank:\n25 / 30 / 35 / 40 / 45% AP",
              "unit": "% AP",
              "values": "25 - 45"
            }
          ]
        },
        {
          "attribute": "Reduced Damage per Mine",
          "modifiers": [
            {
              "values": "12 / 28 / 44 / 60 / 76"
            },
            {
              "tooltip": "Scaling per rank:\n10 / 12 / 14 / 16 / 18% AP",
              "unit": "% AP",
              "values": "10 - 18"
            }
          ]
        },
        {
          "attribute": "Maximum Total Magic Damage",
          "modifiers": [
            {
              "values": "150 / 350 / 550 / 750 / 950"
            },
            {
              "tooltip": "Scaling per rank:\n125 / 150 / 175 / 200 / 225% AP",
              "unit": "% AP",
              "values": "125 - 225"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 20 / 30 / 40 / 50"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/e",
  "notes": "The mine cluster is built of 2 rings, with 3 mines in the inner ring (radius pending for test) and 8 mines on the other ring (200 radius), all equally spaced.\nThe angular offset is randomized on each cast.\nBecause of the  135 detonation radius of each mine, the total possible range of a mine from the minefield hitting an enemy from the cast location is  335 units. It will often be slightly less as the minefield is not guaranteed to be angled the right way for this.\nMines will not explode upon contact with player-generated terrain.\n Spell shield will block the effects of a single detonation.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1550",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Location",
  "targetRange": "900"
}
export default ability
