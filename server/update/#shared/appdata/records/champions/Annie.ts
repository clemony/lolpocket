// Updated Patch 25.19 - 09/27/2025 06:08:56 PM CDT

const champion: Champion = {
  "id": 1,
  "key": "Annie",
  "name": "Annie",
  "title": "the Dark Child",
  "abilities": [
    {
      "key": "P",
      "name": "Pyromania",
      "affects": "Self, Enemies",
      "blurb": "Innate:  Annie's spell-casts generate stacks. At maximum stacks, her next offensive spell will consume them to  stun the target.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Pyromania:</span> Annie generates a stack of Pyromania whenever she hits an enemy with Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Energized:</span> Annie empowers her next cast of Disintegrate, Incinerate, or Summon: Tibbers to consume all Pyromania stacks to stun enemies hit for 1.25 / 1.5 / 1.75 (based on level) seconds.</p>"
        },
        {
          "description": "Annie gains maximum stacks of Pyromania when the game starts and upon respawning. She will lose Energized and all Pyromania stacks upon death."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/p",
      "notes": "Annie does not lose any stacks upon entering or exiting  resurrection.\nStacks are gained even if the ability is blocked by  spell shield.\nPyromania's current stacks are represented by a counter under Annie's health bar, visible to all players. It lights up when the empowered effect is available.",
      "spellshieldable": "True",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Disintegrate",
      "affects": "Enemies",
      "blurb": "Active:  Annie hurls a fireball at the target enemy that deals magic damage.",
      "castTime": "0.25",
      "cooldown": "4",
      "cost": "60 / 65 / 70 / 75 / 80",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Annie hurls a fireball at the target enemy that deals magic damage.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 120 / 160 / 200 / 240"
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
          "description": "If this kills the target, Disintegrate's cooldown is reduced by 50% and its mana cost is refunded."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/q",
      "maxCharges": -1,
      "notes": "Disintegrate will also grant the cooldown reduction and mana cost refund if the target is dead upon the missile's arrival.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1400",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "625"
    },
    {
      "key": "W",
      "name": "Incinerate",
      "affects": "Enemies",
      "angle": "49.52°",
      "blurb": "Active:  Annie casts a blazing cone of fire, dealing magic damage to enemies hit.",
      "castTime": "0.25",
      "cooldown": "7",
      "cost": "70 / 75 / 80 / 85 / 90",
      "damageType": "Magic damage",
      "effectRadius": "600",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Annie releases fire in a cone in the target direction, dealing magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 115 / 160 / 205 / 250"
                },
                {
                  "unit": "% AP",
                  "values": "80"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/w",
      "maxCharges": -1,
      "notes": "Incinerate can hit targets behind Annie, provided their radius intersects with the cone hitbox.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "E",
      "name": "Molten Shield",
      "affects": "Self, Enemies",
      "blurb": "Active:  Annie grants herself or an allied champion—and  Tibbers—a  shield with a burst of  move speed.",
      "castTime": "none",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "cost": "60 / 65 / 70 / 75 / 80",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Annie grants herself or the target allied champion and Tibbers a shield for 3 seconds and 20% - 50% (based on level) bonus movement speed that decays over 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "60 / 95 / 130 / 165 / 200"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            }
          ]
        },
        {
          "description": "While Molten Shield is active, enemies that deal damage to it take magic damage. This may only occur once per enemy per cast for each active Molten Shield.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "25 / 35 / 45 / 55 / 65"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/e",
      "maxCharges": -1,
      "notes": "Molten Shield casts on ally if targeted or if very close to targeting them (within a range of 225); otherwise self casts.\nMolten Shield does not deal damage to  turrets when attacked by them.\nMolten Shield has a  forgiveness radius of 175 units.\nAttacks that are  dodged or  miss against the shielded target will not cause the shield to deal damage, while  blocked attacks still deal damage to the attacker.\nThe reaction damage does not trigger from  Teemo's  Noxious Trap and  Shaco's  Jack in the Box.(bug)",
      "resource": "Mana",
      "spellEffects": "aoe",
      "targeting": "Unit / Auto",
      "targetRange": "800"
    },
    {
      "key": "R",
      "name": "Summon: Tibbers",
      "affects": "Enemies / Tibbers",
      "blurb": "Active:  Annie summons her bear  Tibbers, dealing magic damage to enemies in the area.",
      "castTime": "0.25 / None",
      "cooldown": "130 / 115 / 100",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "250 /  350",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Annie gains magic penetration.</p>",
          "leveling": [
            {
              "attribute": "Magic Penetration",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "15 / 17.5 / 20"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Annie summons Tibbers to the target location in a burst of flame, dealing magic damage to enemies near him. Summon: Tibbers can be recast at any time while Tibbers is alive.</p>",
          "leveling": [
            {
              "attribute": "Initial Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 275 / 400"
                },
                {
                  "unit": "% AP",
                  "values": "75"
                }
              ]
            }
          ]
        },
        {
          "description": "Tibbers then remains on the field as a controllable pet for up to 45 seconds."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Annie directs Tibbers to the target location.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Summon:</span> Tibber's recast can be used while affected by cast-inhibiting crowd control. See Pets for more details about Tibbers.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/r",
      "maxCharges": -1,
      "notes": "Burst of flame deals  area damage and Tibbers' basic attacks deal  pet damage.\nTibbers will  blink back next to Annie if he gets too far away.\nRecasting Summon: Tibbers does not interrupt  Recall's channel.",
      "resource": "Mana",
      "spellEffects": "special",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "600"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "faction": "unaffiliated",
  "fullName": "Annie Hastur",
  "lore": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
  "patchLastChanged": "25.11",
  "positions": [
    "Middle"
  ],
  "price": {
    "blueEssence": 225,
    "rp": 260
  },
  "releaseDate": "2009-02-21",
  "resource": "Mana",
  "roles": [
    "Burst",
    "Mage",
    "Support"
  ],
  "stats": {
    "health": {
      "flat": 560,
      "perLevel": 96
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 418,
      "perLevel": 25
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 23,
      "perLevel": 4
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 50,
      "perLevel": 2.65
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 625
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
      "flat": 0.61,
      "perLevel": 1.36
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
      "flat": -0.104
    },
    "attackRange": {
      "flat": 625
    }
  }
}
export default champion