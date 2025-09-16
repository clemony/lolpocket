// Updated Patch 25.17 - 09/14/2025 05:55:16 PM CDT

const champion: Champion = {
  "id": 142,
  "key": "Zoe",
  "name": "Zoe",
  "title": "the Aspect of Twilight",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 106
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 425,
      "perLevel": 25
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.65
    },
    "armor": {
      "flat": 21,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 550
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
    },
    "gameplayRadius": {
      "flat": 55
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.658,
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
      "flat": -0.139
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Burst",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 3
  },
  "abilities": [
    {
      "name": "More Sparkles!",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> After casting an ability, Zoe empowers her next basic attack or Spell Thief bolt within 5 seconds to become non-projectile and deal 16 - 130 (based on level) (+ 20% AP) bonus magic damage.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Enemies",
      "spellshieldable": "False",
      "damageType": "Magic damage",
      "spellEffects": "Proc",
      "projectile": "FALSE",
      "notes": "The empowered attack will trigger but not be consumed against wards.",
      "blurb": "Innate: After casting an ability,  Zoe's next basic attack or  Spell Thief bolt within a few seconds will deal bonus magic damage."
    },
    {
      "name": "Paddle Star!",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit. The total damage is increased by 0% - 150% (based on distance traveled).</p>",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "2 / 4.82 / 7.65 / 10.47 / 13.29 / 16.12 / 18.94 / 21.76 / 24.59 / 27.41 / 30.24 / 33.06 / 35.88 / 38.71 / 41.53 / 44.35 / 47.18 / 50"
                },
                {
                  "values": "50 / 80 / 110 / 140 / 170"
                },
                {
                  "values": "60",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "5 / 12.06 / 19.12 / 26.18 / 33.24 / 40.29 / 47.35 / 54.41 / 61.47 / 68.53 / 75.59 / 82.65 / 89.71 / 96.76 / 103.82 / 110.88 / 117.94 / 125"
                },
                {
                  "values": "125 / 200 / 275 / 350 / 425"
                },
                {
                  "values": "150",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "The star lingers at maximum range for 1 second, during which Paddle Star! can be recast after 0.25 seconds in the duration."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Zoe redirects the star in the target path, empowering it with increased speed and radius, and resetting its damage modifier on cast. The redirected star can travel until it reaches 800-units outbound from Zoe.</p>"
        },
        {
          "description": "Paddle Star!'s recast can be used while affected by cast-inhibiting crowd control."
        }
      ],
      "cost": "40 / 45 / 50 / 55 / 60",
      "cooldown": "8.5 / 8 / 7.5 / 7 / 6.5",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "projectile": "TRUE",
      "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  More Sparkles!,  Spellblade and triggering  Force Pulse's passive.\nThe recast radius matches the initial cast radius of the ability, but Zoe can move any amount of distance away from the projectile before reactivating.\nPaddle Star!'s effect radius is centered around the location of the missile as it collides.",
      "blurb": "Active:  Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit based on the distance travelled.",
      "speed": "1200 / 2500",
      "width": "100 / 140",
      "castTime": "0.25",
      "effectRadius": "180",
      "maxCharges": -1
    },
    {
      "name": "Spell Thief",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Wheeeee:</span> Whenever Zoe casts Spell Thief or a summoner spell, she gains bonus movement speed for a duration, and summons three bolts that orbit her for the next 10 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "values": "30 / 40 / 50 / 60 / 70",
                  "unit": "%"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed Duration",
              "modifiers": [
                {
                  "values": "2 / 2.25 / 2.5 / 2.75 / 3",
                  "unit": " seconds"
                }
              ]
            }
          ]
        },
        {
          "description": "If Zoe is not affected by complete crowd control, she shoots one bolt at a time at the nearest non- sleeping enemy in range, prioritizing her attack target, dealing magic damage with each bolt.",
          "leveling": [
            {
              "attribute": "Magic Damage Per Bolt",
              "modifiers": [
                {
                  "values": "20 / 30 / 40 / 50 / 60"
                },
                {
                  "values": "15",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "values": "45",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Whenever a nearby enemy champion casts a specific summoner spell or item active, they drop the corresponding Spell Shard onto the ground that grants sight over a 100-radius area and remains for 40 seconds. Enemy minions have a 10% chance to spawn with a random Spell Shard that drops and remains for 20 seconds if Zoe kills them. Allied champions that kill them will cause the orb to drop only if Zoe is nearby.</p>"
        },
        {
          "description": "Zoe can collect a Spell Shard by moving directly onto it, holding it for up to 60 seconds. Collecting a new Spell Shard replaces the current one."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zoe mimics the active effect of the collected Spell Shard.</p>"
        }
      ],
      "cost": "0",
      "cooldown": "0.25",
      "targeting": "Auto",
      "affects": "Self, Enemies",
      "spellshieldable": "true",
      "resource": "Other",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "projectile": "TRUE",
      "notes": "The in-game tooltip for Spell Thief while Zoe has a Spell Shard uses the tooltip of the mimicked spell or item active.\nZoe will cast Spell Thief in place of her own summoner spells if she has either of them as a collected Spell Shard, even if she tries to cast the summoner spell while it is on cooldown.\nMinions that can drop Spell Shards are marked with a tied cosmic balloon that floats above them.\nZoe utilizes an attack-like animation whenever one of the bubbles hurls itself at an enemy, making it look as if she can attack while moving.\nMinions holding a Spell Shard can drop one of the following summoner spells or item actives:\nApplicable summoner spells:  Barrier,  Cleanse,  Exhaust,  Ghost,  Heal,  Ignite, and  Unleashed Smite.\nAll other summoner spells are not applicable for minions to drop, which includes  Clarity,  Hexflash,  Mark /  Dash,  Smite,  Teleport /  Unleashed Teleport, and  Primal Smite.\nApplicable item actives:  Hextech Rocketbelt,  Locket of the Iron Solari,  Profane Hydra,  Randuin's Omen,  Ravenous Hydra,  Shurelya's Battlesong,  Stridebreaker,  Titanic Hydra, and  Youmuu's Ghostblade.\nAll summoner spells except  Dash and  Hexflash are applicable to drop as a Spell Shard when an enemy champion uses them.\nThe recast duration of a mimicked  Mark cast lasts longer than the mark duration.(bug)\nThis allows her to cast  Dash while the mark is expired, though the spell will fail to trigger its effects with an attempted cast. Spell Thief's passive effect is still triggered, however.\nSpell Shards may be collected while Zoe can cast  Dash from a mimicked  Mark cast. The new shard will replace the ability slot once  Dash is used or expires.\nThe following table lists item actives that can drop as a Spell Shard, as well as those that explicitly do not or are not applicable to drop, when an enemy champion activates them:\nConsumable and trinket items are excluded automatically.\n\n\nItem\n\nStealable\n\n\n Black Spear\n\n\n\n Bloodsong\n\n\n\n Bounty of Worlds\n\n\n\n Celestial Opposition\n\n\n\n Dream Maker\n\n\n\n Farsight Alteration\n\n\n\n Hextech Rocketbelt\n\n\n\n Knight's Vow\n\n\n\n Locket of the Iron Solari\n\n\n\n Mercurial Scimitar\n\n\n\n Mikael's Blessing\n\n\n\n Oracle Lens\n\n\n\n Profane Hydra\n\n\n\n Quicksilver Sash\n\n\n\n Randuin's Omen\n\n\n\n Ravenous Hydra\n\n\n\n Redemption\n\n\n\n Runic Compass\n\n\n\n Scarecrow Effigy\n\n\n\n Seeker's Armguard\n *\n\n\n Shurelya's Battlesong\n\n\n\n Solstice Sleigh\n\n\n\n Stridebreaker\n\n\n\n Tiamat\n\n\n\n Titanic Hydra\n\n\n\n Warding Totem\n\n\n\n Watchful Wardstone\n\n\n\n Vigilant Wardstone\n\n\n\n Youmuu's Ghostblade\n\n\n\n Zaz'Zak's Realmspike\n\n\n\n Zhonya's Hourglass\n\n\n\n\nKey\n\n\n\n\nCan be stolen.\n\n\n\n\nCannot be stolen.\n\n\n\n\nNot applicable to be stolen.\n\n\n\n\nUntested",
      "effectRadius": "2200 / Global / 1500 /  525",
      "maxCharges": -1
    },
    {
      "name": "Sleepy Trouble Bubble",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zoe kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy. The bubble can move through terrain only once, but travels the entire distance as bonus range, and will fall short if it would enter terrain again.</p>"
        },
        {
          "description": "The burst deals magic damage to the target and inflicts them with drowsy for 1.4 seconds, which gradually slows them until they fall asleep for 2.25 seconds. While the target is asleep, they are inflicted with 30% magic resistance reduction.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 110 / 150 / 190 / 230"
                },
                {
                  "values": "45",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Maximum Slow",
              "modifiers": [
                {
                  "values": "10 / 15 / 20 / 25 / 30",
                  "unit": "%"
                }
              ]
            }
          ]
        },
        {
          "description": "The next instance of non- persistent damage that the sleeping target takes from champions, large monsters or turrets consumes the debuff to deal bonus true damage equal to the post-mitigation damage dealt, capped at Sleepy Trouble Bubble's damage.",
          "leveling": [
            {
              "attribute": "Bonus Damage Cap",
              "modifiers": [
                {
                  "values": "70 / 110 / 150 / 190 / 230"
                },
                {
                  "values": "45",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Maximum Mixed Damage",
              "modifiers": [
                {
                  "values": "140 / 220 / 300 / 380 / 460"
                },
                {
                  "values": "90",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "80",
      "cooldown": "16 / 15 / 14 / 13 / 12",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "special",
      "projectile": "TRUE",
      "notes": "Applies  spell damage for the bubble and  default damage for the wake-up damage.\n Spell shield will not prevent falling  asleep nor block the wake-up damage.\nThe bubble's damage and  drowsy application will be blocked.\nThe bonus damage from Sleepy Trouble Bubble is dealt before any triggering damage from Zoe or her allies, and is attributed to Zoe at all times.\nIf an ally expunges the  sleep and the bonus damage from Sleepy Trouble Bubble is enough to kill the target, Zoe will be credited the kill.\nAdditionally in this case, the allied champion will not be credited an assist at all.(bug)\nZoe will gain  obscured vision of the target while they're  asleep if they are not  visible.\nIf exceptionally close to terrain, the bubble will pass through without detection and will still be able to pass through a second piece of terrain - although it sacrifices any range its already used going through the first piece.\nSleepy Trouble Bubble can interact with player-generated terrain.\nAt the end of the path of the initial missile, before continuing with the short bounce, Sleepy Trouble Bubble checks for targets in a  100 radius to immediately collide with.\nThis \"lollipop\" is one of only a few that is larger than the ability's missile width.\nSleepy Trouble Bubble can still be collided with during the short bounce between end of initial missile and the trap being formed.\nThis seems to use a  very small or negative collision radius, rather than normal missile collision.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe missile's maximum range location, or end position, is determined at the start of the cast and as such will always be fired to the same spot regardless of where Zoe is at the end of the cast time.\nAn applicable example of this can be seen in an interaction with her  Portal Jump. If Sleepy Trouble Bubble is cast right before she blinks back to Portal Jump's original cast position, the range of the missile will be extended for it to fire to the same end position as if she had not blinked back. This interaction occurs in this manner due to the missile's behavior as explained prior and the fact that Zoe blinks back with Portal Jump before the cast time of Sleepy Trouble Bubble finishes, causing the cast time to finish from Portal Jump's original cast position.\nThis will still count as damage dealt by Zoe in the damage recap.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "speed": "1850",
      "width": "100 / 200",
      "castTime": "0.25",
      "effectRadius": "250",
      "maxCharges": -1
    },
    {
      "name": "Portal Jump",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> After a 0.15-second delay, Zoe blinks in the target direction and remains there for 0.95 seconds to 1.25 seconds, during which she sets her movement speed to a static 0 and has unobstructed vision. Afterwards, she blinks back to her casting position.</p>"
        },
        {
          "description": "Portal Jump resets Zoe's basic attack timer. Zoe briefly becomes unable to act after casting Portal Jump as well as after blinking back."
        }
      ],
      "cost": "40",
      "cooldown": "11 / 8 / 5",
      "targeting": "Direction",
      "affects": "Self",
      "resource": "Mana",
      "notes": "Zoe will remain at the blink destination for an inconsistent period of time.(bug)\nPortal Jump causes Zoe to become unable to perform any actions for a varied ~0.55-0.75 seconds(bug) from the start of the cast time and another time for a varied ~0.3-0.5 seconds(bug) starting from right before she blinks back.\nZoe is able to perform any action while at the blink destination, except practically being unable to move through normal movement due to having 0 movement speed.\nPortal Jump's maximum range location, or end position, is determined at the start of the cast time and as such Zoe will always blink to the determined destination regardless of where she is at the end of the ability's cast time.\nPortal Jump will always cause Zoe to  blink back to her casting position regardless of where she is moved to while at the destination.\nShe will still be considered to blink even if she fails to move her intended location while  attached (e.g. if she were affected by  The Show Stopper).\nUpon reaching her destination, Zoe will either raspberry at the nearest enemy champion, or lick an ice cream cone when there are no enemy champions in  sight.\nZoe's return position is shifted by 25 units in the target direction from her cast location.\nThe following table refers for interactions while Zoe is locked out during the cast time and for certain periods of time during the ability:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "blurb": "Active:  Zoe  blinks in the target direction, after which she cannot move for a brief moment.",
      "castTime": "0.25",
      "maxCharges": -1
    }
  ],
  "lore": "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without conscious effort or malice. This perhaps explains the breezy nonchalance with which Zoe approaches her duties, giving her plenty of time to focus on playing games, tricking mortals, or otherwise amusing herself. An encounter with Zoe can be joyous and life affirming, but it is always more than it appears and often extremely dangerous.",
  "faction": "mount-targon",
  "releaseDate": "2017-11-21",
  "patchLastChanged": "25.14",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion