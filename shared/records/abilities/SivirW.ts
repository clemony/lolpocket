// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Ricochet",
  "affects": "Self",
  "blurb": "Active:  Sivir gains  bonus attack speed for a few seconds. During this time, her basic attacks create projectiles that repeatedly bounce to nearby surrounding enemies, dealing physical damage.",
  "castTime": "none",
  "cooldown": "12",
  "cost": "60",
  "damageType": "Physical damage",
  "effectRadius": "500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sivir empowers her crossblade for the next 4 seconds, gaining bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing physical damage to them. If the triggering attack critically strikes, the bounces will do so as well for (175% + 40%) damage. Ricochet deals 65% damage against minions and executes them if they would be left below 15 health.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        },
        {
          "attribute": "Bounce Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "40 / 42.5 / 45 / 47.5 / 50"
            }
          ]
        },
        {
          "attribute": "Bounce Critical Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "70 / 74.38 / 78.75 / 83.13 / 87.5"
            }
          ]
        },
        {
          "attribute": "Minion Bounce Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "26 / 27.63 / 29.25 / 30.88 / 32.5"
            }
          ]
        },
        {
          "attribute": "Minion Bounce Critical Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "45.5 / 48.34 / 51.19 / 54.03 / 56.88"
            }
          ]
        }
      ]
    },
    {
      "description": "Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available."
    },
    {
      "description": "Ricochet resets Sivir's basic attack timer if it was not already active. The target does not have to be visible to be bounced to."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/w",
  "notes": "Ricochet-enhanced basic attacks can bounce from structures onto secondary targets but not from nearby units onto structures.\nPENDING FOR TEST:: Ricochet's  interactions with  dodging,  blocking, and  blinding effects.\nRicochet do not apply to additional targets with  Runaan's Hurricane.\nSivir's attack timer will only reset from casting Ricochet if the ability's buff was not already active on her. Refreshing the buff will not grant an attack reset.(bug)",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1750 / 1000",
  "spellEffects": "default",
  "spellshieldable": "False",
  "targeting": "Auto"
}
export default ability
