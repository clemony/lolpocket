// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "R",
  "name": "The Show Stopper",
  "affects": "Enemies",
  "blurb": "Active:  Sett  carries the target enemy  champion and  dashes through the air with  displacement immunity, then slams them into the ground to deal physical damage to nearby enemies based on the target's bonus health. Enemies hit are also briefly  slowed.",
  "castTime": "none",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sett suppresses and reveals the target enemy champion while dashing with displacement immunity to their location and attaching them to himself upon arrival. He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly sliding forward 250 units beyond the impact.</p>"
    },
    {
      "description": "Enemies within the epicenter take physical damage, and other enemies hit by the shockwave take physical damage that is reduced by up to 75% based on proximity. All targets hit are slowed by 99% for 1 second.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            },
            {
              "tooltip": "Scaling per rank:\n40 / 50 / 60% of primary target's bonus health",
              "unit": "% of primary target's bonus health",
              "values": "40 - 60"
            }
          ]
        },
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "50 / 75 / 100"
            },
            {
              "unit": "% bonus AD",
              "values": "30"
            },
            {
              "tooltip": "Scaling per rank:\n10 / 12.5 / 15% of primary target's bonus health",
              "unit": "% of primary target's bonus health",
              "values": "10 - 15"
            }
          ]
        }
      ]
    },
    {
      "description": "The leap will end and create the impact prematurely upon encountering terrain that cannot be dashed through, whether by distance or invalid space."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/r",
  "notes": "The Show Stopper's attachment depends on the  suppression; if the target does not remain suppressed by the end of the dash, they are not attached to Sett when he arrives to them. Similarly, if the suppression is removed, so is the attachment.\nSett will still dash to the target and leap forward from them to trigger the shockwave afterwards even if he fails to attach the target to him.\nIf the target resists the suppression by being  immune to crowd control,  displacement immune, or having a  spell shield, Sett will not attach them to himself.\nIf the target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will instantly detach themselves from Sett.\nNeither his dash nor leap are interrupted in this case.\nSett's slide dash after completing the leap dash cannot pass through terrain.\nSett is  displacement immune during both the initial dash and the leap after that dash, as well as for a short duration during his slide beyond on the impact.\nThe target is  revealed specifically while they are suppressed.\nIf the target is  untargetable when Sett completes their dash to them, The Show Stopper will be cancelled immediately.\nIn this case, Sett will not leap forward nor attach to the target to himself and the suppression is removed from the target.\nIf the target moves 2000 units or more away from their location at the time of The Show Stopper's cast before Sett completes their dash to them, Sett will fail to attach the target to him.\nThe target will remain suppressed for 5 seconds if this occurs.(bug)\nThe Show Stopper will be cancelled if either Sett's dash or leap is cancelled during the ability by any means.\nThe former causes Sett to not leap forward nor attach to the target to himself and the suppression to be removed from the target.\nThe latter causes Sett to detach the target from himself instantly and the suppression to be removed from the target.\nThe Show Stopper will not be cancelled if the target dies or enters  resurrection during the effect.\nAt maximum cast range and if the dash is not shortened due to terrain in Sett's way, The Show Stopper's movement takes 1.5 seconds, causing the slam within 1.23 seconds.\nIf Sett enters  resurrection right before completing his initial dash, he will still leap forward from the target.(bug)\nThe \"crater\" VFX originates from the target's landing, which inaccurately illustrates the damage's area of effect (from Sett).(note)",
  "spellEffects": "aoe",
  "spellshieldable": "true",
  "targeting": "Unit",
  "targetRange": "400"
}
export default ability
