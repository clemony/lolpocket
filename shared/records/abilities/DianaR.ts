// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Moonfall",
  "affects": "Self, Enemies",
  "blurb": "Active:  Diana  draws in and  slows nearby enemies.",
  "castTime": "0.25",
  "cooldown": "100 / 90 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "475 / 225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Diana pulls in all nearby enemies, during which they are revealed, then slows them for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 50 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "If an enemy champion is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing magic damage to all nearby enemies, increased for each champion pulled beyond the first.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Bonus Damage Per Champion",
          "modifiers": [
            {
              "values": "35 / 60 / 85"
            },
            {
              "unit": "% AP",
              "values": "15"
            }
          ]
        },
        {
          "attribute": "Total Damage Vs. 5 Champions",
          "modifiers": [
            {
              "values": "340 / 540 / 740"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/r",
  "notes": "Enemies stay in the area for a maximum of approximately 0.5 seconds while being pulled.\n Crowd control immunity and  displacement immunity still count as being \"pulled in\" by the ability.\n Clones count as champions for increasing this ability's damage.\nMoonfall's additional damage is not capped at 4 champions.\nThe beam of moonlight does not crash down if champions hit blocked the initial effect with  spell shield.\nEnemy champions protected by spell shield do not count towards the damage increase.\nThis ability will cast from wherever the caster is at the end of the cast time.\nA lunar phase of the moon will appear above Diana while she is casting Moonfall, each phase is based on the number of enemy  champions pulled:\n\n\n\nNew Moon: 1 Enemy Champion Pulled\n\n\n\nWaning Crescent: 2 Enemy Champions Pulled\n\n\n\nThird Quarter: 3 Enemy Champions Pulled\n\n\n\nWaning Gibbous: 4 Enemy Champions Pulled\n\n\n\nFull Moon: 5 Enemy Champions Pulled",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
