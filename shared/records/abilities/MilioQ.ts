// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Ultra Mega Fire Kick",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Active:  Milio kicks a fireball in the target direction that briefly  knocks back and  stuns the first enemy hit. The ball then bounces once toward the target and explodes, dealing magic damage and  slowing enemies hit.",
  "castTime": "none",
  "cooldown": "10",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effectRadius": "100 /  250 / 275 / 190",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> After a 0.25-second delay, Milio kicks a fireball in the target direction that grants sight of its path and knocks back and stuns the first enemy it hits over 1 second.</p>"
    },
    {
      "description": "Upon collision, the ball bounces once in the same direction from the target's location, granting sight of the area before exploding in the same radius after a brief delay, dealing magic damage to enemies hit and slowing them for 1.5 seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 140 / 200 / 260 / 320"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 45 / 50 / 55 / 60"
            },
            {
              "unit": "% per 100 AP",
              "values": "5"
            }
          ]
        }
      ]
    },
    {
      "description": "If the primary target is a non-champion, the ball knocks back further and creates a larger explosion. Ultra Mega Fire Kick refunds 50% of its mana cost if it hits at least one champion with the fireball or explosion."
    },
    {
      "description": "Milio cannot cast other abilities during Ultra Mega Fire Kick's delay."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/q",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction"
}
export default ability
