// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  "id": 72,
  "key": "Skarner",
  "name": "Skarner",
  "title": "the Primordial Sovereign",
  "abilities": [
    {
      "key": "P",
      "name": "Threads of Vibration",
      "affects": "Enemies",
      "blurb": "Innate:  Skarner's  basic attacks  on-hit,  Shattered Earth,  Upheaval, and  Impale apply a  stack of Quaking to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Enemies afflicted with 3 stacks take magic damage based on their maximum health.",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Skarner's basic attacks on-hit, Shattered Earth, Upheaval, and Impale apply a stack of Quaking to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Enemies afflicted with 3 stacks take magic damage equal to [ 5% - 9% (based on level) of their maximum health over the duration, capped at 100 - 300 (based on level) against monsters. ][ 0.63% - 1.13% (based on level) of their maximum health every 0.5 seconds over the duration, capped at 12.5 - 37.5 (based on level) per tick against monsters. ]</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/p",
      "notes": "Basic attacks that are  dodged by the target or missed while Skarner is  blinded do not apply stacks of Quake.  Blocked attacks will still apply stacks.\n Spell shield prevents Quaking's application from  Upheaval and  Impale only.",
      "spellEffects": "proc",
      "spellshieldable": "special",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Shattered Earth",
      "affects": "Self, Enemies",
      "blurb": "Active:  Skarner rips a boulder out of the ground, empowering his next three basic attacks with  bonus attack speed and bonus physical damage to the target and surrounding enemies. The final attack slams the boulder, dealing additional damage based on each target's maximum health and  slowing them.",
      "castTime": "0.35",
      "cooldown": "13 / 11.5 / 10 / 8.5 / 7",
      "cost": "45",
      "damageType": "Physical damage",
      "effectRadius": "300",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Skarner rips a boulder from the ground, empowering up to three of his next basic attacks within 5 seconds of each other. These attacks gain 25 bonus range, bonus attack speed, and deal bonus physical damage to the target and surrounding enemies, including structures.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage per Hit",
              "modifiers": [
                {
                  "values": "10 / 20 / 30 / 40 / 50"
                },
                {
                  "unit": "% bonus AD",
                  "values": "80"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "3"
                }
              ]
            },
            {
              "attribute": "Total Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "30 / 60 / 90 / 120 / 150"
                },
                {
                  "unit": "% bonus AD",
                  "values": "240"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "9"
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
          "description": "The final attack slams the boulder, dealing an additional 8% of each target's maximum health physical damage and slowing afflicted enemies by 40% for 1 second. The additional damage is capped against monsters and is not applied against structures.",
          "leveling": [
            {
              "attribute": "Monster Percent Health Damage Cap",
              "modifiers": [
                {
                  "values": "150 / 200 / 250 / 300 / 350"
                }
              ]
            }
          ]
        },
        {
          "description": "After 0.5 seconds of the cast, Skarner gains the ability to use Upheaval during Shattered Earth."
        },
        {
          "description": "Shattered Earth's duration is paused during Ixtal's Impact."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/q",
      "maxCharges": -1,
      "notes": "General\nThe empowered attacks can be parried and will not trigger the area of effect if either the target  blocks or  dodges the attack, or if the attacks miss while Skarner is  blinded.\nThe attacks will be still consumed in all cases regardless.\nNote that if the main target is not blocking or dodging, then the area of effect can still deal damage to those who do.\nCasting Shattered Earth  resets Skarner's basic attack timer.\nThe empowered attacks have an  uncancellable windup against champions, minions, and turrets only.\nEditor's note: Prior to Patch 14.9, the windup was uncancelable regardless of the target's type. It is currently unknown if the change was intentional or not, but seems to be partially intentional based on observation.\nThe afformentioned unit types and inhibitors are considered \"valid\" for Shattered Earth and will only trigger its effects when the main target was one of those. This includes:\nTriggering the damaging area of effect,\nRefreshing the duration when an empowered attack has begun,\nand consume empowered attacks only when they landed. (This way the attacks are not consumed when the target died beforehand.)\nAttacking any other units will cause Skarner to use his normal basic attacks instead while Shattered Earth is expiring (but still benefit from the increased attack speed and range).\nTo be more precise about Ixtal's Impact's duration pause, it adds 0.25 seconds to the duration every 0.25 seconds, but will set it to an estimated minimum of 1.5 seconds if it would have been lower.\nThe  slow applied by Shattered Earth is a generic slow debuff.\nInteractions & Other\nThe attack reset will not save time if Skarner possesses sufficiently high attack speed because of the ability's 0.35 seconds cast time. Starting from around  271.4285% bonus attack speed, basic attacking is fast enough to match the time with the reset and will be even faster with more, causing Shattered Earth to actually slow down the user at that point.\nHowever, this only takes attack speed into account and ignores various other factors, such as the damage and other bonuses from the ability and the fact that Skarner generally does not like building such high amounts of attack speed. Additionally, attempting to do the attack reset at such high attack speed is already a hard task, if not requires frame perfect execution to save any ticks worth of time.\nKnown issues\nSkarner's attack speed is not immediately updated upon casting Shattered Earth. Beginning the first attack shortly after casting results in an attack that does not benefit from the attack speed granted by the ability.\nIf Upheaval hits an enemy while a new instance of Shattered Earth is active, Shattered Earth's effects are immediately lost.\nWhile Shattered Earth is active, it will not benefit from cooldown refund effects such as  Transcendence or  Navori Flickerblade's Transcendence.\nEditor's note: This is not a Skarner-specific issue. Various abilities, including Ultimates, that grant a different ability in their slot after activation may suffer from this problem (e.g.  Briar's  Blood Frenzy and  Snack Attack) and may be fixed or may have been fixed on a case-by-case basis.\nThe empowered attacks lack spell effects as they deal  proc damage, which does not match with how empowered attacks supposed to behave in general.\nEditor's note: This is possibly a band-aid fix to avoid an issue where Shattered Earth would trigger various effects twice per attack instead of once, as it could be seen during the first PBE deploy of the rework's release, after which the ability was changed from spell damage to proc.\nThe buff used for Shattered Earth is fuzzy. Each attack removes 1 stack on a delay of up to 0.25 seconds. This has no known side effects currently.\nThe slow is also applied and removed in a fuzzy manner, meaning that sometimes it may last shorter or longer than intended, depending on the ticks.",
      "resource": "Mana",
      "spellEffects": "proc",
      "spellshieldable": "false",
      "targeting": "Auto"
    },
    {
      "key": "Q",
      "name": "Upheaval",
      "width": "180",
      "affects": "Enemies",
      "blurb": "Active: Skarner ends Shattered Earth by throwing his boulder, which explodes upon colliding with the first enemy hit, mimicking the final attack's damage and effects.",
      "castTime": "0.25 / none",
      "cooldown": "13 / 11.5 / 10 / 8.5 / 7",
      "cost": "45",
      "damageType": "Physical damage",
      "effectRadius": "300",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Skarner ends Shattered Earth by throwing his boulder in the target direction. It explodes upon colliding with the first enemy hit, applying the same damage and slow to the target and surrounding enemies as the final attack would.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "10 / 20 / 30 / 40 / 50"
                },
                {
                  "unit": "% bonus AD",
                  "values": "80"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "3"
                },
                {
                  "unit": "% of target's maximum health",
                  "values": "8"
                }
              ]
            },
            {
              "attribute": "Maximum Monster Damage",
              "modifiers": [
                {
                  "values": "160 / 220 / 280 / 340 / 400"
                },
                {
                  "unit": "% bonus AD",
                  "values": "80"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "3"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/q",
      "maxCharges": -1,
      "notes": "General\nWhile Upheaval can deal damage to structures, the missile can't directly hit them. They have to be within the radius of the explosion.\n Spell shield will not prevent the explosion from occurring.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe direction of cast will be updated to go toward the cast location.\nThe  slow applied by Shattered Earth is a generic slow debuff.\nKnown Issues\nIf Upheaval hits an enemy while a new instance of Shattered Earth is active, Shattered Earth's effects are immediately lost.(bug)",
      "projectile": "TRUE",
      "speed": "1600",
      "spellEffects": "spellaoe",
      "spellshieldable": "special",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Seismic Bastion",
      "affects": "Enemies",
      "blurb": "Active:  Skarner slams his claws into the ground,  shielding himself based on his maximum health and releasing a shockwave that quickly expands in a radius around him to deal magic damage to enemies hit and briefly  slow them.",
      "castTime": "0.3",
      "cooldown": "10 / 9 / 8 / 7 / 6",
      "cost": "60 / 65 / 70 / 75 / 80",
      "damageType": "Other damage",
      "effectRadius": "600 / 700",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Skarner slams his claws into the ground, shielding himself equal to 8% of his maximum health for 2.5 seconds and releasing a shockwave that quickly expands in a radius around him to deal magic damage to enemies hit and slow them by 20% for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 70 / 90 / 110 / 130"
                },
                {
                  "unit": "% AP",
                  "values": "80"
                }
              ]
            }
          ]
        },
        {
          "description": "Skarner can move during Seismic Bastion's cast time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/w",
      "maxCharges": -1,
      "notes": "The shield is granted at the start of the cast time.\nThe shield ratio is equal to 50.4 : 200 (based on level) (+ 8% of his bonus health).\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "FALSE",
      "resource": "Mana",
      "speed": "1650",
      "spellEffects": "spellaoe",
      "spellshieldable": "true",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Ixtal's Impact",
      "blurb": "Active:  Skarner charges in the target direction for a duration while ignoring terrain collision and gaining  ghosting and  slow immunity. He starts slowly but ramps up in  movement speed over the course of the charge, and is able to steer himself increasingly fast when keeping the same direction. Ixtal's Impact can be recast after 1 second, and does so automatically after the duration.",
      "castTime": "none",
      "collisionRadius": "160",
      "cooldown": "22 / 21 / 20 / 19 / 18",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Skarner charges forward in the direction of the cursor for up to 2.75 seconds, during which he gains slow immunity, becomes ghosted, ignores terrain collision, and has unobstructed vision of the surrounding 650 units. He automatically navigates his movement along the way and is able to steer himself with a slow turn rate that increases over time, resetting upon changing direction. Ixtal's Impact can be recast after 1 second, and does so automatically after the duration.</p>"
        },
        {
          "description": "Skarner begins the charge at a static amount of 150 movement speed that increases by 100 every 0.264 seconds, up to 950 total movement speed by the end of the duration. If Skarner collides with an enemy champion or large monster, he grabs them with his claws for the time of the remaining charge, attaching them to himself, suppressing them, revealing them, increasing the charge's turn rate to the maximum, and gaining 300 bonus movement speed, with a minimum total of 650 and a maximum total of 1150. If a target has been grabbed before the first 1.75 seconds of the charge, the remaining duration is set to 1 second, and set to 0.5 seconds otherwise. The charge does not ramp up in speed while a target is grabbed."
        },
        {
          "description": "If Skarner's attached target collides with terrain, the charge ends, detaching them from him, dealing physical damage, stunning them for 1.1 seconds, and reducing Ixtal's Impact's cooldown by 35%.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "30 / 60 / 90 / 120 / 150"
                },
                {
                  "unit": "% of his maximum health",
                  "values": "6"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Skarner ends Ixtal's Impact. If a target has been grabbed, he detaches them from himself.</p>"
        },
        {
          "description": "Ixtal's Impact ends immediately if Skarner becomes immobilized, grounded, or silenced during the charge, detaching the grabbed target. While the target is grabbed, they are attached to Skarner in a position that is directly in front of him."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/e",
      "maxCharges": -1,
      "notes": "While Ixtal's Impact is active, Skarner's movement speed is set to a static amount that cannot change by any means other than by the ability itself.\nAny movement speed modifiers gained before or during the charge are retained however, and will take effect after the charge if the duration permits.\nThe bonus movement speed from grabbing a target is 300 only if Skarner's movement speed was between 350 and 850 at the time.\nIf Skarner was at less than 350 movement speed when he grabbed the target, his total movement speed is instead set to 650. If he was at 950 movement speed, his total movement speed is set to the cap of 1150.\nSkarner gains a slightly larger field of view during Ixtal's Impact's charge.\nIxtal's Impact's attachment depends on the application of the  suppression; if the suppression is not applied, neither is the attachment. Similarly, if the suppression is removed, so is the attachment.\nIf the target resists the suppression through  total crowd control immunity,  displacement immunity, or a  spell shield. Skarner will not attach them to himself, causing the charge to end instantly. The collision's damage is special-cased to still apply to a target under these effects immediately upon contact.\nIf the target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will detach themselves from Skarner immediately which forces the charge to end instantly and not apply any damage.\nSkarner can move up to 550 units beyond the outer-edge of the battlefield with the charge.\nOnce he has surpassed this boundary, Ixtal's Impact ends immediately and Skarner is moved to the nearest valid space.\nIxtal's Impact can interact with player-generated terrain.\nIf Skarner is inside terrain when the effect ends, he will be moved to the nearest valid space.\nEnemies cannot see Skarner while he is inside terrain, unless they grant sight into the area of terrain he is inside (such as with  Hawkshot or  Heightened Senses) or have  unobstructed vision.\nHowever, enemies will be notified when Skarner is inside nearby terrain while within a certain distance of him. An indicator will be visible to the enemy player's perspective to represent this.\nThe following table refers for interactions while Skarner is charging:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed, but cannot input movement commands.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nA special indicator for Ixtal's Impact's direction and expected ending location is visible to Skarner only during his charge.",
      "resource": "Mana",
      "spellEffects": "spell",
      "spellshieldable": "true",
      "targeting": "Direction"
    },
    {
      "key": "R",
      "name": "Impale",
      "width": "350 / 200",
      "blurb": "Active:  Skarner winds up his stingers over the cast time with  displacement immunity, then lashes them forward in the target direction, dealing magic damage to enemies hit and impaling up to 3 of the closest enemy champions within the area to briefly  suppress. While suppressed, the targets are  revealed and  attached to Skarner. If he successfully impales at least one enemy champion, Skarner gains  bonus movement speed for Impale's duration.",
      "castTime": "0.65",
      "cooldown": "120 / 105 / 90",
      "cost": "100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Skarner winds up his stingers over the cast time, then lashes them forward in an isosceles trapezoid in the target direction, dealing magic damage to enemies hit and impaling up to 3 of the closest enemy champions within the area to suppress them for 1.5 seconds. While suppressed, the targets are revealed and attached to Skarner. If he successfully impales at least one enemy champion, Skarner gains 40% bonus movement speed for the same duration.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            }
          ]
        },
        {
          "description": "If Impale is cast during Shattered Earth, Skarner automatically casts Upheaval in the direction of Impale's cast. Skarner is unable to basic attack, cast Shattered Earth or Ixtal's Impact, or use Flash during Impale. While the targets are impaled, they are attached to Skarner 300 units in front of him. Targets are placed 200 units in the same direction at the end of the effect."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/r",
      "maxCharges": -1,
      "notes": "Impale's attachment depends on the application of the  suppression; if the suppression is not applied, neither is the attachment. Similarly, if the suppression is removed, so is the attachment.\nIf a target resists the suppression by being  immune to crowd control,  displacement immune, or having a  spell shield, Skarner will not attach them to himself.\nIf all targets hit resist the suppression, Skarner will fail to attach any of them to himself and thus will not initiate Impale, causing the ability to behave as if no valid impale targets were hit.\nIf a target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will detach themselves from Skarner immediately.\nIf all targets remove the suppression, Impale ends prematurely and is cancelled for Skarner.\nIf a target would be inside of terrain at the end of the effect, they are moved to the nearest valid space.\nIf a target would be on the other side of a wall, they are moved to the same side as Skarner.\nDuring Impale, Skarner always faces in the direction of the nearest attached target.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Skarner is in cast time:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while Skarner is performing Impale:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Shattered Earth and  Ixtal's Impact are disabled, but can be buffered.  Seismic Bastion is usable.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport\n\n\nDisabled\n\n Flash  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "true",
      "targeting": "Direction"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 45,
    "difficulty": 2
  },
  "faction": "ixtal",
  "lore": "The ancient, colossal brackern Skarner is revered in Ixtal as one of the founding members of its ruling caste, the Yun Tal. Devoted to keeping his nation safe from the rest of the world, Skarner dwells in a chamber beneath Ixaocan where he can hear the vibrations of the earth and detect potential threats. As more members of the Yun Tal begin questioning Ixtal's self-isolation, Skarner grows increasingly paranoid and will do anything to keep Ixtal and its people safe—no matter the cost.",
  "patchLastChanged": "25.09",
  "positions": [
    "Jungle",
    "Top"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2011-08-09",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank",
    "Vanguard"
  ],
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 320,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 7.2,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 63,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 130
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
      "perLevel": 2
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
      "flat": 0
    },
    "attackRange": {
      "flat": 150
    }
  }
}
export default champion