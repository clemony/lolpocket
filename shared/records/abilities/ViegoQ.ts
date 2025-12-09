// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Blade of the Ruined King",
  "width": "125",
  "affects": "Self, Enemies",
  "blurb": "Passive:  Viego's basic attacks deal bonus physical damage based on the target's current health. Additionally, Viego's damaging abilities apply a mark to enemies hit. His next basic attack will consume the mark to strike twice, dealing additional modified physical damage and  healing him.",
  "castTime": "140% of Viego's windup time (0.35 at base attack speed)",
  "cooldown": "5 / 4.5 / 4 / 3.5 / 3",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Viego's basic attacks are empowered to deal bonus physical damage on-hit. This damage is affected by critical strike modifiers, has a minimum threshold and is capped at 80 against monsters.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "unit": "% of target's current health",
              "values": "2 / 3 / 4 / 5 / 6"
            }
          ]
        },
        {
          "attribute": "Minimum Bonus Damage",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Additionally, his damaging abilities apply a mark to enemies hit for 4 seconds. Viego's next basic attack against a marked target is empowered to consume the mark on-hit to strike a second time, dealing 20% AD (+ 15% AP) physical damage. He also heals himself for a portion of the post-mitigation damage dealt by the second strike:</span> 100% against minions, 125% against monsters, and 150% against other targets.</p>"
    },
    {
      "description": "The second strike applies on-hit effects and can critically strike for (175% + 40%) damage."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viego stabs in a line in the target direction that deals physical damage to enemies hit. The stab's damage is increased by 0% - 75% (based on critical strike chance).</p>",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "25 / 40 / 55 / 70 / 85"
            },
            {
              "unit": "% AD",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "43.75 / 70 / 96.25 / 122.5 / 148.75"
            },
            {
              "unit": "% AD",
              "values": "122.5"
            }
          ]
        }
      ]
    },
    {
      "description": "Blade of the Ruined King's passive remains under Possession, and while transformed, the second strike is instead converted to bonus damage on-hit which no longer applies on-hit effects but can still critically strike (based on the Possession's stats, abiilities and / or item effects)."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/q",
  "notes": "The mark will not be applied to the primary target struck by  Heartbreaker, but it can triggered from it.\nThe second strike rolls  critical strikes independently from the primary attack.\nThe ability's cast time respects the attack speed floor and cap.\nApplies  area damage for the thrust,  basic damage for the second strike, and  proc damage for the bonus damage on-hit.\nThis ability will cast from wherever the caster is at the end of the cast time.\nViego will not perform the second strike if the first attack was  dodged,  blocked, and  missed.\nIf the second strike hits a dead unit, Viego will still  heal based on the post-mitigation damage that he would deal with it.\nThe attacks do not deal the bonus damage against  structures.\nThe mark does not cause Viego to attack twice. Effects that trigger  on-attack or interact with the attack windup will only trigger once and thus do not interact with Blade of the Ruined King. (e.g.  Lethal Tempo,  Hail of Blades).",
  "projectile": "FALSE",
  "spellEffects": "special",
  "spellshieldable": "true",
  "targeting": "Direction"
}
export default ability
