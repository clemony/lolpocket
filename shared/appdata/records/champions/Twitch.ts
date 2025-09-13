// Updated Patch 25.17 - 09/12/2025 02:39:57 PM CDT

const champion: Champion = {
  "id": 29,
  "key": "Twitch",
  "name": "Twitch",
  "title": "the Plague Rat",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 3.75,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 300,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 7.25,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 27,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 59,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 575
    },
    "selectionRadius": {
      "flat": 135
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
      "flat": 0.679,
      "perLevel": 3.38
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
      "flat": -0.098
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Bottom",
    "Support"
  ],
  "roles": [
    "Assassin",
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 0,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Deadly Venom",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Twitch's basic attacks on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Deadly Venom:</span> For each stack, the target is dealt[ 1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, ][ 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, ]for a maximum of[ 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick. ][ 36 / 72 / 108 / 144 / 180 (based on level) (+ 108% AP) total true damage over the duration. ]This effect is considered a poison.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Enemies",
      "spellshieldable": "False",
      "damageType": "True damage",
      "spellEffects": "default",
      "notes": "The first 5 stacks on a target are indicated each by a small mark around them, while a target affected by the maximum stacks of 6 is indicated by a single large mark above them instead.\nDeadly Venom does not affect  structures.\nBeing applied on-hit, Deadly Venom stacks will still be applied if the attack was  parried or  blocked, but not if  dodged and/or missed if Twitch is  blinded.",
      "blurb": "Innate:  Twitch's  basic attacks  on-hit apply  stacks of Deadly Venom for a few seconds, which stacks up to a cap."
    },
    {
      "name": "Ambush",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> After a 1-second delay, Twitch becomes camouflaged for a duration. Attacking or casting Venom Cask or Contaminate ends Ambush immediately.</p>",
          "leveling": [
            {
              "attribute": "Stealth Duration",
              "modifiers": [
                "10 / 11 / 12 / 13 / 14 seconds"
              ]
            }
          ]
        },
        {
          "description": "During this time, Twitch gains 10% bonus movement speed, increased to 30% while facing enemy champions within a 1000-unit radius who cannot see him."
        },
        {
          "description": "Upon breaking stealth, Twitch gains bonus attack speed for 6 seconds.",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                "45 / 50 / 55 / 60 / 65%"
              ]
            }
          ]
        },
        {
          "description": "When an enemy champion dies while afflicted with Deadly Venom, Ambush's cooldown is reset."
        }
      ],
      "cost": "40",
      "cooldown": "16",
      "targeting": "Auto",
      "affects": "Self",
      "resource": "Mana",
      "notes": "Entering stealth cancels Twitch's current basic attack.\nAmbush follows the same rules as stealth but he can still perform actions normally before entering  camouflage. Activating  Recall during the 1-second delay allows him to  channel it while stealthed.\nIf Twitch enters  stasis during the delay, he will gain the  camouflage after the stasis ends.\nUsing a basic attack breaks the stealth at the start of the attack windup.",
      "blurb": "Active:  Twitch becomes  camouflaged for some time, gaining  bonus movement speed, increased while facing enemy  champions that cannot see him.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Venom Cask",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twitch hurls a cask of venom that explodes at the target location, applying Deadly Venom to enemies hit and granting sight of the area.</p>"
        },
        {
          "description": "The area then becomes contaminated for 3 seconds, applying a Deadly Venom stack each second to enemies within and slowing them.",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                "30 / 35 / 40 / 45 / 50%",
                "6% per 100 AP"
              ]
            }
          ]
        }
      ],
      "cost": "70",
      "cooldown": "13 / 12 / 11 / 10 / 9",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "projectile": "TRUE",
      "notes": "Venom Cask can apply a maximum of 4  Deadly Venom stacks per enemy per cast.\nVenom Cask's missile will fail to fire if Twitch is  suppressed during the cast time.(note)",
      "blurb": "Active:  Twitch tosses a cask that explodes at the target location, inflicting  Deadly Venom to enemies hit.",
      "speed": "1400",
      "castTime": "0.25",
      "effectRadius": "300",
      "targetRange": "950",
      "maxCharges": -1
    },
    {
      "name": "Contaminate",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twitch sends out a lethal toxin to each nearby enemy afflicted by Deadly Venom, dealing them physical damage.</p>",
          "leveling": [
            {
              "attribute": "Base Physical Damage",
              "modifiers": [
                "20 / 30 / 40 / 50 / 60"
              ]
            }
          ]
        },
        {
          "description": "Contaminate deals additional physical damage and 35% AP magic damage for each stack of Deadly Venom on the target.",
          "leveling": [
            {
              "attribute": "Physical Damage Per Stack",
              "modifiers": [
                "15 / 20 / 25 / 30 / 35",
                "35% bonus AD"
              ]
            },
            {
              "attribute": "Minimum Mixed Damage",
              "modifiers": [
                "35 / 50 / 65 / 80 / 95",
                "35% bonus AD",
                "35% AP"
              ]
            },
            {
              "attribute": "Maximum Mixed Damage",
              "modifiers": [
                "110 / 150 / 190 / 230 / 270",
                "210% bonus AD",
                "210% AP"
              ]
            }
          ]
        },
        {
          "description": "A nearby enemy with Deadly Venom is required to cast this ability. The target does not have to be visible to be targeted by this ability."
        }
      ],
      "cost": "50 / 60 / 70 / 80 / 90",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "targeting": "Proximity",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "Aoe",
      "projectile": "FALSE",
      "notes": "Contaminate will deal the additional damage to targets based on the number of  Deadly Venom stacks they had at the start of the cast time.\nTwitch is given a range indicator for Contaminate's radius upon infecting an enemy champion with  Deadly Venom (actual range is slightly larger than shown by the indicator).\nContaminate will not deal damage to enemies that are not within range of the ability before the cast time completes.\nIf the target moves out of range after the cast time, they are still dealt the damage.",
      "blurb": "Active:  Twitch spreads a toxin to nearby enemies afflicted with  Deadly Venom, dealing physical damage. This deals additional physical and magic damage based on stacks of  Deadly Venom.",
      "castTime": "0.25",
      "effectRadius": "1200",
      "maxCharges": -1
    },
    {
      "name": "Spray and Pray",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twitch gains bonus attack damage and 300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Damage",
              "modifiers": [
                "30 / 45 / 60"
              ]
            }
          ]
        },
        {
          "description": "The bolts deal 100% - 60% (based on enemies hit) of the triggering attack's damage, apply on-hit effects, and can critically strike for (175% + 40%) damage."
        }
      ],
      "cost": "100",
      "cooldown": "90",
      "targeting": "Auto",
      "affects": "Self",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "basic",
      "projectile": "TRUE",
      "notes": "The extra distance that the bolts travel scales with bonus attack range.\nSpray and Pray allows Twitch to outrange  turrets by 50 units, allowing him to hit them without them returning fire.\nTwitch targets his line attack at his target's location at the start of his attack windup.\nThe bolts reach targets at a delay, composed of Twitch's windup time and distance the bolt has to travel at finite speed. Even the primary target can dodge the attack if they are moving quickly enough.\nThe bolt projectiles will naturally pass through terrain and enemy structures (the latter will be damaged by bolts even if they are not directly targeted).\nIf Twitch is  blinded before winding up the attack, the hits will miss against all targets.\n Runaan's Hurricane's Wind's Fury interacts with Spray and Pray's  bonus attack range but not with the modified missile effect (the secondary bolts will not have pass-through effects).\nWhenever the bolts penetrate a target, a small elongated cloud appears at the location, which's VFX and SFX can be seen and heard inside the Fog of War.\nThe bolts' travel distance scales with the full value of Twitch's  attack range increases such as  Rapid Firecannon, but not with size increases (which only increase his effective attack range, thereby the target range).\n(Outdated as of V10.13, now can hit everything with edge range, except for turrets) The  center of a unit must be within the maximum travel distance of the bolt missile, and in front of the spawn location (Twitch's  center) for the bolt to be able to hit them.\nOther than this condition, the bolt missile has to only touch (pass within its half width of 60 units) the  edge of the unit's radius.\nThis is standard behaviour for linear skillshots.\n Malignance's Hatefog is special cased to work with Spray and Pray.\n Axiom Arcanist amplifies bolt damage as  area of effect.",
      "blurb": "Active:  Twitch gains  bonus attack damage and  bonus attack range for a few seconds, during which his basic attacks are replaced with bolts that deal the attack's damage to all enemies in a line.",
      "speed": "5000",
      "width": "120",
      "castTime": "none",
      "targetRange": "Twitch's  attack range",
      "maxCharges": -1
    }
  ],
  "lore": "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really are. Always a sneaky sneak, when he's not rooting around in the Sump, he's digging deep into other people's garbage for discarded treasures… and perhaps a moldy sandwich.",
  "faction": "zaun",
  "releaseDate": "2009-05-01",
  "patchLastChanged": "25.13",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion