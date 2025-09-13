// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 86,
  "key": "Garen",
  "name": "Garen",
  "title": "The Might of Demacia",
  "fullName": "Garen Crownguard",
  "resource": "None",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 690,
      "perLevel": 98
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.5
    },
    "armor": {
      "flat": 38,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 1.55
    },
    "attackDamage": {
      "flat": 69,
      "perLevel": 4.5
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 600
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
      "flat": 0.625,
      "perLevel": 3.65
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
      "flat": -0.12
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
    "toughness": 3,
    "control": 1,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 75,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Perseverance",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Garen regenerates an additional[ 1.5% - 10.1% (based on level) of his maximum health every 5 seconds. ][ 0.15% - 1.01% (based on level) of his maximum health every 0.5 seconds. ]</p>"
        },
        {
          "description": "Perseverance is lost for 8 seconds if Garen takes damage from champions, epic monsters, or turrets, or if he is hit by an enemy ability or affected by an enemy summoner spell, refreshing on subsequent damage and hits taken from them."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "spellEffects": "Heal",
      "notes": "Perseverance does not go on nor refresh its cooldown from damage which was fully prevented by a  shield or  invulnerability.",
      "blurb": "Innate:  Garen continually  regenerates a portion of his  maximum health."
    },
    {
      "name": "Decisive Strike",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Garen cleanses himself of all slows and gains 35% bonus movement speed for a duration.</p>",
          "leveling": [
            {
              "attribute": "Movement Speed Duration",
              "modifiers": [
                "1 / 1.65 / 2.3 / 2.95 / 3.6"
              ]
            }
          ]
        },
        {
          "description": "Additionally, Garen empowers his next basic attack within 4.5 seconds to have an uncancellable windup, lunge at the target, deal bonus physical damage, and silence them for 1.5 seconds.",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                "30 / 60 / 90 / 120 / 150",
                "50% AD"
              ]
            }
          ]
        },
        {
          "description": "Decisive Strike resets Garen's basic attack timer."
        }
      ],
      "cost": "0",
      "cooldown": "8",
      "targeting": "Auto",
      "affects": "Self, Enemies",
      "spellshieldable": "Special",
      "damageType": "Physical damage",
      "spellEffects": "spell",
      "notes": "The enhanced attack will apply other on-hit effects and can  critically strike as normal (the bonus damage does not).\nThe bonus damage will also apply  life steal.\nThe bonus damage is applied to structures.\nDecisive Strike locks Garen out of using basic attacks for a short period of time. This is shortened with  attack speed.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack's windup.\nDecisive Strike will not prevent the reapplication of  slows (e.g. the persistent slow from  Pillar of Ice will be immediately reapplied after removal if Garen is still within its area of effect).\n Spell shield will only negate the  silence.\nDecisive Strike's  lunge can pass very thin terrain and will otherwise not be able to. In any case, Garen will still hit his target.",
      "blurb": "Active:  Garen gains  bonus movement speed and  cleanses from  slows.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Courage",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Whenever Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Courage:</span> For each stack, Garen gains 0.2 bonus armor and 0.2 bonus magic resistance, up to a maximum of 30 bonus resistances each.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Garen reduces incoming damage for 4 seconds. For the first 0.75 seconds, Garen additionally grants himself a shield and 60% tenacity.</p>",
          "leveling": [
            {
              "attribute": "Damage Reduction",
              "modifiers": [
                "25 / 29 / 33 / 37 / 41%"
              ]
            },
            {
              "attribute": "Shield Strength",
              "modifiers": [
                "65 / 85 / 105 / 125 / 145",
                "18% bonus health"
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "22 / 19.5 / 17 / 14.5 / 12",
      "targeting": "Auto",
      "affects": "Self",
      "notes": "Courage's bonus resistances are only gained when it is ranked up at least once, but Courage's passive is retroactive for units killed before it was learned.\nCourage's bonus resistances can be obtained by any of Garen's damage sources (basic attacks, abilities, summoner spells, runes, item actives).\nThis does not include last hits transferred to Garen artificially.\nThe kills on these enemy unit types count towards Courage stacks:\n Champions (Only kills, assists don't grant stacks)\nAll  minions and  monsters\nChampion summoned units (e.g.  Noxious Trap,  Powder Keg,  Dark Procession)\nAll  pets and  clones.\nThe bonus is equal for all these units; large units do not grant a larger bonus.\nThe kills on these enemy unit types do not count towards Courage stacks:\n Wards.\n Turrets (including  Sun Disk) and other  structures\nJungle plants.\nUnits destroyed by 'trampling' such as  Zyra's  seeds,  Zac's  goo or  Rek'Sai's  tunnels.\nCourage will only grant bonus resistances from units killed by Garen himself.  Eye of the Herald does not count.\nThe  Tenacity increase  stacks additively with the tenacity reduction from  Brittle, but multiplicatively with other sources.",
      "blurb": "Passive:  Garen permanently gains bonus  armor and  magic resist by killing enemies, up to a cap. Upon reaching the cap, he gains another permanent boost to these defenses.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Judgment",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Garen rapidly spins his sword around himself 7 (+ 1 per 25% bonus attack speed) times over 3 seconds, becoming unable to declare basic attacks but gaining ghosting and dealing physical damage to nearby enemies periodically. Judgment can be recast after 1 second while active, and does so automatically after it ends.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage Per Spin",
              "modifiers": [
                "4 / 7 / 10 / 13 / 16",
                "36 / 39 / 42 / 45 / 48% AD"
              ]
            }
          ]
        },
        {
          "description": "Enemy champions hit 6 times by Judgment are inflicted with 25% armor reduction for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter."
        },
        {
          "description": "Judgment deals 25% increased damage against the nearest enemy hit.",
          "leveling": [
            {
              "attribute": "Increased Damage Per Spin",
              "modifiers": [
                "5 / 8.75 / 12.5 / 16.25 / 20",
                "45 / 48.75 / 52.5 / 56.25 / 60% AD"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Garen ends Judgment.</p>"
        },
        {
          "description": "Judgment can critically strike for[ (140% + 32%) damage. ][ 80% total critical damage. ]"
        }
      ],
      "cost": "0",
      "cooldown": "9 / 8.25 / 7.5 / 6.75 / 6",
      "targeting": "Auto",
      "affects": "Enemies",
      "damageType": "Physical damage",
      "spellEffects": "aoedot",
      "notes": "Deactivating the ability manually does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nEach spin triggers a stack of  Conqueror.\nFor the purpose of moving closer to an enemy when right clicking them, Judgment also reduces Garen's  attack range [ to 100 ][ by 75 ] for the duration.\nJudgment cancels Garen's last movement command upon ending.\nEach spin deals damage simultaneously to all enemies within its range when the spin is completed.\nThe spin animation is capped at once per 0.2 seconds, but the amount of ticks will keep on scaling.\nThe armor reduction stacks multiplicatively with other percentage armor penetration effects.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Decisive Strike and  Courage are usable.  Demacian Justice interrupts.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Hexflash\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "blurb": "Active:  Garen rapidly spins with his sword for a short time while  ghosted, continually dealing physical damage to nearby enemies. He spins more based on his  bonus attack speed.",
      "castTime": "none",
      "effectRadius": "325",
      "maxCharges": -1
    },
    {
      "name": "Demacian Justice",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Garen calls upon the might of Demacia onto the target enemy champion, dealing them true damage as well as revealing them for 1 second at the start of the cast time.</p>",
          "leveling": [
            {
              "attribute": "True Damage",
              "modifiers": [
                "150 / 250 / 350",
                "25 / 30 / 35% of target's missing health"
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "120 / 100 / 80",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "True damage",
      "spellEffects": "spell",
      "notes": "The target will die if they're at least under 20 / 21.57 / 23.08 / 24.53 / 25.93% maximum health + 120 / 156.86 / 192.31 / 226.42 / 259.26 flat health on top of that. This does not count effects that mitigate true damage, such as  shields.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "blurb": "Active:  Garen strikes a lethal blow to an enemy champion that deals true damage based on the target's missing health.",
      "castTime": "0.435",
      "targetRange": "400",
      "maxCharges": -1
    }
  ],
  "lore": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.",
  "faction": "demacia",
  "releaseDate": "2010-04-27",
  "patchLastChanged": "25.12",
  "price": {
    "blueEssence": 225,
    "rp": 260
  }
}
export default champion