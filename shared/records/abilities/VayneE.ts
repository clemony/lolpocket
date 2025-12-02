// Updated Patch 15.23.1 - 11/30/2025 12:24:09 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Condemn",
  "affects": "Enemies",
  "blurb": "Active:  Vayne fires a heavy bolt at the target enemy that deals physical damage and  knocks them back.",
  "castTime": "0.25",
  "cooldown": "20 / 18 / 16 / 14 / 12",
  "cost": "90",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vayne fires a heavy bolt at the target enemy that deals physical damage and knocks them back 475 units, though not through terrain.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "50 / 85 / 120 / 155 / 190"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "If the target collides with terrain, they take bonus physical damage and become stunned for 1.5 seconds.",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "values": "75 / 127.5 / 180 / 232.5 / 285"
            },
            {
              "unit": "% bonus AD",
              "values": "75"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "125 / 212.5 / 300 / 387.5 / 475"
            },
            {
              "unit": "% bonus AD",
              "values": "125"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/e",
  "notes": "Condemn's  displacement direction is determined at the end of the cast time.\nBecause of this, Vayne may use  Flash during the cast time to create a better angle.\n Cleansing the  knock back will also end the displacement early.\nThe spell indicator for this ability also displays the direction for the knock back relative to Vayne's position.\nCondemn's  stun duration starts when Vayne's target collides with a wall (they can be immobilized for up to 2 seconds depending on  displacement duration based on distance traveled).\nCondemn's missile will fail to fire if Vayne is  suppressed during the cast time.(note)\nCondemn can interact with player-generated terrain.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2200 / 2000",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "550"
}
export default ability
