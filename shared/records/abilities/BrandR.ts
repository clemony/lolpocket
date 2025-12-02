// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Pyroclasm",
  "affects": "Enemies",
  "blurb": "Active:  Brand unleashes a devastating torrent of fire that bounces to nearby enemies, dealing magic damage each time it bounces.",
  "castTime": "0.25",
  "cooldown": "100 / 90 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Brand launches a fireball at the target enemy that bounces between nearby enemies and Brand up to four times, dealing magic damage to enemies each time and having a 0.15-second delay between bounces.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "100 / 175 / 250"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Total Single-Target Damage",
          "modifiers": [
            {
              "values": "300 / 525 / 750"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    },
    {
      "description": "Pyroclasm prioritizes Ablaze enemy champions, then other enemy champions, then any valid bounce target, then Brand."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ablaze Bonus:</span> The target is slowed for 0.25 seconds. This can affect the same enemy more than once.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 45 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "The target does not have to be visible for the fireball to bounce to them."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/r",
  "notes": "The fireball acquires a new valid, bounce target once the bounce delay finishes.\nIf the target the fireball is in flight towards becomes  untargetable, the fireball missile will be destroyed but a new missile will be formed at the target's location that is able to bounce for up to the remaining bounces of the previous fireball.\nThe new missile is only formed if there is a valid target to bounce to at the time of the previous missile being destroyed.\nThis does not apply if the target is Brand, as the missile would not be destroyed and would bounce from him even if he is untargetable.\nThe fireball will still bounce from the target even if they were dead upon arrival.\nThe fireball may only bounce to valid targets, including Brand.\nIf the initial cast target uses  spell shield, Pyroclasm will not bounce. If the bounce is blocked by an enemy's spell shield it will not deal any damage, but it will keep on bouncing.\nPyroclasm's damage against enemy champions will not aggro nearby enemy minions.(bug)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "750 - 3000",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Unit",
  "targetRange": "750"
}
export default ability
