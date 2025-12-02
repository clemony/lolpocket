// Updated Patch 15.23.1 - 11/30/2025 12:24:01 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Cull the Meek",
  "affects": "Enemies / Self",
  "blurb": "Active:  Renekton cleaves around himself, dealing physical damage to nearby enemies. He also generates Fury and  heals for each enemy hit, increased against  champions.",
  "castTime": "none",
  "cooldown": "7",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "400 / 480",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renekton cleaves around himself, dealing physical damage to nearby enemies and healing himself for each enemy hit, up to a cap.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Enhanced Damage",
          "modifiers": [
            {
              "values": "90 / 135 / 180 / 225 / 270"
            },
            {
              "unit": "% bonus AD",
              "values": "140"
            }
          ]
        },
        {
          "attribute": "Healing Cap",
          "modifiers": [
            {
              "values": "50 / 75 / 100 / 125 / 150"
            }
          ]
        },
        {
          "attribute": "Enhanced Healing Cap",
          "modifiers": [
            {
              "values": "200 / 300 / 400 / 500 / 600"
            }
          ]
        },
        {
          "attribute": "Non-Champion Healing",
          "modifiers": [
            {
              "values": "2 / 3 / 4 / 5 / 6"
            },
            {
              "unit": "% bonus AD",
              "values": "2"
            }
          ]
        },
        {
          "attribute": "Enhanced Non-Champion Healing",
          "modifiers": [
            {
              "values": "6 / 9 / 12 / 15 / 18"
            },
            {
              "unit": "% bonus AD",
              "values": "6"
            }
          ]
        }
      ]
    },
    {
      "description": "Against champions, the healing is increased.",
      "leveling": [
        {
          "attribute": "Champion Healing",
          "modifiers": [
            {
              "values": "12 / 20 / 28 / 36 / 44"
            },
            {
              "unit": "% bonus AD",
              "values": "17"
            }
          ]
        },
        {
          "attribute": "Enhanced Champion Healing",
          "modifiers": [
            {
              "values": "36 / 60 / 84 / 108 / 132"
            },
            {
              "unit": "% bonus AD",
              "values": "51"
            }
          ]
        }
      ]
    },
    {
      "description": "Renekton generates 2.5 Fury for each non-champion hit and 10 Fury for each champion hit, up to 30 total per cast."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Reign of Anger Bonus:</span> Cull the Meek has increased damage, tripled total healing, and a quadrupled healing cap.</p>"
    },
    {
      "description": "Renekton cannot basic attack nor cast Slice and Dice or Dominus for 0.25 seconds after Cull the Meek's activation."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/q",
  "notes": "Healing modifiers such as  Spirit Visage and  Grievous Wounds take effect after Cull the Meek's healing cap.",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
