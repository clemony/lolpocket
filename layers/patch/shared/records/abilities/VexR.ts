// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Shadow Surge",
  "width": "260",
  "affects": "Self, Enemies",
  "blurb": "Active:  Vex sends her Shadow in the target direction, which deals magic damage to enemies hit. Shadow stops upon hitting an enemy  champion, marking and  revealing them for a few seconds.Shadow Surge can be recast while the target is marked.",
  "castTime": "0.25 / None",
  "cooldown": "140 / 120 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "650 / Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex sends her Shadow in the target direction, which grants sight around its trajectory and deals magic damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "75 / 125 / 175"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        }
      ]
    },
    {
      "description": "Shadow stops upon hitting an enemy champion to mark them for 4 seconds, during which they are revealed. Shadow Surge can be recast while the target is marked."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vex dashes towards the marked target with displacement immunity. Upon arrival, she consumes their mark and deals magic damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "225 / 375 / 525"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    },
    {
      "description": "If Vex scores a takedown against Shadow Surge's marked target within 6 seconds of its application, Vex can cast Shadow Surge again within 12 seconds at no cost after 0.5 seconds, repeating the effects."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nVex's dash will track the target if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nShadow Surge grants sight of the area along its path for 0.4 seconds each.\nShadow Surge cannot be recast while  grounded or  rooted, or if the target is  untargetable.\nShadow Surge may also be recast if the target died to the ability.\nThe following table refers for interactions while Vex is dashing:\nAll movement spells are disabled during the first 0.25 seconds of the dash.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600 / 2200",
  "spellEffects": "spell",
  "spellshieldable": "true",
  "targeting": "Direction / Auto"
}
  export default ability
