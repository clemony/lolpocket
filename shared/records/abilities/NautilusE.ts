// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Riptide",
  "affects": "Enemies",
  "blurb": "Active:  Nautilus sends three waves of explosions that radiate from him, each dealing magic damage and briefly  slowing enemies hit.",
  "castTime": "0.25",
  "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
  "cost": "50 / 60 / 70 / 80 / 90",
  "damageType": "Magic damage",
  "effectRadius": "0 - 350 / 215 - 465 / 350 - 590",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nautilus sends three waves of explosions that radiate from him over 0.561 seconds. Each wave deals magic damage to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and slows them by an amount that decays over 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "55 / 90 / 125 / 160 / 195"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "27.5 / 45 / 62.5 / 80 / 97.5"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Maximum Total Damage",
          "modifiers": [
            {
              "values": "110 / 180 / 250 / 320 / 390"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "The first hit against monsters deals bonus magic damage.",
      "leveling": [
        {
          "attribute": "Monster Bonus Damage",
          "modifiers": [
            {
              "values": "125 / 165 / 205 / 245 / 285"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/e",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nThe first wave is centered around Nautilus, while the second and third wave are centered at an offset of 25 units in front of Nautilus at the original cast location.\nBecause of this, there is a zone each in which you can be hit by only 1 wave, or all 3 waves, respectively, without moving.\nThe first wave happens at 0 seconds after the cast time ends, the second wave at 0.297 seconds and the third wave at 0.561 seconds.\nThe intended timing may be 0.25 seconds for each delay, however these are the measured, effective times.\nThe explosions are only a visual effect. The first wave has 8, the seconds has 9, and the third wave has 10 explosions, equally distributed around the rings, starting with one explosion directly in Nautilus' facing direction on each.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Auto"
}
export default ability
