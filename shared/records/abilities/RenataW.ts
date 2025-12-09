// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Bailout",
  "blurb": "Active:  Renata grants herself or the target allied champion ramping  bonus attack speed in addition to  bonus movement speed toward enemies. Bailout's duration resets whenever the target scores a  takedown against an enemy champion.",
  "castTime": "none",
  "cooldown": "28 / 27 / 26 / 25 / 24",
  "cost": "80",
  "effectRadius": "1300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renata infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target bonus attack speed and bonus movement speed while they are facing nearby visible enemy champions or minions, with both of the bonuses increasing in effectiveness by 0% - 100% (based on seconds elapsed). Bailout's duration resets whenever the target scores a takedown against an enemy champion within 6 seconds of damaging them.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% per 100 AP",
              "values": "1"
            }
          ]
        },
        {
          "attribute": "Maximum Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 30 / 40 / 50 / 60"
            },
            {
              "unit": "% per 100 AP",
              "values": "2"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 12.5 / 15 / 17.5 / 20"
            },
            {
              "unit": "% per 100 AP",
              "values": "1"
            }
          ]
        },
        {
          "attribute": "Maximum Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            },
            {
              "unit": "% per 100 AP",
              "values": "2"
            }
          ]
        }
      ]
    },
    {
      "description": "If the target takes fatal damage while Bailout is active, they are restored to 100% of their maximum health but suffer a true damage burn equal to 10% of their maximum health every 0.264 seconds until they reach 0 health, during which Bailout's duration is reset every 0.25 seconds. This effect may occur only once per application of Bailout while the target already has the buff and is not burning.The burn will stop once the target scores a takedown against an enemy champion within 6 seconds of damaging them, setting their current health to 20% of their maximum health immediately afterwards."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Renata/ability-icon/w",
  "notes": "Damage taken in excess of the fatal damage taken does not apply to the target's health after it was restored.\nThe self-damage taken is considered  raw damage and is calculated based on the target's maximum health at the time of taking lethal damage.\nBailout's bonuses will not reset in effectiveness if its duration is refreshed.\nBailout takes priority over all  resurrection and  zombie state effects.\nBailout will stop refreshing its duration while the target is burning after 250 seconds have elapsed.\nBailout cannot be used on  clones nor  zombie state units.\nIf Bailout is cast on a target that is already burning from a previous Bailout cast, they can trigger a subsequent health restore as well as be inflicted with another burn. This may occur an infinite number of times as long as the target stays burning and does not reach 0 health.\nCasting Bailout on a target that already has the buff will only refresh the duration (without resetting the bonuses).\nIf the target takes fatal damage during Bailout, upon destroying a turret while being targeted by it, they will receive their own Shut-Down gold (specifically ignoring the base bounty) instead of being executed.(bug)",
  "resource": "Mana",
  "targeting": "Unit",
  "targetRange": "800"
}
export default ability
