// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Switcheroo!",
  "affects": "Self",
  "blurb": "Toggle:  Jinx switches between Pow-Pow, her minigun, and Fishbones, her rocket launcher.",
  "castTime": "none",
  "cooldown": "0.9",
  "cost": "20",
  "damageType": "Physical damage",
  "effectRadius": "250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Jinx switches between Pow-Pow, her minigun, and Fishbones, her rocket launcher.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Pow-Pow:</span> Basic attacks with Pow-Pow generate a stack of Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times. Each stack of Rev'd up grants bonus attack speed, with all stacks beyond the first one being 50% effective. Stacks expire one by one when the duration ends.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 27.5 / 40 / 52.5 / 65"
            }
          ]
        },
        {
          "attribute": "Attack Speed per Subsequent Stack",
          "modifiers": [
            {
              "unit": "%",
              "values": "7.5 / 13.75 / 20 / 26.25 / 32.5"
            }
          ]
        },
        {
          "attribute": "Maximum Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 55 / 80 / 105 / 130"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Fishbones:</span> Basic attacks with Fishbones cost mana on-attack to deal 110% AD modified physical damage to the target and nearby enemies. The damage is affected by critical strike modifiers. While Fishbones is equipped, Jinx gains bonus range but loses 10% of her bonus attack speed.</p>",
      "leveling": [
        {
          "attribute": "Bonus Range",
          "modifiers": [
            {
              "values": "100 / 125 / 150 / 175 / 200"
            }
          ]
        }
      ]
    },
    {
      "description": "Only the first attack after switching to Fishbones will benefit from Rev'd up."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/q",
  "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDespite Jinx starting the game using  Pow-Pow she doesn't receive any bonus attack speed until Switcheroo! has been learned.\n Fishbones splash damage affects structures (minions will target Jinx) but does not affect targets if Jinx's attacks are  blocked,  dodged, or  missed.\n Runaan's Hurricane's Wind's Fury bolts are special-cased to generate one  Pow-Pow stack per enemy hit.\nEach of  Runaan's Hurricane's additional bolts apply  Fishbones' splash damage, which stacks with each other.\nBoth weapons deal  basic damage to their primary target (this includes the increased damage of  Fishbones), which applies  life steal based on the damage dealt (post-mitigation) as usual.\nThe splash damage of  Fishbones is based on the pre-mitigation damage done to the primary target (which includes critical strikes), and is not considered modified physical damage. It deals  default damage: It doesn't apply  life steal or  on-hit effects.\n Fishbones damage: 110% AD (100% + 10%).\n Fishbones critical strike damage: 192.5% AD ((100% + 10%) × 1.75).\n Fishbones critical strike damage with  Infinity Edge: 236.5% AD ((100% + 10%) × 2.15).\n Fishbones  bolt damage: 60.5% AD ((100% + 10%) ×  0.55).\n Fishbones  bolt critical strike damage: 105.875% AD ((100% + 10%) ×  0.55 × 1.75).\n Fishbones  bolt critical strike damage with  Infinity Edge: 130.075% AD ((100% + 10%) ×  0.55 × 2.15).\n Fishbones potential damage on stacked enemies with  Runaan's Hurricane: 231% AD (110% + 60,5% + 60,5%).\n Fishbones potential critical strike damage on stacked enemies with  Runaan's Hurricane: 404.25% AD ((110% + 60,5% + 60,5%) × 1.75).\n Fishbones potential critical strike damage on stacked enemies with  Runaan's Hurricane and  Infinity Edge: 496.65% AD ((110% + 60,5% + 60,5%) × 2.15).",
  "resource": "Other",
  "spellEffects": "special",
  "spellshieldable": "False",
  "targeting": "Auto"
}
  export default ability
