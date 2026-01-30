// Updated Patch 16.1 - 01/29/2026 04:27:10 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Threaded Volley",
  "width": "200",
  "affects": "Enemies",
  "blurb": "Active:  Taliyah barrages out 5 Stone Shards that each explode upon the first enemy hit, dealing magic damage to nearby enemies. This also creates an area of Worked Ground under Taliyah's location that lasts for a while.",
  "castTime": "0.25",
  "cooldown": "7 / 6 / 5 / 4 / 3",
  "cost": "55 / 60 / 65 / 70 / 75",
  "damageType": "Magic damage",
  "effectRadius": "175 /  225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taliyah barrages 5 Stone Shards in the target direction over 1.5 seconds that each shatter upon the first enemy hit, dealing magic damage to nearby enemies and revealing them for 0.5 seconds. Subsequent hits deal 40% damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "55 / 72.5 / 90 / 107.5 / 125"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "22 / 29 / 36 / 43 / 50"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "143 / 188.5 / 234 / 279.5 / 325"
            },
            {
              "unit": "% AP",
              "values": "130"
            }
          ]
        }
      ]
    },
    {
      "description": "Taliyah can move and cast other abilities while launching Stone Shards, and is unable to basic attack until she launches the third Stone Shard."
    },
    {
      "description": "Casting Threaded Volley creates an area of Worked Ground at Taliyah's cast location that has a radius of 400 units and lasts 30 seconds. While on Worked Ground, Threaded Volley's cast consumes the area to become empowered with a new effect, costing 10 mana and having 50% reduced cooldown, though not below 0.75 seconds."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Empowered Active:</span> Taliyah hurls a Boulder that explodes upon the first enemy hit, dealing 180% damage to them and normal damage to nearby enemies, slowing all targets hit for 1.5 seconds, and revealing them for 0.5 seconds. Monsters hit are also stunned for 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Empowered Damage",
          "modifiers": [
            {
              "values": "99 / 130.5 / 162 / 193.5 / 225"
            },
            {
              "unit": "% AP",
              "values": "90"
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
    },
    {
      "description": "Against monsters, Threaded Volley deals 20 bonus magic damage per Stone Shard, and the Boulder deals 36 bonus magic damage against the primary target. This bonus damage is unaffected by the damage modifier from subsequent hits."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/q",
  "notes": "Threaded Volley will continue casting while in  stasis.\nThe first Stone Shard hit on each target is considered  area damage, while additional ones of the same cast are considered  persistent area damage.\nThe Boulder applies  area damage.\nThe first Stone Shard is launched instantly after the cast time ends, then the second and third Stone Shards are both launched over 1 second, and finally the fourth and fifth Stone Shards are both launched over 0.5 seconds.\n Spell shield only prevents one instance of damage.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3600 - 1800 / 2000",
  "spellEffects": "special",
  "spellshieldable": "Special",
  "targeting": "Direction"
}
  export default ability
