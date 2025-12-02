// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Feast",
  "affects": "Enemies / Self",
  "blurb": "Active:  Cho'Gath devours an enemy, dealing true damage based on Cho'Gath's bonus health. If this attack kills the target, Cho'Gath gains a permanent Feast  stack that infinitely stacks.",
  "castTime": "0.25",
  "cooldown": "80 / 70 / 60",
  "cost": "100",
  "damageType": "True damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cho'Gath attempts to eat the target enemy, dealing them true damage. Against non- champions, the base damage is modified.</p>",
      "leveling": [
        {
          "attribute": "Champion True Damage",
          "modifiers": [
            {
              "values": "300 / 475 / 650"
            },
            {
              "unit": "% AP",
              "values": "50"
            },
            {
              "unit": "% bonus health",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Non-Champion True Damage",
          "modifiers": [
            {
              "values": "1200"
            },
            {
              "unit": "% AP",
              "values": "50"
            },
            {
              "unit": "% bonus health",
              "values": "10"
            }
          ]
        }
      ]
    },
    {
      "description": "If the target is killed, Cho'Gath gains a stack of Feast. Only 6 stacks can be gained from non-epic monsters or minions."
    },
    {
      "description": "Each stack of Feast increases the cast range of the ability by 2.5, for a maximum increase of 25 at 10 stacks, and grants Cho'Gath bonus health as well as bonus attack range and increased size, capping at 75 bonus attack range and 100% increased size.",
      "leveling": [
        {
          "attribute": "Bonus Health Per Stack",
          "modifiers": [
            {
              "values": "80 / 120 / 160"
            }
          ]
        },
        {
          "attribute": "Bonus Attack Range Per Stack",
          "modifiers": [
            {
              "values": "4.7 / 6.2 / 7.7"
            }
          ]
        },
        {
          "attribute": "Bonus Size Per Stack",
          "modifiers": [
            {
              "unit": "%",
              "values": "6 / 8 / 10"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/r",
  "notes": "The increased size stacks additively with other size increases.\nThe name of the bonus health buff is \"Feast\".\nThe bonus attack range and increase size cap at respectively 16.25 / 13.93 / 12.19 / 10.83 / 9.75 and 16.67 / 14.29 / 12.5 / 11.11 / 10 stacks, with the last stack being effective as the decimal part of the value (no decimal meaning 100% as effective).\nEach stack of Feast increases the damage by 8 / 12 / 16.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nIf an enemy  champion has health below the amount of true damage Feast deals, they will be marked for execution. This indicator does not consider  shields or  invulnerability.\nConsuming any additional  Voidgrubs from the same spawn group will be tracked as a \"monster eaten\" for Feast's buff, but will neither grant any bonuses nor count towards the 6-stack limit.(bug)\nWhile not on  cooldown, Feast's ability icon on the HUD can be pinged to announce its damage to  monsters in the ally chat.\nThis indicator is only visible to Cho'Gath.",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "175"
}
export default ability
