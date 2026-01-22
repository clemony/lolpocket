// Updated Patch 15.24.1 - 12/26/2025 07:03:49 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Demacian Standard",
  "affects": "Self, Enemies",
  "blurb": "Passive:  Jarvan IV gains  bonus attack speed.",
  "castTime": "none",
  "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
  "cost": "55",
  "damageType": "Magic damage",
  "effectRadius": "200 / 1000 / 700",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Jarvan IV gains bonus attack speed.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 22.5 / 25 / 27.5 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jarvan IV throws a Demacian flag to the target location, dealing magic damage to enemies within the area.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "The flag then remains for 8 seconds, granting sight of its surroundings and providing an aura that grants Demacian Standard's passive bonus attack speed to all nearby allied champions as well as Jarvan IV himself."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/e",
  "notes": "The attack speed granted from a deployed Demacian Standard  stacks additively with Demacian Standard's passive permanent bonus attack speed to Jarvan IV, but the aura from multiple Demacian Standards does not stack.\nJarvan IV gains a total of 40 / 45 / 50 / 55 / 60% bonus attack speed from Demacian Standard while near the flag.\nThe flag has a 13.6  pathing radius and a 65  gameplay radius.\nThe gameplay radius matters to  Dragon Strike.\nDemacian Standard can be targeted by allied abilities ( Teleport,  Safeguard). The target type is the same as a  minion.\nDemacian Standard is  untargetable to enemies.",
  "resource": "Mana",
  "spellEffects": "Aoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "860"
}
export default ability
