// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Lightning Crash",
  "affects": "Self, Enemies",
  "blurb": "Active:  Zeri explodes to deal magic damage to nearby enemies. If this hits at least one enemy champion, she enters Overcharged for a few seconds. Damaging an enemy will extend Overcharged.",
  "castTime": "0.25",
  "cooldown": "80 / 75 / 70",
  "cost": "100",
  "damageType": "Other damage",
  "effectRadius": "825",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zeri discharges an electric nova that deals magic damage to nearby enemies. If this hits at least one enemy champion, she enters Overcharged for 5 seconds. Hitting an enemy champion with an ability or charged attack will extend the duration by 1.5 seconds, up to its original duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            },
            {
              "unit": "% AP",
              "values": "110"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Overcharged:</span> Zeri gains 10% bonus movement speed and 30% bonus attack speed that is allowed to exceed her attack speed cap by the amount gained. Burst Fire is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 40% AD physical damage. This damage is affected by critical strike modifiers.</p>"
    },
    {
      "description": "During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds. She generates 1 stack for each one she hits with an ability or charged attack, increased to 3 on abilities that critically strike. Subsequent hits refresh the duration of Hypercharged. Burst Fire grants stacks only against the first target hit."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Hypercharged:</span> For each stack, Zeri gains 1% bonus movement speed.</p>"
    },
    {
      "description": "Zeri can move during Lightning Crash's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/r",
  "notes": "Lightning Crash does not interrupt Zeri's previous orders.\nZeri can stack Hypercharged up to 100,000 times.\nApplies  area damage for the nova and  proc damage for the chain lightning.\n Spell shield blocks Lightning Crash's initial nova but does not prevent Zeri from becoming Overcharged.\nIt does not block  Burst Fire's electricity chain.\n Clones count for granting Overcharge.\nLightning Crash's and  Spark Surge's empowerments to  Burst Fire can combine together.\n Burst Fire electricity chain will not chain across structures.\nEntering  resurrection causes Zeri to lose all stacks of Hypercharged.\nOvercharged is not removed, however.(note)\nZeri will not be able to gain stacks of Hypercharged again after reviving while Overcharged is active.(bug)\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "special",
  "targeting": "Auto"
}
  export default ability
