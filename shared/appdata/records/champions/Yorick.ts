// Updated Patch 25.17 - 09/12/2025 02:39:57 PM CDT

const champion: Champion = {
  "id": 83,
  "key": "Yorick",
  "name": "Yorick",
  "title": "Shepherd of Souls",
  "fullName": "Yorick Mori",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 650,
      "perLevel": 114
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 300,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 36,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 62,
      "perLevel": 5
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 125
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
      "flat": 0.33
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 55,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Shepherd of Souls",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Final Service:</span> Whenever Yorick uses Last Rites to score the killing blow on any enemy or damage an enemy champion or large monster, he raises a grave at their location. Additionally, a grave is passively raised for every 8th : 2nd (based on level) enemy that dies otherwise near him. Up to 4 graves can exist at once, lasting until Yorick exits the general area or dies, with the furthest one always being replaced by the newest upon raising one over the limit.</p>"
        },
        {
          "description": "Yorick can use Awakening and Mourning Mist's mark to raise 1 Mist Walker from each grave after a 1-second delay, consuming the graves in the process."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - The Cursed Horde:</span> Up to 4 Mist Walkers can be active at once near Yorick or near The Maiden, with the nearest one always being replaced by the newest upon raising one over the limit.</p>"
        },
        {
          "description": "See Pets for more details about Mist Walkers."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "Damaging a large monster or champion with  Last Rites will only spawn 1 grave, even if it kills them.",
      "blurb": "Innate- Final Service: Enemies that die near  Yorick will leave a grave, as well as those he kills or damages with  Last Rites. Yorick can use  Awakening and  Mourning Mist to turn all graves into Mist Walkers that assist him in combat.",
      "effectRadius": "1000 / 2500"
    },
    {
      "name": "Last Rites",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yorick empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range, deal bonus physical damage, and heal him. The heal is reduced by 50% against non-champions.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                "30 / 50 / 70 / 90 / 110",
                "50% AD"
              ]
            },
            {
              "attribute": "Heal",
              "modifiers": [
                "10 / 13.41 / 16.82 / 20.24 / 23.65 / 27.06 / 30.47 / 33.88 / 37.29 / 40.71 / 44.12 / 47.53 / 50.94 / 54.35 / 57.76 / 61.18 / 64.59 / 68",
                "6 / 7 / 8 / 9 / 10% of his missing health"
              ]
            },
            {
              "attribute": "Non-Champion Heal",
              "modifiers": [
                "5 / 6.71 / 8.41 / 10.12 / 11.82 / 13.53 / 15.24 / 16.94 / 18.65 / 20.35 / 22.06 / 23.76 / 25.47 / 27.18 / 28.88 / 30.59 / 32.29 / 34",
                "3 / 3.5 / 4 / 4.5 / 5% of his missing health"
              ]
            }
          ]
        },
        {
          "description": "While there are at least 3 graves nearby and Last Rites is active or on cooldown, Yorick can cast Awakening."
        },
        {
          "description": "Last Rites resets Yorick's basic attack timer."
        }
      ],
      "cost": "20",
      "cooldown": "6 / 5.5 / 5 / 4.5 / 4",
      "targeting": "Auto",
      "affects": "Self, Enemies",
      "spellshieldable": "False",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "spell",
      "notes": "No additional notes.",
      "blurb": "Active:  Yorick's next basic attack within a few seconds will gain  bonus range, deal bonus physical damage, and  heal him based on his missing health.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Awakening",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yorick exhumes a Mist Walker under his command from each nearby grave.</p>"
        }
      ],
      "cost": "20",
      "cooldown": "6 / 5.5 / 5 / 4.5 / 4",
      "targeting": "Proximity",
      "affects": "Self",
      "notes": "Awakening counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nMist Walkers update their statistics correspondingly to Yorick's  during the periodic stat update, with the exception of their maximum health.\nAwakening cannot be cast without enough graves in range.",
      "blurb": "Active:  Yorick summons Mist Walkers from the graves around him.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Dark Procession",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yorick summons a ring of spirits around the target location that arises after a 0.75-second delay, knocking aside enemies hit over 0.25 seconds, though not through terrain. Within 210-units, they are pulled inside; otherwise they are pushed away. The ring remains for 4 seconds as impassible terrain against enemies, granting sight inside the ring.</p>"
        },
        {
          "description": "Dark Procession can only be targeted by enemy champion basic attacks and turrets. The wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.",
          "leveling": [
            {
              "attribute": "Wall Health",
              "modifiers": [
                "2 / 2 / 3 / 3 / 4"
              ]
            }
          ]
        }
      ],
      "cost": "70",
      "cooldown": "20 / 18 / 16 / 14 / 12",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "false",
      "resource": "Mana",
      "notes": "Dark Procession has a  turret prioritization value of 6, equal to that of  super minions.\nYorick's other  pets each have a lower prioritization value, allowing him to delay the turret from targeting the  The Maiden or a Mist Walker for one attack.\nDark Procession deals 0  proc  true damage to enemies it knocks aside, which triggers in-combat effects such as drawing turret and monster aggression,  Sudden Impact or applying  Elixir of Sorcery.\nThe perimeter is made up of 18 units with 100  pathing radius and 20  gameplay radius each.\nYorick marks any enemy champion within repeatedly while the cage persists in order to gain assist credit, lasting for the standard credit timer.",
      "blurb": "Active:  Yorick summons a destructible ring of spirits at the target location that  knocks aside enemies hit. It remains as terrain against enemies for a few seconds,",
      "castTime": "none",
      "effectRadius": "225 / 200",
      "targetRange": "600",
      "maxCharges": -1
    },
    {
      "name": "Mourning Mist",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yorick hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit, down to a minimum threshold against minions, and capped against monsters. Enemy champions and monsters hit are slowed by 30% for 1.5 seconds and marked as Cursed for 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "6 / 6.5 / 7 / 7.5 / 8%  of target's maximum health",
                "3% per 100 AP"
              ]
            },
            {
              "attribute": "Minimum Minion Damage",
              "modifiers": [
                "70 / 105 / 140 / 175 / 210",
                "100% AP"
              ]
            },
            {
              "attribute": "Capped Monster Damage",
              "modifiers": [
                "50 / 75 / 100 / 125 / 150",
                "100% AP"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Cursed:</span> The target is revealed, has reduced armor, and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.</p>\nYorick, Mist Walkers and the The Maiden gain bonus movement speed while facing nearby Cursed enemies. Mist Walkers will leap to nearby Cursed enemy champions and large monsters, attacking them upon arrival.",
          "leveling": [
            {
              "attribute": "Armor Reduction",
              "modifiers": [
                "13 / 16 / 19 / 22 / 25% of target's armor"
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                "18 / 21 / 24 / 27 / 30%"
              ]
            }
          ]
        }
      ],
      "cost": "50 / 55 / 60 / 65 / 70",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "Yorick will snap his facing direction towards the target location at the start of the cast time.\nThe speed boost toward marked targetes does not require  sight of them.\nThe Mist Walkers do not  leap if they are  immobilized or  grounded, or if the marked target is  untargetable.",
      "blurb": "Active:  Yorick hurls a globule of Black Mist that splashes at the target location dealing magic damage to enemies. Enemy  champions and  monsters hit are also shortly  slowed, and marked Cursed for a few seconds.",
      "castTime": "0.25",
      "effectRadius": "1500",
      "targetRange": "700",
      "maxCharges": -1
    },
    {
      "name": "Eulogy of the Isles",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yorick summons the Maiden of the Mist over 1.5 seconds, along with a number of Mist Walkers surrounding her at the target location, which remain on the battlefield until she or Yorick dies. Eulogy of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.</p>",
          "leveling": [
            {
              "attribute": "Mist Walkers",
              "modifiers": [
                "2 / 3 / 4"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Yorick sets the Maiden free, allowing her to push the nearest lane until she dies.</p>"
        },
        {
          "description": "See Pets for more details about The Maiden of the Mist."
        }
      ],
      "cost": "100",
      "cooldown": "160 / 130 / 100",
      "targeting": "Location",
      "affects": "Self",
      "resource": "Mana",
      "notes": "See the Pets section below for more details about The Maiden of the Mist and Mist Walkers.\nThe extra Mist Walkers spawn 250 units from the Maiden summon location.\nThe Maiden updates her stats when Yorick's stats change, and as Eulogy of the Isles is ranked up.\nWhen Yorick dies, The Maiden rapidly loses portions of her maximum health over 3 seconds until she dies.\nThe loss of maximum health occurs in 0.6-second intervals, in which she loses 20% on the first, 25% on the second, 33.3% on the third, 50% on the fourth, and 100% on the fifth.\nYorick will snap his facing direction towards the target location at the start of the cast time.",
      "blurb": "Active:  Yorick summons the  Maiden of the Mist and a few Mist Walkers at the target location. The Maiden will automatically raise Mist Walkers from dead enemies, and mark her attack target with Touch of the Maiden.",
      "castTime": "0.5",
      "targetRange": "600",
      "maxCharges": -1
    }
  ],
  "lore": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking wraiths that he gathers to him. Yorick's monstrous actions belie his noble purpose: to free his home from the curse of the Ruination.",
  "faction": "shadow-isles",
  "releaseDate": "2011-06-22",
  "patchLastChanged": "25.13",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion