// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Public Execution",
  "width": "65",
  "affects": "Enemies",
  "blurb": "Passive:  Ambessa gains  armor penetration and  heals for a percentage of the damage dealt by her active abilities.",
  "castTime": "0.55",
  "cooldown": "130 / 115 / 100",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Ambessa gains armor penetration and heals herself for a percentage of the post-mitigation damage she deals to enemies with her active abilities. The healing effectiveness is reduced to 25% against minions and 40% against monsters.</p>",
      "leveling": [
        {
          "attribute": "Armor Penetration",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 20 / 30"
            }
          ]
        },
        {
          "attribute": "Healing Percentage",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 12.5 / 15"
            },
            {
              "unit": "% life steal",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Minion Healing Percentage",
          "modifiers": [
            {
              "unit": "%",
              "values": "2.5 / 3.13 / 3.75"
            },
            {
              "unit": "% life steal",
              "values": "12.5"
            }
          ]
        },
        {
          "attribute": "Monster Healing Percentage",
          "modifiers": [
            {
              "unit": "%",
              "values": "4 / 5 / 6"
            },
            {
              "unit": "% life steal",
              "values": "20"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ambessa prepares a strike in a line in the target direction, then blinks behind the farthest enemy champion within the area and seizes them. If she successfully seizes the target, Ambessa attaches them to herself and suppresses them for 0.75 seconds. While the target is suppressed, they are revealed and Ambessa picks them up off the ground before crashing them back down, afterwards dealing physical damage and stunning them for 0.4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% bonus AD",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "Ambessa is displacement immune and unable to act during the cast time and while the target is suppressed, lingering for 0.1 seconds afterwards. Drakehound's Step's dash may be buffered during the cast time or lockout, as well as initiated within 0.275 seconds of the lockout ending."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/r",
  "notes": "Public Execution's attachment depends on the application of the  suppression; if the suppression is not applied, neither is the attachment. Similarly, if the suppression is removed, so is the attachment.\nIf the target resists the suppression by being  immune to crowd control,  displacement immune, or having a  spell shield, Ambessa will not attach them to herself.\nShe will be unable to apply the damage and stun in this case since the suppression was not applied in the first place.\nShe will still  blink to the target in this case.\nIf the target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will instantly detach themselves from Ambessa, which causes the ability to cancel immediately.\nShe will fail to apply the damage and stun to the target since the suppression was removed from them early in this case.\nHer lockout and displacement immunity also ends prematurely in this case.\nIf Ambessa would blink inside the  attack range of an enemy  turret, including the Nexus Obelisk, Public Execution will instead attempt to position her outside of it.\nAmbessa will  reveal herself during the cast time if there is an enemy champion nearby.\nAmbessa will search for enemies in the direction she is facing at the end of cast time.\nThis direction can be changed by  Seraphine's  Encore.(bug)\nIf Ambessa successfully seizes a target, any regular movement commands issued before doing so are discarded upon the lockout ending.\nThis does not affect movement orders issued during the lockout.\nPublic Execution will trigger a stack of  Electrocute,  Phase Rush, and  Eclipse's Ever Rising Moon for the suppression application and the damage dealt.\nPublic Execution will not queue  Flash if Ambessa attempts to use the summoner spell during the cast time.(note)\nThe following table refers for interactions while Ambessa is in cast time and during the lockout:\n\n\nAttacking\n\nRegisters input for  Drakehound's Step.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nRegisters input for  Drakehound's Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "spellEffects": "spell",
  "spellshieldable": "true",
  "targeting": "Direction"
}
export default ability
