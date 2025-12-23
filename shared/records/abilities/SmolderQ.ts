// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Super Scorcher Breath",
  "affects": "Enemies",
  "angle": "15°",
  "blurb": "Active:  Smolder spits a fireball that deals physical damage to the target enemy.",
  "castTime": "100% of Smolder's windup time (0.261 at base attack speed)",
  "cooldown": "5.5 / 5 / 4.5 / 4 / 3.5",
  "cost": "25",
  "damageType": "Other damage",
  "effectRadius": "285 / 150",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Smolder spits a fireball at the target enemy that deals physical damage, increased by 0% - 75% (+ 0% - 40%) (based on critical strike chance); applies on-hit effects; applies life steal at 50% effectiveness; and triggers on-attack effects. If Super Scorcher Breath kills at least one target, Smolder restores 15 mana.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "65 / 80 / 95 / 110 / 125"
            },
            {
              "unit": "% bonus AD",
              "values": "130"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "113.75 / 140 / 166.25 / 192.5 / 218.75"
            },
            {
              "unit": "% bonus AD",
              "values": "227.5"
            }
          ]
        },
        {
          "attribute": "Maximum Damage with Infinity Edge",
          "modifiers": [
            {
              "values": "139.75 / 172 / 204.25 / 236.5 / 268.75"
            },
            {
              "unit": "% bonus AD",
              "values": "279.5"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Super Scorcher Breath becomes empowered with new effects based on the number of Dragon Practice stacks:</span></p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Tier 1 - 25 stacks:</span> The fireball explodes upon collision to deal the same physical damage to nearby enemies. The explosion benefits from life steal at 50% effectiveness and applies on-hit effects.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Tier 2 - 125 stacks:</span> The fireball sends forth 2 (+ 0.8 per 100 Dragon Practice stacks) bolts of fire in an arc upon collision that explode at maximum range, dealing 50% of the same damage to enemies hit. The bolts benefit from life steal at 50% effectiveness and apply on-hit effects.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "32.5 / 40 / 47.5 / 55 / 62.5"
            },
            {
              "unit": "% bonus AD",
              "values": "65"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "56.88 / 70 / 83.13 / 96.25 / 109.38"
            },
            {
              "unit": "% bonus AD",
              "values": "113.75"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage with Infinity Edge",
          "modifiers": [
            {
              "values": "69.88 / 86 / 102.13 / 118.25 / 134.38"
            },
            {
              "unit": "% bonus AD",
              "values": "139.75"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Tier 3 - 225 stacks:</span> Enemies hit are set on fire for 3 seconds, causing them to take bonus true damage equal to[ 2.5% per 100 bonus AD (+ 0.5% per 100 Dragon Practice stacks) of their maximum health over the duration, capped at 300 against monsters. ][ 0.83% per 100 bonus AD (+ 0.17% per 100 Dragon Practice stacks) of their maximum health each second, capped at 100 per tick against monsters. ]Subsequent applications of the burn stack, though not refreshing the duration of the previous burn. Enemy champions afflicted with the burn are also executed once Smolder deals damage to them that would leave them below 6.5% of their maximum health.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/q",
  "notes": "Any applied  Dragon Practice damage is affected by the same damage modifiers as Super Scorcher Breath and does not benefit from the ability's  life steal.\nApplies  default damage for the burn,  spell damage and procs  basic damage required effects for the fireball, and  area damage for the explosions.\nOnly Smolder's damage counts for triggering the execute.\nIf the target is below the threshold while afflicted with the burn, they will be executed on the next instance of damage dealt by Smolder, which includes the burn tick.\nIf Super Scorcher Breath would damage the target to below the execution threshold, they are executed on the same damage instance.\nThe number of additional bolts launched based on  Dragon Practice stacks is rounded up.(note)\nAt 125  Dragon Practice stacks, the fireball will launch 3 bolts.\nAt 225  Dragon Practice stacks, the burn's damage based on the target's health ratio will increase by at least 1.125%.\nSuper Scorcher Breath can only hit enemies once per cast.\nThe minion and monster damage modifier applies only to the physical damage.\nSuper Scorcher Breath's initial fireball, explosion and extra bolts can all be  blocked and  dodged.\nThe application of the burn is negated in all cases.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1800 / 900",
  "spellEffects": "special",
  "spellshieldable": "true",
  "targeting": "Unit",
  "targetRange": "550 (+ 100% bonus  attack range)"
}
export default ability
