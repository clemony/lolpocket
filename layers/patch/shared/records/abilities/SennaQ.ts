// Updated Patch 16.1 - 01/29/2026 04:27:07 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Piercing Darkness",
  "width": "100 / 280",
  "affects": "Allies, Enemies, Turrets, Wards",
  "blurb": "Active:  Senna fires a spectral laser toward the target unit. Senna and allied champions hit are  healed. Enemies hit are dealt physical damage, which applies  life steal and  on-hit effects, and  slowed for a short time.",
  "castTime": "80% of Senna's windup time (0.4 at base attack speed)",
  "cooldown": "15",
  "cost": "70 / 80 / 90 / 100 / 110",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Senna fires a beam in the direction of the target unit. The beam consists of a wider ray of light, and a narrower ray of shadow at the center.The shadow ray deals physical damage to enemies hit and slows them by 15% (+ 15% per 100 bonus AD) (+ 10% per 100 AP) for a duration. The damage dealt to enemy champions applies life steal at 100% effectiveness.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "30 / 60 / 90 / 120 / 150"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Slow Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.25 / 1.5 / 1.75 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "The light ray heals Senna and allied champions hit.",
      "leveling": [
        {
          "attribute": "Healing",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
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
      "description": "Piercing Darkness is considered to trigger a single basic attack against turrets, wards, jungle plants, Mist Wraiths and any other attack-interactive units hit. It also applies on-hit effects against champions and turrets hit."
    },
    {
      "description": "Piercing Darkness' current cooldown is reduced by 1 second on-hit."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/q",
  "notes": "The ability's cast time respects the attack speed floor and cap.\nPiercing Darkness also applies most  on-attack effects to one enemy champion struck, and ocassionally to two.(note)\n Hail of Blades will spend a stack on hitting a champion with Piercing Darkness but only if  Hail of Blades was activated first by an auto-attack.\nSenna can generally target anything that is not either explicitly  untargetable or herself.\nValid targets include anything that can be targeted by a basic attack from someone.\nPiercing Darkness respects all  turret-specific rules when striking them.\nOn-hit effects are applied in order of struck units' spawn IDs. This matters for effects that are consumed on-hit (e.g.  Spellblade), which are applied to the target with the lowest Spawn ID.\n\"Spawn ID\" is an unofficial abbreviation to describe the spawn order for all units at the start of a game, below are some examples.\nIf Senna targets an enemy champion but hits at least one more enemy champion simultaneously,  Press the Attack's first stack will be applied to that target. If no champion was targeted, it will default to the champion with the lowest Spawn ID out of the ones struck by the ability. Whether the effect stacks up on a champion or not when multiple enemy champions are stuck also depends on Spawn ID.\nIf Piercing Darkness struck an enemy champion and turret simultaneously, with  Rapid Firecannon fully charged, the passive effect will most likely trigger on the turret since towers are often spawned before champions.\nFor on-attack effects, they are also applied in order of struck units' spawn IDs. However, there are some specific on-attack effects that will apply to both the target of Piercing Darkness and the target with the lowest Spawn ID if the two unit is not identical.(note) Confirmed cases:\nEnergized effects are stacked twice the amount.\nPENDING FOR TEST:\n Spell shield will not prevent on-hit effects from being applied.\nPENDING FOR TEST: Piercing Darkness interaction with  dodging,  blocking, and  blinding effects.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "AoE",
  "spellshieldable": "special",
  "targeting": "Unit",
  "targetRange": "600 : 1100"
}
  export default ability
