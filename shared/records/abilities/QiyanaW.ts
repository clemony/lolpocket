// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Terrashape",
  "affects": "Self",
  "blurb": "Passive: While holding an Element,  Qiyana gains bonus  attack speed and  attack range, as well as bonus magic damage on her basic attacks and basic abilities. Qiyana gains  bonus movement speed speed while moving near the current Element.",
  "castTime": "none",
  "cooldown": "7",
  "cost": "25 / 30 / 35 / 40 / 45",
  "damageType": "Magic damage",
  "effectRadius": "366",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While holding an Element, Qiyana gains bonus attack speed, 25 bonus attack range and bonus magic damage on her basic attacks on-hit and basic abilities. While out-of-combat and moving near the Element currently being held, she gains bonus movement speed.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 20 / 25 / 30 / 35"
            }
          ]
        },
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "8 / 16 / 24 / 32 / 40"
            },
            {
              "unit": "% bonus AD",
              "values": "20"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "3 / 5 / 7 / 9 / 11"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Qiyana dashes up to 300 units towards the target location to gather the Element of the nearest Brush, River or Terrain she targeted.</p>"
    },
    {
      "description": "A target Element is required to cast this ability."
    },
    {
      "description": "Once Terrashape has been learned, Qiyana is automatically given the Terrain element upon respawning."
    },
    {
      "description": "Qiyana can cast any of her abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/w",
  "notes": "Terrashape does not interact with player-generated terrain.\nThe water puddles formed by the  Ocean Rift on  Summoner's Rift count as valid terrain for obtaining the   River element.\nThe  brushes grown by  Ivern's  Brushmaker count for gathering the   Brush element.\nPassive bonus damage from basic attacks can be  blocked.\nThe passive damage works with  Guinsoo's Rageblade's Phantom Hit.\nPENDING FOR TEST:: Passive bonus damage interaction with parrying effects ( dodge,  blind).",
  "resource": "Mana",
  "speed": "440 + 100% movement speed",
  "spellEffects": "proc",
  "targeting": "Location",
  "targetRange": "1100"
}
export default ability
