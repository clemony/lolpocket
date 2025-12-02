// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Decimating Smash",
  "width": "See notes",
  "affects": "Enemies",
  "angle": "See notes",
  "castTime": "none",
  "cooldown": "10 / 9 / 8 / 7 / 6",
  "cost": "45",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion prepares a strike in the target direction, charging for up to 2 seconds to increase Decimating Smash's range over an area, knock up duration, stun duration, and damage every 0.25 seconds, which has up to a maximum bonus for the base damage and up to a 200% bonus for the scaling damage.</p>",
      "leveling": [
        {
          "attribute": "Maximum Base Damage Increase",
          "modifiers": [
            {
              "unit": "%",
              "values": "125 / 158.33 / 175 / 185 / 191.67"
            }
          ]
        },
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "tooltip": "Scaling per rank:\n40 / 50 / 60 / 70 / 80% AD",
              "unit": "% AD",
              "values": "40 - 80"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "90 / 155 / 220 / 285 / 350"
            },
            {
              "tooltip": "Scaling per rank:\n120 / 150 / 180 / 210 / 240% AD",
              "unit": "% AD",
              "values": "120 - 240"
            }
          ]
        }
      ]
    },
    {
      "description": "Decimating Smash can be recast within the duration, and does so automatically afterwards. If the charge is interrupted, Decimating Smash is placed on a 2-second cooldown."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Sion flails his axe in the direction he targeted at the time of cast, dealing physical damage to enemies hit and slowing them by 50% for 0.25 seconds. Decimating Smash deals 165% damage against monsters and 60% damage against minions.</p>",
      "leveling": [
        {
          "attribute": "Minimum Monster Damage",
          "modifiers": [
            {
              "values": "66 / 99 / 132 / 165 / 198"
            },
            {
              "tooltip": "Scaling per rank:\n66 / 82.5 / 99 / 115.5 / 132% AD",
              "unit": "% AD",
              "values": "66 - 132"
            }
          ]
        },
        {
          "attribute": "Maximum Monster Damage",
          "modifiers": [
            {
              "values": "148.5 / 255.75 / 363 / 470.25 / 577.5"
            },
            {
              "tooltip": "Scaling per rank:\n198 / 247.5 / 297 / 346.5 / 396% AD",
              "unit": "% AD",
              "values": "198 - 396"
            }
          ]
        },
        {
          "attribute": "Minimum Minion Damage",
          "modifiers": [
            {
              "values": "24 / 36 / 48 / 60 / 72"
            },
            {
              "tooltip": "Scaling per rank:\n24 / 30 / 36 / 42 / 48% AD",
              "unit": "% AD",
              "values": "24 - 48"
            }
          ]
        },
        {
          "attribute": "Maximum Minion Damage",
          "modifiers": [
            {
              "values": "54 / 93 / 132 / 171 / 210"
            },
            {
              "tooltip": "Scaling per rank:\n72 / 90 / 108 / 126 / 144% AD",
              "unit": "% AD",
              "values": "72 - 144"
            }
          ]
        }
      ]
    },
    {
      "description": "If Decimating Smash was charged for at least 1 second, Sion instead slams his axe down, dealing physical damage to enemies hit, knocking them up for 0.5 - 1 (based on channel time) seconds, and stunning them for 1.25 - 2.25 (based on channel time) seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/q",
  "notes": "For the target to be hit, their center needs to be inside the red or blue areas (based on charge time), and their edge must hit the yellow part of the cone. If their edge also hits the white part of the cone they will be excluded from being hit. Cone is at 16 degrees and starts 800 range behind Sion's center. White cone has a radius of 720, while yellow cone has a radius of 1550. Blue area has the radius of 855 units\nSion himself remains  locked out of all actions for 0.25 seconds when releasing Decimating Smash.\n Soul Furnace can be cast during this time, but  Roar of the Slayer and  Unstoppable Onslaught cannot and neither will they be buffered.\n Displacement immunity will also resist the application of the  stun.\nSince the  stun duration is longer than the  airborne duration, and both start at the same time,  Tenacity is still fully effective against Decimating Smash up to a cap.\nThis virtual cap is 60%-55.5%  Tenacity based on channel time beyond 1 second. Every value below this cap will lower the CC duration with no diminished returns.\nA flash of the axe and change in brightness of the indicator on the ground indicates when the 1 second time frame is reached.\nThe damage of Decimating Smash is calculated when it is released. Gaining AD or upgrading the ability during its channel will update the damage of the coming hit.\nEven though the cooldown starts when the ability is released, it will not be changed by gaining or losing AH, or upgrading the ability, during the cast time.\nThe indicator is visible to the enemy only if they  see Sion himself.\nIf the channel is released before 1 second, enemies may see a particle at the far end of the hitbox, if it itself isn't outside of their  vision.\nIf the channel is released after 1 second, the only remaining indication is the visual effects and audio that plays on any units the spell strikes (these play on-target), provided the enemy does have  vision on those.\nForced movement without a  stun component (or the stun being  cleansed previously) will not stop Sion from starting or continuing to channel. Its direction will not change with Sion's travel, however the location will update with him.\nThe location of the indicator updates at the beginning of the ability, at 1 second and at release.\nThe indicator of the ability is slightly shorter at its front than the hitbox of the ability is for  Original Sion,  Mecha Zero Sion and related skins and chromas, while on  Worldbreaker Sion, the indicator is slightly thinner at the front than the hitbox is, instead.\nThe following table refers for interactions while Sion is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Soul Furnace and its  recast are usable.  Roar of the Slayer and  Unstoppable Onslaught are disabled. This ability recasts to end channel.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction / Auto"
}
export default ability
