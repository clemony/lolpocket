// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Mocking Shout",
  "affects": "Enemies",
  "blurb": "Active:  Tryndamere reduces the  attack damage of nearby champions for a few seconds. Targets facing away from him are also  slowed.",
  "castTime": "0.3",
  "cooldown": "14",
  "cost": "0",
  "effectRadius": "850",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tryndamere reduces the bonus attack damage of nearby enemy champions for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Attack Damage Reduction",
          "modifiers": [
            {
              "values": "20 / 35 / 50 / 65 / 80"
            }
          ]
        }
      ]
    },
    {
      "description": "Targets facing in the opposite direction of Tryndamere are also slowed for the duration.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 37.5 / 45 / 52.5 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "A nearby enemy champion is required to cast this ability. The target does not have to be visible to be targeted by this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/w",
  "notes": "Mocking Shout very briefly  reveals Tryndamere if he uses it while in the fog of war to enemies.\nMocking Shout prevents Tryndamere from using Undying Rage during its cast time.\nIf the attack damage reduction would reduce the target's bonus attack damage below 0, the target's base attack damage value is unaffected, but their total attack damage will still be reduced. The target will however retain a bonus attack damage value of 0.\nEffects that scale with total attack damage, such as basic attacks, will take the attack damage reduction into account for their calculations.\nThose that have a ratio for base attack damage or bonus attack damage do not take the reduction into account.\nMocking Shout's  attack damage reduction is worth   − 700 / 1225 / 1750 / 2275 / 2800 per enemy hit.",
  "spellshieldable": "True",
  "targeting": "Proximity"
}
export default ability
