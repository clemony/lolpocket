// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  "id": 45,
  "key": "Veigar",
  "name": "Veigar",
  "title": "the Tiny Master of Evil",
  "abilities": [
    {
      "key": "P",
      "name": "Phenomenal Evil Power",
      "affects": "Self",
      "blurb": "Innate:  Veigar generates a  stack of Phenomenal Evil for each enemy  champion hit by his  abilities, and more stacks when he scores an enemy champion  takedown.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Veigar generates a stack of Phenomenal Evil for each enemy champion hit by his abilities, and 5 stacks whenever he scores an enemy champion takedown.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Phenomenal Evil:</span> For each stack, Veigar gains 1 ability power.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Veigar/ability-icon/p",
      "notes": "The two effects stack, granting 6 stacks for each enemy champion taken down by an ability, 7 with  Baleful Strike.\nVeigar's abilities do not have to deal damage nor affect their targets to grant a stack.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Baleful Strike",
      "width": "140",
      "affects": "Enemies",
      "blurb": "Active:  Veigar blasts a dark bolt in the target direction that deals magic damage to the first two enemies hit.",
      "castTime": "0.25",
      "cooldown": "6 / 5.5 / 5 / 4.5 / 4",
      "cost": "30 / 35 / 40 / 45 / 50",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Veigar blasts a dark bolt in the target direction that deals magic damage to the first two enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 120 / 160 / 200 / 240"
                },
                {
                  "tooltip": "Scaling per rank:\n50 / 55 / 60 / 65 / 70% AP",
                  "unit": "% AP",
                  "values": "50 - 70"
                }
              ]
            }
          ]
        },
        {
          "description": "If this kills an enemy, it generates 1 stack of Phenomenal Evil, tripled against large minions and monsters."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Veigar/ability-icon/q",
      "maxCharges": -1,
      "notes": "Killing two enemy champions with Baleful Strike grants +14 AP.\nBaleful Strike will only grant stacks of  Phenomenal Evil from its bolt, and not any additional effect that would kill other units from the same cast.\nThe stacks are added immediately on enemy kill (on next game tick).\nIf the first target was killed, the second hit may deal 1 damage more on enemies further along the missile's flight path.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2200",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "1050 /  990"
    },
    {
      "key": "W",
      "name": "Dark Matter",
      "affects": "Enemies",
      "blurb": "Active:  Veigar casts down a mass of dark matter that strikes the target location after a brief delay, dealing magic damage to enemies hit.",
      "castTime": "0.25",
      "cooldown": "0",
      "cost": "60 / 65 / 70 / 75 / 80",
      "damageType": "Magic damage",
      "effectRadius": "240",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Veigar casts down a mass of dark matter that strikes the target location after a 1.221 seconds delay, dealing magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "85 / 140 / 195 / 250 / 305"
                },
                {
                  "tooltip": "Scaling per rank:\n60 / 70 / 80 / 90 / 100% AP",
                  "unit": "% AP",
                  "values": "60 - 100"
                }
              ]
            }
          ]
        },
        {
          "description": "Dark Matter's cooldown is reduced based on stacks of Phenomenal Evil."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Veigar/ability-icon/w",
      "maxCharges": -1,
      "notes": "The delay starts at the beginning of the cast time.\nIf Veigar dies during the cast time, Dark Matter will still successfully fall from the sky.\nDark Matter grants  sight of the area during the delay.",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "950"
    },
    {
      "key": "E",
      "name": "Event Horizon",
      "affects": "Enemies",
      "blurb": "Active: After a brief delay,  Veigar erects a cage at the target location that lasts for a short time. Enemies that touch the cage edges are briefly  knocked down and  stunned.",
      "castTime": "0.25",
      "cooldown": "20 / 18.5 / 17 / 15.5 / 14",
      "cost": "70 / 75 / 80 / 85 / 90",
      "effectRadius": "411 / 290 / 390",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Veigar forms a cage at the target location that erects after a 0.5 second delay, remaining there for 3 seconds. Enemies that collide with the edges of the cage are knocked down and stunned for a duration.</p>",
          "leveling": [
            {
              "attribute": "Stun Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1.5 / 1.75 / 2 / 2.25 / 2.5"
                }
              ]
            }
          ]
        },
        {
          "description": "Event Horizon can affect enemies only once per cast."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Veigar/ability-icon/e",
      "maxCharges": -1,
      "notes": "The stun and the knockdown are applied to units that are within a certain distance interval from the center of the area of effect.\nAn enemy can be affected by Event Horizon only once every 4.5 seconds.\nUnits that negate the stun will still count as passing through the edges. They will become immune to the effects of Event Horizon for the period even after negating them.\n Displacement immune enemies will still be  stunned, but not  knocked down.\nVeigar marks enemy  champions in a 390-radius from the zone's center in order to gain kill/assist credit, lasting for the standard credit timer.\nEvent Horizon may fail to catch enemies that move very quickly through the boundary distance.\nMore modern area checks such as  Thresh's  The Box or  Caitlyn's  Yordle Snap Trap do not have this issue.",
      "resource": "Mana",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "725"
    },
    {
      "key": "R",
      "name": "Primordial Burst",
      "affects": "Enemies",
      "blurb": "Active:  Veigar sends a primordial burst at the target enemy champion that deals magic damage based on their missing health.",
      "castTime": "0.25",
      "cooldown": "100 / 80 / 60",
      "cost": "100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Veigar sends a primordial burst at the target enemy champion that deals magic damage, increased by 0% - 100% (based on target's missing health).</p>",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "175 / 250 / 325"
                },
                {
                  "tooltip": "Scaling per rank:\n65 / 70 / 75% AP",
                  "unit": "% AP",
                  "values": "65 - 75"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "350 / 500 / 650"
                },
                {
                  "tooltip": "Scaling per rank:\n130 / 140 / 150% AP",
                  "unit": "% AP",
                  "values": "130 - 150"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Veigar/ability-icon/r",
      "maxCharges": -1,
      "notes": "If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "TRUE",
      "resource": "Mana",
      "spellEffects": "Single target",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "650"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "faction": "bandle-city",
  "lore": "An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been hidden away for thousands of years. Now a stubborn creature with an endless fascination for the mysteries of the universe, Veigar is often underestimated by others—but even though he believes himself truly evil, he possesses an inner morality that leads some to question his deeper motivations.",
  "patchLastChanged": "25.09",
  "positions": [
    "Middle",
    "Support"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2009-07-24",
  "resource": "Mana",
  "roles": [
    "Burst",
    "Mage"
  ],
  "stats": {
    "health": {
      "flat": 580,
      "perLevel": 108
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 490,
      "perLevel": 26
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 18,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 52,
      "perLevel": 2.7
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 525
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
      "flat": 0.625,
      "perLevel": 2.24
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
      "flat": -0.109
    },
    "attackRange": {
      "flat": 550
    }
  }
}
export default champion