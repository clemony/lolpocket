// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "GNAR!",
  "affects": "Enemies",
  "castTime": "0.25",
  "cooldown": "90 / 60 / 30",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "475",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mini Gnar - Passive:</span> Hyper's bonus movement speed is increased.</p>",
      "leveling": [
        {
          "attribute": "Hyper Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 60 / 80"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mega Gnar - Active:</span> Gnar thrusts in the target direction, knocking away nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them physical damage, as well as slowing them by 45% after a 0.4-second delay for a duration.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Disable Duration",
          "modifiers": [
            {
              "values": "1.25 / 1.5 / 1.75"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies that collide with terrain take 50% increased damage immediately and are stunned instantly instead of slowed after a delay.",
      "leveling": [
        {
          "attribute": "Increased Damage",
          "modifiers": [
            {
              "values": "300 / 450 / 600"
            },
            {
              "unit": "% bonus AD",
              "values": "75"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/r",
  "notes": "Gnar is locked out of moving and casting movement abilities for 0.175 seconds after the cast time.\nGNAR! can interact with player-generated terrain.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "FALSE",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
