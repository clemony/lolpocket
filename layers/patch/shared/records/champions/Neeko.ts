// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 518,
  key: 'Neeko',
  name: 'Neeko',
  title: 'The Curious Chameleon',
  abilities: [
    {
      key: 'P',
      name: 'Inherent Glamour',
      affects: 'Self',
      blurb: 'Innate:  Neeko has a collection of disguises to take on the appearance of allied champions. She can choose a new champion to switch her disguise or select herself to deactivate her disguise. Standing near a non-champion unit will collect its Sho\'Ma, adding its disguise to the collection. She can collect only one Sho\'Ma, but can discard or consume it.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Neeko has a collection of disguises to take on the appearance of allied champions. She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing Inherent Glamour on a 0.5-second cooldown. Taking damage from a champion or turret while not disguised puts Inherent Glamour on a 2-second cooldown.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Standing by the nearest visible allied or neutral non-champion non-structure unit while not disguised will gather its Sho\'Ma over 2 seconds, adding its disguise to the collection. Activating this disguise places Inherent Glamour on a 1-second cooldown. Neeko can collect only one Sho\'Ma, but can discard or consume it. She can store Sho\'Ma from the following units, as long as they are targetable:</span></p>\n\nNon-epic monsters\n Minions\n Traps\n Wards\n Pets\nJungle plants'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">While disguised, Neeko can use basic attacks while keeping her form. Her disguise breaks if she:</span></p>\n\nuses a damaging champion ability, summoner spell, or item active\nbecomes immobilized\ntakes damage lethal to the disguise\'s form\nenters the enemy team\'s spawn platform*\nbegins a channel other than Recall / Empowered Recall\ndeals damage to a structure with a non-champion disguise form\ntakes damage from a turret\n dies'
        },
        {
          description: 'Breaking the disguise via dying, being immobilized or taking damage from a turret puts Inherent Glamour on a 2-second cooldown, entering the enemy spawn platform does not put it on cooldown, and all other methods of breaking the disguise put Inherent Glamour on a 1-second cooldown.'
        },
        {
          description: 'Inherent Glamour\'s disguise is not deactivated from Pop Blossom until after 0.5 seconds of its cast. Neeko cannot activate Inherent Glamour while she is affected by cast-inhibiting crowd control or a lockout that disables casting abilities.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/p',
      notes: 'Before disguising\nNeeko\'s disguise collection is offered through a special menu in the HUD. The menu holds up to 5 slots, based on the number of allied  champions. The player can select a disguise by  clicking on their portrait or via the Champion Specific Interaction hotkeys (default: Shift+F1:F5). The Sho\'Ma disguise can be discarded by clicking on the \'x\' next to the disguise\'s icon or via the sixth Champion Specific Interaction hotkey (default: Shift+F6).\nThe slot containing her Sho\'Ma disguise will be third in the HUD if there are two or more allied champions in the game, otherwise it will be the rightmost slot. The remaining slots will contain allied champion disguises in order of their appearance in the pre-game Loading Screen.\nCasting Inherent Glamour does not count as an ability activation for the purposes of on-cast effects such as  Spellblade,  Force Pulse\'s passive, and does not interrupt  the clone\'s movement orders.\nNeeko does not begin storing Sho\'Ma from a unit if that unit enters her  sight and gathering range at the same time, or if it is within gathering range when she loses the disguise.\nThe progress of gathering Sho\'Ma from a unit is not lost even if Neeko stores Sho\'Ma from a different unit.\nInherent Glamour\'s cooldown only prevents Neeko from activating disguises; she can still store and remove Sho\'Ma while the passive is on cooldown.\nWhen disguising while storing Sho\'Ma from a unit, Neeko continues to store Sho\'Ma from that unit.\nNeeko cannot store Sho\'Ma from  Dark Procession and  Powder Keg.\nAfter successfully storing Sho\'Ma, Neeko celebrates by clapping.\nThis animation is forced and overrides all other animations except  Pop Blossom\'s landing animation.\nIf Neeko attempts to activate a disguise while near the  trap,  ward, or jungle plant she stored Sho\'Ma from, she will  leap to that unit\'s exact position over 1 second, though not through terrain, and then become disguised. If she does so for a monster and is near its respective jungle camp, she will leap to that monster\'s usual position in the camp.\nIf the monster is any  Krug, she will leap to the large Krug\'s position in the camp on the blue side or medium Krug\'s position on the red side.\nIf the monster is  Rift Scuttler or a lesser  Raptor, she will leap to its position at the time of storing Sho\'Ma instead.(bug)\nThe leap is interrupted if Neeko attacks, moves, or casts certain abilities and spells.\nThe disguise will still activate after 1 second if the leap is interrupted by moving or attacking.\nNeeko cannot gather Sho\'Ma while leaping.\nShe will fail to activate the disguise after the leap if she is affected by the same conditions that would break a disguise.\nInherent Glamour\'s leap has a number of interactions that set it apart from other  lunges:\nInherent Glamour\'s leap does not interact with  Voltaic Cyclosword\'s Galvanize passive;\nInherent Glamour\'s leap does not override the forced movement inflicted by  airborne effects;\nThe path of Inherent Glamour\'s leap will be similar to the path Neeko would take if ordered to move to the unit\'s position instead.\nNeeko will copy the unit\'s facing direction when disguising after leaping.\nIf Neeko does not arrive at the unit\'s position while leaping, she will continue moving toward it.\nWhile not disguised, attempting to cast Inherent Glamour during a cast time or attack windup puts the ability on cooldown immediately, but postpones the disguise.\nDoing so while disguised will not postpone the effect and will interrupt the attack windup.\nThis allows Neeko to successfully disguise even if she gets affected by effects that would put Inherent Glamour on cooldown during the delay.(note)\nNeeko can activate Inherent Glamour while  channeling, and remain in the disguise during the channel.(note)\nNeeko can activate Inherent Glamour while  immobilized, and remain in the disguise during the immobilization, despite the fact that immobilizations are meant to break the disguise.(note)\nWhile disguised\nNeeko will copy aesthetics as well as superficial mechanical statistics. She will fake a number of readings:\nHealth bar (original\'s current amount becomes her apparent maximum)\nWhile disguised as  Kled, Neeko\'s health bar simulates a health threshold, but does not color  Skaarl\'s health properly.(bug)\nSecondary resource - e.g. mana, energy or none at all (original\'s current amount becomes her apparent maximum)\nIf disguised as a  Siege  Minion, Neeko cannot see her mana bar.(bug)\nAmmunition\nStats\nBuffs and debuffs with their respective icons and VFX/SFX (there are exceptions)\nNeeko sees the buffs that are actually applied to her, while enemies see the disguise\'s form\'s buffs.\nAlthough Neeko can see the buffs, she cannot read their descriptions by hovering their icons.(bug)\nAfter gaining a charge of Shared Riches ( World Atlas,  Runic Compass), Neeko is unable to see the charge count until she consumes a charge.(bug)\nLevel\nKill feed icon\nMinimap icon\nA number of attributes she actually adopts are:\nBase movement speed if it is lower than Neeko\'s base\nIf the disguise unit\'s base movement speed is lower than 200, Neeko\'s total movement speed is set to 200 instead.\nDisguising as  Elise while she is in  spider form will set Neeko\'s base movement speed to 315 instead.(bug)\nClassification of the unit (e.g.  melee,  siege minion; large, small monster; ward)\nNeeko is never considered a minion for the purposes of  Reinforced Armor.\nBase range type of the unit ( melee,  ranged)\n Wards and  Blood Roses are considered to be melee, while other jungle plants and  Rift Scuttler are considered to be ranged.\nBase attack speed and attack ratio\nWhen disguising as a non-champion, Neeko instead has her total attack speed set to that of the disguise\'s form, or to 2.0 if the disguise\'s form\'s total attack speed is any higher.\nAlthough  Jhin gains additional base attack speed through growth, Neeko only inherits his level 1 base attack speed value.(bug)\n Basic attack damage type ( basic damage,  ability damage), and subtype ( physical damage,  magic damage)\nFor example, many  pets deal ability damage instead of basic damage with their basic attacks.\nHowever,  critical strikes from non-champions always deal physical basic damage.\nThe  projectile or non-projectile quality of their attack and projectile speed, if applicable\nWhen  striking critically as a non-champion with a projectile attack, the attack projectile is invisible and hits near-instantly, but can still be intercepted by  Wind Wall and similar abilities.\n Base attack range of the unit\'s base form\nFor example, in the case of  Gnar, she will adopt 175 attack range.\nDamage dealt to champions (physical, magical) ratio for the purposes of  Camille\'s  Adaptive Defenses.\nSize (including size modifiers and base unit size) at the time of disguising\n Pathing radius when disguising as a non-champion\nPENDING FOR TEST: Is the same true for champions?\nVoice lines\nBase unit model, regardless of current form\nThe exception are Voidborn forms of  Blue Sentinel and  Red Brambleback, whose models Neeko does adopt\nDefault transformation toggle (non-innate)\nCharacter interactions (jokes, taunts, dances, laughs, toggle effects), as well as their  Recall animation\nNeeko can copy  Samira\'s taunt animation but she will not actually throw the coin via the  Taunt ability.\nWhile disguised as a non-champion, Neeko will play her laugh sound when attempting to laugh.\nEditor\'s Note: This is an intentional feature, requested by fans when Neeko\'s V13.9 gameplay update was released.\nWhile disguised as a  Packmate, she will play  Naafiri\'s laugh instead.\nBoth Neeko and the disguise\'s form take damage based on her real current  health,  armor, and  magic resistance.\nWhile disguised as a  lane minion, Neeko uniquely takes bonus physical damage from minions based on the disguise\'s form\'s health.\nWhile disguised as a non-champion, for the purposes of combat status, Neeko is considered a champion when dealing damage, but not when taking damage.\nEnemy  turrets and  minions still aggro Neeko while she is disguised as a neutral  monster or jungle plant.\nWhile disguised as a plant or ward, Neeko can be targeted by minions and affected by most effects that normally don\'t affect them.\nPENDING FOR TEST: which abilities, runes and items do / don\'t interact with wards, plants and wardlike entities?\nWhile disguised as a unit not targetable by turrets (e.g. wards, traps,  Sentinel,  Tentacle), Neeko cannot be targeted by turrets until she damages a champion.\nDisguising as a unit not targetable by turrets does not drop ongoing turret aggro.\nWhile disguised as a jungle plant or  trap, Neeko\'s facing direction visually appears to not change while moving.\nNeeko\'s real facing direction is, however, affected by movement for the purposes of direction-facing effects (e.g.  Petrifying Gaze,  Backstab).\nDisguising as a  Blast Cone or  Scryer\'s Bloom creates their respective roots at Neeko\'s location at the time of disguise.\nPENDING FOR TEST: when do they disappear?\nDisguising as a monster does not cause Neeko\'s attack windup to not be cancelled if the target moves out of range.\nWhile disguised as a ward, Neeko can be  disabled by  control wards, but not by  sweeper drones or  Umbral Glaive\'s Blackout.(bug)\nWhile disguised as a ward, Neeko does not trigger Blackout.\nWhile disguised as a ward, when attacked by champions using  Umbral Glaive, Neeko takes damage from Extinguish, but the disguise\'s form does not.(bug)\nDisguising as a non-champion interrupts the cast time of  Darius\'  Noxian Guillotine if it is targeting Neeko.\nWhile disguised as a non-champion, Neeko can be targeted by  Karma\'s  Focused Resolve and  Renewal.(bug)\nWhile disguised as a non-champion, Neeko can be directly hit by  Hwei\'s  Spiraling Despair.(bug)\nWhile disguised as a non-champion, Neeko cannot be affected by  Jhin\'s  Deadly Flourish,  Rammus\'  Powerball\'s negative effects, cannot be  knocked up by  Jarvan IV\'s  Dragon Strike, and cannot attach  Zilean\'s  Time Bomb to herself.(bug)\nWhile disguised as a non-champion, Neeko cannot be tethered by  Taric\'s  Bastion. If she was tethered before changing, the tether will break as soon as she changes into a non-champion and Taric\'s spells can not be mimicked onto her. Once she changes into a champion the tether will automatically come back.\n Requiem does not affect Neeko while disguised as a non-champion if  Karthus is casting it during  Death Defied, but does otherwise.(bug)\nWhile disguised as a non-champion, Neeko breaks  Mountain Dragon Soul\'s shield.\nWhile disguised as a non-champion, allied champions using Shared Riches ( World Atlas,  Runic Compass) while Neeko is nearby will  execute minions and trigger the VFX without spending a charge or awarding  gold to Neeko.\nWhile disguised as a non-champion, enemy  Sundered Sky\'s Lightshield Strike indicator will not be displayed on Neeko, but she will still be affected by the empowered attack.\nAbilities and item actives with champion  targeting forgiveness (e.g.  K\'Sante\'s  All Out,  Karma\'s  Inspire,  Kindred\'s  Mounting Dread) can be cast on Neeko even while she is disguised as a non-champion.(bug)\nWhile disguised as a minion or monster, Neeko cannot be  feared by  Noxian Guillotine.(bug)\nWhile disguised as a monster, Neeko cannot be targeted by  Smite.(bug)\nWhile disguised as a monster, Neeko does not receive damage from  Primal Smite.(bug)\nWhile disguised as a monster, Neeko receives full damage as a monster from  Unleashed Smite.\nWhile disguised as  Daisy, Neeko\'s  basic attacks will not deal damage.(bug)\nAfter gaining the  Brushmaker buff for the first time, Neeko\'s basic attacks while disguised as Daisy will do 100% total AD physical damage, but the damage will be attributed to  Ivern, allowing Neeko to attack turrets without breaking the disguise, as well as apply his  on-hit effects instead of her own.(bug)\nThis also allows Neeko to apply stacks of Daisy Smash! without consuming any, which can allow Daisy to cast Daisy Smash! multiple times within 3 seconds.(bug)\nWhile disguised as  Blue Sentinel or  Red Brambleback, Neeko\'s attacks use a diferent animation cycle from the original monster\'s and sometimes show Voidborn VFX even if the disguise\'s form is not Voidborn.(bug)\nWhile disguised as a non-champion, Neeko cannot receive  Crest of Insight and  Crest of Cinders by killing  Blue Sentinel and  Red Brambleback, but can receive it once they are Voidborn.(bug)\nWhile disguised as a non-champion, Neeko is not  knocked back when taking damage from  Graves\'  New Destiny\'s pellets.(bug)\nWhile disguised as  Graves, Neeko\'s attacks visually imitate New Destiny\'s pellets, but only deal damage with his invisible missile.\nWhile disguised as  Lulu, Neeko will spawn a  Pix with the same skin ID as Neeko\'s.\nFor example,  Star Guardian Neeko (skin 10) will always produce a  Pool Party Pix with a Ruby Chroma (skin 10).\nWhile disguised as  Bel\'Veth, Neeko\'s basic attacks always 0 damage.(bug)\nWhile disguised as  Elise\'s  Spiderlings or  Annie\'s  Tibbers, Neeko\'s basic attacks will only deal 100% bonus AD magic damage.(bug)\nIf Neeko has no bonus AD, she will not deal damage.\nHowever, Neeko\'s  critical strikes while disguised will deal 175% total AD physical damage as expected.\nWhile disguised as  Tibbers, Neeko\'s attacks do not interact with  Arcane Comet.(bug)\nWhile disguised as  Bel\'Veth\'s  Void Remora,  Zyra\'s  Thorn Spitters or  Vine Lashers, Neeko cannot issue a basic attack command.\nWhile disguised as a non-champion, Neeko takes reduced damage from  Kled\'s  dismounted attacks(bug), but is not considered a champion for the ability\'s other effects.\nNeeko benefits from  Mr. Kled\'s Wild Ride even while disguised as a lane minion,  Voidmite or  Void Remora.(bug)\nWhile disguised as a non-champion, Neeko cannot purchase items exclusive to  melee or  ranged champions (eg.  Runaan\'s Hurricane) regardless of her current range type.(bug)\nNeeko cannot purchase  Elixir of Iron,  Elixir of Sorcery ,  Elixir of Wrath,  Farsight Alteration while disguised as a unit with a lower level than required.\nNeeko will fail to purchase these items when disguising as a unit of required level if her real level is lower than required.\nBreaking the disguise\nInherent Glamour\'s disguise is broken by the following actions:\nCasting  Blooming Burst or  Tangle-Barbs.\nCasting  Pop Blossom will not break the disguise immediately, but after a delay.\nUsing  Exhaust,  Ignite,  Smite,  Unleashed Smite,  Primal Smite, or  Mark.\nUsing  Dash will not break the disguise.\nActivating the following items:\n Hextech Gunblade\n Hextech Rocketbelt\n Profane Hydra\n Randuin\'s Omen\n Ravenous Hydra\n Redemption\n Stridebreaker\n Tiamat\n Titanic Hydra\nWhile disguised as a champion(note), dealing ability damage to champions with abilities or items will also break the disguise.\n Akshan\'s  Comeuppance is special cased to break the disguise and put it on a 2-second cooldown both before damaging Neeko and while targeting her.\nDamage dealt by  Voidmites summoned by Neeko will be attributed to Neeko and will break the disguise if the disguise\'s form is a non-champion.(note)\nThis includes Voidmites summoned by  Rift Herald Rodeo if Rift Herald was  attached to Neeko during the charge.',
      targeting: 'Auto'
    },
    {
      key: 'Q',
      name: 'Blooming Burst',
      affects: 'Enemies',
      blurb: 'Active:  Neeko tosses a seed that blooms at the target location, dealing magic damage to nearby enemies.',
      castTime: '0.25',
      cooldown: '9 / 8.5 / 8 / 7.5 / 7',
      cost: '50 / 60 / 70 / 80 / 90',
      damageType: 'Magic damage',
      effectRadius: '250',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Neeko tosses a seed that bursts upon landing at the target location, dealing magic damage to nearby enemies.</p>',
          leveling: [
            {
              attribute: 'Initial Magic Damage',
              modifiers: [
                {
                  values: '60 / 110 / 160 / 210 / 260'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            }
          ]
        },
        {
          description: 'If the burst kills an enemy or hits a champion or large monster, the seed blooms after 0.75 seconds to burst again, dealing magic damage to enemies in the same area. This may occur up to 2 times per cast.',
          leveling: [
            {
              attribute: 'Subsequent Magic Damage',
              modifiers: [
                {
                  values: '35 / 60 / 85 / 110 / 135'
                },
                {
                  unit: '% AP',
                  values: '25'
                }
              ]
            },
            {
              attribute: 'Total Maximum Magic Damage',
              modifiers: [
                {
                  values: '130 / 230 / 330 / 430 / 530'
                },
                {
                  unit: '% AP',
                  values: '110'
                }
              ]
            }
          ]
        },
        {
          description: 'Each bloom deals bonus magic damage against monsters.',
          leveling: [
            {
              attribute: 'Bonus Monster Damage',
              modifiers: [
                {
                  values: '35 / 50 / 65 / 80 / 95'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/q',
      notes: 'This ability will cast from wherever the caster is at the start of the cast time.\n Spell shield blocks an instance of damage but does not prevent subsequent Blooms.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'spellaoe',
      spellshieldable: 'special',
      targeting: 'Location'
    },
    {
      key: 'W',
      name: 'Shapesplitter',
      affects: 'Self',
      blurb: 'Passive:  Neeko\'s  basic attacks  on-hit generate  stacks of Shapesplitter. At 2 stacks, her next basic attack will consume them all to become  non-projectile, deal bonus magic damage, and briefly grant her  bonus move speed.',
      castTime: 'none',
      cooldown: '16 / 15 / 14 / 13 / 12',
      cost: '0',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Neeko\'s basic attacks on-hit generate a stack of Shapesplitter, which refreshes on subsequent attacks and stacks up to 2 times. At 2 stacks, her next basic attack on-attack consumes them all to become non-projectile, deal bonus magic damage and grant her bonus movement speed for 1 second. This attack deals 75 bonus magic damage against monsters.</p>',
          leveling: [
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  values: '30 / 65 / 100 / 135 / 170'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            },
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 17.5 / 25 / 32.5 / 40'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Neeko creates a clone of her current form, after which they both instantly become invisible for 0.5 seconds and gain bonus movement speed for 3 seconds. Shapesplitter can be recast at any time while the clone is active.</p>',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 25 / 30 / 35 / 40'
                }
              ]
            }
          ]
        },
        {
          description: 'The clone lasts for 3 seconds, moves a fixed distance in the target direction, and is untargetable to allies and for the first 0.5 seconds of its lifespan to enemies. If the clone takes damage, it will disappear prematurely after 0.5 seconds.Casting an ability, summoner spell, item active, or starting a channel causes the clone to stop moving. Additionally, the clone plays the casting animations for Blooming Burst and Tangle-Barbs as well as Pop Blossom\'s visual effects whenever Neeko casts them. The clone will also play the animation of her next expression or Recall for a set duration that overrides its original duration and will become unable to move while doing so.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Neeko sends her clone to the target location if it is not playing an expression or Recall animation.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/w',
      notes: 'The empowered attack will not trigger against  wards and jungle plants.\nThe damage done by the empowered attack is attributed to  Inherent Glamour in the Death Recap.(bug)\nUsing a basic attack  breaks stealth at the start of the attack windup.\nRecasting Shapesplitter does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nOnce spawned with a  disguise, the clone cannot lose the disguise.\nWhen mimicking the animation of  Blooming Burst and  Tangle-Barbs while disguised, the clone will play the disguise unit\'s first and third ability animation respectively.\nWhen mimicking the animation of Blooming Burst, the clone will turn toward Blooming Burst\'s target location unless it was ordered to move within the last 0.5 seconds, in which case it will not change its facing direction.(bug)\nWhen mimicking the animation of Tangle-Barbs, the clone will always face to the east.(bug)\nIf Shapesplitter is cast during  Pop Blossom\'s delay, the clone will also mimic the ability by displaying the VFX for its area of effect. The copied VFX is only visible to enemies, and only while they have  sight of Neeko.(note)\nWhen Neeko forces her clone to play an expression or  Recall animation, she modifies its duration based on the animation played.\nJoke - 8 seconds.\nDance - 8 seconds.\nTaunt - 4.25 seconds.\nLaugh - 3 seconds.\nToggle - Plays the Joke expression but for the clone only.\n Recall - 8 seconds.\n Empowered Recall - 4 seconds.\nWhile playing an expression or recall animation, the clone cannot move via pathing, even if it is affected by a  forced action.\nThe clone is special-cased to not apply  Frozen Heart\'s Winter\'s Caress after the clone\'s base duration (3 seconds) has elapsed.\nThis effect can still apply before that, including if the clone disappears prior to the base duration elapsing.(note)\nThe clone will sometimes not disappear prematurely after 0.5 seconds.(bug)\nBoth Neeko and the clone use the same running animation.\nWhen passing near a jungle camp for the first time, Neeko will wave at the camp. The clone will likewise wave at nearby camps every time it is spawned, which can override the running animation and allow players to recognize the clone.(bug)\nThe clone can still be targeted by allied  auto-targeted effects (e.g.  Heal,  Celestial Blessing).\nThe clone benefits from allied  Speed Shrine, despite being  untargetable to allies.(note)',
      projectile: 'FALSE',
      spellEffects: 'Proc',
      targeting: 'Direction / Location',
      targetRange: '900'
    },
    {
      key: 'E',
      name: 'Tangle-Barbs',
      width: '140 / 200',
      affects: 'Enemies',
      blurb: 'Active:  Neeko slings a magical spiral in the target direction that deals magic damage and  roots enemies hit.',
      castTime: '0.25',
      cooldown: '12 / 11.5 / 11 / 10.5 / 10',
      cost: '60 / 65 / 70 / 75 / 80',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Neeko slings a magical spiral in the target direction that deals magic damage to enemies hit and roots them for a duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 105 / 140 / 175 / 210'
                },
                {
                  unit: '% AP',
                  values: '65'
                }
              ]
            },
            {
              attribute: 'Root Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '0.7 / 0.9 / 1.1 / 1.3 / 1.5'
                }
              ]
            }
          ]
        },
        {
          description: 'If the spiral hits at least one enemy, it grows in size and its speed and root duration is increased.',
          leveling: [
            {
              attribute: 'Empowered Root Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.8 / 2.1 / 2.4 / 2.7 / 3'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/e',
      notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1300 / 1500',
      spellEffects: 'AoE',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'R',
      name: 'Pop Blossom',
      affects: 'Enemies, Self',
      castTime: '0.6',
      cooldown: '120 / 105 / 90',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '590 /  600',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Neeko winds up spiritual essence over 1.25 seconds and highlights an area around herself, which is visible to enemies unless she is disguised. If Neeko is in a disguise, it will break after 0.5 seconds into the duration.</p>'
        },
        {
          description: 'After winding up, the cast time begins and Neeko leaps upward, knocking up nearby enemies for 0.6 seconds.'
        },
        {
          description: 'When the cast time ends, she lands to emit a burst of energy that deals magic damage to nearby enemies and stuns them for 0.75 seconds.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '150 / 350 / 550'
                },
                {
                  unit: '% AP',
                  values: '120'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/r',
      notes: 'Ability details:\n\nThe wind up uses a special bar similar to cast bars to represent when Pop Blossom\'s cast time will start.\nThe wind up has no special interactions.\nThe highlighted area is fixed around Neeko.\nNeeko\'s most recent  Shapesplitter clone disappears when Pop Blossom\'s cast time starts.\nEditor\'s Note: This may be a remnant of when it would spawn multiple clones during the development of her V13.9 gameplay update, intended to reduce visual clutter.[2]\nThis ability will cast from wherever the caster is at the end of the cast time.\nInteractions:\n\nOn-cast effects are applied on activation.\nPop Blossom can start its cast time during  stasis.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 80,
    control: 3,
    damage: 3,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 1
  },
  patchLastChanged: '25.23',
  positions: [
    'Middle',
    'Support'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2018-12-05',
  resource: 'Mana',
  roles: [
    'Burst',
    'Catcher',
    'Mage',
    'Support'
  ],
  stats: {
    armor: 21,
    attackDamage: 48,
    attackRange: 550,
    attackSpeed: 0.6,
    hp: 610,
    hpRegen: 7.5,
    magicResist: 30,
    movespeed: 340,
    mp: 450,
    mpRegen: 7
  },
  statsPerLevel: {
    armor: 5.2,
    attackDamage: 2.5,
    attackSpeed: 3.5,
    hp: 104,
    hpRegen: 0.8,
    magicResist: 1.3,
    mp: 30,
    mpRegen: 0.7
  }
}
export default champion