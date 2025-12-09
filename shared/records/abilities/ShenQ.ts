// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Twilight Assault",
  "width": "160",
  "affects": "Enemies",
  "blurb": "Active:  Shen recalls his Spirit Blade to his location, which shortly  slows enemies hit while moving away from him.",
  "castTime": "none",
  "cooldown": "8 / 7.25 / 6.5 / 5.75 / 5",
  "cost": "140 / 130 / 120 / 110 / 100",
  "damageType": "Magic damage",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shen recalls his Spirit Blade to his location. Enemy champions hit are slowed for the next 2 seconds while moving away from Shen.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "25 / 30 / 35 / 40 / 45"
            }
          ]
        }
      ]
    },
    {
      "description": "Once it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain 75 bonus range and deal bonus magic damage. Against structures, only the flat damage portion is applied.",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "10 / 11.76 / 13.53 / 15.29 / 17.06 / 18.82 / 20.59 / 22.35 / 24.12 / 25.88 / 27.65 / 29.41 / 31.18 / 32.94 / 34.71 / 36.47 / 38.24 / 40"
            },
            {
              "tooltip": "Scaling per rank:\n2 / 2.5 / 3 / 3.5 / 4% (+ 1.5% per 100 AP) of target's maximum health",
              "unit": "% (+ 1.5% per 100 AP) of target's maximum health",
              "values": "2 - 4"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "30 / 35.29 / 40.59 / 45.88 / 51.18 / 56.47 / 61.76 / 67.06 / 72.35 / 77.65 / 82.94 / 88.24 / 93.53 / 98.82 / 104.12 / 109.41 / 114.71 / 120"
            },
            {
              "tooltip": "Scaling per rank:\n6 / 7.5 / 9 / 10.5 / 12% (+ 4.5% per 100 AP) of target's maximum health",
              "unit": "% (+ 4.5% per 100 AP) of target's maximum health",
              "values": "6 - 12"
            }
          ]
        }
      ]
    },
    {
      "description": "If the Spirit Blade hits at least one enemy champion during the travel, the attacks are further enhanced to deal increased bonus magic damage and additionally grant Shen 50% bonus attack speed.",
      "leveling": [
        {
          "attribute": "Increased Bonus Damage",
          "modifiers": [
            {
              "values": "10 / 11.76 / 13.53 / 15.29 / 17.06 / 18.82 / 20.59 / 22.35 / 24.12 / 25.88 / 27.65 / 29.41 / 31.18 / 32.94 / 34.71 / 36.47 / 38.24 / 40"
            },
            {
              "tooltip": "Scaling per rank:\n5 / 5.5 / 6 / 6.5 / 7% (+ 2% per 100 AP) of target's maximum health",
              "unit": "% (+ 2% per 100 AP) of target's maximum health",
              "values": "5 - 7"
            }
          ]
        },
        {
          "attribute": "Total Increased Damage",
          "modifiers": [
            {
              "values": "30 / 35.29 / 40.59 / 45.88 / 51.18 / 56.47 / 61.76 / 67.06 / 72.35 / 77.65 / 82.94 / 88.24 / 93.53 / 98.82 / 104.12 / 109.41 / 114.71 / 120"
            },
            {
              "tooltip": "Scaling per rank:\n15 / 16.5 / 18 / 19.5 / 21% (+ 6% per 100 AP) of target's maximum health",
              "unit": "% (+ 6% per 100 AP) of target's maximum health",
              "values": "15 - 21"
            }
          ]
        }
      ]
    },
    {
      "description": "Empowered attacks against monsters deal 100% bonus damage, but their total damage is capped.",
      "leveling": [
        {
          "attribute": "Maximum Monster Damage",
          "modifiers": [
            {
              "values": "120 / 140 / 160 / 180 / 200"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/q",
  "notes": "The Spirit Blade will stop in place upon colliding with  Wind Wall or  Unbreakable. If this occurs, Shen will not receive the empowered attacks.\nWhen it is called, the Spirit Blade also checks for units which's  gameplay radius it overlaps which (equal to a  0 radius check) before flying off, allowing it to hit enemies whose center is behind the missile origin.\nThe empowered attack will not trigger against  wards.",
  "projectile": "SPECIAL",
  "resource": "Energy",
  "speed": "2000 - 5000",
  "spellEffects": "Proc",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
