// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  "id": 50,
  "key": "Swain",
  "name": "Swain",
  "title": "the Noxian Grand General",
  "abilities": [
    {
      "key": "P",
      "name": "Ravenous Flock",
      "affects": "Self, Enemies",
      "blurb": "Innate: Enemy champions that  die will leave behind a Soul Fragment for some time.  Swain will collect nearby Soul Fragments, as well as with  Vision of Empire and  Nevermove.",
      "effectRadius": "1100 /  250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Enemy champions that die will leave behind a Soul Fragment for 16 seconds. Swain's ravens will collect nearby dropped Soul Fragments, as well as rip the Soul Fragments out of champions hit by Vision of Empire or Nevermove's recast. Once a raven has collected a Soul Fragment, it will fly towards Swain to grant it to him, while also granting sight of its surroundings during the travel.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\">Soul Fragment:</span> For each stack, Swain gains 15 bonus health permanently. Upon claiming the fragment, he will heal for 3% - 6% (based on level) of his maximum health.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/p",
      "notes": "Dropped Soul Fragments can be collected after a 1-second delay.\nThe ravens will only be seen by enemies if they have  vision of Swain.",
      "projectile": "FALSE",
      "speed": "1200",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Death's Hand",
      "affects": "Enemies",
      "angle": "32°",
      "blurb": "Active:  Swain unleashes five bolts of eldritch power over 0.264 seconds in a cone in the target direction that deal magic damage to enemies hit. Subsequent bolts against an enemy deal bonus magic damage.",
      "castTime": "0.25",
      "cooldown": "7 / 6 / 5 / 4 / 3",
      "cost": "40 / 45 / 50 / 55 / 60",
      "damageType": "Magic damage",
      "effectRadius": "725",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain unleashes five bolts of eldritch power over 0.264 seconds in a cone in the target direction that deal magic damage to enemies hit. Subsequent bolts against an enemy deal 25% bonus damage.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "unit": "% AP",
                  "values": "45"
                }
              ]
            },
            {
              "attribute": "Bonus Damage Per Bolt",
              "modifiers": [
                {
                  "values": "15 / 22.5 / 30 / 37.5 / 45"
                },
                {
                  "unit": "% AP",
                  "values": "11.25"
                }
              ]
            },
            {
              "attribute": "Total Damage",
              "modifiers": [
                {
                  "values": "120 / 180 / 240 / 300 / 360"
                },
                {
                  "unit": "% AP",
                  "values": "90"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/q",
      "maxCharges": -1,
      "notes": "Death's Hand will still cast and deal damage if Swain dies during the cast time.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe total damage to a single target will be split evenly among each bolt that hits, meaning that hitting with more bolts will deal less damage per hit (but more overall damage).\n Spell shield will block all bolts.",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Vision of Empire",
      "affects": "Enemies",
      "blurb": "Active:  Swain summons a demonic eye at the target location that explodes after a brief moment, dealing magic damage and  slowing enemies within for a short time.",
      "castTime": "0.25",
      "cooldown": "22 / 21 / 20 / 19 / 18",
      "cost": "60 / 65 / 70 / 75 / 80",
      "damageType": "Magic damage",
      "effectRadius": "325",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain summons a demonic eye at the target location that grants sight of the area for 2 seconds and explodes after 1.5 seconds, dealing magic damage to enemies within, halved against minions, and slowing them for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 105 / 140 / 175 / 210"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            },
            {
              "attribute": "Minion Damage",
              "modifiers": [
                {
                  "values": "35 / 52.5 / 70 / 87.5 / 105"
                },
                {
                  "unit": "% AP",
                  "values": "30"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "50 / 55 / 60 / 65 / 70"
                }
              ]
            }
          ]
        },
        {
          "description": "Enemy champions hit are also revealed for 6 seconds and have a Soul Fragment collected from them."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/w",
      "maxCharges": -1,
      "notes": "Enemy  champions protected by a  spell shield do not have a Soul Fragment collected from them but are  revealed anyway.\nVision of Empire will grant Soul Fragments from hitting  clones.\nSwain will not receive the Soul Fragments if Vision of Empire hits enemy champions while he is dead.\nVision of Empire is visible and audible to enemies through the fog of war.\nHitting an enemy champion with Vision of Empire collects nearby Soul Fragments.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "Special",
      "targeting": "Location",
      "targetRange": "5500 / 6000 / 6500 / 7000 / 7500"
    },
    {
      "key": "E",
      "name": "Nevermove",
      "width": "180",
      "affects": "Enemies",
      "blurb": "Active:  Swain launches a demonic wave in the target direction.",
      "castTime": "0.25",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "cost": "60 / 65 / 70 / 75 / 80",
      "damageType": "Magic damage",
      "effectRadius": "100 / Global",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain launches a demonic wave in the target direction.</p>"
        },
        {
          "description": "At maximum range, the wave homes back to Swain and detonates upon the first enemy hit, dealing magic damage to nearby enemies and rooting them for 1.5 seconds, during which they are revealed. Nevermove can be recast while champions hit are rooted.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 120 / 160 / 200 / 240"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Swain pulls the rooted champions over 290 units and collects a Soul Fragment from each of them. If the targets would be brought past Swain, they are instead knocked back the excess distance.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/e",
      "maxCharges": -1,
      "notes": "Nevermove's missiles have their speed update to accelerate at specific times by the server. The client applies these speed increases after additional specified delays, while the hitbox behaviour itself only uses the timings noted above.\nNevermove's recast can be used during the cast time of other spells.\n Spell shield will block either the detonation on the first cast or the pull from the recast.\nIf the recast is blocked, the target will also prevent a Soul Fragment being collected from them.\nIf the root is not applied to or is removed from all champions, the recast does not become available.\nThe pull will interrupt  channels at the very beginning, but does not keep the target stunned for the rest of the movement.\n Channels can be started successfully during the pull, provided the previous crowd control does not prevent them still.\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1125 : 1800 (based on seconds) / 2000 : 2800 (based on seconds)",
      "spellEffects": "Area of effect",
      "spellshieldable": "special",
      "targeting": "Direction / Auto",
      "targetRange": "850"
    },
    {
      "key": "R",
      "name": "Demonic Ascension",
      "affects": "Self, Enemies",
      "blurb": "Active:  Swain frees the demon within, gaining Demonic Ascension and generating Demonic Energy. Demonic Ascension is maintained with Demonic Energy that gradually decays over time.",
      "castTime": "0.5",
      "cooldown": "120",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "650",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain frees the demon within himself, gaining Demonic Ascension and generating 50 Demonic Energy. Demonic Ascension is maintained with Demonic Energy, which decays by 5 every 0.5 seconds, increased to 7.5 after 5 seconds have elapsed, and is lost once all Demonic Energy is depleted to 0. Swain generates 10 Demonic Energy every 0.5 seconds while draining from at least one enemy champion, and fully restores it to the maximum of 50 upon scoring a champion takedown.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Demonic Ascension:</span> Swain is ghosted and drains the lifeforce of nearby enemies, both dealing magic damage and healing himself every 0.5 seconds per target affected. The heal is reduced by 90% against minions and monsters.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage per Tick",
              "modifiers": [
                {
                  "values": "7.5 / 12.5 / 17.5"
                },
                {
                  "unit": "% AP",
                  "values": "2.5"
                }
              ]
            },
            {
              "attribute": "Heal per Tick",
              "modifiers": [
                {
                  "values": "7.5 / 15 / 22.5"
                },
                {
                  "unit": "% AP",
                  "values": "2.5"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "0.75"
                }
              ]
            },
            {
              "attribute": "Reduced Heal per Tick",
              "modifiers": [
                {
                  "values": "0.75 / 1.5 / 2.25"
                },
                {
                  "unit": "% AP",
                  "values": "0.25"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "0.08"
                }
              ]
            }
          ]
        },
        {
          "description": "After 2 seconds, Swain gains the ability to cast Demonflare, up to 100 times, and does so automatically when Demonic Ascension expires."
        },
        {
          "description": "The targets do not have to be visible to be hit by this ability."
        },
        {
          "description": "Swain can move during Demonic Ascension's cast time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/r",
      "maxCharges": -1,
      "notes": "Demonflare will not automatically cast at the end of Demonic Ascension if it occurs due to Swain's death.\nFile:Swain - R",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "aoedot",
      "spellshieldable": "False",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Demonflare",
      "width": "60",
      "affects": "Enemies",
      "blurb": "Active: Swain emits a nova of soulfire that deals magic damage to nearby enemies and applies a  slow that decays over a brief moment.",
      "castTime": "0.25",
      "cooldown": "120",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "675",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain releases a nova of soulfire that deals magic damage to nearby enemies and slows them by 75%, decaying over 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "Swain can move during Demonflare's cast time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/r",
      "maxCharges": -1,
      "notes": "Demon Flare counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDemon Flare passes through champions. Effects like  Yasuo's  Wind Wall and  Braum's  Unbreakable will block the portion of the nova they intercept.\nSwain can move during Demonflare's cast time.\nDemonflare will fire from wherever Swain is at the end of the cast time.",
      "projectile": "TRUE",
      "speed": "3000",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "faction": "noxus",
  "fullName": "Jericho Swain",
  "lore": "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within.",
  "patchLastChanged": "25.12",
  "positions": [
    "Bottom",
    "Middle",
    "Support"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2010-10-05",
  "resource": "Mana",
  "roles": [
    "Battlemage",
    "Mage",
    "Support"
  ],
  "stats": {
    "health": {
      "flat": 595,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 3,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 400,
      "perLevel": 29
    },
    "manaRegen": {
      "flat": 10,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 25,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 31,
      "perLevel": 1.55
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 2.7
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 525
    },
    "selectionRadius": {
      "flat": 100
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
      "flat": 0.625,
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
      "flat": -0.16
    },
    "attackRange": {
      "flat": 525
    }
  }
}
export default champion