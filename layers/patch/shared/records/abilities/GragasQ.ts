// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Barrel Roll",
  "affects": "Enemies",
  "blurb": "Active:  Gragas rolls a cask to the target location that lingers for a short time before exploding. Barrel Roll can be recast within the duration once it fully travels.",
  "castTime": "0.25",
  "cooldown": "10 / 9 / 8 / 7 / 6",
  "cost": "80",
  "damageType": "Magic damage",
  "effectRadius": "250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gragas rolls a cask to the target location, remaining there for 4 seconds and granting sight of the area. Upon arrival, the cask starts to ferment over the first 2 seconds of its duration to increase its damage and the effectiveness of its slow, up to a maximum of 150% of their initial values. Barrel Roll can be recast at any time within its duration after the cask has fully travelled, and does so automatically after its duration ends.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Gragas detonates the cask, dealing magic damage to nearby enemies, reduced by 30% against minions, and slowing them for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "120 / 180 / 240 / 300 / 360"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        },
        {
          "attribute": "Minimum Minion Damage",
          "modifiers": [
            {
              "values": "56 / 84 / 112 / 140 / 168"
            },
            {
              "unit": "% AP",
              "values": "56"
            }
          ]
        },
        {
          "attribute": "Maximum Minion Damage",
          "modifiers": [
            {
              "values": "84 / 126 / 168 / 210 / 252"
            },
            {
              "unit": "% AP",
              "values": "84"
            }
          ]
        },
        {
          "attribute": "Minimum Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 45 / 50 / 55 / 60"
            }
          ]
        },
        {
          "attribute": "Maximum Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "60 / 67.5 / 75 / 82.5 / 90"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/q",
  "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDeactivating the ability manually does not.\nThe cask ignores unit and terrain collision therefore it will only stop once it reaches the target location.\nOn arrival the cask will begin to glow ever brighter as it ferments until it turns bright red.\nBarrel Roll has an internal cooldown while traveling so that Gragas may only make it explode on arrival.\nThe charge-up countdown will only start once the cask stops rolling.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe ability will not preserve the caster's facing direction when using  Flash and similar effects.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1000",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location / Auto",
  "targetRange": "850"
}
  export default ability
