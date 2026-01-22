// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Tides of Blood",
  "width": "120",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "13 / 11 / 9 / 7 / 5",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vladimir charges for up to 1.5 seconds, during which he increases Tides of Blood's damage over the first second of the channel, and becomes slowed by 20% afterwards for the remaining duration. Tides of Blood can be recast within the duration, and does so automatically afterwards or if it is interrupted.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vladimir unleashes a nova of 15 blood bolts around himself that each deal magic damage to the first enemy hit, increased based on charge time up to the first second.</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "30 / 45 / 60 / 75 / 90"
            },
            {
              "unit": "% maximum health",
              "values": "1.5"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% maximum health",
              "values": "6"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "If Tides of Blood was charged for at least 1 second, enemies hit are also slowed for 0.5 seconds.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 45 / 50 / 55 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies can intercept multiple bolts, but can be damaged only once."
    },
    {
      "description": "If Vladimir is below 12% of his maximum health, Tides of Blood will not cost any health."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/e",
  "notes": "The spell indicator shows 11 equally spaced missile indicators when hovering the ability in the HUD, however the spell actually casts 15 equally spaced missiles.\nThe health cost may still drop Vladimir below the specified amount if he is above it. This is verified for every tick of health cost, i.e if the first tick drops him below it, the next ones will stop affecting him if he remains below it.\nThe following table refers for interactions while Vladimir is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Sanguine Pool is usable.  Transfusion and  Hemoplague both interrupt after 0.25 seconds.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "TRUE",
  "resource": "Maximum health",
  "speed": "4000",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
