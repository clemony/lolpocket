// Updated Patch 15.23.1 - 11/30/2025 12:24:03 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Glacial Prison",
  "width": "240",
  "affects": "Enemies",
  "blurb": "Active:  Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and briefly  stunning them.",
  "castTime": "0.25",
  "cooldown": "130 / 110 / 90",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "450 /  450 /  300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and stunning them for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "125 / 150 / 175"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "If the bola travels at least 425 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased magic damage and stunning for 1.5 seconds instead. For the same duration, a frost storm is created around the location of the detonation that slows enemies within by 30% and grants sight of the area in a smaller radius.",
      "leveling": [
        {
          "attribute": "Increased Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
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
      "description": "After 2 seconds, the storm shatters to deal the increased magic damage to enemies within and slow them by 80% for 1 second, as well as revealing them and granting sight of the area for 0.5 seconds."
    },
    {
      "description": "The enemy hit by the bola is not affected by the storm's effects."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/r",
  "notes": "Applies  spell damage to the primary target and  area damage to secondary targets in the ice storm.\n Spell shields will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.\nBoth areas of effect will be centered on the first champion struck, not at the location the missile collided with them.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600",
  "spellEffects": "Special",
  "spellshieldable": "Special",
  "targeting": "Direction",
  "targetRange": "1300"
}
export default ability
