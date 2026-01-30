// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Champion } from '#shared/types'

  const champion: Champion = {
  "id": 81,
  "key": "Ezreal",
  "name": "Ezreal",
  "title": "The Prodigal Explorer",
  "abilities": [
    {
      "key": "P",
      "name": "Rising Spell Force",
      "affects": "Self",
      "blurb": "Innate:  Ezreal's abilities generate  stacks of Rising Spell Force for each enemy hit, up to a cap.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Rising Spell Force:</span> For each stack, Ezreal gains 10% bonus attack speed, up to a maximum of 50%.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/p",
      "notes": "Rising Spell Force will stack even if the abilities hit were blocked by  spell shields.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Mystic Shot",
      "width": "120",
      "affects": "Enemies",
      "blurb": "Active:  Ezreal fires a bolt of energy that deals physical damage to the first enemy hit.",
      "castTime": "0.25",
      "cooldown": "5.5 / 5.25 / 5 / 4.75 / 4.5",
      "cost": "28 / 31 / 34 / 37 / 40",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit, applying on-hit effects and triggering on-attack effects.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "20 / 45 / 70 / 95 / 120"
                },
                {
                  "unit": "% AD",
                  "values": "130"
                },
                {
                  "unit": "% AP",
                  "values": "15"
                }
              ]
            }
          ]
        },
        {
          "description": "If Mystic Shot successfully hits an enemy, the current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/q",
      "notes": "Mystic Shot deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nMystic Shot benefits from  life steal,  omnivamp, and  physical vamp, but not  spell vamp.\nEven if the ability is blocked by  spell shield it will still trigger the cooldown reduction.\nThis ability will cast from wherever the caster is at the end of the cast time.\nMystic Shot will be buffered and cast when the cooldown ends if the player attempts to cast it within 0.05 seconds of the cooldown ending.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2000",
      "spellEffects": "special",
      "spellshieldable": "special",
      "targeting": "Direction",
      "targetRange": "1200"
    },
    {
      "key": "W",
      "name": "Essence Flux",
      "width": "160",
      "affects": "Enemies",
      "blurb": "Active:  Ezreal fires an orb that shortly marks the first enemy  champion, epic  monster, or  structure hit.",
      "castTime": "0.25",
      "cooldown": "8",
      "cost": "50",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal fires an orb in the target direction that marks the first enemy champion, epic monster, or structure hit for 4 seconds.</p>"
        },
        {
          "description": "His next basic attack or ability against the target detonates the mark to deal them bonus magic damage.",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 135 / 190 / 245 / 300"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                },
                {
                  "tooltip": "Scaling per rank:\n70 / 75 / 80 / 85 / 90% AP",
                  "unit": "% AP",
                  "values": "70 - 90"
                }
              ]
            }
          ]
        },
        {
          "description": "If the mark was detonated with an ability, Ezreal restores 60 mana plus the mana cost of that ability."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/w",
      "notes": "The application of Essence Flux deals 0  proc damage.\nThis triggers in-combat effects such as drawing turret aggro and drawing monster aggression.\nIt also triggers  Sudden Impact and applies  Elixir of Sorcery.\nIt does not trigger  Cheap Shot, however, as  proc damage doesn't trigger  Cheap Shot.\n Block and  Dodge prevents the mark from being triggered by a basic attack.\n Spell shield prevents the mark from being triggered by an ability. If the mark is triggered by a basic attack, spell shield will prevent Essence Flux's damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1700",
      "spellEffects": "spell",
      "spellshieldable": "Special",
      "targeting": "Direction",
      "targetRange": "1200"
    },
    {
      "key": "E",
      "name": "Arcane Shift",
      "affects": "Enemies, Self",
      "blurb": "Active:  Ezreal  blinks to the target location and fires a bolt that strikes the nearest enemy, dealing magic damage.",
      "castTime": "0.25",
      "cooldown": "26 / 23 / 20 / 17 / 14",
      "cost": "70",
      "damageType": "Magic damage",
      "effectRadius": "750",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and reveals them for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 130 / 180 / 230 / 280"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
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
          "description": "Arcane Shift prioritizes firing at the nearest enemy marked by Essence Flux."
        },
        {
          "description": "The target does not have to be visible to be hit by this ability."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/e",
      "notes": "If Ezreal is moved during the cast time, his range to blink will update accordingly. This does not exceed the maximum target range.\nThe target is revealed as soon as Ezreal fires the missile at them.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2000",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "475"
    },
    {
      "key": "R",
      "name": "Trueshot Barrage",
      "width": "320",
      "affects": "Enemies",
      "blurb": "Active:  Ezreal fires a powerful arc of energy that deals magic damage to enemies hit.",
      "castTime": "1",
      "cooldown": "120 / 105 / 90",
      "cost": "100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal fires a powerful arc of energy in the target direction that briefly grants sight of its surroundings and deals magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "350 / 550 / 750"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                },
                {
                  "unit": "% AP",
                  "values": "90"
                }
              ]
            }
          ]
        },
        {
          "description": "Minions and non-epic monsters take 50% reduced damage.",
          "leveling": [
            {
              "attribute": "Reduced Damage",
              "modifiers": [
                {
                  "values": "175 / 275 / 375"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                },
                {
                  "unit": "% AP",
                  "values": "45"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/r",
      "notes": "Trueshot Barrage's projectile has an  icon on the mini-map while it is in flight. It can be seen by only Ezreal and his allies.\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2000",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "Global"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 45,
    "difficulty": 3
  },
  "patchLastChanged": "25.21",
  "positions": [
    "Bottom"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2010-03-16",
  "resource": "Mana",
  "roles": [
    "Mage",
    "Marksman"
  ],
  "stats": {
    "hp": 600,
    "mp": 375,
    "movespeed": 325,
    "armor": 24,
    "magicResist": 30,
    "attackRange": 550,
    "hpRegen": 4,
    "mpRegen": 8.5,
    "attackDamage": 60,
    "attackSpeed": 0.6
  },
  "statsPerLevel": {
    "hp": 102,
    "mp": 70,
    "armor": 4.2,
    "magicResist": 1.3,
    "hpRegen": 0.7,
    "mpRegen": 1,
    "attackDamage": 3.3,
    "attackSpeed": 2.5
  }
}
export default champion