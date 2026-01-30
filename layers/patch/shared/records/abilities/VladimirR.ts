// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Hemoplague",
  "affects": "Self, Enemies",
  "blurb": "Active:  Vladimir unleashes a plague at the target location that infects nearby enemies hit for a few seconds, increasing the damage they take from all sources.",
  "castTime": "none",
  "cooldown": "120",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "375",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vladimir spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.</p>"
    },
    {
      "description": "After the duration, the infection bursts to deal magic damage to all affected targets and, after a 0.4-second delay, heal Vladimir for each infected champion, reduced by 40% for champions beyond the first.",
      "leveling": [
        {
          "attribute": "Magic damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Reduced Heal",
          "modifiers": [
            {
              "values": "60 / 100 / 140"
            },
            {
              "unit": "% AP",
              "values": "28"
            }
          ]
        },
        {
          "attribute": "Maximum Total Heal",
          "modifiers": [
            {
              "values": "390 / 650 / 910"
            },
            {
              "unit": "% AP",
              "values": "182"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/r",
  "notes": "Hemoplague will amplify almost all sources and types of damage, even including damage from neutral monsters.\n True damage will however not be amplified.(bug)\nHemoplague's effect  stacks multiplicatively with other damage modifiers.\nHemoplague amplifies itself for an actual damage of 165 / 220 / 275 / 330 / 385 (+ 77% AP).\nHemoplague's modifier to incoming damage stacks additively with  Alistar's  Unbreakable Will for a total damage reduction of 45 / 55 / 65%.(note)\n Spell shield does not negate the detonation.",
  "projectile": "FALSE",
  "spellEffects": "Area of effect",
  "spellshieldable": "special",
  "targeting": "Location",
  "targetRange": "625"
}
  export default ability
