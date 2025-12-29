// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Wilding Claw",
  "affects": "Self, Enemies",
  "blurb": "Claw Stance:  Udyr first two basic attacks deal bonus physical damage equal to a portion of the target's maximum health. Additionally, he gains  attack speed and bonus on-hit physical damage for a few seconds.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "20",
  "damageType": "Other damage",
  "effectRadius": "450",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active - Stance:</span> Udyr enters Claw Stance, empowering his next two basic attacks to gain 50 bonus range and deal bonus physical damage, capped at 15 (+ 100% bonus AD) (+ 50% AP) against monsters.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "3 / 4 / 5 / 6 / 7 / 8"
            },
            {
              "unit": "% per 100 bonus AD",
              "values": "4"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "unit": "%  of target's maximum health",
              "values": "6 / 8 / 10 / 12 / 14 / 16"
            },
            {
              "unit": "% per 100 bonus AD",
              "values": "8"
            }
          ]
        }
      ]
    },
    {
      "description": "Additionally, Udyr gains bonus attack speed and deals bonus physical damage on-hit for 4 seconds.",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 32 / 44 / 56 / 68 / 80"
            }
          ]
        },
        {
          "attribute": "Bonus Physical Damage On-Hit",
          "modifiers": [
            {
              "values": "5 / 11 / 17 / 23 / 29 / 35"
            },
            {
              "unit": "% bonus AD",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Awaken:</span> Udyr gains an additional 20% - 70% (based on level) bonus attack speed. The empowered attacks deal an additional 2% - 4% (based on level) (+ 3% per 100 bonus AD) of the target's maximum health bonus physical damage. Udyr's next two basic attacks in any Stance within 4 seconds are each empowered to strike with lightning[ 6 times over 1 second, ][ every 0.2 seconds over 1 second, ]dealing bonus magic damage equal to 1.5% - 3% (based on level) (+ 0.8% per 100 AP) of the target's maximum health per hit, chaining to up to 3 nearby visible enemies and being able to hit the same target multiple times, for a total of 9% - 18% (based on level) (+ 4.8% per 100 AP) of the target's maximum health. Each lightning strike deals a minimum of 40 - 160 (based on level) against minions and is capped at 15 (+ 100% bonus AD) (+ 50% AP) against monsters.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/q",
  "notes": "Deals  spell damage to the primary target and applies  area damage on the lightning strikes.\nThe lightning strikes can deal up to 9% : 18% (based on level) (+ 4.8% per 100 AP) of the target's maximum health bonus magic damage per empowered basic attack against an isolated target.\nIf both empowered attacks are used on the same isolated target, the lightning strikes can deal up to 18% : 36% (based on level) (+ 9.6% per 100 AP) of the target's maximum health bonus magic damage.\nThe lightning strikes from two separate empowered attacks can overlap with each other on the same target for additional damage.\n Spell shield will only block an empowered attack's application of the lightning strikes.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
