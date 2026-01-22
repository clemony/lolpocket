// Updated Patch 15.24.1 - 12/26/2025 07:03:56 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Ice Shard",
  "width": "150 / 180",
  "affects": "Enemies",
  "blurb": "Active:  Lissandra throws a spear of ice in the target direction that  slows the first target hit and deals magic damage to all enemies it passes through.",
  "castTime": "0.25",
  "cooldown": "8 / 7 / 6 / 5 / 4",
  "cost": "55 / 60 / 65 / 70 / 75",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lissandra launches a shard of ice in the target direction that deals magic damage and slows enemies hit for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 115 / 150 / 185 / 220"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 24 / 28 / 32 / 36"
            }
          ]
        }
      ]
    },
    {
      "description": "If Ice Shard hits an enemy, it will shatter, increasing its width and maximum range."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nIce Shard picks a location 950 units away in the direction of the cast for the shattered missile to end up at.\nThe initial Ice Shard missile has a range of 700 units which it arrives at after 0.33 seconds. If it hasn't collided with an enemy in this path when it does, it checks for enemies in a  100 radius around the point 25 units in front of it.\nColliding or hitting an enemy in either fashion creates a new \"shattered\" missile with the same speed but greater width that continues to travel along the same line to the designated point 950 units from the cast's original position, originating at the location at which the initial missile collided at.\n Spell shield will block the damage and the slow but will not stop the projectile from shattering.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2200",
  "spellEffects": "aoe",
  "spellshieldable": "Special",
  "targeting": "Direction"
}
export default ability
