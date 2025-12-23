// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Breath of Light",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "3",
  "cost": "35 / 40 / 45 / 50 / 55",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurelion Sol charges for up to 3.25 seconds to exhale a beam of starfire, during which he can steer the beam in the target direction. The beam collides with the first enemy hit to burn them, revealing them and dealing magic damage to them and surrounding enemies every 0.125 seconds. Secondary targets are dealt 50% damage.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage per Tick",
          "modifiers": [
            {
              "values": "5.63 / 7.5 / 9.38 / 11.25 / 13.13"
            },
            {
              "unit": "% AP",
              "values": "6.88"
            }
          ]
        },
        {
          "attribute": "Magic Damage per Second",
          "modifiers": [
            {
              "values": "45 / 60 / 75 / 90 / 105"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        },
        {
          "attribute": "Total Maximum Magic Damage",
          "modifiers": [
            {
              "values": "146.25 / 195 / 243.75 / 292.5"
            },
            {
              "unit": "% AP",
              "values": "178.75"
            }
          ]
        },
        {
          "attribute": "Secondary Target Damage per Tick",
          "modifiers": [
            {
              "values": "2.81 / 3.75 / 4.69 / 5.63 / 6.56"
            },
            {
              "unit": "% AP",
              "values": "3.44"
            }
          ]
        },
        {
          "attribute": "Secondary Magic Damage per Second",
          "modifiers": [
            {
              "values": "22.5 / 30 / 37.5 / 45 / 52.5"
            },
            {
              "unit": "% AP",
              "values": "27.5"
            }
          ]
        },
        {
          "attribute": "Secondary Target Total Maximum Damage",
          "modifiers": [
            {
              "values": "73.13 / 97.5 / 121.88 / 146.25"
            },
            {
              "unit": "% AP",
              "values": "89.38"
            }
          ]
        }
      ]
    },
    {
      "description": "Against the primary target, the beam will deal a burst of bonus magic damage for each full second that it burns them, and additionally generates 2 Stardust if they are a champion. The damage based on the target's health ratio is capped at 300 against monsters.",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "unit": "  (+ (3.1% Stardust)% of target's maximum health",
              "values": "60 / 70 / 80 / 90 / 100"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "Breath of Light can be recast within the duration, and does so automatically afterwards."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Aurelion Sol ends Breath of Light early.</p>"
    },
    {
      "description": "At rank 5, Breath of Light's channel duration is increased to 160 seconds."
    },
    {
      "description": "Breath of Light cannot be cast for 1 second if the channel is cancelled within the first 0.25 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/q",
  "notes": "Applies  spell damage on the burst and  persistent area damage on the beam.\nBreath of Light's bursts against an enemy champion will aggro nearby enemy minions.\nBreath of Light's burn places a timer on the primary target, which ticks in 0.2 second intervals. Thus, at[ 5 completed intervals ][ 1 full second ], the burst damage is triggered.\nThe timer's visuals themselves otherwise serve no other purpose than gameplay clarity.\nThe timer is placed on the initial primary target and any new primary targets that are acquired during the channel.\nIt falls off and resets to zero if a target is not hit within 1 second of no longer being afflicted by the burn.\n Spell shield will only block the burst damage.\nThe following table refers to interactions while Aurelion Sol is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport\n\n\nInterrupted by\n\n Flash  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "FALSE",
  "resource": "Other",
  "spellEffects": "special",
  "spellshieldable": "special",
  "targeting": "Direction"
}
export default ability
