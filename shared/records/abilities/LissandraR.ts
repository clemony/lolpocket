// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Frozen Tomb",
  "affects": "Enemies, Self",
  "blurb": "Active:  Lissandra can cast Frozen Tomb on herself or an enemy champion.",
  "castTime": "0.375 / None",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lissandra can cast Frozen Tomb on herself or an enemy champion.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Enemy Cast:</span> Lissandra freezes the target enemy champion, knocking them down and stunning them for 1.5 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Self Cast:</span> Lissandra instantly entombs herself in ice, entering stasis for 2.5 seconds and healing herself every 0.25 seconds over the duration. The healing is increased by 0% - 100% (based on missing health at the time of cast).</p>",
      "leveling": [
        {
          "attribute": "Minimum Heal per Tick",
          "modifiers": [
            {
              "values": "10 / 15 / 20"
            },
            {
              "unit": "% AP",
              "values": "5.5"
            }
          ]
        },
        {
          "attribute": "Maximum Heal per Tick",
          "modifiers": [
            {
              "values": "20 / 30 / 40"
            },
            {
              "unit": "% AP",
              "values": "11"
            }
          ]
        },
        {
          "attribute": "Minimum Total Heal",
          "modifiers": [
            {
              "values": "100 / 150 / 200"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        },
        {
          "attribute": "Maximum Total Heal",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% AP",
              "values": "110"
            }
          ]
        }
      ]
    },
    {
      "description": "Frozen Tomb creates a field of ice that spreads out from the target over 1.5 seconds and covers the surrounding area for 3 seconds, dealing magic damage to enemies and slowing them for 0.5 seconds, refreshing every 0.25 seconds while they remain.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "45 / 60 / 75"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/r",
  "notes": "Enemies can only be damaged by the field of ice once every 4 seconds.\nUnder normal circumstances, this means once per cast of Frozen Tomb.\nEnemies who come in contact with Frozen Tomb's slow field will be damaged and a small visual and sound effect will play.\n Spell shield will block the single-targeted portion and the radiating ice damage, but will not stop it from spreading.\nIf the target becomes  untargetable,  dies, or is too far away during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost.\nThis only applies to the enemy cast.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Unit",
  "targetRange": "550"
}
export default ability
