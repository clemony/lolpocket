// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 14,
  "key": "Sion",
  "name": "Sion",
  "title": "The Undead Juggernaut",
  "abilities": [
    {
      "key": "P",
      "name": "Glory in Death",
      "affects": "Self",
      "blurb": "Innate: Upon dying,  Sion  reanimates into a frenzy where he is restored to max health that rapidly decays, and reduces incoming  healing.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Upon taking fatal damage, Sion enters stasis for 1.5 seconds to reanimate into a frenzy, restoring 100% of his maximum health but losing 2.3 - 24.4 (based on level) health every 0.264 seconds, increasing by[ 70% of the base value ][ 1.61 - 17.08 (based on level) ]per subsequent tick. Sion's health regeneration and any healing (except life steal) he receives during this time is 0% effective.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Sion can only move and use his basic attacks and item actives, and empowers himself with the following effects:</span></p>\n 1.75 attack speed minimum and maximum\n 100% life steal\nDeals bonus physical damage on-hit equal to 10% of the target's maximum health, capped at 75 against non-champions\n Ghosting\nOne cast of Death Surge, which replaces all of his abilities"
        },
        {
          "description": "Sion's damage to structures is reduced to 40% under the effects of Glory in Death."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/p",
      "notes": "Details\n\nSion's death timer starts when he dies and not when Glory in Death ends.\nIf Sion lives longer than what his death timer lasts for, he will not revive until Glory in Death has ended. When it ends, he instantly revives. This may result in some odd interactions and bugs at times.\nThe effect that heals Sion back to full health at the start of Glory in Death cannot be modified by  healing reductions and does not count towards the 'Damage Healed' statistic at the end of game lobby.\nThe health loss is unaffected by  Invulnerability.\nGlory in Death has a capped 60 seconds duration. If the player manages to survive for so long, Sion dies instantly, regardless of his current health.\nThe healing modifier during Glory in Death reduces all incoming healing, it does not matter if they are sourced from Sion himself or an ally. This does not affect life steal.\nThis healing modifier stacks additively with  Spirit Visage and does not stack with heal and shield power.\nThis means that purchasing Spirit Visage enables Sion to have regeneration and use healing effects at 25% effectiveness, and the life steal gained will be increased to 125% as expected.\nThe fixed attack speed is achieved by lowering and increasing the maximum and minimum attack speed to  1.75, respectively.\nThis also means that it's unaffected by other attack speed modifiers for the duration, such as bonus attack speed or  cripples.\nHowever,  Hail of Blades, which allows for the normal attack speed cap ( 3) to be surpassed, will also break this limit. This means that while it is active, Sion may exceed his  1.75 cap, but cannot fall below it.\nWhen  Hail of Blades ends, the attack speed cap will revert to  3 and not to  1.75, however Sion still can't fall below  1.75.\nSome item passives do not persist through death and will be lost for the initial few seconds of Glory in Death.\n Phase Rush cooldown is reset upon entering Glory in Death.\nThe bonus on-hit damage granted by Glory in Death is unaffected by life steal, but is applied against structures that are not turrets.\nHowever, it can be applied against structures that are not turrets.(bug)\nThe reduction of damage against structures includes Sion's attacks as well as on-hit effects that can be applied to structures, such as  Demolish,  Titanic Hydra and the magic damage based on AP conversion based on  adaptive force.\nIt even includes  true damage from sources such as  Elixir of Sorcery.(note)\nSion, during Glory in Death, will not lose health while being carried by  Fate's Call.\nGlory in Death does not trigger on clones of Sion, such as with  Test of Spirit.\nGlory in Death's  untargetability from the  stasis does not  destroy in-flight  projectiles.\nProjectiles created while Sion is in the zombie form will still travel to him even after he dies.\nUpon death, the current cooldowns of Sion's summoner spells are increased to 4 seconds. Afterwards, he is still unable to use them until he respawns.\nHowever, it is possible for another lock-out effect to unlock them when their duration ends (excluding  crowd control with the exception of  stasis).\nAfter Glory in Death ends, the corpse of Sion will retain unit collision despite being dead on the ground.\nBuffs from jungle monsters that Sion acquired during Glory in Death will not be lost when the duration ends. ( Crest of Cinders,  Crest of Insight)\nInteractions & Other\n\nBy surviving for the full duration of 60 seconds, Sion will have suffered 41.8k : 443.7k (based on level) in health costs.\nSion can also heal from  spell vamp, althought the stat is currently unobtainable and it would be also unusable during Glory in Death, since there would be no available abilities that would apply it.\nEven though its visuals are present,  Dark Harvest can never be gained from Sion under the effect of Glory in Death.\nAt the start of Glory in Death, Sion's  mana drops to 0, but his  mana regeneration will remain in effect.\nZombie info\nZombie states trigger upon taking  lethal damage.\n Raw damage effects will not prevent zombie states from triggering.\nAll  resurrection effects will take precedence over effects that reanimate as a zombie.\nA champion that enters a zombie state will start their death timer upon triggering the effect.\nMost buffs and debuffs will be lost upon transitioning into a zombie state.\nThose that persist through death, such as  Brand's  Blaze, will remain.\nUndisplayed marker buffs, such as those imposed by  Veigar's  Event Horizon and  Viktor's  Gravity Field to prevent being affected multiple times by the same effect, will be lost.(bug)\nThis does not apply when transitioning from one zombie state to another zombie state.(bug)\nUnits within a zombie state cannot:\nUse  Recall or  Refillable Potion.\nActivate  resurrection effects.\nTake  Dark Passage, Catapult, or  gates.\nInitate the  Rift Herald Rodeo.\nPick up the  Eye of the Herald.\nBe targeted by the following:\n Bailout\n Chronoshift\n Umbral Trespass.\nBe affected by the following:\n Curse of the Black Mist\n Fear Beyond Death's chain missile\n Test of Spirit's initial missile\n Lamb's Respite\n Realm of Death\nFountain health restore",
      "spellEffects": "proc",
      "targeting": "Passive"
    },
    {
      "key": "P",
      "name": "Death Surge",
      "affects": "Self",
      "blurb": "Active:  Sion gains a burst of  movement speed for a short time.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion gains 67% bonus movement speed that decays over 2.376 seconds.</p>\nOnce at least one ability has been learned, Death Surge can be cast using any ability key, even for the abilities that haven't been learned yet."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/p",
      "notes": "Death Surge will grant the bonus movement speed after a brief delay.\nThe buff is intended to grant 75% decaying movement speed, but instead grants 67% movement speed decaying with -8% per stat update.\nPrecisely this leaves him at 0% : 0% (based on time passed) bonus movement speed.\nDeath Surge has a shared cooldown across each ability key, regardless of which key is used to activate it. Thus, activating Death Surge with any ability key will put the others on cooldown.\nDeath Surge's cooldown resets upon death.\nDeath Surge's cooldown is affected by  ability haste and thus the ability is technically able to be used up to twice during a single instance of Glory in Death, but this isn't practical.\nDeath Surge is not affected by  Ultimate Hunter, even if cast from the ultimate ability slot.\nDespite showing the cooldown being reduced, Death Surge in the ultimate ability slot will be not reduced by  Axiom Arc's Flux on  takedown.(bug)\nDeath Surge's cooldown is not reduced by  Navori Flickerblade.",
      "targeting": "Auto"
    },
    {
      "key": "Q",
      "name": "Decimating Smash",
      "affects": "Enemies",
      "castTime": "none",
      "cooldown": "10 / 9 / 8 / 7 / 6",
      "cost": "45",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion prepares a strike in the target direction, charging for up to 2 seconds to increase Decimating Smash's range over an area, knock up duration, stun duration, and damage every 0.25 seconds, which has up to a maximum bonus for the base damage and up to a 200% bonus for the scaling damage.</p>",
          "leveling": [
            {
              "attribute": "Maximum Base Damage Increase",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "125 / 158.33 / 175 / 185 / 191.67"
                }
              ]
            },
            {
              "attribute": "Minimum Physical Damage",
              "modifiers": [
                {
                  "values": "40 / 60 / 80 / 100 / 120"
                },
                {
                  "tooltip": "Scaling per rank:\n40 / 50 / 60 / 70 / 80% AD",
                  "unit": "% AD",
                  "values": "40 - 80"
                }
              ]
            },
            {
              "attribute": "Maximum Physical Damage",
              "modifiers": [
                {
                  "values": "90 / 155 / 220 / 285 / 350"
                },
                {
                  "tooltip": "Scaling per rank:\n120 / 150 / 180 / 210 / 240% AD",
                  "unit": "% AD",
                  "values": "120 - 240"
                }
              ]
            }
          ]
        },
        {
          "description": "Decimating Smash can be recast within the duration, and does so automatically afterwards. If the charge is interrupted, Decimating Smash is placed on a 2-second cooldown."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Sion flails his axe in the direction he targeted at the time of cast, dealing physical damage to enemies hit and slowing them by 50% for 0.25 seconds. Decimating Smash deals 150% damage against monsters and 60% damage against minions.</p>",
          "leveling": [
            {
              "attribute": "Minimum Monster Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "tooltip": "Scaling per rank:\n60 / 75 / 90 / 105 / 120% AD",
                  "unit": "% AD",
                  "values": "60 - 120"
                }
              ]
            },
            {
              "attribute": "Maximum Monster Damage",
              "modifiers": [
                {
                  "values": "135 / 232.5 / 330 / 427.5 / 525"
                },
                {
                  "tooltip": "Scaling per rank:\n180 / 225 / 270 / 315 / 360% AD",
                  "unit": "% AD",
                  "values": "180 - 360"
                }
              ]
            },
            {
              "attribute": "Minimum Minion Damage",
              "modifiers": [
                {
                  "values": "24 / 36 / 48 / 60 / 72"
                },
                {
                  "tooltip": "Scaling per rank:\n24 / 30 / 36 / 42 / 48% AD",
                  "unit": "% AD",
                  "values": "24 - 48"
                }
              ]
            },
            {
              "attribute": "Maximum Minion Damage",
              "modifiers": [
                {
                  "values": "54 / 93 / 132 / 171 / 210"
                },
                {
                  "tooltip": "Scaling per rank:\n72 / 90 / 108 / 126 / 144% AD",
                  "unit": "% AD",
                  "values": "72 - 144"
                }
              ]
            }
          ]
        },
        {
          "description": "If Decimating Smash was charged for at least 1 second, Sion instead slams his axe down, dealing physical damage to enemies hit, knocking them up for 0.5 - 1 (based on channel time) seconds, and stunning them for 1.25 - 2.25 (based on channel time) seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/q",
      "maxCharges": -1,
      "notes": "For the target to be hit, their center needs to be inside the red or blue areas (based on charge time), and their edge must hit the yellow part of the cone. If their edge also hits the white part of the cone they will be excluded from being hit. Cone is at 16 degrees and starts 800 range behind Sion's center. White cone has a radius of 720, while yellow cone has a radius of 1550. Blue area has the radius of 855 units\nSion himself remains  locked out of all actions for 0.25 seconds when releasing Decimating Smash.\n Soul Furnace can be cast during this time, but  Roar of the Slayer and  Unstoppable Onslaught cannot and neither will they be buffered.\n Displacement immunity will also resist the application of the  stun.\nSince the  stun duration is longer than the  airborne duration, and both start at the same time,  Tenacity is still fully effective against Decimating Smash up to a cap.\nThis virtual cap is 60%-55.5%  Tenacity based on channel time beyond 1 second. Every value below this cap will lower the CC duration with no diminished returns.\nA flash of the axe and change in brightness of the indicator on the ground indicates when the 1 second time frame is reached.\nThe damage of Decimating Smash is calculated when it is released. Gaining AD or upgrading the ability during its channel will update the damage of the coming hit.\nEven though the cooldown starts when the ability is released, it will not be changed by gaining or losing AH, or upgrading the ability, during the cast time.\nThe indicator is visible to the enemy only if they  see Sion himself.\nIf the channel is released before 1 second, enemies may see a particle at the far end of the hitbox, if it itself isn't outside of their  vision.\nIf the channel is released after 1 second, the only remaining indication is the visual effects and audio that plays on any units the spell strikes (these play on-target), provided the enemy does have  vision on those.\nForced movement without a  stun component (or the stun being  cleansed previously) will not stop Sion from starting or continuing to channel. Its direction will not change with Sion's travel, however the location will update with him.\nThe location of the indicator updates at the beginning of the ability, at 1 second and at release.\nThe indicator of the ability is slightly shorter at its front than the hitbox of the ability is for  Original Sion,  Mecha Zero Sion and related skins and chromas, while on  Worldbreaker Sion, the indicator is slightly thinner at the front than the hitbox is, instead.\nThe following table refers for interactions while Sion is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Soul Furnace and its  recast are usable.  Roar of the Slayer and  Unstoppable Onslaught are disabled. This ability recasts to end channel.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction / Auto"
    },
    {
      "key": "W",
      "name": "Soul Furnace",
      "affects": "Self, Enemies",
      "blurb": "Passive:  Sion gains  bonus health whenever he kills an enemy, increased against large enemies and  champion  takedowns.",
      "castTime": "none",
      "cooldown": "15 / 14 / 13 / 12 / 11",
      "cost": "65 / 70 / 75 / 80 / 85",
      "damageType": "Magic damage",
      "effectRadius": "525",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Sion gains 4 bonus health whenever he kills an enemy, increased to 15 for large enemies and takedowns against enemy champions.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion grants himself a shield that lasts for up to 6 seconds. Soul Furnace can be recast after 3 seconds while the shield holds, and does so automatically at the end of the duration.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "60 / 75 / 90 / 105 / 120"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                },
                {
                  "tooltip": "Scaling per rank:\n8 / 10 / 12 / 14 / 16% maximum health",
                  "unit": "% maximum health",
                  "values": "8 - 16"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Sion consumes the shield to deal magic damage to nearby enemies, capped at 400 against minions and monsters.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "40 / 65 / 90 / 115 / 140"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                },
                {
                  "unit": "% of target's maximum health",
                  "values": "14"
                }
              ]
            }
          ]
        },
        {
          "description": "Both of Soul Furnace's casts can be activated during Sion's other abilities."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/w",
      "maxCharges": -1,
      "notes": "A buff icon in the HUD will show the current shield strength, so that the player can better calculate the timing of the second cast.\nThe initial shown value does not interact with  shield strength modifiers. Whenever the shield takes damage, it updates to the proper current shield amount, however.\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does not.\nGaining or losing AP or health, or ranking up the skill while the shield is active will not change its shield value but it will change the damage of the shield's detonation.\nThe cooldown of Soul Furnace begins once the shield is removed.\nGaining or losing  ability haste between the first cast and breaking of the shield will affect the resuming cooldown accordingly.\nSoul Furnace also automatically detonates if Sion is killed without the shield being destroyed, e.g. by dying to the  Nexus Obelisk, even if Sion could not have detonated it manually yet.\nSoul Furnace's bonus health can be obtained by any of Sion's damage sources (basic attacks, abilities, summoner spells, item actives).\nThis does not include last hits transferred to Sion artificially.\nIf the gold efficiency of a  Ruby Crystal is considered 100%, each last hit or  takedown after Soul Furnace has been learned can be considered worth an extra  10.6 or  40g, respectively.\nSion must learn Soul Furnace before he can stack up its passive.\nSion does not gain bonus health from units that enter  resurrection on-death.\nKilling the following unit types grants Sion 15 bonus health:\n Champions (kills and assists)\n Large minions and  large monsters (including both summoned and pit  Rift Herald)\n Large pets - Explicitly  Tibbers,  Daisy and  The Maiden\nKilling the following unit types grants Sion 4 bonus health:\n Minions and  small monsters, with the exceptions of those listed below\n Wards and other champion summoned units (e.g.  Noxious Trap,  Powder Keg,  Dark Procession)\nAll  pets, with the exceptions of those listed above and below\n Clones\nKilling the following unit types grants Sion no bonus health:\n Turrets (including  Sun Disk) and other structures\nJungle plants (destroying which does not grant kill credit).\n Voidmites (including both summoned and pit  Voidmites)\nUnits destroyed by 'trampling' such as  Zyra's  seeds,  Zac's  goo or  Rek'Sai's  tunnels.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Roar of the Slayer",
      "width": "160",
      "affects": "Enemies",
      "blurb": "Active:  Sion bellows a shockwave in the target direction that deals magic damage and shortly  slows the first enemy hit,  reducing their armor for a few seconds.",
      "castTime": "0.25",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "cost": "35 / 40 / 45 / 50 / 55",
      "damageType": "Magic damage",
      "effectRadius": "130",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion bellows a shockwave in the target direction that deals magic damage to the first enemy hit, slows them for 2.5 seconds and inflicts them with 20% armor reduction for 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "65 / 100 / 135 / 170 / 205"
                },
                {
                  "unit": "% AP",
                  "values": "55"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 45 / 50 / 55 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "If the target is a minion or non-epic monster, they are also stunned for 0.75 seconds and knocked back for up to 1350 units further, though not through terrain, applying Roar of the Slayer's effects to enemies they pass through as well as briefly granting sight of the area around their trajectory."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/e",
      "maxCharges": -1,
      "notes": "Minions or monsters that are flung away are immune to minion damage and take their damage once they are stopped if they would die to Roar of the Slayer's damage, by either colliding with terrain, reaching the end of their trajectory, or having their displacement interrupted.\nUnlike the intial single-target projectile, a thrown minion or monster is not blocked by  Wind Wall or  Unbreakable.\nGaining or losing AP, or upgrading the ability while its projectile is traveling will change its damage for every future hit. This applies to both the intial single-target projectile, as well as the minion-projectile.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "speed": "1800",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "R",
      "name": "Unstoppable Onslaught",
      "affects": "Self, Enemies",
      "castTime": "none",
      "cooldown": "140 / 100 / 60",
      "cost": "100",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion becomes immune to crowd control and ghosted and, after a brief delay, charges forward in the direction of the cursor for up to 8 seconds, during which he is able to steer at a slow turn rate while automatically navigating his movement. Unstoppable Onslaught can be recast after 0.4 seconds during the channel.</p>"
        },
        {
          "description": "The charge ramps up Sion's movement speed at the time of cast by 40 movement speed every 0.1 seconds, up to 950 total movement speed."
        },
        {
          "description": "At the end of the charge's duration, Sion leaps forward 300 units, landing after 0.55 seconds and slamming the ground beneath him. Sion will stop upon colliding with an enemy champion or terrain during the charge, ending Unstoppable Onslaught with a slam. Crashing into terrain stuns Sion for 0.5 seconds."
        },
        {
          "description": "Enemies hit by Sion's charge are dealt physical damage. The base damage increases by 0% - 166.67% (based on channel time) and the scaling increases by 0% - 100% (based on channel time).",
          "leveling": [
            {
              "attribute": "Minimum Physical Damage",
              "modifiers": [
                {
                  "values": "150 / 300 / 450"
                },
                {
                  "unit": "% bonus AD",
                  "values": "40"
                }
              ]
            },
            {
              "attribute": "Maximum Physical Damage",
              "modifiers": [
                {
                  "values": "400 / 800 / 1200"
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
          "description": "Enemies, including turrets, hit by the slam are dealt the same damage and are slowed for 3 seconds. Enemies in a smaller radius are also pulled towards Sion over 0.5 seconds and become stunned after a brief delay for 0.25 - 1.75 (based on channel time) seconds.",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 45 / 50"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Sion stops charging, causing him to leap forward and slam the ground beneath him as if Unstoppable Onslaught had reached the end of its duration.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/r",
      "maxCharges": -1,
      "notes": "When Sion casts Unstoppable Onslaught a global warning can be heard.\nUnstoppable Onslaught does not apply the knock up nor stun to enemies from slamming on collision with terrain.\nUnstoppable Onslaught does not  knock up non-champions hit by the charge.(bug)\nUnstoppable Onslaught can be activated twice or held down and released on both normal cast and quick cast. There is no other difference between normal cast and quick cast for this ability, either.\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade.\nThe recast does not.\n Zeke's Convergence's Frostfire Tempest and  Experimental Hexplate's Overdrive trigger at the end of the charge or  leap.\nCasting  Death Surge will prevent the next Unstoppable Onslaught from triggering Frostfire Tempest and Overdrive.(bug)\nCasting Death Surge will postpone  Axiom Arcanist's cooldown refund until Sion casts Unstoppable Onslaught twice without casting Death Surge between the two casts.(bug)\nAn enemy can only be affected by Unstoppable Onslaught once every 1 second.\nAfter reaching maximum damage and stun duration (at 3 seconds) Sion will transition from using his haste animation to his unique charging one.\nReaching the threshold on  Mecha Zero Sion changes his particle effects instead, most notably the 'Boosters' behind the vehicle.\nThe turning angle is not based on time and can easily be seen in practice when a Sion charges in-place due to bugs.\nSion's movement speed gains during the charge are unaffected by movement speed caps. Effects that would increase or decrease his movement speed do not affect him as well.\n Nami's  Surging Tides is the only known effect that can affect Sion's movement speed during the charge and that can place him above the normal MS value. However, without further multipliers, surpassing the 950 movement speed cap will require  Nami to have over 2150 ability power.\nSion does not always crash with terrain immediately upon touching it, enabling the player to turn beyond his maximum turning angle.\nCasting the ability at point blank of a terrain will most often automatically change the charge's direction.\nThis is not usually possible with player-generated terrain.\nUnstoppable Onslaught cannot charge through but can leap over player-generated terrain.\nSion loses the  crowd control immunity after finishing the leap.\nSion is not immune to an allied  Bard's  Tempered Fate if it hits Sion during the 0.05-second delay before he starts the channel, he will not resist the effect and will initiate the slam immediately while in  stasis.(bug)\nUnstoppable Onslaught cannot strike the same non-champion twice in less than 1 second.\nEven though the cooldown of Unstoppable Onslaught starts at the end of the effect, gaining or losing ability haste, or upgrading the ability during the effect, will not change the resuming cooldown.\n Removing the  airborne before 0.5 seconds will not prevent the  stun from being applied.\n Displacement immunity will also resist the application of the  stun.\nSion can occasionally cast Unstoppable Onslaught while  rooted. In this case, he will stand in place until the root's debuff duration ends. During this time, the damage, stun duration and movement speed granted by the ability will still ramp up, and enemies that come into contact with him will be affected by the collision normally.(bug)\nA similar case allows him to cast it during crowd control that would disable it. However, the channel would be interrupted almost immediately, and he will initiate the leap as well.\n Fate's Call deferment of Unstoppable Onslaught will still allow Sion to leap forward at the end of the channel.\nMoving the cursor onto HUD elements (e.g mini map / champion portraits) does not jeopardize the cast and steering of Unstoppable Onslaught. The targeting will act as if the ground was targeted below the display element.\nPENDING FOR TEST: The distance between Sion's center and the center of the ground slam scales slightly with movement speed. This is suspected because running into a wall within half a second of charge time after starting at multiple thousands of movement speed shows a considerable difference, however this could also be due to a bug.\nPENDING FOR TEST: The leap appears to always have the same speed regardless of Sion's, at roughly 750.\nThe following table refers for interactions while Sion is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Soul Furnace and its  recast are usable.  Decimating Smash and  Roar of the Slayer are disabled. This ability recasts to end channel.\n\n\nMovement\n\nAllowed, but cannot input movement commands.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\nIf Unstoppable Onslaught's channel is interrupted despite the immunity to crowd control or  Decimating Smash is cast within 0.25 seconds after starting the charge, it will also initiate the leap. If the channel ends due to collision or death, there is no  leap and the effect occurs immediately.",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction / Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 1
  },
  "faction": "noxus",
  "lore": "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his way, regardless of allegiance, proving he no longer retained his former humanity. Even so, with crude armor bolted onto rotten flesh, Sion continues to charge into battle with reckless abandon, struggling to remember his true self between the swings of his mighty axe.",
  "patchLastChanged": "25.11",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2009-02-21",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Tank",
    "Vanguard"
  ],
  "stats": {
    "health": {
      "flat": 655,
      "perLevel": 87
    },
    "healthRegen": {
      "flat": 9,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 400,
      "perLevel": 52
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.6
    },
    "armor": {
      "flat": 36,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 125
    },
    "pathingRadius": {
      "flat": 25.767
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
      "flat": 0.679,
      "perLevel": 1.3
    },
    "attackSpeedRatio": {
      "flat": 0.679
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.051
    },
    "attackRange": {
      "flat": 175
    }
  }
}
export default champion