// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 13,
  "key": "Ryze",
  "name": "Ryze",
  "title": "the Rune Mage",
  "abilities": [
    {
      "key": "P",
      "name": "Arcane Mastery",
      "affects": "Self",
      "blurb": "Innate:  Ryze gains  maximum mana based on his  ability power.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ryze increases his maximum mana by (10% per 100 AP).</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/p",
      "notes": "The increase in maximum mana differenciates between base and bonus mana, similar to  Overgrowth. The product base off of base mana does not count as bonus mana.\nWith  Rabadon's Deathcap, a total of (40% AP) ability power and (14% AP)% maximum mana is gained.\nArcane Mastery together with  Archangel's Staff or  Seraph's Embrace creates a recursive stat loop:  ability power giving  mana and so on.\nAnother way to create a recursive stat loop, is to have any converter of  mana to  health ( Winter's Approach,  Fimbulwinter or the U.R.F. buff) and  Riftmaker. The first converter giving  mana to  health,  Riftmaker giving  health to  ability power and Arcane Mastery giving  ability power to  mana.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Overload",
      "width": "110",
      "affects": "Enemies",
      "blurb": "Passive:  Ryze's other  basic ability casts  reset Overload's cooldown and generate a  Rune stack, stacking up to 2 times.",
      "castTime": "0.25",
      "cooldown": "5",
      "cost": "40 / 38 / 36 / 34 / 32",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Ryze's other basic ability casts reset Overload's cooldown and charge a Rune stack for 4 seconds, refreshing on subsequent casts and stacking up to 2 times.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze unleashes a runic blast in the target direction that deals magic damage to the first enemy hit and consumes all Rune stacks.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "75 / 95 / 115 / 135 / 155"
                },
                {
                  "unit": "% AP",
                  "values": "55"
                },
                {
                  "unit": "% bonus mana",
                  "values": "2"
                }
              ]
            }
          ]
        },
        {
          "description": "If Ryze consumed 2 stacks, he gains bonus movement speed for 2 seconds.",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "28 / 32 / 36 / 40 / 44"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Flux Bonus:</span> Overload deals 25% / 50% / 75% / 100% (based on Realm Warp's Rank) increased damage and spreads to surrounding Fluxed enemies.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/q",
      "maxCharges": -1,
      "notes": "Overload can be buffered 0.5 seconds before it comes off cooldown.\nOverload can be buffered while casting either  Spell Flux or  Rune Prison to cast immediately after the previous spell's cast time.\nApplies  spell damage to the primary target and  area damage to secondary targets affected by  Flux.\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1700",
      "spellEffects": "Special",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "1000"
    },
    {
      "key": "W",
      "name": "Rune Prison",
      "affects": "Enemies",
      "blurb": "Active:  Ryze seizes the target enemy, dealing magic damage and briefly  slowing them.",
      "castTime": "0.25",
      "cooldown": "11 / 10.5 / 10 / 9.5 / 9",
      "cost": "50 / 60 / 70 / 80 / 90",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze seizes the target enemy, dealing magic damage and slowing them by 50% for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                },
                {
                  "unit": "% bonus mana",
                  "values": "4"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Flux Bonus:</span> The target is rooted instead of slowed.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/w",
      "maxCharges": -1,
      "notes": "Rune Prison can be buffered 0.5 seconds before it comes off cooldown.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "resource": "Mana",
      "spellEffects": "Single target",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "550"
    },
    {
      "key": "E",
      "name": "Spell Flux",
      "affects": "Enemies",
      "blurb": "Active:  Ryze projects an orb upon the target enemy that deals magic damage.",
      "castTime": "0.25",
      "cooldown": "3.5 / 3.25 / 3 / 2.75 / 2.5",
      "cost": "35 / 45 / 55 / 65 / 75",
      "damageType": "Magic damage",
      "effectRadius": "350",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze projects an orb upon the target enemy that deals magic damage.</p>\nThe target and surrounding enemies are also marked with Flux for 4 seconds. Ryze's basic abilities against Flux targets consume the mark to become empowered with an additional effect.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                },
                {
                  "unit": "% bonus mana",
                  "values": "2"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Flux Bonus:</span> Spell Flux spreads farther.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/e",
      "maxCharges": -1,
      "notes": "Spell Flux's second cast on a target will apply a new Flux debuff as well as triggering the previous one (effectively refreshing the duration).\nThe \"main\" missile of Spell Flux is blocked by  projectile-intercepting effects, while the spreading bounce missiles are not.\nPENDING FOR TEST: bounce range  to-edge or  to-center?\nGame data notes additional range checks of 400 (bounce range) and 500 (Q damage bounce range) against 'large' enemies.\nSpell Flux can be buffered 0.5 seconds before it comes off cooldown.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "speed": "4000 / 1500",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "550"
    },
    {
      "key": "R",
      "name": "Realm Warp",
      "affects": "Allies",
      "castTime": "none",
      "cooldown": "180 / 160 / 140",
      "cost": "100",
      "effectRadius": "250 : 350 : 465 /  515",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Overload's Flux empowered damage is increased.</p>",
          "leveling": [
            {
              "attribute": "Bonus Overload Damage",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "50 / 75 / 100"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze channels for 2 seconds to open a portal beneath him, marking the target location as its destination and granting sight of its area. Ryze is able to act while channeling, but the portal will cancel if he is interrupted.</p>"
        },
        {
          "description": "Upon completion, Ryze and allied units within will blink to the location and become rooted, disarmed, silenced and untargetable for 0.75 seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/r",
      "maxCharges": -1,
      "notes": "Realm Warp's portal may try to predict allied players' intention via their movement. For this purpose, it uses three different radiuses around its center for registering units: a definitive radius of 250 units, an inner radius of 365 units and an outer radius of 465 units.\nRyze himself will always be teleported so long as he is within the inner radius, regardless of movement.\nNon-champion units within the outer radius will always be teleported, regardless of movement.\nChampions within the definitive radius will always be teleported, regardless of movement.\nChampions within the inner radius but outside of the definitive radius must not be currently moving in order to be teleported.\nChampions within the inner radius but outside of the definitive radius that are currently moving will not be teleported if their destination is outside the inner radius.\nChampions within the outer radius but outside of the inner radius that are currently moving will only be teleported if their destination is within the inner radius or their movement pathing otherwise intersects the inner radius' circle at two points.\nThis detection may occasionally fail when pathing around terrain.(bug)\nBlinked units retain the same relative positions to one another upon arrival.\nRealm Warp will teleport allies even if they are in a  zombie state, are  untargetable, or are affected by  crowd control.\nRealm Warp will not teleport allies that are using an ability that preloads UnstoppableForceMarker or are being affected by another ally's Realm Warp first.\nRealm Warp will still teleport an allied  Rift Herald that is winding up its leap.\nRealm Warp has various interactions with  channeled abilities that are being performed by an ally. Some channels will prevent their caster from being teleported and others will not.\nFor channels that do not prevent the teleport, Realm Warp will specifically not apply its  silence to the caster.\nCast times will not prevent the teleport.\nThe following channels will prevent the teleport:\n Caitlyn's  Ace in the Hole\n Galio's  Hero's Entrance\n Kayn's  Umbral Trespass\n Jhin's  Curtain Call\n Warwick's  Jaws of the Beast\n Xerath's  Rite of the Arcane\n Recall /  Empowered Recall\n Teleport /  Unleashed Teleport\nThe following table refers for interactions while Ryze is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nAllowed\n\n\nAbilities\n\nAllowed\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection Grounding effects Immobilizing effects Cast-inhibiting effects",
      "resource": "Mana",
      "targeting": "Location",
      "targetRange": "3000 / 1000"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 3
  },
  "faction": "unaffiliated",
  "lore": "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments of the raw magic that once shaped the world from nothingness. He must retrieve these artifacts before they fall into the wrong hands, for Ryze understands the horrors they could unleash on Runeterra.",
  "patchLastChanged": "25.13",
  "positions": [
    "Middle"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 260
  },
  "releaseDate": "2009-02-21",
  "resource": "Mana",
  "roles": [
    "Battlemage",
    "Fighter",
    "Mage"
  ],
  "stats": {
    "health": {
      "flat": 645,
      "perLevel": 124
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 300,
      "perLevel": 70
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 1
    },
    "armor": {
      "flat": 22,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 575
    },
    "selectionRadius": {
      "flat": 120
    },
    "pathingRadius": {
      "flat": 35
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
      "perLevel": 2.11
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
      "flat": -0.1
    },
    "attackRange": {
      "flat": 550
    }
  }
}
export default champion