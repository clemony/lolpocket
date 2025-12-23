// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Sweeping Blade",
  "affects": "Enemies",
  "blurb": "Active:  Yasuo  dashes in the target enemy's direction, dealing magic damage,  briefly becoming  ghosted, and generating a stack of Ride the Wind for a few seconds, stacking up to a cap.",
  "castTime": "none",
  "cooldown": "0.5 / 0.4 / 0.3 / 0.2 / 0.1",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yasuo dashes a fixed distance in the direction of the target enemy and becomes ghosted for 2 seconds, refreshing on subsequent casts. Upon impact, he deals magic damage to the target and generates a stack of Ride the Wind for 5 seconds, which refreshes on subsequent hits and stacks up to 4 times.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 85 / 100 / 115 / 130"
            },
            {
              "unit": "% bonus AD",
              "values": "20"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ride the Wind:</span> Sweeping Blade's damage is increased by 25% per stack, up to 100% at maximum stacks.</p>",
      "leveling": [
        {
          "attribute": "Bonus Damage per Stack",
          "modifiers": [
            {
              "values": "17.5 / 21.25 / 25 / 28.75 / 32.5"
            },
            {
              "unit": "% bonus AD",
              "values": "5"
            },
            {
              "unit": "% AP",
              "values": "15"
            }
          ]
        },
        {
          "attribute": "Maximum Bonus Damage",
          "modifiers": [
            {
              "values": "70 / 85 / 100 / 115 / 130"
            },
            {
              "unit": "% bonus AD",
              "values": "20"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Total Combined Damage",
          "modifiers": [
            {
              "values": "140 / 170 / 200 / 230 / 260"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "Sweeping Blade can be cast on the same target only once every few seconds."
    },
    {
      "description": "Yasuo will be knocked down by any immobilizing or polymorphing crowd control during the dash."
    },
    {
      "description": "Last Breath can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/e",
  "notes": "If  Steel Tempest has been buffered,  Wind Wall may also be cast during the dash.(note)\nSweeping Blade will generate 7.5  Flow stacks per cast that travels the maximum distance.\nYasuo can use Sweeping Blade's fixed dash distance to cross walls both before and after hitting his target (provided his proximity to the wall and/or target allows it).\nAfter Sweeping Blade, Yasuo becomes  ghosted for a moment to prevent situations where he would face extreme cases of body block.\n Sleep does not count for knocking the dash down.(bug)",
  "onTargetCdStatic": "10 / 9 / 8 / 7 / 6",
  "speed": "750 + 60% movement speed",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "475"
}
export default ability
