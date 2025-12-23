// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Grasping Roots",
  "width": "140 / 560",
  "affects": "Enemies",
  "blurb": "Active:  Zyra shoots a surge of vines in the target direction that deals magic damage to enemies hit and briefly  roots them.",
  "castTime": "0.25",
  "cooldown": "11",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zyra shoots a surge of vines in the target direction that deals magic damage to enemies hit and roots them for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 95 / 130 / 165 / 200"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Root Duration",
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
      "description": "If Grasping Roots hits a Seed, it sprouts into a Vine Lasher that lasts for 8 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/e",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nZyra will be locked out of actions for 0.15 seconds after casting Grasping Roots.\nEach  Vine Lasher will generate 2 stacks of  Conqueror and 1 stack of each of  Phase Rush and  Electrocute.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1150",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "1100 / 1200"
}
export default ability
