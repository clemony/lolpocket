// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Explosive Charge",
  "affects": "Enemies",
  "blurb": "Passive: Enemies explode when killed by  Tristana's basic attacks, dealing magic damage to nearby enemies.",
  "castTime": "100% of Tristana's windup time (0.23 at base attack speed)",
  "cooldown": "16 / 15.5 / 15 / 14.5 / 14",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Physical damage",
  "effectRadius": "300 / 300 / 600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Tristana's basic attacks are empowered to trigger an explosion when they kill the target, dealing magic damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "45 / 60 / 75 / 90 / 105"
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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tristana tosses an explosive charge at the target enemy that attaches to them for 4 seconds. The charge then detonates, dealing physical damage to nearby enemies. Explosive Charge can target and damage turrets, and explodes in a larger radius on a turret.</p>",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "60 / 70 / 80 / 90 / 100"
            },
            {
              "unit": "% bonus AD",
              "values": "100 / 110 / 120 / 130 / 140"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Tristana's basic attacks on-hit and abilities against the target increase Explosive Charge's damage by 25%, stacking up to 4 times for a maximum 100% increase, upon which the charge also detonates instantly. The charge's total damage is additionally increased by 0% - 75% (based on critical strike chance) (+ 0% - 40% (based on critical strike chance).",
      "leveling": [
        {
          "attribute": "Bonus Damage Per Stack",
          "modifiers": [
            {
              "values": "15 / 17.5 / 20 / 22.5 / 25"
            },
            {
              "unit": "% bonus AD",
              "values": "25 / 27.5 / 30 / 32.5 / 35"
            },
            {
              "unit": "% AP",
              "values": "12.5"
            }
          ]
        },
        {
          "attribute": "Full Stack Bonus Damage",
          "modifiers": [
            {
              "values": "60 / 70 / 80 / 90 / 100"
            },
            {
              "unit": "% bonus AD",
              "values": "100 / 110 / 120 / 130 / 140"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Full Stack Physical Damage",
          "modifiers": [
            {
              "values": "120 / 140 / 160 / 180 / 200"
            },
            {
              "unit": "% bonus AD",
              "values": "200 / 220 / 240 / 260 / 280"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "If Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the knock back or the 4 seconds expire."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/e",
  "notes": "Explosive Charge's cast time is always 100% of the caster's attack windup time.\nAt base attack speed, Tristana's attack windup is 0.225625 seconds.\nAn easy formula to calculate the cast time is [ 0.14801 seconds divided by total attack speed ].\nReducing Tristana's attack speed via  attack speed reductions also increases Explosive Charge's cast time by the same fraction.\nIt is calculated from Tristana's total attack speed after cap (3.003) and floor (0.2), making the maximum possible cast time 0.759 seconds.\nTristana will be automatically ordered to basic attack the target after the cast time.\nExplosive Charge's initial application deals 0 physical damage, triggering  turret aggro.\nIt also triggers a  stack of effects such as  Electrocute.\nAll explosions by Explosive Charge's passive count as the same cast instance. Every cast of the active is a separate cast instance:\nHitting a champion with the passive by killing a nearby unit, casting the active on them (see note above) and landing a basic attack against them triggers  Electrocute.\nHitting a champion with the passive by killing a nearby unit, casting the active on them and hitting them again with the Passive by killing another nearby unit does not trigger  Electrocute.\n Dodge,  block and  blind all prevent Explosive Charge's stack application via basic attacks.\nExplosive Charge's detonation will deal damage to the primary target even if they have become  untargetable.\nExplosive Charge's stacks from basic attacks are applied as an  on-hit effect and will therefore interact with  Guinsoo's Rageblade's Phantom Hit and  Runaan's Hurricane's bolts.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2400",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "550 : 700 (based on level)"
}
export default ability
