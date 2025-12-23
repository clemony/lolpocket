// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Bio-Arcane Barrage",
  "blurb": "Active:  Kog'Maw empowers his basic attacks for a period, gaining  bonus attack range and dealing bonus magic damage based on the target's maximum health.",
  "castTime": "none",
  "cooldown": "17",
  "cost": "40",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw empowers his basic attacks for the next 8 seconds to gain bonus attack range and deal bonus magic damage on-hit, capped at 100 against minions and monsters.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Range",
          "modifiers": [
            {
              "values": "130 / 150 / 170 / 190 / 210"
            }
          ]
        },
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "3 / 3.75 / 4.5 / 5.25 / 6"
            },
            {
              "unit": "% per 100 AP",
              "values": "1.5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/w",
  "notes": "The attacks do not deal the bonus damage against structures.",
  "resource": "Mana",
  "spellEffects": "Proc",
  "spellshieldable": "false",
  "targeting": "Auto"
}
export default ability
