// Updated Patch 15.23.1 - 11/30/2025 12:23:58 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Comet Spear",
  "width": "120 / 110",
  "affects": "Enemies",
  "castTime": "0.2",
  "cooldown": "11 / 10.25 / 9.5 / 8.75 / 8",
  "cost": "25",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pantheon charges while being slowed by 10% for up to 4 seconds to increase Comet Spear's range after 0.35 seconds of channeling. Comet Spear can be recast within the duration.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Pantheon hurls his spear in the target direction that deals physical damage to enemies hit, increased against enemies below 20% of their maximum health but reduced by 50% against enemies beyond the first.</p>",
      "leveling": [
        {
          "attribute": "Hurl Physical Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% bonus AD",
              "values": "115"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Increased Hurl Damage",
          "modifiers": [
            {
              "values": "155 / 230 / 305 / 380 / 455"
            },
            {
              "unit": "% bonus AD",
              "values": "230"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Hurl Secondary Physical Damage",
          "modifiers": [
            {
              "values": "35 / 50 / 65 / 80 / 95"
            },
            {
              "unit": "% bonus AD",
              "values": "57.5"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Increased Hurl Secondary Damage",
          "modifiers": [
            {
              "values": "77.5 / 115 / 152.5 / 190 / 227.5"
            },
            {
              "unit": "% bonus AD",
              "values": "115"
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
      "description": "Releasing the ability within 0.35 seconds causes Pantheon to instead thrust his spear in the target direction, dealing physical damage to enemies hit, increased against enemies below 20% of their maximum health, and refunding 60% of Comet Spear's cooldown. The thrust's damage is not reduced against enemies beyond the first.",
      "leveling": [
        {
          "attribute": "Thrust Physical Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% bonus AD",
              "values": "115"
            }
          ]
        },
        {
          "attribute": "Increased Thrust Damage",
          "modifiers": [
            {
              "values": "155 / 230 / 305 / 380 / 455"
            },
            {
              "unit": "% bonus AD",
              "values": "230"
            }
          ]
        }
      ]
    },
    {
      "description": "Comet Spear's total damage is reduced to 80% against monsters and to 70% against minions."
    },
    {
      "description": "If the charge is interrupted or completes without reactivation, Comet Spear is cancelled and the ability is put on full cooldown but refunds half the mana cost."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mortal Will:</span> Comet Spear deals 20 - 240 (based on level) (+ 115% bonus AD) bonus physical damage, affected by the previous damage reductions. Consumes the stacks upon recasting.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/q",
  "notes": "This ability always employs Quick cast.\nOnly the ranged version of Comet Spear can be  intercepted.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Pantheon is  channeling:\nItem actives that interrupt and those with cast times as well as  Titanic Hydra,  Hexflash, and  Recall will cause Comet Spear to recast automatically and the active or spell to buffer to cast afterwards.\n Teleport will cancel the channel entirely.\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "2700",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto / Direction"
}
export default ability
