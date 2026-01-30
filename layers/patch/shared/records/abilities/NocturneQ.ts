// Updated Patch 16.1 - 01/29/2026 04:26:58 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Duskbringer",
  "width": "120",
  "affects": "Self, Enemies",
  "blurb": "Active:  Nocturne casts out a shadow blade in the target direction that leaves a Dusk Trail in its wake, dealing physical damage to enemies hit. Enemy  champions hit will leave a Dusk Trail in their wake for a few seconds.",
  "castTime": "0.25",
  "cooldown": "8",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Physical damage",
  "effectRadius": "150",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nocturne casts out a shadow blade in the target direction that leaves a Dusk Trail in its wake, dealing physical damage to enemies hit. Enemy champions and large monsters hit will leave a Dusk Trail behind while moving. Dusk Trails last 5 seconds and will slowly disappear afterwards.</p>",
      "leveling": [
        {
          "attribute": "Physical damage",
          "modifiers": [
            {
              "values": "65 / 110 / 155 / 200 / 245"
            },
            {
              "unit": "% bonus AD",
              "values": "85"
            }
          ]
        }
      ]
    },
    {
      "description": "While on the Dusk Trail, Nocturne is ghosted and gains bonus attack damage and bonus total movement speed.",
      "leveling": [
        {
          "attribute": "Bonus Attack Damage",
          "modifiers": [
            {
              "values": "15 / 25 / 35 / 45 / 55"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 20 / 25 / 30 / 35"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/q",
  "notes": "Duskbringer checks for and hits targets 25 units outside of the missile's maximum range.\nDuskbringer's damage is not increased by the bonus AD gained from its trail, meaning that casting it again while on the trail from the last cast will not result in higher damage.\nIt is observed from seasons ago that this is intentionally hard-coded into the ability to avoid the projectile increasing its own damage. This feature is somewhat deprecated as it also limits chain-casting Duskbringer.\nDuskbringer's Dusk Trail will expose the path of affected units until its duration ends. It is a form of  obscured vision; the trail indirectly reveals the location of enemy units even in the fog of war, including those shrouded by  stealth.\n Spell shield will block the damage and also prevents the Dusk Trail from following the target.\nThe formed Dusk Trail does not disappear if Duskbringer is intercepted by  Wind Wall or  Unbreakable.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
  export default ability
