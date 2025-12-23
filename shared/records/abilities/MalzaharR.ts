// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Nether Grasp",
  "affects": "Enemies",
  "castTime": "0.005",
  "cooldown": "140 / 110 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malzahar tethers to the target enemy champion, knocking them down. He then channels for up to 2.5 seconds, suppressing and revealing the target and dealing them magic damage every 0.25 seconds, revealing himself in the process.</p>",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "125 / 200 / 275"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "12.5 / 20 / 27.5"
            },
            {
              "unit": "% AP",
              "values": "8"
            }
          ]
        }
      ]
    },
    {
      "description": "Malzahar will continue to channel as long as the tether is not broken, even if the suppression is removed."
    },
    {
      "description": "Additionally, a Null Zone is opened beneath the target's location at the time of cast that lasts 5 seconds, dealing magic damage every 0.5 seconds to enemies within, capped at 120 per tick against minions and monsters.",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "10 / 15 / 20"
            },
            {
              "unit": "% per 100 AP",
              "values": "2.5"
            }
          ]
        },
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "1 / 1.5 / 2"
            },
            {
              "unit": "% per 100 AP",
              "values": "0.25"
            }
          ]
        }
      ]
    },
    {
      "description": "Null Zone will persist even if the channel is interrupted."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/r",
  "notes": "If a target is currently being affected by  Malefic Visions, casting Nether Grasp on them will grant 2 stacks toward effects such as  Electrocute or  Phase Rush.(bug)\nThis is, correctly, not the case if Nether Grasp is cast before Malefic Visions.\nApplies  persistent damage for the tether and  persistent area damage to enemies within the Null Zone.\nThe tether will not break if the target enters a  zombie state or enters  resurrection.\nThe tether will continue to damage the target for its full duration even if it is broken early.(bug)\nRemoving the  suppression will also remove the  reveal.\nMalzahar places himself onto the ground and interrupts  displacements affecting him upon starting the channel.\nThe following table refers for interactions while Malzahar is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled if attacking Nether Grasp target. Otherwise interrupts after 0.5 seconds of channeling.\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nDisabled for the first 0.5 seconds. Interrupts afterwards.\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "Special",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "700",
  "tetherRadius": "1250"
}
export default ability
