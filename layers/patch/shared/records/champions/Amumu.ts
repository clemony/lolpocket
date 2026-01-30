// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Champion } from '#shared/types'

  const champion: Champion = {
  "id": 32,
  "key": "Amumu",
  "name": "Amumu",
  "title": "The Sad Mummy",
  "abilities": [
    {
      "key": "P",
      "name": "Cursed Touch",
      "affects": "Enemies",
      "blurb": "Innate:  Amumu's basic attacks and  Curse of the Sad Mummy mark enemies with Curse.  Despair will refresh ongoing Curse marks on enemies hit.",
      "damageType": "True damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Amumu's basic attacks and Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and Despair's per-tick damage.</p>"
        },
        {
          "description": "Cursed targets receive 10% bonus true damage from all incoming pre-mitigation magic damage."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/p",
      "notes": "If the triggering basic attack from Amumu applies magic damage  on-hit, Curse will be applied before the magic damage.\nThe Curse application from  Curse of the Sad Mummy happens after the magic damage is dealt by it, therefore amplifying the damage only if the target was also already marked before the hit.\nNeutral units / enemies affected by the Curse can receive bonus damage from the opposing team of Amumu / neutral units, but the damage will be credited to Amumu.\nThe application of Curse on  Curse of the Sad Mummy is negated if the ability is blocked by a  spell shield.",
      "spellEffects": "default",
      "spellshieldable": "special",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Bandage Toss",
      "width": "160",
      "affects": "Enemies",
      "blurb": "Active:  Amumu throws a bandage that deals magic damage and  stuns the first enemy hit while he  dashes to them.",
      "castTime": "0.25",
      "cooldown": "3",
      "cost": "50",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Amumu throws a bandage in the target direction that deals magic damage to the first enemy hit, stunning them for 1 second and pulling him to them, during which they are revealed.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 95 / 120 / 145 / 170"
                },
                {
                  "unit": "% AP",
                  "values": "85"
                }
              ]
            }
          ]
        },
        {
          "description": "Amumu periodically stocks a Bandage Toss charge, up to a maximum of 2."
        },
        {
          "description": "Despair can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/q",
      "notes": "Amumu will track the target if they change locations.\nHe will dash to the target's previous location if the target is 2000 or more units away or moves beyond 2000 units.\nBandage Toss will always be directed towards the target's location even if Amumu moves while it is in flight.\n Immobilizing effects will not prevent Amumu from commencing the  dash.\nBandage Toss does not fizzle on Amumu's  death, and can still stun and damage enemies.\nAmumu is still able to  dash even if Bandage Toss is blocked by  spell shield.\nAmumu will be ordered to basic attack the target upon completion of the dash.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "rechargeRate": "16 / 15 / 14 / 13 / 12",
      "resource": "Mana",
      "speed": "2000 / 1800",
      "spellEffects": "spell",
      "spellshieldable": "special",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Despair",
      "affects": "Enemies",
      "blurb": "Toggle:  Amumu begins crying, continually dealing magic damage to nearby enemies based on their maximum health.",
      "castTime": "none",
      "cooldown": "1",
      "cost": "8",
      "damageType": "Magic damage",
      "effectRadius": "350",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Amumu cries a continuous pool of tears, dealing magic damage every 0.5 seconds to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "values": "5"
                },
                {
                  "tooltip": "Scaling per rank:\n0.5 / 0.63 / 0.75 / 0.88 / 1% (+ 0.25% per 100 AP) of target's maximum health",
                  "unit": "% (+ 0.25% per 100 AP) of target's maximum health",
                  "values": "0.5 - 1"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/w",
      "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDespite the rounding in Despair's tooltip, it will deal increased damage for every point of ability power.",
      "resource": "Mana per second",
      "spellEffects": "aoedot",
      "spellshieldable": "False",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Tantrum",
      "affects": "Enemies",
      "blurb": "Passive:  Amumu gains damage reduction against physical damage.  Tantrum's cooldown is reduced whenever he is hit by a  basic attack.",
      "castTime": "0.25",
      "cooldown": "9 / 8 / 7 / 6 / 5",
      "cost": "35",
      "damageType": "Magic damage",
      "effectRadius": "350",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Amumu reduces every instance of pre-mitigation physical damage taken, capped at 50% of the damage instance.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage Reduction",
              "modifiers": [
                {
                  "values": "5 / 7 / 9 / 11 / 13"
                },
                {
                  "unit": "% bonus armor",
                  "values": "3"
                },
                {
                  "unit": "% bonus magic resistance",
                  "values": "3"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Amumu releases his anger, dealing magic damage to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "65 / 95 / 125 / 155 / 185"
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
          "description": "Tantrum's current cooldown is reduced by 0.75 seconds whenever Amumu is hit by a basic attack on-hit."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/e",
      "notes": "A  basic attack's  basic damage and each on-hit effect are all separate damage instances, and may be reduced each if they deal physical damage.\nTantrum's cooldown reduction will trigger multiple times for effects such as  Double Strike and  Guinsoo's Rageblade's Phantom Hit.\nThe cooldown will be reduced, even if the incoming attack is  blocked.\nThe cooldown will not be reduced, if the incoming attack misses due to the enemy being  blinded.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Curse of the Sad Mummy",
      "affects": "Enemies",
      "blurb": "Active:  Amumu entangles nearby enemies in bandages, dealing magic damage as well as briefly  knocking down and  stunning them.",
      "castTime": "0.25",
      "cooldown": "150 / 125 / 100",
      "cost": "100 / 150 / 200",
      "damageType": "Magic damage",
      "effectRadius": "550",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Amumu entangles nearby enemies in bandages, dealing magic damage as well as knocking them down and stunning them for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "200 / 300 / 400"
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
      "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/r",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 1
  },
  "patchLastChanged": "25.18",
  "positions": [
    "Jungle",
    "Support"
  ],
  "price": {
    "blueEssence": 225,
    "rp": 260
  },
  "releaseDate": "2009-06-26",
  "resource": "Mana",
  "roles": [
    "Support",
    "Tank",
    "Vanguard"
  ],
  "stats": {
    "hp": 685,
    "mp": 285,
    "movespeed": 335,
    "armor": 33,
    "magicResist": 32,
    "attackRange": 125,
    "hpRegen": 9,
    "mpRegen": 7.4,
    "attackDamage": 57,
    "attackSpeed": 0.7
  },
  "statsPerLevel": {
    "hp": 94,
    "mp": 40,
    "armor": 4,
    "magicResist": 2.1,
    "hpRegen": 0.9,
    "mpRegen": 0.6,
    "attackDamage": 3.8,
    "attackSpeed": 2.2
  }
}
export default champion