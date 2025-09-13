// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 897,
  "key": "KSante",
  "name": "K'Sante",
  "title": "the Pride of Nazumah",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 625,
      "perLevel": 120
    },
    "healthRegen": {
      "flat": 9.5,
      "perLevel": 1
    },
    "mana": {
      "flat": 320,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 1
    },
    "armor": {
      "flat": 36,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 2.1
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 140
    },
    "pathingRadius": {
      "flat": 50
    },
    "gameplayRadius": {
      "flat": 80
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.688,
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.105
    },
    "attackRange": {
      "flat": 150
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Skirmisher",
    "Tank",
    "Warden"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 30,
    "difficulty": 3
  },
  "abilities": [
    {
      "name": "Dauntless Instinct",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> K'Sante's abilities mark enemies hit for 4 seconds. His basic attacks against marked enemies are empowered to consume the mark on-hit, dealing 12 (+ 1% - 2% (based on level) of target's maximum health) bonus physical damage. The damage based on the target's health has a minimum of 15 - 100 (based on level) against minions and is capped at 20 - 105 (based on level) against monsters.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out Bonus:</span> K'Sante's basic attacks and ability damage, as well as Dauntless Instinct's mark consumption, are empowered to deal bonus physical damage equal to 1% (+ 1% per 100 bonus armor) (+ 1% per 100 bonus magic resistance) of the target's maximum health.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Enemies",
      "spellshieldable": "special",
      "damageType": "Physical damage",
      "spellEffects": "proc",
      "notes": "Spell shield will block the mark's application, but not the mark's consumption from an attack.\nThe empowered attack can be  dodged,  blocked, and missed while  blinded but the mark will not be consumed.\nStarting the empowered attack while the mark is about to time out will not extend the mark duration, but still complete the attack and apply the bonus damage.\nAll Out's bonus damage on abilities only applies to the first target hit when damaging multiple enemies (including minions and monsters).(bug)\nFor most of K'Sante's spells and item effects, in the case of multiple targets being stuck on the same game tick, this refers to the closest target. For non-missile  Ntofo Strikes, it instead depends on the order in which the target units were spawned into the match.(bug)\nAll Out's bonus damage on abilities is applied in the same damage instance from K'Sante's basic attacks and abilities.\nThis causes effects like  Bone Plating and  Black Cleaver's Carve to be triggered only once from the respective hit.",
      "blurb": "Innate:  K'Sante's  abilities mark enemies hit for a short time. His  basic attacks  on-hit consume the mark to deal bonus physical damage based on the target's maximum health."
    },
    {
      "name": "Ntofo Strikes",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> K'Sante slams his ntofo down in the target direction that deals physical damage to enemies hit and slows them by 80% for 0.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                "70 / 100 / 130 / 160 / 190",
                "40% bonus armor",
                "40% bonus magic resistance"
              ]
            }
          ]
        },
        {
          "description": "If this hits at least one enemy, K'Sante generates a stack for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Ntofo Strikes cast consumes them all to become empowered with a new effect."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Empowered Active:</span> K'Sante fires a shockwave in the target direction that applies the same effects to enemies hit, but also pulls them towards him over 0.65 seconds and stuns them for 0.8 seconds.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out Bonus:</span> Ntofo Strikes' cooldown is reduced by 33%, with a minimum total cooldown of 1.33 seconds. Upon entering All Out, Ntofo Strikes' stacks are reset. Ntofo Strikes' cooldown is reset if K'Sante had 2 stacks before entering All Out.</p>"
        },
        {
          "description": "Ntofo Strikes resets K'Sante's basic attack timer."
        }
      ],
      "cost": "20",
      "cooldown": "3.5",
      "targeting": "Direction",
      "affects": "Enemies, Self",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "spellaoe",
      "projectile": "SPECIAL",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nIf Ntofo Strikes hits no more than one enemy champion, K'Sante will be ordered an attack command against them.\nThe basic attack reset is not considered one for  Hail of Blades.\nTemporary increases/decreases in bonus resistances will count for reducing/increasing Ntofo Strikes' cooldown.\nOnly the empowered active is a  projectile.\nThe following table refers for interactions while K'Sante is in the cast time of the third cast:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "width": "100 / 100",
      "castTime": "0.45 : 0.35 (based on bonus resistances)",
      "maxCharges": -1
    },
    {
      "name": "Path Maker",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> K'Sante raises his ntofos defensively and prepares to dash in the target direction, charging for a minimum of 0.4 seconds and up to 1 second. During this time, he gains displacement immunity and 30% damage reduction; additionally, Path Maker's range, stun duration, and All Out bonus true damage modifier increase over the first 0.9 seconds of the channel.</p>"
        },
        {
          "description": "Path Maker can be recast within the duration, and does so automatically afterwards. Path Maker's charge cannot be interrupted by crowd control."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> K'Sante dashes in the direction he targeted at the time of cast, though not through terrain, dealing physical damage to enemies he passes through, carrying them alongside him, and stunning them for 0.5 - 1.75 (based on channel time) seconds. This damage is capped against monsters.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                "45 / 75 / 105 / 135 / 165",
                "8% (+ 2% per 100 bonus armor) (+ 2% per 100 bonus magic resistance) of target's maximum health"
              ]
            },
            {
              "attribute": "Monster Damage Cap",
              "modifiers": [
                "180 / 260 / 340 / 420 / 500"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out Bonus:</span> Path Maker no longer applies its knock back and stun, but its damage reduction is increased to 75%, the dash deals 10% - 80% (based on channel time) bonus true damage, and the dash speed is increased by 20%. Upon entering All Out, Path Maker's cooldown is refreshed.</p>",
          "leveling": [
            {
              "attribute": "Minimum Bonus True Damage",
              "modifiers": [
                "4.5 / 7.5 / 10.5 / 13.5 / 16.5",
                "0.8% (+ 0.2% per 100 bonus armor) (+ 0.2% per 100 bonus magic resistance) of target's maximum health"
              ]
            },
            {
              "attribute": "Maximum Bonus True Damage",
              "modifiers": [
                "36 / 60 / 84 / 108 / 132",
                "6.4% (+ 1.6% per 100 bonus armor) (+ 1.6% per 100 bonus magic resistance) of target's maximum health"
              ]
            },
            {
              "attribute": "Total Maximum Mixed Damage",
              "modifiers": [
                "81 / 135 / 189 / 243 / 297",
                "14.4% (+ 3.6% per 100 bonus armor) (+ 3.6% per 100 bonus magic resistance) of target's maximum health"
              ]
            }
          ]
        },
        {
          "description": "Ntofo Strikes and All Out can be cast during the dash. Path Maker's recast can be used while affected by cast-inhibiting crowd control."
        }
      ],
      "cost": "40 / 45 / 50 / 55 / 60",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "targeting": "Direction / Auto",
      "affects": "Self, Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "spellaoe",
      "notes": "All Out's duration is increased by 2 seconds if it were to expire during Path Maker's charge.\nPath Maker cancels any existing movement or attack commands. However, new inputs given during the charge will be retained once the dash ends, except when the dash hits only one enemy champion. If Path Maker hits only one enemy champion K'Sante will be ordered to basic attack them afterwards.\nK'Sante cannot use  Flash during Path Maker's dash.\nPath Maker's damage is not capped against monsters while empowered by All Out.(bug)\nPath Maker's recast can be used even while  grounded or  rooted, but the initial cast cannot.\nPath Maker can be recast by issuing an attack move command (or LMB) but not a targeted attack command.\nThe following table refers for interactions while K'Sante is  channeling:\nIf the charge is cancelled, he will not automatically use the recast.\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but allows trinkets\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "speed": "1300 / 1500 / 1800",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Footwork",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> K'Sante dashes to the target location, though not through terrain, and grants himself a shield for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                "80 / 120 / 160 / 200 / 240",
                "15% bonus health"
              ]
            }
          ]
        },
        {
          "description": "Footwork can also be cast on allies with increased range and speed, and the ability to dash through terrain. If the target ally is a champion, they receive the shield as well."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out Bonus:</span> Footwork's dash speed is increased, and its cooldown is reduced by 50%.</p>"
        },
        {
          "description": "K'Sante can cast any of his abilities during the dash."
        }
      ],
      "cost": "45 / 50 / 55 / 60 / 65",
      "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
      "targeting": "Location / Unit",
      "affects": "Self, Allies",
      "resource": "Mana",
      "notes": "Footwork's cast on allies has a  forgiveness radius of 150 units.\nDashing to the side or behind will cancel current move or attack orders. Exception when attack order was given at melee range from target.\nThe shield is granted instantly on cast for both K'Sante and the potential allied champion.",
      "blurb": "Active:  K'Sante  dashes, granting himself a  shield.",
      "speed": "(500 / 1250 / 1100 / 1400) + 100% movement speed",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "All Out",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> K'Sante roots the target enemy champion for 0.5 seconds and gains displacement immunity over the cast time. He then shatters his ntofos, pulling the target to a location that is 300 units in the cast direction from their location at the time of cast, during which they are revealed, and blinking 175 units behind that location. The target is dealt physical damage near the end of the displacement and is stunned for 0.3 seconds once it ends.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                "80 / 115 / 150"
              ]
            }
          ]
        },
        {
          "description": "If there is valid map-generated terrain 350 units in the cast direction from the target's location at the time of cast, the target is instead pulled to a location that is directly 450 units away from the edge of the other side of the terrain and K'Sante blinks 100 units behind that location, dealing them the physical damage near their emergence from the terrain. At the end of the displacement, they remain airborne for 0.264 seconds, after which they are stunned for 0.5 seconds. K'Sante strikes them after 0.132 seconds into the airborne duration to deal physical damage.",
          "leveling": [
            {
              "attribute": "Strike Physical Damage",
              "modifiers": [
                "80 / 115 / 150",
                "5% of his bonus health"
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                "160 / 230 / 300",
                "5% of his bonus health"
              ]
            }
          ]
        },
        {
          "description": "After K'Sante blinks, he enters All Out for 15 seconds."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out:</span> K'Sante gains a health threshold equal to 65% maximum health which cannot be modified nor exceeded by any means. Upon entering All Out, his current health is reduced to this threshold if it is above it. Additionally, his base armor and base magic resistance are reduced by 85% bonus armor and 85% bonus magic resistance, respectively. In return, he gains bonus attack speed, 50% bonus-armor penetration, and 20% omnivamp, and modifies his basic abilities which can be cast at no cost.Upon entering All Out, K'Sante is restored to 100% maximum mana. His mana then decays to 0 over the duration of the buff, after which the amount of mana he had prior to entering All Out is restored.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                "40 / 60 / 80%"
              ]
            }
          ]
        },
        {
          "description": "K'Sante retains his maximum health and bonus resistances during All Out. Health lost from gaining the health threshold is not restored after the effect ends. If the target is pulled over terrain that is longer than 2000 units, K'Sante will vanish during their displacement and reappear near the end of it."
        }
      ],
      "cost": "100",
      "cooldown": "120 / 100 / 80",
      "targeting": "unit",
      "affects": "Self, Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "spell",
      "notes": "All Out's cast has a  forgiveness radius of  50 units.\nIf the terrain behind the target is invalid by not having an opposite side, All Out will not trigger its additional effects from pulling the target over terrain.\nThe pull destination in this case would be inside terrain and thus the displacement would stop at the boundary.\nK'Sante will restore the exact amount of mana he had before going All Out after the buff expires.\nThe amount does not change even if his maximum mana changes during the effect.\nWhile the target is being  pulled over terrain, they are additionally  attached to a missile that travels in the same trajectory as the displacement, becoming detached afterwards.\nRemoving the  airborne debuff will not cause the target to detach from the missile.\nIf the target resists the  pull by having a  spell shield or being  immune to crowd control or  displacement immune, K'Sante will still blink beyond the pull's end location as if the target were displaced.\nK'Sante's strike at the end of the displacement when the target is pulled over terrain does not apply  Dauntless Instinct's mark.\nGoing All Out does not override K'Sante's attack or movement commands if the target does not collide with terrain.\nIf the target is however pulled through terrain then K'Sante will be ordered to basic attack the target afterwards.\nThe percentage bonus armor penetration  stacks additively with other sources of percentage armor penetration.(note)\nSince K'Sante retains the stats he \"lost\", any effects that scale based on those stats will calculate based on the value prior to him going All Out.\nHis base resistances can be reduced below 0 by his bonus resistances.\nAll Out will not take into account resistances gained through % bonuses (eg.  Conditioning,  Mountainous Vigor, etc) when reducing K'Sante's base resistances.(bug)\n Jak'Sho, The Protean's Voidborn Resilience specifically is taken into account.\nGaining bonus health during All Out causes the health threshold to be briefly increased then reset back to its original value.\nThe bonus health is still applied to his current health.\nDuring All Out's cast and displacement, the target's camera is locked and centered on their champion.\nFor K'Sante, his camera centers on him at the start of the cast time, then once again at the end of the cast time at the location of his blink behind the target, and it is not locked.\nAll Out's granted  untargetability from the  vanish during the target's pull of over 2000 units does not  destroy in-flight  projectiles.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThe following table refers for interactions while K'Sante is in cast time:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while K'Sante is performing All Out's cast:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "blurb": "Active:  K'Sante  roots an enemy and then shatters his tonfas,  knocking them back,  blinking behind them, and dealing physical damage. If the enemy is pushed into terrain, they will be knocked over it and take additional physical damage.",
      "speed": "2000",
      "castTime": "0.4",
      "effectRadius": "350 / 5000 / Global",
      "targetRange": "300",
      "maxCharges": -1
    }
  ],
  "lore": "Defiant and courageous, K'Sante battles colossal beasts and ruthless Ascended to protect his home of Nazumah, a coveted oasis amid the sands of Shurima. But after a falling-out with his former partner, K'Sante realizes that in order to become a warrior worthy of leading his city, he must temper his single-minded drive for success. Only then can he avoid falling prey to his own pride and find the wisdom he needs to defeat the vicious monsters threatening his people.",
  "faction": "shurima",
  "releaseDate": "2022-11-02",
  "patchLastChanged": "25.11",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion