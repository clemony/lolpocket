// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Alpha Strike",
  "affects": "Self, Enemies",
  "blurb": "Active:  Master Yi briefly  vanishes and marks the target enemy, then rapidly marks up to 3 other nearby enemies. If there are no other eligible targets before then, Master Yi can mark the same enemies again.",
  "castTime": "none",
  "cooldown": "20 / 19.5 / 19 / 18.5 / 18",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Physical damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Master Yi vanishes and becomes unable to act. After 0.231 seconds, he marks the target enemy and then proceeds to mark the nearest visible un-marked enemy within 600 units, recurring every 0.231 seconds[ up to 3 times. ][ for a total of 4 marks. ]If there are no other un-marked targets before then, Master Yi can mark the same enemies again. During Alpha Strike, Master Yi can select a direction from the primary target.</p>"
    },
    {
      "description": "Upon finishing marking, Master Yi reappears 75 units in the targeted direction, or in front of the target otherwise, and then becomes able to act again[ after 0.165 seconds. ][ 1.087 seconds total after the start of the cast with 4 bounces. ]If the primary target dies or is too far away during the delay, Master Yi will reappear at the initial cast location instead."
    },
    {
      "description": "Master Yi then detonates the marks to deal physical damage and apply on-hit effects, with on-hit damage reduced to 65% effectiveness. Marks after the first on the same target instead detonate instantly upon application to deal 25% damage and apply on-hit effects, with on-hit damage reduced to 16.25% effectiveness. Alpha Strike deals bonus physical damage to monsters per hit.",
      "leveling": [
        {
          "attribute": "Primary Physical Damage",
          "modifiers": [
            {
              "values": "20 / 40 / 60 / 80 / 100"
            },
            {
              "unit": "% AD",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Reduced Damage per hit",
          "modifiers": [
            {
              "values": "5 / 10 / 15 / 20 / 25"
            },
            {
              "unit": "% AD",
              "values": "17.5"
            }
          ]
        },
        {
          "attribute": "Maximum Single-Target Damage",
          "modifiers": [
            {
              "values": "35 / 70 / 105 / 140 / 175"
            },
            {
              "unit": "% AD",
              "values": "122.5"
            }
          ]
        },
        {
          "attribute": "Primary Bonus Monster Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            }
          ]
        },
        {
          "attribute": "Combined Primary Monster Damage",
          "modifiers": [
            {
              "values": "80 / 125 / 170 / 215 / 260"
            },
            {
              "unit": "% AD",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Reduced Monster Damage per hit",
          "modifiers": [
            {
              "values": "20 / 31.25 / 42.5 / 53.75 / 65"
            },
            {
              "unit": "% AD",
              "values": "17.5"
            }
          ]
        },
        {
          "attribute": "Max Single-Target Monster Damage",
          "modifiers": [
            {
              "values": "140 / 218.75 / 297.5 / 376.25 / 455"
            },
            {
              "unit": "% AD",
              "values": "122.5"
            }
          ]
        }
      ]
    },
    {
      "description": "Alpha Strike's primary and lesser damage can critically strike for[ (175% + 40%) and (43.75% + 10%) damage respectively. ][ 100% + 100% of bonus critical damage, reduced to 25% for the lesser damage. ]"
    },
    {
      "description": "Basic attacks on-hit reduce Alpha Strike's current cooldown by 1 second, affected by ability haste."
    },
    {
      "description": "Wuju Style and Highlander can be cast during Alpha Strike. Each time Alpha Strike hits a target, the current durations of Wuju Style and Highlander are refreshed. Alpha Strike does not trigger its cooldown reduction nor grant a stack of Double Strike when applying on-hit effects."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/q",
  "notes": "Alpha Strike's primary damage applies after Master Yi reappears.\nAlpha Strike's  cooldown reduction applies on  structures.\nWhen Master Yi bounces from a unit it will grant  vision in a 600 radius around it for up to 0.627 seconds after Alpha Strike ends, including across terrain, though not into  brush.\nIt will always grant vision around the primary target, even if he doesn't bounce off it.\nAlpha Strike's damage is calculated at the moment that each mark is placed. Because of this, it is possible to inflict differing amounts of damage if Master Yi's AD changes between marks.\nMaster Yi will follow all his primary target's movements.\nAlpha Strike can only follow up-to 2000 units; If the target teleports a very long distance, it will not be followed.\nWhile vanished, the initial cast location of Alpha Strike counts as Master Yi's position, which is considered for effects such as  tethers.\nIf the primary target becomes  untargetable and there are no other nearby valid targets, Alpha Strike will end prematurely and will not deal the damage occurring after Master Yi's reappearance.\nThe choice of exit direction occurs through an indicator anchored to the target during the time that Master Yi is vanished. You are unable to choose the exit direction after the third mark.(bug) Selection commands (default: MB1/left click) and movement commands (default: MB2/right click) are both valid.\nMultiple commands can be issued, but only the final command before exiting will determine the direction.\nIf the primary target is a champion, Master Yi will be automatically ordered to basic attack them after Alpha Strike ends.\nMaster Yi will not be able to buffer other abilities.(bug)\nOnly the first instance of damage counts as a hit for effects such as  Conqueror(bug),  Electrocute and  Eclipse's Ever Rising Moon.\nAlpha Strike does not interact with  Sejuani's  Permafrost and  Press the Attack.(bug)\n Spell shield will only block a single instance of damage.\nOn-hit damage applied by Alpha Strike will be negated by  dodge and  block, but not while Master Yi is  blinded.\nAlpha Strike's own damage will not be negated.\nIf Master Yi  dies during Alpha Strike and he is only focusing one target, the ability will only deal the reduced damage strikes and not the final tick of damage from reappearing.\nIf he is striking multiple targets the damage will be dealt immediately when dying, and if he dies before the bounce from the last target, Alpha Strike will deal reduced damage only to all units he already bounced from.(bug)\nIf Master Yi enters  resurrection during Alpha Strike and he is only focusing one target, the ability will deal the reduced damage strikes as normal and the final tick of damage after being resurrected.\nIf he is striking multiple targets, Alpha Strike will sometimes deal the reduced damage from repeated bounces and the main damage after being resurrected, and sometimes only the reduced damage, unrelated to the number of targets available.(bug)\nThe following table refers for interactions while Master Yi is performing Alpha Strike:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Wuju Style and  Highlander are usable.  Meditate is disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "spellEffects": "AoE",
  "spellshieldable": "Special",
  "targeting": "Unit",
  "targetRange": "600"
}
export default ability
