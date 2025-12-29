// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Stand Behind Me",
  "affects": "Self, Allies",
  "blurb": "Active:  Braum  dashes to a target allied  champion or  minion. On arrival, both of them gain  armor and  magic resistance for a few seconds.",
  "castTime": "none",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "40",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Braum dashes to put himself between the target ally and the closest visible enemy champion within 1500 units, and upon arrival grants himself and the ally bonus armor and bonus magic resistance for 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Ally Bonus Armor",
          "modifiers": [
            {
              "values": "20 / 25 / 30 / 35 / 40"
            },
            {
              "unit": "% bonus armor",
              "values": "12"
            }
          ]
        },
        {
          "attribute": "Ally Bonus Magic Resistance",
          "modifiers": [
            {
              "values": "20 / 25 / 30 / 35 / 40"
            },
            {
              "unit": "% bonus magic resistance",
              "values": "12"
            }
          ]
        }
      ]
    },
    {
      "description": "Stand Behind Me can be self cast to instantly grant Braum the bonus resistances.",
      "leveling": [
        {
          "attribute": "Self Bonus Armor",
          "modifiers": [
            {
              "values": "20 / 25 / 30 / 35 / 40"
            },
            {
              "unit": "% bonus armor",
              "values": "36"
            }
          ]
        },
        {
          "attribute": "Self Bonus Magic Resistance",
          "modifiers": [
            {
              "values": "20 / 25 / 30 / 35 / 40"
            },
            {
              "unit": "% bonus magic resistance",
              "values": "36"
            }
          ]
        }
      ]
    },
    {
      "description": "Unbreakable can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/w",
  "notes": "Stand Behind Me can be used on allied  minions but not on  wards nor  traps.\nStand Behind Me has a  forgiveness radius of 175 units.\nIf there are no nearby enemy champions, Braum will dash to land up-to 150 units on the far side of his target.\nThe maximum dash range without enemy champions present is ~650. An enemy champion on the far side of the ally will allow Braum to dash a total of up-to 800 units.\nIf  Unbreakable is cast during the dash,  Winter's Bite and  Glacial Fissure may also be cast.\nIf the  dash is interrupted, neither Braum nor his ally receive the bonus resistances.",
  "resource": "Mana",
  "targeting": "Unit",
  "targetRange": "650"
}
export default ability
