// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Twin Bite",
  "affects": "Enemies",
  "angle": "180°",
  "blurb": "Active:  Shyvana's next  basic attack within a few seconds will cause her to quickly strike again, dealing bonus physical damage.",
  "castTime": "none",
  "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "325 /  250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana empowers her next basic attack within 6 seconds to gain 25 bonus range, deal 100% AD (+ 50% AP) physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies on-hit effects, triggers on-attack effects, and can critically strike for (175% + 40%) damage if the triggering attack does.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "20 / 40 / 60 / 80 / 100"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "After consuming the empowered attack, her next two basic attacks within 5 seconds gain bonus attack speed.",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "50 / 55 / 60 / 65 / 70"
            }
          ]
        }
      ]
    },
    {
      "description": "Basic attacks reduce Twin Bite's current cooldown by 0.5 seconds on-hit."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> Shyvana attacks enemies in a cone in front of her and additionally applies the second strike to enemies surrounding the primary target. Both the attack and the strike occur at the same time and each of them apply Twin Bite's respective effects to all targets hit, with the exception of the second strike not triggering on-attack effects for secondary targets struck. The attack is affected by critical strike modifiers, applies on-hit effects to all enemies hit, and triggers on-attack effects for every target hit. Additionally, Twin Bite's empowered attack has an uncancellable windup.</p>"
    },
    {
      "description": "Twin Bite resets Shyvana's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/q",
  "notes": "Applies  spell damage and procs  basic damage required effects.\nPENDING FOR TEST: Dragon Form's Twin Bite can attack  stealthed units in the area.\nDragon Form's Twin Bite only applies the attack to enemies that would be hit by the second strike.\nIn Dragon Form, both strikes belong to the same cast instance. In Human Form, they belong in separate ones.\nSince the second strike applies after the ability goes on cooldown, it will reduce its own cooldown.\nUnlike most  on-hit effects, the one reducing the cooldown of Twin Bite also triggers against  structures.\nIn Dragon Form, Twin Bite consumes an additional stack of  Hail of Blades. (bug)\nThe initial empowered attack rolls a  critical strike once for both strikes; either both will critically strike, or none will. If  Sundered Sky's Lightshield Strike is ready, bothq strikes will critically strike.",
  "spellEffects": "special",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
