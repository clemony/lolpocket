// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Nature's Grasp",
  "width": "240",
  "affects": "Enemies",
  "blurb": "Active:  Maokai summons a colossal wall of five thorny brambles that slowly advances in the target direction, each stopping when they collide with an enemy  champion.",
  "castTime": "0.5",
  "cooldown": "130 / 110 / 90",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai summons a colossal wall of five thorny brambles that slowly advances in the target direction, accelerating over time, each stopping when they collide with an enemy champion. Hitting at least one enemy champion grants Maokai bonus movement speed decaying over 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 50 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "Each bramble deals magic damage to enemies hit and roots them for 0.75 - 2.25 (based on distance traveled) seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 225 / 300"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/r",
  "notes": "The brambles are made up of 4  missiles each which trail 100 units behind one another. The front missile carries the visual effect. When colliding with a champion, all missiles of one bramble are destroyed simultaneously.\nMissiles destroyed by other means such as  Samira's  Blade Whirl may not destroy their fellows from the same branch, resulting in one or more invisible missiles that may still collide.(bug)\nThis ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "100 / 400 / 700 / 750 (based on seconds active)",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "3000"
}
export default ability
