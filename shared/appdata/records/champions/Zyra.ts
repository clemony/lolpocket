// Updated Patch 25.17 - 09/12/2025 02:39:57 PM CDT

const champion: Champion = {
  "id": 143,
  "key": "Zyra",
  "name": "Zyra",
  "title": "Rise of the Thorns",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 574,
      "perLevel": 93
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 418,
      "perLevel": 25
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 29,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 53,
      "perLevel": 3.2
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
      "flat": 0.681,
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
      "flat": -0.154
    },
    "attackRange": {
      "flat": 575
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Catcher",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Garden of Thorns",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Zyra spawns one or two Seeds nearby that last for 30 seconds, granting sight over the surrounding area for 1 second.</p>"
        },
        {
          "description": "After 1 second, enemy champions can destroy Seeds by stepping on them."
        },
        {
          "description": "Zyra can only have a total of 8 Seeds planted at a time, preserving Seeds spawned by Rampant Growth over Seeds spawned by Garden of Thorns."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "PENDING FOR TEST:: The pattern/probability of Garden of Thorns spawning one seed or two.\nZyra tries to plant Seeds in brush and not on top of walls.\nZyra tries not to plant Seeds too close together and at different angles.\nZyra does not plant any Seeds if she is concealed within a brush (unless there is an enemy ward in it, in which case it takes her a little longer to plant the Seed) or when there is no room for additional ones.\nZyra does not plant any Seeds if she is within  1400 units of the coordinate points (400, 400) or (14000, 14000), which are roughly at the center of the fountains on  Summoner's Rift.\nThese same coordinates may not hold as fountain positions on other maps (e.g. on the  Arena map, the Magma Chamber area overlaps with the second exclusion radius) and may prompt the implementation of this behaviour to be changed in the future.(bug)\nZyra tries to plant Seeds close to an enemy near her.\nPENDING FOR TEST:: Zyra tries to plant Seeds under enemy structures only if she is in basic attack range of them.\nPENDING FOR TEST:: Zyra tries to plant Seeds on the other side of the wall she is facing and/or standing right next to.\nPENDING FOR TEST:: Zyra tries to plant Seeds in the direction she is facing and/or moving.\nZyra tries to plant Seeds near jungle path entrances.\nPENDING FOR TEST:: Zyra tries to plant Seeds behind herself when she is walking through the river and there are no jungle path entrances near her.\nZyra tries to plant Seeds between herself and the enemy champion she has vision of (or is heading towards her) in a 45° angle to the left or to the right depending on where on lane she is standing.\nZyra tries to plant Seeds against the inner walls of epic monster pits ( Dragon,  Rift Herald,  Baron Nashor)\nZyra has a hidden passive that grants her 10% increased size for 33 seconds after having  Leona's  Sunlight applied to her.",
      "blurb": "Innate:  Zyra's Seeds can be turned into plants by hitting them with her basic abilities. Enemy  champions can step over a Seed to destroy it.",
      "effectRadius": "900"
    },
    {
      "name": "Deadly Spines",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zyra sprouts thorny spines at the target location that appear after a 0.625-seconds delay, dealing magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "60 / 100 / 140 / 180 / 220",
                "65% AP"
              ]
            }
          ]
        },
        {
          "description": "If Deadly Spine hits a Seed, it sprouts into a Thorn Spitter that remains for 8 seconds."
        }
      ],
      "cost": "55",
      "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "notes": "Each  Thorn Spitter will generate 2 stacks of  Conqueror and 1 stack of each of  Phase Rush and  Electrocute.",
      "blurb": "Active:  Zyra sprouts a field of thorny vines at the target location that deals magic damage to enemies hit.",
      "castTime": "0.25",
      "targetRange": "800",
      "maxCharges": -1
    },
    {
      "name": "Rampant Growth",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zyra plants a Seed at the target location that remains for 60 seconds and grants sight over the surrounding area, though decreasing in radius after 1 second. After 1.5 seconds, enemy champions can destroy the Seed by stepping on it, which reveals them for 2 seconds.</p>"
        },
        {
          "description": "Zyra periodically stocks a Seed charge, up to a maximum of 2. Killing an enemy generates 35% charge toward a Seed, increased to 100% for large enemies and whenever scoring an enemy champion takedown."
        }
      ],
      "cost": "0",
      "cooldown": "0",
      "targeting": "Location",
      "affects": "Self, Enemies",
      "spellshieldable": "false",
      "resource": "Other",
      "notes": "Upon first rank up, Rampant Growth gains 2 charges.\nSeeds are  untargetable.",
      "blurb": "Active:  Zyra plants a Seed at the target location that remains for a while. Enemy  champions can step on the seed to destroy it and become briefly  revealed.",
      "rechargeRate": "18 / 16 / 14 / 12 / 10",
      "castTime": "none",
      "targetRange": "850",
      "maxCharges": 2
    },
    {
      "name": "Grasping Roots",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zyra shoots a surge of vines in the target direction that deals magic damage to enemies hit and roots them for a duration.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "60 / 95 / 130 / 165 / 200",
                "60% AP"
              ]
            },
            {
              "attribute": "Root Duration",
              "modifiers": [
                "1 / 1.25 / 1.5 / 1.75 / 2 seconds"
              ]
            }
          ]
        },
        {
          "description": "If Grasping Roots hits a Seed, it sprouts into a Vine Lasher, which remains on the battlefield for 8 seconds."
        }
      ],
      "cost": "70 / 75 / 80 / 85 / 90",
      "cooldown": "11",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nZyra will be locked out of actions for 0.15 seconds after casting Grasping Roots.\nEach  Vine Lasher will generate 2 stacks of  Conqueror and 1 stack of each of  Phase Rush and  Electrocute.",
      "blurb": "Active:  Zyra shoots a surge of vines in the target direction that deals magic damage to enemies hit and briefly  roots them.",
      "speed": "1150",
      "width": "140 / 560",
      "castTime": "0.25",
      "targetRange": "1100 / 1200",
      "maxCharges": -1
    },
    {
      "name": "Stranglethorns",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zyra summons a monstrous thicket at the target location that deals magic damage to enemies hit as it expands.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "180 / 265 / 350",
                "70% AP"
              ]
            }
          ]
        },
        {
          "description": "After 2 seconds, the thicket snaps upward to knock up enemies within for 1 second."
        },
        {
          "description": "Plants hit by the thicket become enraged, restoring 50% of their current health, increasing their maximum health by 50%, gaining 25% increased size and refreshing their duration while the thicket expands. Additionally they attack in a flurry, launching two shots per attack, dealing [ 150% damage per flurry. ][ 75% damage per shot. ]"
        }
      ],
      "cost": "100",
      "cooldown": "110 / 100 / 90",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "notes": "Plants grown during the 2 seconds prior to the displacement will also be enraged.\n Plants already grown before Stranglethorns is cast will have their duration refreshed if they are inside the area of effect.\nStranglethorns' buff on  Plants lasts 10 seconds, however the Plants normally die naturally after 8 seconds.",
      "blurb": "Active:  Zyra summons a monstrous thicket at the target location that deals magic damage to enemies hit as it expands.",
      "castTime": "0.25",
      "effectRadius": "560",
      "targetRange": "700",
      "maxCharges": -1
    }
  ],
  "lore": "Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks nothing of slaying them with flurries of deadly spines. Though her true purpose has not been revealed, Zyra wanders the world, indulging her most primal urges to colonize, and strangle all other life from it.",
  "faction": "ixtal",
  "releaseDate": "2012-07-24",
  "patchLastChanged": "14.24",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion