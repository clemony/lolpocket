// Updated Patch 25.19 - 09/27/2025 06:08:58 PM CDT

const champion: Champion = {
  "id": 6,
  "key": "Urgot",
  "name": "Urgot",
  "title": "the Dreadnought",
  "abilities": [
    {
      "key": "P",
      "name": "Echoing Flames",
      "affects": "Enemies",
      "angle": "60°",
      "blurb": "Innate:  Urgot's six legs each conceal a shotgun that covers an arc, together forming a circle around him. Each shotgun can fire once before incurring a unique  cooldown.",
      "damageType": "Physical damage",
      "effectRadius": "700",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Urgot's six legs each conceal a shotgun that covers an arc, together forming a full circle of cover around him. Each shotgun can fire once before incurring a unique cooldown.</p>"
        },
        {
          "description": "Urgot's next basic attack on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% - 100% (based on level) AD (+ 2% - 6% (based on level) of target's maximum health) physical damage to enemies hit, capped at 100 - 360 (based on level) against monsters."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/p",
      "notes": "Echoing Flames:\nShotgun attack range scales with bonus attack range.\nWill not trigger if the target is too far away or they are dead when the basic attack hits.\nWill not trigger while  blinded or if the basic attack is blocked by  Wind Wall or  Blade Whirl.\nIt bypasses  blocking and  dodging effects.\nWill not trigger against structures nor wards.\nWill trigger from  Runaan's Hurricane's additional bolts.\nWill not apply  life steal, but does apply on  spell vamp and omnivamp at 33% effectiveness.\nWill apply spell effects.\nWill not trigger when basic attacking certain units (e.g  Shaco's  Jack in the Box), however it will trigger when attacking them with  Purge.\nWill consume  Manaflow Band if it is available.\nWill not consume  Tear of the Goddess charges. (bug)\nUrgot's legs never change in orientation, with his body instead rotating on top of them; the leg that faces northeast will always face northeast. This does not affect Urgot's facing direction for the purposes of abilities such as  Petrifying Gaze.",
      "projectile": "FALSE",
      "spellEffects": "spellaoe",
      "spellshieldable": "false",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Corrosive Charge",
      "affects": "Enemies",
      "blurb": "Active:  Urgot launches a canister at the target location that explodes after a brief delay, dealing physical damage and briefly  slowing enemies hit.",
      "castTime": "0.25",
      "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
      "cost": "70",
      "damageType": "Physical damage",
      "effectRadius": "210",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Urgot launches a canister at the target location. Upon landing, it explodes after 0.3 seconds to deal physical damage to enemies hit and slow them for 1.25 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "25 / 70 / 115 / 160 / 205"
                },
                {
                  "unit": "% AD",
                  "values": "70"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "45 / 50 / 55 / 60 / 65"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/q",
      "maxCharges": -1,
      "notes": "Corrosive Charge prevents  Purge from firing for 0.3 seconds.",
      "projectile": "TRUE",
      "resource": "Mana",
      "spellEffects": "Area of Effect",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "800"
    },
    {
      "key": "W",
      "name": "Purge",
      "affects": "Enemies",
      "blurb": "Passive:  Urgot's other abilities mark enemy  champions hit for a few seconds, only one enemy can be marked at a time. At max rank, Purge lasts indefinitely and becomes a toggled ability.",
      "castTime": "none",
      "cooldown": "12 / 9 / 6 / 3 / 0",
      "cost": "40 / 30 / 20 / 10 / 0",
      "damageType": "Physical damage",
      "effectRadius": "490",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Urgot's other abilities mark enemy champions hit for 5 seconds. Only one enemy can be marked at a time. Additionally, at maximum rank, Purge lasts indefinitely and becomes a toggled ability.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Urgot equips his machine gun for 4 seconds, granting ghosting to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a fixed 3.0 attack speed, prioritizing marked enemy champions and refreshing the mark with every attack. While firing, Urgot is able to move and gains 40% slow resist, but his base movement speed is reduced by 125.</p>"
        },
        {
          "description": "Attacks with Purge deal modified physical damage, with a minimum threshold of 50 against monsters and minions, and cannot critically strike. Each attack applies on-hit effects, with on-hit damage reduced to 50% effectiveness, and triggers on-attack effects. Urgot cannot perform attacks while unable to declare basic attacks.",
          "leveling": [
            {
              "attribute": "Modified Physical Damage",
              "modifiers": [
                {
                  "values": "12"
                },
                {
                  "tooltip": "Scaling per rank:\n20 / 23.5 / 27 / 30.5 / 34% AD",
                  "unit": "% AD",
                  "values": "20 - 34"
                }
              ]
            }
          ]
        },
        {
          "description": "Purge can be recast after 0.5 seconds within the duration, and does so automatically afterwards."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Urgot ends Purge.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/w",
      "maxCharges": -1,
      "notes": "Autonomous attack range scales with bonus attack range.\nPurge uses  edge range for enemy targets only; Its range is center-to-edge.\nUrgot's size increasing does not increase its range.\nThe initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nBefore maximum rank, if Purge is not manually recasted, the effect will end without being considered as an ability activation.\nUrgot's facing direction during Purge is in the direction he's moving and not in the direction of his attack target.\nBefore maximum rank, if continuously attacking without being interrupted or interrupting or canceling the cast, Urgot will attack 13 times.\nThe bolts are considered basic attacks and thus apply  life steal at full efficiency.\nDuring Purge, Urgot's  attack range is reduced[ to 150 ][ by 200 ]and his attack commands instead issue movement commands to walk into the respective range of his target.\n Slow resist does not modify flat reductions in movement speed.\nPercentage  slows apply after the flat movement reduction.\nPurge's attacks do not interact with Urgot's  basic attack timer.\nAfter ending Purge, he can usually attack again immediately.\nIf Urgot is  berserked or  taunted, he will fire at the unit he is forced to attack.\nPurge will fire while Urgot is  dashing (e.g. while taking  Thresh's  Dark Passage), with the exception of  Disdain's dash.\nEach shot counts as a separate hit for effects such as  Electrocute,  Muramana's Shock, and  Eclipse's Ever Rising Moon.\nPurge will apply  Runaan's Hurricane on every shot at 100% of the listed damage.\nOn-hit damage applied by the bolts are still reduced by Purge.\nThe movement speed stat tooltip erroneously reads that the bonus movement speed is being reduced before base movement speed.(note)",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2500",
      "spellEffects": "basic",
      "spellshieldable": "false",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Disdain",
      "affects": "Enemies",
      "blurb": "Active:  Urgot  shields himself for a few seconds and  dashes in the target direction, dealing physical damage and briefly  stunning enemies hit,  knocking them aside.",
      "castTime": "0.45",
      "cooldown": "16 / 15.5 / 15 / 14.5 / 14",
      "cost": "60 / 70 / 80 / 90 / 100",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Urgot grants himself a shield for 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "55 / 75 / 95 / 115 / 135"
                },
                {
                  "unit": "% bonus AD",
                  "values": "135"
                },
                {
                  "unit": "% bonus health",
                  "values": "13.5"
                }
              ]
            }
          ]
        },
        {
          "description": "After the cast time, Urgot dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through, knocking them aside and stunning them for 1 second.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "90 / 120 / 150 / 180 / 210"
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
          "description": "Urgot will stop upon hitting an enemy champion, stunning them for 1.5 seconds and, after 0.25 seconds, also flinging them to the location 100 units behind him, though not through terrain."
        },
        {
          "description": "Purge can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/e",
      "maxCharges": -1,
      "notes": "Urgot turns around when tossing an enemy over him, always facing his victim.\nThe target will be  flung to the location behind Urgot over 0.5 seconds given that they do not move nor are moved from the position at which they collided with him while  stunned.\nDisdain prevents  Purge from firing for 1.25 seconds.\nThe range indicator length is 475 units, but the dash only moves Urgot 450 units.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe  shield is granted at the start of the cast time while the  dash begins after.\nThe  fling will occur after 0.25 seconds regardless of how far away the target is.\n Displacement immunity will not resist the application of the  stun.",
      "resource": "Mana",
      "speed": "1200 + 100% movement speed",
      "spellEffects": "Area of Effect",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "475 / 450"
    },
    {
      "key": "R",
      "name": "Fear Beyond Death",
      "width": "160",
      "affects": "Enemies",
      "castTime": "0.5",
      "cooldown": "100 / 85 / 70",
      "cost": "100",
      "damageType": "Other damage",
      "effectRadius": "Global /  600",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are revealed and slowed by 0% - 75% (based on target's missing health).</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "100 / 225 / 350"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "Fear Beyond Death can be recast if the leashed target is below 25% of their maximum health, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Mercy:</span> Urgot launches chains at the leashed target, then channels for 1.5 seconds once they latch on. During this time, he reels them toward him, suppressing them, revealing them, rendering them untargetable, and preventing them from taking damage from other sources. If the target is near Urgot when the chains connect, they are pushed up to 1000 units away based on their proximity to him. This channel cannot be interrupted by crowd control.</p>"
        },
        {
          "description": "Upon completing the channel, the target is executed. If the execution is successful, he fears nearby enemies for 1.5 seconds, during which they are slowed by 75%."
        },
        {
          "description": "Fear Beyond Death's recast can be used while affected by cast-inhibiting crowd control."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/r",
      "maxCharges": -1,
      "notes": "Unlike most missiles, Fear Beyond Death can hit the edge of targets whose center is further than the missile range.\nHowever, it still cannot hit targets whose center is behind Urgot.\nApplies  spell damage on first cast and  raw damage on recast.\nUrgot is  revealed while the target is leashed and being reeled in.\nFear Beyond Death's execute against the enemy champion will aggro nearby enemy minions.\nWhile Fear Beyond Death is not on cooldown, all enemy champions will have an execution indicator on their health bar, and a visual indicator if below the execution threshold.\nMercy's granted  untargetability does not  destroy in-flight  projectiles for the target.\nUrgot will place himself onto the ground and interrupts  displacements affecting him upon starting the channel.\nIf the displacement effect is a knock up with no debuff source, the airborne status is not removed and he spends significantly less time in the air.\nThis ability will cast from wherever the caster is at the start of the cast time.\nFear Beyond Death prevents  Purge from firing for 0.8 seconds.\nThe recast prevents  Purge from firing for 1.5 seconds.\nIf Urgot is in cast time or is  dashing while the chains are in transit, Mercy's forced movement will be deferred (the debuff will continuously refresh) until the cast or dash is complete. The target will still be untargetable, prevented from taking damage from other sources, and suppressed during this time.\nIf Urgot is  channeling a spell, the channel is interrupted when the chains hit.\nRemoving or resisting the  slow has no effect on the mark debuff.\nThe initial cast always counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability hits a target who is below the threshold, it will automatically recast itself and it won't be considered as an ability activation.\nIf the ability hits a target who is above the threshold and it's recast early, the recast will happen automatically when they reach the threshold and it won't be considered as an ability activation.\nIf the target got hit while above the threshold and it is recast after they fall below it, the recast will be considered as an ability activation.\nReactivating the ability early will reel the target as soon as they reach the 25% maximum health threshold.\nMercy can be cast and will automatically do so at the end of the duration if the target is below the execute threshold regardless of Urgot being affected by  crowd control, including self or enemy-imposed  stasis.\nFear Beyond Death can affect  clones and activates its fear when executing one.\nFear Beyond Death's recast cannot be used if the target is  untargetable.\nFear Beyond Death's recast cannot be used during  resurrection. Attempting to do so places the recast on a 5-second  cooldown.\nIf the target is below the threshold at the end of the duration and Urgot is revived, the recast will initiate regardless of this cooldown.\nThe recast's chains are classified as a  projectile and they will fail to affect their target if:\nUrgot or his target  dies or enters  resurrection.\nThe target becomes  untargetable, even if the granted source does not  destroy in-flight projectiles.\nUrgot will also fail to execute the target if they become  untargetable while the chains are being pulled.(note)\nThey collide with  Wind Wall or  Unbreakable.\nIf  Unbreakable intercepts the chains and  Braum is not the target, they're destroyed.\nIf  Braum is the target, he will still be reeled in and executed as normal.\nThe target is  crowd control immune when the chains hit.\nThe target is  a zombie.\n Spell shield will not block the recast's chains.\nIf the target removes the  suppression by any means they will prevent themselves from being  executed and stop the forced movement from being renewed, though allowing the most recent one to be present and move them to Urgot's previous location.\nTheir untargetability and damage prevention of other sources granted by Fear Beyond Death is removed in the process.\nUrgot will still complete the full channel despite this.\nThe execution would not count as being successful in this case and thus he will not  fear nearby enemies after the failed execution.\nIf the target is  displacement immune when the chains collide, Urgot will not begin the channel until after their displacement immunity ends.\nThe target will be unaffected by Fear Beyond Death's forced movement during this time, but will still be suppressed, prevented from taking damage from other sources and rendered untargetable.\nIf the target's displacement immunity does not end within 10 seconds, Fear Beyond Death will cancel.\nWhen the chains start reeling in and suppressing a player's champion, chains will also cover the sides of their screen.\nThe target champion shrinks in size in several steps after reaching Urgot's grinder and before being executed.\nIf the suppression ends in any way, the target returns to its normal size.\nIf the execution is successful, the victim's corpse will be effectively invisible unless they enter a  zombie state.\nThe target will die regardless of their current health once the recast's chains hit, even if they are  healed.\nIf the target has  invulnerability that persists for the duration of the channel, it will protect them from the execution.\n Undying Rage will prevent  Tryndamere from dying by the execute. In this case, the execute will bypass his minimum health threshold though and reduce him to 1 health.\nThe effect will also not prevent the activation of  resurrection effects, such as  Guardian Angel or  Anivia's  Rebirth.\nPost-death events such as  Zombie State effects (e.g,  Karthus'  Death Defied,  Kog'Maw's  Icathian Surprise, and  Sion's  Glory in Death) will be triggered.\nOnly the target's current health will count as Urgot's damage in post-game statistics and  spell vamp healing.\nFear Beyond Death's initial cast will not perform the automatic recast from dealing enough damage to kill  Sion.\nFear Beyond Death's recast will be placed on a 5-second  cooldown if the target is below the threshold and becomes targetable again after completing the dash from  Hero's Entrance.\nThe following table refers for interactions while Urgot is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "3200",
      "spellEffects": "special",
      "spellshieldable": "Special",
      "targeting": "Direction / Auto",
      "targetRange": "2500"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 2
  },
  "faction": "zaun",
  "lore": "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that spread chaos throughout the city, he now casts an imposing shadow over its criminal underworld. Raising his victims on the very chains that once enslaved him, he will purge his new home of the unworthy, making it a crucible of pain.",
  "patchLastChanged": "25.06",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2010-08-24",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 655,
      "perLevel": 102
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.7
    },
    "mana": {
      "flat": 340,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 7.25,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 36,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 63,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 550
    },
    "selectionRadius": {
      "flat": 136.111
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
      "flat": 0.625,
      "perLevel": 3.75
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
      "flat": -0.15
    },
    "attackRange": {
      "flat": 350
    }
  }
}
export default champion