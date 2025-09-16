// Updated Patch 25.17 - 09/14/2025 05:55:11 PM CDT

const champion: Champion = {
  "id": 1,
  "key": "Annie",
  "name": "Annie",
  "title": "the Dark Child",
  "fullName": "Annie Hastur",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
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
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Pyromania",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/p",
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
      "targeting": "Passive",
      "affects": "Self, Enemies",
      "spellshieldable": "True",
      "notes": "Annie does not lose any stacks upon entering or exiting  resurrection.\nStacks are gained even if the ability is blocked by  spell shield.\nPyromania's current stacks are represented by a counter under Annie's health bar, visible to all players. It lights up when the empowered effect is available.",
      "blurb": "Innate:  Annie's spell-casts generate stacks. At maximum stacks, her next offensive spell will consume them to  stun the target."
    },
    {
      "name": "Disintegrate",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/q",
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
                  "values": "80",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "If this kills the target, Disintegrate's cooldown is reduced by 50% and its mana cost is refunded."
        }
      ],
      "cost": "60 / 65 / 70 / 75 / 80",
      "cooldown": "4",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "projectile": "TRUE",
      "notes": "Disintegrate will also grant the cooldown reduction and mana cost refund if the target is dead upon the missile's arrival.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "blurb": "Active:  Annie hurls a fireball at the target enemy that deals magic damage.",
      "speed": "1400",
      "castTime": "0.25",
      "targetRange": "625",
      "maxCharges": -1
    },
    {
      "name": "Incinerate",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/w",
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
                  "values": "80",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "70 / 75 / 80 / 85 / 90",
      "cooldown": "7",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "FALSE",
      "notes": "Incinerate can hit targets behind Annie, provided their radius intersects with the cone hitbox.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "blurb": "Active:  Annie casts a blazing cone of fire, dealing magic damage to enemies hit.",
      "angle": "49.52°",
      "castTime": "0.25",
      "effectRadius": "600",
      "maxCharges": -1
    },
    {
      "name": "Molten Shield",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/e",
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
                  "values": "40",
                  "unit": "% AP"
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
                  "values": "40",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "60 / 65 / 70 / 75 / 80",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "targeting": "Unit / Auto",
      "affects": "Self, Enemies",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "notes": "Molten Shield casts on ally if targeted or if very close to targeting them (within a range of 225); otherwise self casts.\nMolten Shield does not deal damage to  turrets when attacked by them.\nMolten Shield has a  forgiveness radius of 175 units.\nAttacks that are  dodged or  miss against the shielded target will not cause the shield to deal damage, while  blocked attacks still deal damage to the attacker.\nThe reaction damage does not trigger from  Teemo's  Noxious Trap and  Shaco's  Jack in the Box.(bug)",
      "blurb": "Active:  Annie grants herself or an allied champion—and  Tibbers—a  shield with a burst of  move speed.",
      "castTime": "none",
      "targetRange": "800",
      "maxCharges": -1
    },
    {
      "name": "Summon: Tibbers",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Annie gains magic penetration.</p>",
          "leveling": [
            {
              "attribute": "Magic Penetration",
              "modifiers": [
                {
                  "values": "15 / 17.5 / 20",
                  "unit": "%"
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
                  "values": "75",
                  "unit": "% AP"
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
      "cost": "100",
      "cooldown": "130 / 115 / 100",
      "targeting": "Location",
      "affects": "Enemies / Tibbers",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "special",
      "notes": "Burst of flame deals  area damage and Tibbers' basic attacks deal  pet damage.\nTibbers will  blink back next to Annie if he gets too far away.\nRecasting Summon: Tibbers does not interrupt  Recall's channel.",
      "blurb": "Active:  Annie summons her bear  Tibbers, dealing magic damage to enemies in the area.",
      "castTime": "0.25 / None",
      "effectRadius": "250 /  350",
      "targetRange": "600",
      "maxCharges": -1
    }
  ],
  "lore": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
  "faction": "unaffiliated",
  "releaseDate": "2009-02-21",
  "patchLastChanged": "25.11",
  "price": {
    "blueEssence": 225,
    "rp": 260
  }
}
export default champion