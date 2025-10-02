// Updated Patch 25.19 - 09/27/2025 06:08:58 PM CDT

const champion: Champion = {
  "id": 157,
  "key": "Yasuo",
  "name": "Yasuo",
  "title": "the Unforgiven",
  "abilities": [
    {
      "key": "P",
      "name": "Way of the Wanderer",
      "affects": "Self",
      "blurb": "Innate - Intent:  Yasuo gains increased  critical strike chance.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Intent:</span> Yasuo's total critical strike chance is doubled from all other sources. Additionally,[ every 1% critical strike chance in excess of 100% is converted into 0.5 bonus attack damage. ][ every 50% critical strike chance in excess of 100% is converted into 25 bonus attack damage. ]</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Resolve:</span> Yasuo generates a stack of Flow for every 59 / 52.5 / 46 (based on level) units he travels by any means. At[ 100 stacks ][ 5900 / 5250 / 4600 (based on level) units traveled ]and upon taking damage from an enemy champion or monster, Yasuo consumes all Flow to grant himself a shield for 125 - 600 (based on level) that lasts for 1 second.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/p",
      "notes": "Yasuo gains the shield before the damage instance; the shield will mitigate the damage that triggered it.\nYasuo is able to reach 100% critical strike chance with Way of the Wanderer's multiplier after obtaining a total of  50% critical strike chance.\nYasuo's secondary resource bar will display the amount of shield stored as an equivalent percentage to his Flow stacks. (Each Flow stack will add 1.25 : 6 (based on level) to the bar)\nUpon taking damage, the bar will display his current shield strength.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Steel Tempest",
      "width": "80 /  180",
      "affects": "Enemies",
      "blurb": "Active:  Yasuo thrusts his sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and  on-attack effects to the first enemy hit. This can  critically strike.",
      "castTime": "0.35 : 0.175 (based on bonus attack speed) / 0.35 : 0.28 (based on bonus attack speed)",
      "cooldown": "4",
      "cost": "0",
      "damageType": "Physical damage",
      "effectRadius": "215",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yasuo thrusts his sword in a line in the target direction that deals physical damage to enemies hit, applies on-hit effects to the first enemy hit, and triggers on-attack effects once. Steel Tempest's damage based on its AD ratio can critically strike for (175% + 40%) damage.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "20 / 45 / 70 / 95 / 120"
                },
                {
                  "unit": "% AD",
                  "values": "105"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Steel Wind Rising:</span> If this hits at least one enemy, Yasuo generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Steel Tempest cast consumes them all to become empowered with a new effect.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Gathering Storm Bonus:</span> Yasuo unleashes a whirlwind in the target direction that deals the same damage to enemies hit and knocks them up for 0.75 seconds, or 0.9 seconds in combination with Sweeping Blade.</p>"
        },
        {
          "description": "Steel Tempest's thrust will fail to hit targets after the cast time if Yasuo was affected by disarming crowd control during it, but the cooldown of the ability is reset to 0.1 seconds."
        },
        {
          "description": "If Steel Tempest is cast during Sweeping Blade, it will instead affect enemies around Yasuo at the end of the dash, or doing so immediately at his landing location after blinking while ending the dash prematurely. Steel Tempest's cast time is not incurred in this case."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/q",
      "maxCharges": -1,
      "notes": "Casting  Sweeping Blade when Steel Tempest's remaining cooldown is less than 0.5 seconds resets this remaining cooldown to allow casting it in combination, but adds the refunded time to Steel Tempest's cooldown.\nIf Yasuo becomes unable to cast abilities during the dash after buffering, Steel Tempest will not cast, but will still go on cooldown.(note)\nThe whirlwind from consuming stacks of Gathering Storm can strike targets whose center is behind Yasuo, unlike most  missiles.\nThe whirlwind is not released when cast during  Sweeping Blade, but instead  knocks up all enemies hit around Yasuo at the end of the dash.\nSteel Tempest applies  basic damage to the first (closest) enemy hit and  area damage to secondary enemies:\nSteel Tempest will apply  on-hit effects to the first target hit, but will not do so to the secondary ones.\nSteel Tempest will not apply  spell effects to the first target hit, but will do so to the secondary ones.\n Spell vamp will only grant  healing from the damage dealt to secondary targets, and healing is reduced to 33% effectiveness, accordingly.\n Life steal will heal based on the damage dealt to the first target hit.\nThe whirlwind is a missile and can therefore be  intercepted.\nSteel Tempest will only draw minion aggro if the first target is a champion.\nThis ability will cast from wherever the caster is at the end of the cast time.\nEach parry has different interactions with this ability, whether it's the first target of Steel Tempest or the secondary one. In either case Yasuo still gains a stack of Gathering Storm and his whirlwind knock-up cannot be negated by parries:\n Dodge: both first target and secondary target do not take damage.\n Block: first target does not take damage, secondary target does take damage.\n Blind: both first target and secondary target do take damage.\nSteel Tempest rolls its  critical strikes individually against each enemy hit.\nCasting  Last Breath during Steel Tempest will buffer it to cast after the cast time has completed.\nHowever, if  Last Breath is used on a target affected by an  airborne source that is not Yasuo, it is cast immediately due to Steel Tempest's cast time ending prematurely. Steel Tempest will still cast in this case.\n Spell shield does not prevent a stack of Gathering Storm from being gained.\nWhile at two stacks, a range indicator will be shown for the effective range of the whirlwind.",
      "projectile": "SPECIAL",
      "speed": "1200",
      "spellEffects": "Special",
      "spellshieldable": "true",
      "targeting": "Direction / Auto"
    },
    {
      "key": "W",
      "name": "Wind Wall",
      "affects": "None",
      "blurb": "Active:  Yasuo raises a wind wall that drifts in the target direction for a few seconds, blocking all enemy  projectiles that hit it.",
      "castTime": "0.013",
      "cooldown": "25 / 23 / 21 / 19 / 17",
      "cost": "0",
      "effectRadius": "300",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yasuo raises a wall of wind that travels in the target direction over 0.6 seconds. It then drifts another 50 units over 3.4 seconds, blocking all hostile non- turret projectiles that hit it and granting sight of its surroundings.</p>",
          "leveling": [
            {
              "attribute": "Wall Width",
              "modifiers": [
                {
                  "values": "320 / 390 / 460 / 530 / 600"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/w",
      "maxCharges": -1,
      "notes": "Wind Wall grants  sight in a small static area in front of the cast location.\nWind Wall starts blocking projectiles on-cast (despite not being fully formed).\nWind Wall travels via a missile, and thus stops upon colliding with an enemy Wind Wall.",
      "projectile": "SPECIAL",
      "targeting": "Direction"
    },
    {
      "key": "E",
      "name": "Sweeping Blade",
      "affects": "Enemies",
      "blurb": "Active:  Yasuo  dashes in the target enemy's direction, dealing magic damage,  briefly becoming  ghosted, and generating a stack of Ride the Wind for a few seconds, stacking up to a cap.",
      "castTime": "none",
      "cooldown": "0.5 / 0.4 / 0.3 / 0.2 / 0.1",
      "cost": "0",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yasuo dashes a fixed distance in the direction of the target enemy and becomes ghosted for 2 seconds, refreshing on subsequent casts. Upon impact, he deals magic damage to the target and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 4 times.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 85 / 100 / 115 / 130"
                },
                {
                  "unit": "% bonus AD",
                  "values": "20"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ride the Wind:</span> Sweeping Blade's damage is increased by 25% per stack, up to 100% at maximum stacks.</p>",
          "leveling": [
            {
              "attribute": "Bonus Damage per Stack",
              "modifiers": [
                {
                  "values": "17.5 / 21.25 / 25 / 28.75 / 32.5"
                },
                {
                  "unit": "% bonus AD",
                  "values": "5"
                },
                {
                  "unit": "% AP",
                  "values": "15"
                }
              ]
            },
            {
              "attribute": "Maximum Bonus Damage",
              "modifiers": [
                {
                  "values": "70 / 85 / 100 / 115 / 130"
                },
                {
                  "unit": "% bonus AD",
                  "values": "20"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            },
            {
              "attribute": "Total Combined Damage",
              "modifiers": [
                {
                  "values": "140 / 170 / 200 / 230 / 260"
                },
                {
                  "unit": "% bonus AD",
                  "values": "40"
                },
                {
                  "unit": "% AP",
                  "values": "120"
                }
              ]
            }
          ]
        },
        {
          "description": "Sweeping Blade can be cast on the same target only once every few seconds."
        },
        {
          "description": "Yasuo will be knocked down by any immobilizing or polymorphing crowd control during the dash."
        },
        {
          "description": "Last Breath can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/e",
      "maxCharges": -1,
      "notes": "If  Steel Tempest has been buffered,  Wind Wall may also be cast during the dash.(note)\nThe on-target cooldown will be applied upon starting the dash.\nSweeping Blade's dash speed is affected by  movement speed.\nSweeping Blade will generate 7.5  Flow stacks per cast that travels the maximum distance.\nYasuo can use Sweeping Blade's fixed dash distance to cross walls both before and after hitting his target (provided his proximity to the wall and/or target allows it).\nAfter Sweeping Blade, Yasuo becomes  ghosted for a moment to prevent situations where he would face extreme cases of body block.\n Sleep does not count for knocking the dash down.(bug)",
      "onTargetCdStatic": "10 / 9 / 8 / 7 / 6",
      "speed": "750 + 60% movement speed",
      "spellEffects": "Single target",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "475"
    },
    {
      "key": "R",
      "name": "Last Breath",
      "affects": "Enemies",
      "blurb": "Active:  Yasuo  blinks to the target  airborne enemy champion and instantly generates max  Flow. He then briefly  knocks up,  reveals, and deals physical damage to all nearby  airborne enemies.",
      "castTime": "none",
      "cooldown": "70 / 50 / 30",
      "cost": "0",
      "damageType": "Physical damage",
      "effectRadius": "400",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yasuo blinks to the opposite side of a visible airborne enemy champion nearest to the cursor, instantly generating maximum Flow while resetting Gathering Storm stacks.</p>"
        },
        {
          "description": "Upon arrival, he knocks up all nearby airborne enemy champions for 1 second, revealing them, becoming unable to act himself, and slashing them with his sword over the duration to deal physical damage thereafter. Surrounding enemy champions that become airborne during this time will also be affected by Last Breath through the remaining duration.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "200 / 350 / 500"
                },
                {
                  "unit": "% bonus AD",
                  "values": "150"
                }
              ]
            }
          ]
        },
        {
          "description": "For the next 15 seconds, the damage dealt by Yasuo's critical strikes ignores 60% of the target's bonus armor."
        },
        {
          "description": "A nearby airborne enemy champion is required to cast this ability. If Yasuo would blink inside the attack range of an enemy turret (excluding the Nexus Obelisk), Last Breath will instead attempt to position him outside of it."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/r",
      "maxCharges": -1,
      "notes": "Last Breath can be cast on targets  suspended in mid-air by  Nami's  Aqua Prison's  stun.\nThe wiki has adopted the term suspension for this unique property due to a statement by Yasuo's designer.[2]\nThe percentage bonus armor penetration stacks multiplicatively with other sources of percentage armor penetration.\nLast Breath requires the target to be affected by  airborne from an enemy source, and simultaneously that the target is not considered  cc-immune,  displacement immune, or  untargetable during it.\nLast Breath cannot be cast if there are no nearby enemy champions that meet the conditions.\nAttempting to cast the ability on an enemy champion that is not airborne will indicate that they \"Must Be Airborne!\".\n Spell shield will not prevent Last Breath from being cast and the target will be knocked up and dealt the damage.\nThe spell shield is still consumed in this case.(note)\nSelf-applied or allied-applied  displacements do not allow Last Breath to target the champion. Those applied by the neutral team (e.g.  Dragon's initial knock back) can be targeted.\nAn indicator will be placed towards enemy champions that meet the cast conditions within range of Last Breath to signify the ability can be cast.\n The Hextech Ultimatum will prevent Yasuo from casting Last Breath on an airborne enemy champion far outside its borders.\nYasuo can only do so if the airborne enemy champion is positioned slightly outside of the borders.\nUpon Last Breath's cast, the targets' facing directions snap to Yasuo. Afterwards, their facing directions shift in all other directions every 0.25 seconds over the duration of the airborne.\nThe last shift snaps them to the facing direction of the second one.\nOn the  Nightbringer Yasuo skin, these shifts in facing direction do not occur, but the targets' facing directions will still snap to Yasuo upon Last Breath's cast.\nYasuo does not need  sight of enemy champions near his target to affect them with the ability.\nLast Breath applies its damage and removes its forced movement on the target when it ends, including if it is removed early by being  cleansed.\nThis is in contrast to most other effects with  airborne, which have their forced movement linger if the disabling debuff is removed and have to be overridden by another movement spell (such as  Lucian's  Relentless Pursuit or  Flash).\nIt behaves similar to  Nami's  Aqua Prison in this but is not considered  suspension.\nTerrain displacing abilities (e.g.  Weaver's Wall,  Pillar of Ice,  Volcanic Rupture) that affect enemy champions are considered  airborne, and will therefore interact with Last Breath.\nWhile blinking, Yasuo creates an  untargetable clone of himself that cues a dashing animation (similar to  Sweeping Blade's) towards the target. This unit's rules do not follow those of a  clone's. As such, it is more alike a champion, unless special cased.\nWhile performing Last Breath, Yasuo is  locked out of performing actions.\nThe lock out will end prematurely if all targets:\n Cleanse the  knock up.\nMove far away from Yasuo.\nLeave Yasuo's  sight (e.g. by  nearsight).\nBecome  untargetable.\n Die.\nEnter the  Realm of Death.\nThe following table refers for interactions while Yasuo is locked out:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A",
      "spellEffects": "Single target",
      "spellshieldable": "special",
      "targeting": "Unit / Proximity",
      "targetRange": "1400"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 3,
    "utility": 2,
    "abilityReliance": 20,
    "difficulty": 3
  },
  "faction": "ionia",
  "lore": "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
  "patchLastChanged": "25.14",
  "positions": [
    "Bottom",
    "Middle",
    "Top"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2013-12-13",
  "resource": "Flow",
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "stats": {
    "health": {
      "flat": 590,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 100
    },
    "manaRegen": {
      "flat": 0
    },
    "armor": {
      "flat": 32,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 120
    },
    "pathingRadius": {
      "flat": 32
    },
    "gameplayRadius": {
      "flat": 65
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.697,
      "perLevel": 3.5
    },
    "attackSpeedRatio": {
      "flat": 0.67
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.08
    },
    "attackRange": {
      "flat": 175
    }
  }
}
export default champion