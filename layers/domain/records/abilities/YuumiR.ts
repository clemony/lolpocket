// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Final Chapter",
  "width": "450",
  "affects": "Self, Allies, Enemies",
  "castTime": "none",
  "cooldown": "120 / 110 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi and Book channel for up to 3.5 seconds, during which they are ghosted, to launch 5 magical waves in the target direction.</p>"
    },
    {
      "description": "Allied champions hit by the waves are healed, with each heal instance beyond maximum health being converted into a shield that lasts for 1.5 seconds plus the remaining channel duration instead.",
      "leveling": [
        {
          "attribute": "Heal per Hit",
          "modifiers": [
            {
              "values": "30 / 40 / 50"
            },
            {
              "unit": "% AP",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Total Heal",
          "modifiers": [
            {
              "values": "150 / 200 / 250"
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
      "description": "Enemies struck by the waves take magic damage and are slowed by 10% for 1.25 seconds. The slow stacks and refreshes on subsequent hits, up to a total strength of 50%. Subsequent waves against enemies hit deal 25% damage.",
      "leveling": [
        {
          "attribute": "Magic Damage per Hit",
          "modifiers": [
            {
              "values": "75 / 125 / 175"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Reduced Damage per Hit",
          "modifiers": [
            {
              "values": "18.75 / 31.25 / 43.75"
            },
            {
              "unit": "% AP",
              "values": "6.25"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Attached Bonus:</span> Yuumi can steer the direction of the waves if initially cast while attached. Detaching causes her to lose this bonus for the duration. Additionally, Feline Friendship can trigger from also hitting allied champions.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Best Friend Bonus:</span> Final Chapter's heal to the Best Friend is increased by 30%.</p>",
      "leveling": [
        {
          "attribute": "Best Friend Heal per Hit",
          "modifiers": [
            {
              "values": "39 / 52 / 65"
            },
            {
              "unit": "% AP",
              "values": "13"
            }
          ]
        },
        {
          "attribute": "Best Friend Total Heal",
          "modifiers": [
            {
              "values": "195 / 260 / 325"
            },
            {
              "unit": "% AP",
              "values": "65"
            }
          ]
        }
      ]
    },
    {
      "description": "While not attached, Yuumi can move while channeling Final Chapter."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/r",
  "notes": "The  heal on Yuumi's  anchor is reapplied each time you hit another ally.(bug)\nYuumi becomes  ghosted for the channel and, if not presently attached with  You and Me!, will remain ghosted until she attaches and detaches again.(bug)\nWhile  attached,  Cloud Dragon Soul will not activate until Yuumi detaches.\n Spell shield will only block a single instance of damage.\nYuumi's facing direction during the channel is considered to be in Final Chapter's target direction.\nUsing  Hexflash during the channel will always cause Yuumi to  blink in the target direction of Final Chapter.(bug)\n Feline Friendship will not be triggered if Yuumi and her anchor aren't missing health after the wave hit.\nThe VFX will follow Yummi's location, but the actual hitbox of each wave won't.\nThe following table refers for interactions while Yuumi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Prowling Projectile is disabled.  You and Me! and  Zoomies are usable.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Hexflash  Mark  Dash\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3000",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Direction",
  "targetRange": "1100"
}
export default ability
