// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  "id": 360,
  "key": "Samira",
  "name": "Samira",
  "title": "the Desert Rose",
  "abilities": [
    {
      "key": "P",
      "name": "Daredevil Impulse",
      "affects": "Self, Enemies",
      "blurb": "Innate:  Samira's different  basic attacks and damaging  abilities against enemy  champions generate a Style  stack, up to a cap.",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Samira's damaging basic attacks and abilities against at least one enemy champion different from the previous damaging hit made against champions generate a stack of Style for 6 seconds, refreshing on subsequent hits and stacking up to 6 times.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Style:</span> For each stack, Samira gains 2.75% / 3% / 3.25% / 3.5% (based on level) bonus movement speed, up to a maximum of 16.5% / 18% / 19.5% / 21% (based on level). At maximum stacks, Samira can cast Inferno Trigger.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Samira's basic attacks against targets within 200 units of her use her blade, becoming non-projectile. Blade attacks post-hit, Blade Whirl, Wild Rush, and the slash and explosives of Flair deal 2 - 19 (based on level) (+ 3.5% - 10.5% (based on level) AD) bonus magic damage, increased by 0% - 100% (based on target's missing health).</p>"
        },
        {
          "description": "Samira's basic attack against an immobilized target is empowered to have an uncancellable windup and deal the attack's damage over 6 strikes in 0.5 seconds. If the target is a monster or is airborne, the attack also knocks them up for 0.5 seconds. Samira will dash into her attack range of the target if they are nearby."
        },
        {
          "description": "The empowered attack resets Samira's basic attack timer, is affected by critical strike modifiers, applies on-hit effects only once, and cannot occur on the same target more than once every few seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/p",
      "notes": "The stack count is represented by the grades       to the left of Samira's health bar, visible to the player only, as well as a stack counter under the health bar, visible to all players.\nThe empowered attack can trigger on  immobilizes from both ally and enemy sources.\nThose applied by the neutral team (e.g.  Dragon's initial knock back) can be targeted.\nIt cannot trigger against enemies knocked  airborne by a  Blast Cone triggered by anyone.(note)\nThe empowered attack's interaction with immunities to crowd control:\nIt will not trigger against  crowd control immune and  displacement immune targets.\nThe knock up will be resisted by  Riposte, but the ability does not trigger its on- immobilization effect.(note)\nThe empowered attack will not apply the knock up against  suspended enemies.\nThe empowered attack will only apply the knock up if the target is still  immobilized or  airborne upon being hit. It will not apply if they are no longer disabled when hit.\nThe empowered attack cannot be used against a target with a  spell shield.\nThe application of the knock up can occur on any of the missiles of the empowered attack if it had not already occurred on the first missile.\nA missile that is parried by  Riposte or is  dodged,  blocked, or missed while Samira is  blinded cannot apply the knock up.\nWhile  grounded or  rooted, Samira cannot  dash into range to use the empowered attack. She can only use it if her target is within her  attack range while under this condition.\nThe on-target cooldown will apply even if the empowered attack is parried.\nThe empowered attack rolls  critical strike for each shot of the flurry.\nThe bonus magic damage dealt with the blade is  default damage. The empowered attack is first 1 instance of  basic damage and then 5 instances of  default damage.\nThe attacks do not deal the bonus damage against structures.\nThe empowered attack is unaffected by  attack speed modifiers.\n Guinsoo's Rageblade's Phantom Hit and  Runaan's Hurricane's bolts will not apply the bonus magic damage, since it is a hit effect of specifically the melee attack casts.\nAttacks with the gun and blade do not count as different attacks for stacking Style.\nBasic attacks using the blade are still classified as  ranged.\nThe melee attack's range condition is unaffected by  attack range modifiers (e.g.  Rapid Firecannon).\nBlade range is calculated edge-to-edge just like basic attack ranges are, hence both Samira gaining bonus size or her target increases the total distance at which Samira can attack them with the blade.\nSince the  knock up requires an exterior source to  immobilize the enemy,  Aftershock will be swapped with  Grasp of the Undying for Samira at the start of the game.\nAbilities blocked by  spell shields will still grant Samira Style stacks.\nSamira still gains Style stacks from damaging attacks and abilities landed against  clones.",
      "onTargetCdStatic": "10",
      "projectile": "SPECIAL",
      "spellEffects": "special",
      "spellshieldable": "special",
      "targeting": "Passive",
      "targetRange": "650 / 727.5 / 805 / 882.5 / 960 (based on level)"
    },
    {
      "key": "Q",
      "name": "Flair",
      "width": "120 / 130",
      "affects": "Self, Enemies",
      "angle": "100",
      "blurb": "Active:  Samira fires a shot in the target direction that deals physical damage to the first enemy hit.",
      "castTime": "0.25",
      "cooldown": "6 / 5 / 4 / 3 / 2",
      "cost": "30",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Samira fires a shot in the target direction that deals physical damage to the first enemy hit.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "5 / 10 / 15 / 20 / 25"
                },
                {
                  "tooltip": "Scaling per rank:\n95 / 102.5 / 110 / 117.5 / 125% AD",
                  "unit": "% AD",
                  "values": "95 - 125"
                }
              ]
            }
          ]
        },
        {
          "description": "If a targetable enemy is in front of Samira at the time of cast, she will instead slash with her blade in a cone, dealing the same damage to enemies hit."
        },
        {
          "description": "If Flair is cast during Wild Rush, Samira deploys explosives in her wake that detonate upon the end of the dash, dealing the same damage to enemies hit."
        },
        {
          "description": "Flair can critically strike for (125% + 40%) damage and will apply life steal at 80% effectiveness."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/q",
      "maxCharges": -1,
      "notes": "Applies  spell damage on the shot and  area damage on the slash and explosives.\n Life steal will always benefit from the damage dealt at 80% effectiveness and does not take into account of the ability's spell effects, whereas on the other hand for  omnivamp does, and it will modify the  healing accordingly.\nFlair's shot against an enemy champion will aggro nearby enemy minions.\nFlair can be cast during  Wild Rush even if  Blade Whirl or  Inferno Trigger are active.\nThe slash and explosives roll their  critical strike against each target individually.\nThe shot and the slash do not count as different abilities for stacking  Style.\nSamira's next attack after using Flair will occasionally come out faster.(note)\nSamira can use  Wild Rush during Flair's cast time.\nThis ability will cast from wherever the caster is at the end of the cast time.\nFlair will fire or slash from wherever Samira is at the end of the cast time.\nSamira will always slash in her facing direction, and she will turn to face the target direction only once at the start of the cast time.\nOnly the shot will be destroyed by  projectile-intercepting effects.\nThe explosive placement is illustrated in  Wild Rush regardless of whether Flair is available.\nThe VFX always covers the the full dash's distance even if  Wild Rush is interrupted mid-dash.",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "speed": "2600",
      "spellEffects": "special",
      "spellshieldable": "true",
      "targeting": "Direction",
      "targetRange": "340"
    },
    {
      "key": "W",
      "name": "Blade Whirl",
      "affects": "Enemies",
      "blurb": "Active:  Samira briefly spins her blade twice, dealing physical damage to nearby enemies each time. During this time, she destroys all incoming enemy  projectiles.",
      "castTime": "0.1",
      "cooldown": "30 / 28 / 26 / 24 / 22",
      "cost": "60",
      "damageType": "Physical damage",
      "effectRadius": "325",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Samira spins her blade over 0.75 seconds, destroying all hostile non- turret projectiles within the area for the duration.</p>"
        },
        {
          "description": "Samira slashes twice during Blade Whirl, each one dealing physical damage to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.",
          "leveling": [
            {
              "attribute": "Physical Damage per Hit",
              "modifiers": [
                {
                  "values": "20 / 35 / 50 / 65 / 80"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "40 / 70 / 100 / 130 / 160"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            }
          ]
        },
        {
          "description": "Samira cannot basic attack nor cast Flair during Blade Whirl. Casting Inferno Trigger will end Blade Whirl early."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/w",
      "maxCharges": -1,
      "notes": "Spell shield will block the damage from one slash.\nWhile the ability has a cast time - the cast time has no effect on the ability's usability. All effects begin immediately and Samira can move throughout.\nBoth slashes count as the same ability for stacking  Style.\nThe effect ending early includes the second slash not being performed, if applicable.\nEntering  stasis will also end Blade Whirl early.\nOther item actives and channeling  Teleport or  Recall will not end the effect early.\nSamira can ignore the lockout for  Flair and basic attacks if she uses  Wild Rush and queues up  Flair and/or a basic attack at the start of it.(bug)",
      "resource": "Mana",
      "spellEffects": "aoe",
      "spellshieldable": "true",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Wild Rush",
      "width": "300",
      "affects": "Self, Enemies",
      "blurb": "Active:  Samira  dashes at the target enemy or enemy structure, dealing magic damage to enemies she passes through. She also gains  bonus attack speed for a short time.",
      "castTime": "none",
      "cooldown": "20 / 18 / 16 / 14 / 12",
      "cost": "40",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Samira dashes a fixed distance in the direction of the target enemy or enemy structure, dealing magic damage to enemies she passes through. She also gains bonus attack speed for 5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 60 / 70 / 80 / 90"
                },
                {
                  "unit": "% bonus AD",
                  "values": "20"
                }
              ]
            },
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "20 / 25 / 30 / 35 / 40"
                }
              ]
            }
          ]
        },
        {
          "description": "Scoring a takedown against an enemy champion within 3 seconds of damaging them resets Wild Rush's cooldown."
        },
        {
          "description": "Flair and Inferno Trigger can be cast during the dash. Casting Blade Whirl will buffer it to cast at the end of the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/e",
      "maxCharges": -1,
      "notes": "Samira gains the attack speed buff at the start of the dash.\nWild Rush does not deal its damage to turrets.\nWild Rush prioritizes targeting champions over turrets.\n Inferno Trigger will be buffered to cast at the end of the dash if  Flair was cast during the dash.\nCasting  Flash during Wild Rush will interrupt the dash but deal damage to nearby enemies at the location.\nIf  Flair was cast during this time, an explosive will also be placed at that location.\nWild Rush will also reset if Samira kills or gets assist credit on a  clone that dies (to hostiles).(note)",
      "resource": "Mana",
      "speed": "1600",
      "spellEffects": "aoe",
      "spellshieldable": "true",
      "targeting": "Unit",
      "targetRange": "600"
    },
    {
      "key": "R",
      "name": "Inferno Trigger",
      "affects": "Enemies",
      "blurb": "Active:  Samira unleashes a torrent of shots, reducing her  movement speed and rapidly firing shots that deal physical damage to nearby enemies.",
      "castTime": "none",
      "cooldown": "5",
      "cost": "0",
      "damageType": "Physical damage",
      "effectRadius": "600",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Samira unleashes a torrent of shots for 2.277 seconds, reducing her movement speed by 30% and rapidly shooting at nearby enemies over 2.013 seconds at sporadic times in 0.2-second intervals each (up to 10 times per enemy), dealing physical damage with each shot, reduced by 75% against minions. This damage is affected by critical strike modifiers and applies life steal at 80% effectiveness.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage Per Shot",
              "modifiers": [
                {
                  "values": "5 / 15 / 25"
                },
                {
                  "unit": "% AD",
                  "values": "45"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "50 / 150 / 250"
                },
                {
                  "unit": "% AD",
                  "values": "450"
                }
              ]
            },
            {
              "attribute": "Minion Damage Per Shot",
              "modifiers": [
                {
                  "values": "1.25 / 3.75 / 6.25"
                },
                {
                  "unit": "% AD",
                  "values": "11.25"
                }
              ]
            },
            {
              "attribute": "Total Minion Damage",
              "modifiers": [
                {
                  "values": "12.5 / 37.5 / 62.5"
                },
                {
                  "unit": "% AD",
                  "values": "112.5"
                }
              ]
            }
          ]
        },
        {
          "description": "A nearby visible enemy is required to cast this ability, and targets do not have to be visible to be shot at. Style stacks are consumed at the end of the effect."
        },
        {
          "description": "Samira cannot basic attack nor cast Flair and Blade Whirl during Inferno Trigger, but she can still move. Inferno Trigger will end prematurely by all forms of cast-inhibiting crowd control as well as disarm. Inferno Trigger cannot be cast while Samira is disarmed."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/r",
      "maxCharges": -1,
      "notes": "Samira's facing direction remains as it had been or, if she is moving, towards that direction during Inferno Trigger.\nThe  movement speed reduction stacks additively with other movement speed bonuses.\nIt is a negative bonus, not a  slow, and is thus not reduced by  slow resist.\nInferno Trigger's area of effect is fixed around Samira.\n Spell shield will block the damage of one shot.\nInferno Trigger will not end if there are no enemies that remain in range.\nThe bottom of the player's screen will have a fiery visual effect while Samira is at S rank and Inferno Trigger has at least one rank.\nSince  Inferno Trigger's cooldown is static,  Ultimate Hunter will be swapped with  Treasure Hunter for Samira at the start of the game.",
      "projectile": "TRUE",
      "spellEffects": "aoedot",
      "spellshieldable": "special",
      "targeting": "Proximity"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 0,
    "difficulty": 3
  },
  "faction": "noxus",
  "lore": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on dangerous missions of the highest caliber. Wielding black-powder pistols and a custom-engineered blade, Samira thrives in life-or-death circumstances, eliminating any who stand in her way with flash and flair.",
  "patchLastChanged": "25.14",
  "positions": [
    "Bottom"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2020-09-21",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Marksman"
  ],
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 108
    },
    "healthRegen": {
      "flat": 3.25,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 349,
      "perLevel": 38
    },
    "manaRegen": {
      "flat": 8.2,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 57,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 40.68
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
      "flat": 0.658,
      "perLevel": 3.3
    },
    "attackSpeedRatio": {
      "flat": 0.658
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.15
    },
    "attackRange": {
      "flat": 500
    }
  }
}
export default champion