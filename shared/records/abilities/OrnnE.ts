// Updated Patch 15.24.1 - 12/26/2025 07:04:11 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Searing Charge",
  "affects": "Enemies",
  "castTime": "0.35",
  "cooldown": "14 / 13.5 / 13 / 12.5 / 12",
  "cost": "35 / 40 / 45 / 50 / 55",
  "damageType": "Physical damage",
  "effectRadius": "360 / 150",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn charges in the target direction, dealing physical damage to enemies he passes through and stopping upon colliding with terrain.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "80 / 125 / 170 / 215 / 260"
            },
            {
              "unit": "% bonus armor",
              "values": "40"
            },
            {
              "unit": "% bonus magic resistance",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "If Ornn collides with terrain during the charge, he creates a shockwave that knocks up and stuns nearby enemies for 1.25 seconds and deals the same damage if they were not already hit by the charge."
    },
    {
      "description": "The shockwave destroys the pillar formed by Volcanic Rupture and partially destroys terrain created by enemy champions."
    },
    {
      "description": "Ornn cannot basic attack nor cast abilities for 0.5 seconds after the dash ends."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/e",
  "notes": "Spell shields may only block one instance of damage.\nThe area in which enemies will be knocked up is indicated at Ornn's impact location.\nThe indicator is not shown for player-generated terrain.\n Brittle enemies without  Tenacity of their own will be  stunned for a total of 1.625 seconds.\nSearing Charge can interact with player-generated terrain.\nOrnn will not  dash after the cast time if he is  airborne or  resurrecting.\n Displacement immunity will also resist the application of the  stun.\nThe following table refers for interactions while Ornn is in cast time:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "resource": "Mana",
  "speed": "1600",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "800 / 650"
}
export default ability
