// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Champion } from '#shared/types'

  const champion: Champion = {
  "id": 119,
  "key": "Draven",
  "name": "Draven",
  "title": "The Glorious Executioner",
  "abilities": [
    {
      "key": "P",
      "name": "League of Draven",
      "affects": "Self",
      "blurb": "Innate:  Draven gains an Adoration  stack when he catches a  Spinning Axe or kills a  minion,  monster, or  turret. He loses Adoration stacks when he  dies.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> When Draven catches a Spinning Axe, kills a non-champion, or destroys a turret, he gains a stack of Adoration.</p>"
        },
        {
          "description": "When Draven kills an enemy champion, he consumes all of his Adoration stacks and gains 25 + (2 × stacks) bonus gold."
        },
        {
          "description": "Draven loses 50% of his Adoration stacks upon death."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/p",
      "notes": "Upon reaching 150 Adoration stacks, and every 100 stacks thereafter, as well as when he cashes at least 150 stacks in, Draven automatically sends a chat message notifying all players.\nA chat message will display to all players whenever:\nLeague of Draven grants over  300 gold.\nLeague of Draven gets reduced.\nNone of the parts of League of Draven require actually using a  Spinning Axe for a kill to get Adoration stacks, as well as to cash Adoration stacks.\nLeague of Draven will trigger upon receiving an assist on an enemy  executed by  Pyke's  Death from Below.[2]\nWhen receiving  gold from an ally  executing a minion through Shared Riches ( World Atlas,  Runic Compass), Draven is also awarded a  Strike stack.(bug)\nA Strike stack lasts up to 10 seconds or until Draven fails to catch an  axe or a nearby  minion dies without him killing it. Upon reacing 6 stacks, Draven consumes the stacks to gain 2 stacks of Adoration.\nOther sources of gaining Strike stacks were removed in patch V25.06.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Spinning Axe",
      "affects": "Self",
      "blurb": "Active:  Draven's next basic attack will throw an axe, dealing bonus physical damage.",
      "castTime": "none",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "cost": "45",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Draven starts spinning his axe, empowering his next basic attack within 5.8 seconds to deal bonus physical damage.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "40 / 45 / 50 / 55 / 60"
                },
                {
                  "tooltip": "Scaling per rank:\n75 / 85 / 95 / 105 / 115% bonus AD",
                  "unit": "% bonus AD",
                  "values": "75 - 115"
                }
              ]
            }
          ]
        },
        {
          "description": "Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by Draven's current movement. If Draven catches the axe, he gains Spinning Axe's empowered attack again."
        },
        {
          "description": "Draven can hold up to two Spinning Axes at once."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/q",
      "notes": "The landing location is determined by Draven's movement speed and direction at the time Spinning Axe hits the target. If Draven is actually moving, it will bounce directly into his path. Otherwise, it will bounce back towards his current location, either landing directly onto him or to his sides.\nSpinning Axe will place a visual cue on the ground where it will land. This visual cue is visible to both teams, although Draven himself will see a more prominent marker.\nRecasting Spinning Axe will refresh the  buff and add another axe if possible.\nThere is no limit to how many axes can be juggled at once, just the limit of 2 of them at a time in Draven's hands.\nDraven used to be able to catch (steal) an enemy Draven's axes. This event also prompted a few unique voice lines.\nSpinning Axes may optically bypass  Wind Wall and  Blade Whirl but they will be destroyed upon collision.  Unbreakable will not prevent the axe from bouncing off when  Braum is the target.\n Unbreakable will not prevent the axe from bouncing off when  Braum is not the target.\nThe axe will still bounce against parrying effects.\n Runaan's Hurricane's Wind's Fury does not interact with the effects of the axes.\nIf a Spinning Axe is readied during a basic attack wind-up, the effects will be applied to the fired attack.\nSpinning Axe attacks deal their total increased damage in a single instance of  basic damage.\nSpinning Axe may fail to properly bounce back if it hits  Zaahen during or shortly after  Cultivation of War's revive.(bug)\nThe empowered attack will not trigger against  structures.\nThe duration will refresh on-attack against them.\nSpinning Axe has an indicator that appears on the ground for Draven to stand on. Some skins have a unique indicator.\n\n\n\n Gladiator\n\n\n\n Soul Reaver\n\n\n\n Primetime\n\n\n\n Pool Party\n\n\n\n Beast Hunter\n\n\n\n Santa\n\n\n\n Mecha Kingdoms\n\n\n\n Ruined\n\n\n\n Debonair\n\n\n\n Fright Night\n\n\n\n La Ilusión",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "spellEffects": "basic",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Blood Rush",
      "affects": "Self",
      "blurb": "Active:  Draven briefly gains  bonus attack speed and a burst of  movement speed, also becoming  ghosted. Whenever a  Spinning Axe is caught, Blood Rush's cooldown will  reset.",
      "castTime": "none",
      "cooldown": "12",
      "cost": "40 / 35 / 30 / 25 / 20",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Draven enters an adrenaline rush, gaining bonus attack speed for 3 seconds as well as decaying bonus movement speed and ghosting for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 35 / 40 / 45 / 50"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
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
          "description": "Catching a Spinning Axe resets Blood Rush's cooldown."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/w",
      "notes": "Activating Blood Rush while the effect is already active will refresh the duration.",
      "resource": "Mana",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Stand Aside",
      "width": "260",
      "affects": "Enemies",
      "blurb": "Active:  Draven throws a fan of axes in a line in the target direction that deal physical damage to enemies hit,  knocking them aside and  slowing them.",
      "castTime": "0.25",
      "cooldown": "18 / 17 / 16 / 15 / 14",
      "cost": "70",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Draven throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit, knocking them aside, though not through terrain, and slowing them for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "75 / 110 / 145 / 180 / 215"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "20 / 25 / 30 / 35 / 40"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/e",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1400",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "1100"
    },
    {
      "key": "R",
      "name": "Whirling Death",
      "width": "320",
      "affects": "Enemies",
      "blurb": "Active:  Draven hurls forth two massive axes that deal physical damage to enemies hit. This  executes enemy  champions with  health that would be left within the current number of  League of Draven stacks.",
      "castTime": "0.5",
      "cooldown": "100 / 90 / 80",
      "cost": "100",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Draven hurls two massive axes in the target direction that briefly grant sight of their surroundings and deal physical damage to enemies hit. Enemy champions that are damaged to or while below a health threshold equal to the number of Adoration stacks are executed.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "200 / 300 / 400"
                },
                {
                  "tooltip": "Scaling per rank:\n110 / 130 / 150% bonus AD",
                  "unit": "% bonus AD",
                  "values": "110 - 150"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "400 / 600 / 800"
                },
                {
                  "tooltip": "Scaling per rank:\n220 / 260 / 300% bonus AD",
                  "unit": "% bonus AD",
                  "values": "220 - 300"
                }
              ]
            }
          ]
        },
        {
          "description": "Whirling Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy champion or the edge of the map."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Draven forces the axes to reverse direction, slowly coming to a stop before homing back to him, dealing the same damage to enemies hit.</p>"
        },
        {
          "description": "Whirling Death deals 100% - 40% (based on enemies hit) damage, resetting upon reversing direction.",
          "leveling": [
            {
              "attribute": "Minimum Physical Damage",
              "modifiers": [
                {
                  "values": "80 / 120 / 160"
                },
                {
                  "tooltip": "Scaling per rank:\n44 / 52 / 60% bonus AD",
                  "unit": "% bonus AD",
                  "values": "44 - 60"
                }
              ]
            },
            {
              "attribute": "Minimum Total Damage",
              "modifiers": [
                {
                  "values": "160 / 240 / 320"
                },
                {
                  "tooltip": "Scaling per rank:\n88 / 104 / 120% bonus AD",
                  "unit": "% bonus AD",
                  "values": "88 - 120"
                }
              ]
            }
          ]
        },
        {
          "description": "Enemies can be hit only once per pass."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Draven/ability-icon/r",
      "notes": "Whirling Death's projectile has an  icon on the mini-map while it is in flight. It can be seen by only Draven and his allies.\n Spell shield will block one instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2000",
      "spellEffects": "spellaoe",
      "spellshieldable": "Special",
      "targeting": "Direction / Auto",
      "targetRange": "Global"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 3
  },
  "patchLastChanged": "25.19",
  "positions": [
    "Bottom"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2012-06-06",
  "resource": "Mana",
  "roles": [
    "Marksman"
  ],
  "stats": {
    "hp": 675,
    "mp": 361,
    "movespeed": 330,
    "armor": 29,
    "magicResist": 30,
    "attackRange": 550,
    "hpRegen": 3.8,
    "mpRegen": 8.1,
    "attackDamage": 62,
    "attackSpeed": 0.7
  },
  "statsPerLevel": {
    "hp": 104,
    "mp": 39,
    "armor": 4.5,
    "magicResist": 1.3,
    "hpRegen": 0.7,
    "mpRegen": 0.7,
    "attackDamage": 3.6,
    "attackSpeed": 2.7
  }
}
export default champion