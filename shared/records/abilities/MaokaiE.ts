// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Sapling Toss",
  "affects": "Enemies",
  "blurb": "Active:  Maokai flings a Sapling to the target location, where it remains for some time. A Sapling will chase nearby enemies for a short time, expiring afterward or upon contact.",
  "castTime": "0.25",
  "cooldown": "18 / 17 / 16 / 15 / 14",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effectRadius": "175 / 350 / 475",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai flings a Sapling to the target location, granting sight of the area.</p>"
    },
    {
      "description": "Once landed, a Sapling remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.5 seconds. The Sapling explodes upon colliding with an enemy or when it expires, dealing magic damage to nearby enemies, capped at 300 against non-champions, and slowing them by 45% for 2 seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 75 / 100 / 125 / 150"
            },
            {
              "unit": "% bonus health",
              "values": "5"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">A Sapling placed in a brush becomes empowered:</span> lasting 30 (+ 1.5% bonus health) seconds and causing its explosion to deal 66.7% damage to non- minion targets struck and attach two Saplings to them for 1.5 seconds, as well as slow enemies hit by 45% (+ 1% per 100 bonus health) (+ 1% per 100 AP) for 2 seconds and reveal them for 3 seconds. The attached Saplings explode on the afflicted target every 0.75 seconds over the duration, dealing them the same damage each time. Targets can only be attached to two Saplings at a time; subsequent empowered Sapling explosions on a target will refresh the duration and only attach a Sapling if one has exploded on them already. Against minions, the explosion deals 100% damage. The total damage is capped at 600 against non-champions.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage per Instance",
          "modifiers": [
            {
              "values": "33.33 / 50 / 66.67 / 83.33 / 100"
            },
            {
              "unit": "% bonus health",
              "values": "3.33"
            },
            {
              "unit": "% AP",
              "values": "16.67"
            }
          ]
        },
        {
          "attribute": "Total Attached Sapling Damage",
          "modifiers": [
            {
              "values": "66.67 / 100 / 133.33 / 166.67 / 200"
            },
            {
              "unit": "% bonus health",
              "values": "6.67"
            },
            {
              "unit": "% AP",
              "values": "33.33"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "100 / 150 / 200 / 250 / 300"
            },
            {
              "unit": "% bonus health",
              "values": "10"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Minion Damage",
          "modifiers": [
            {
              "values": "50 / 75 / 100 / 125 / 150"
            },
            {
              "unit": "% bonus health",
              "values": "5"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "See Pets for more details about Saplings."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/e",
  "notes": "Applies  area damage from a normal Sapling and deals  persistent damage to enemies hit by an empowered Sapling.\nSapling Toss grants  sight of the target location even while the Sapling is in flight.\nThe Saplings will continue to chase their target even if they lose  sight of them (but they do not prioritize champions so they will chase the first target they encounter).\nSaplings cannot stack on top of each other (they will move a short distance away from one another if they are aimed at the same location).\nThe Sapling will stop its movement upon colliding with  Unbreakable.\nSaplings attack  Baron Nashor always at the same two points, no matter where they were placed.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "true",
  "targeting": "Location",
  "targetRange": "1100",
  "tetherRadius": "250"
}
export default ability
