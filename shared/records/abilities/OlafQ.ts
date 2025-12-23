// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Undertow",
  "width": "180",
  "affects": "Enemies",
  "blurb": "Active:  Olaf throws an axe to the target location that deals physical damage to enemies it passes through, briefly  slowing them based on distance travelled. Enemy  champions hit also have  reduced armor for a few seconds.",
  "castTime": "0.25",
  "cooldown": "9",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Physical damage",
  "effectRadius": "100 / 250 / 300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Olaf throws an axe to the target location that deals physical damage to enemies it passes through and slows them for 1.5 - 2.5 (based on distance traveled) seconds. Enemy champions hit are also inflicted with 20% armor reduction for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "60 / 110 / 160 / 210 / 260"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        },
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
      "description": "Undertow deals bonus physical damage against monsters.",
      "leveling": [
        {
          "attribute": "Monster Bonus Physical Damage",
          "modifiers": [
            {
              "values": "10 / 25 / 40 / 55 / 70"
            }
          ]
        },
        {
          "attribute": "Total Monster Damage",
          "modifiers": [
            {
              "values": "70 / 135 / 200 / 265 / 330"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "The axe remains in place for a duration equal to Undertow's cooldown, granting sight of its surroundings for 0.5 seconds. Olaf can pick up the axe to reduce Undertow's current cooldown to 2.5 - 0 (based on seconds elapsed since axe landed)."
    },
    {
      "description": "Nearby monsters are granted ghosting for 5 seconds upon Undertow's cast."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/q",
  "notes": "Undertow may hit additional targets upon landing, but not targets already struck in-flight.\nThe axe will land approximately 50 units further than Undertow's target range if cast below maximum range.\nProjectile-intercepting effects (e.g.  Wind Wall,  Unbreakable) cannot destroy the axe, they will instead cause it to stop prematurely and remain on the ground upon collision.\nThe timer for how long an axe stays on the ground does not begin until it has landed, thus it is possible to throw another axe before retrieving the first.\nOlaf cannot pick up an enemy Olaf's axe on the ground.\nThis ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "1600",
  "spellEffects": "Aoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "425 / 1000"
}
export default ability
