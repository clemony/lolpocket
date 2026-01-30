// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Grandmaster-at-Arms",
  "affects": "Enemies, Self",
  "blurb": "Passive:  Jax's  basic attacks generate  stacks. At max stacks, he consumes them to deal additional magic damage.",
  "castTime": "0.25",
  "cooldown": "110 / 100 / 90",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "375",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Jax's basic attacks generate a stack of Grandmaster-at-Arms on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack on-hit is empowered to have an uncancellable windup and consume all stacks to deal additional magic damage, reduced to 50% against structures. While Grandmaster-at-Arms is active, the empowered attack triggers at 1 stack instead.</p>",
      "leveling": [
        {
          "attribute": "Additional Magic Damage",
          "modifiers": [
            {
              "values": "75 / 130 / 185"
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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax swings his lantern around, dealing magic damage to nearby enemies. If this hits a champion, he gains bonus armor, increased for each champion hit beyond the first, and bonus magic resistance equal to 60% of that amount as well as 10% increased size for 8 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "100 / 175 / 250"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Bonus Armor",
          "modifiers": [
            {
              "values": "45 / 60 / 75"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Bonus Magic Resistance",
          "modifiers": [
            {
              "values": "27 / 36 / 45"
            },
            {
              "unit": "% bonus AD",
              "values": "24"
            }
          ]
        },
        {
          "attribute": "Bonus Armor per Champion Hit",
          "modifiers": [
            {
              "values": "20 / 25 / 30"
            },
            {
              "unit": "% bonus AD",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Bonus Magic Resistance per Champion Hit",
          "modifiers": [
            {
              "values": "12 / 15 / 18"
            },
            {
              "unit": "% bonus AD",
              "values": "6"
            }
          ]
        }
      ]
    },
    {
      "description": "Jax can move during Grandmaster-at-Arms' cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/r",
  "notes": "The on-hit deals  proc damage. The swing deals  area damage.\nThe bonus resistances are represented by a glowing aura around Jax that grows with each enemy champion hit beyond the first.\nThe additional magic damage can be  dodged and  blocked but it cannot  miss.\n Spell shield will only block the additional damage from the third attack if it is  empowered.\nThe empowered attack will trigger but not be consumed nor apply its effects against  wards.\nStacks will still be generated when attacking them.\nThe empowered attack is applied in a separate damage instance from Jax's basic attacks.\nThis causes effects like  Bone Plating to be applied twice.(note)\n\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "special",
  "targeting": "Auto"
}
  export default ability
