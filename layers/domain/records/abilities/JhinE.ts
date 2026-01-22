// Updated Patch 15.24.1 - 12/26/2025 07:03:50 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Captive Audience",
  "affects": "Enemies",
  "blurb": "Passive - Beauty in Death: Killing an enemy champion summons a free Blooming Lotus Trap under them.",
  "castTime": "0.25",
  "collisionRadius": "160",
  "cooldown": "2",
  "cost": "30",
  "damageType": "Magic damage",
  "effectRadius": "260 / 260",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Beauty in Death:</span> Whenever Jhin kills an enemy champion, he summons a Blooming Lotus Trap on their corpse.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jhin places a Lotus Trap at the target location which, upon landing, becomes stealthed after arming over 1 second, lasting for up to 180 seconds and granting sight within its radius. The Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming revealed for 4 seconds.</p>"
    },
    {
      "description": "Jhin periodically stocks a Lotus Trap charge, up to a maximum of 2."
    },
    {
      "description": "Blooming Lotus Traps slow enemies within the area by 35% for 2 seconds before exploding, dealing magic damage to enemies. Lotus Traps deal 65% damage against minions as well as against champions and monsters who have been struck by another Lotus Trap in the last 1 second.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "20 / 80 / 140 / 200 / 260"
            },
            {
              "unit": "% AD",
              "values": "120"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "13 / 52 / 91 / 130 / 169"
            },
            {
              "unit": "% AD",
              "values": "78"
            },
            {
              "unit": "% AP",
              "values": "65"
            }
          ]
        }
      ]
    },
    {
      "description": "See Pets for more details about Lotus Traps."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jhin/ability-icon/e",
  "notes": "Beauty in Death does not consume Lotus Trap charges.\nThe Lotus Trap will stop upon encountering a  Wind Wall or  Unbreakable.\nBeauty in Death does not trigger after killing a  clone.\nThe reveal debuff is named  Caught Out.\nThis debuff is shared between Captive Audience and  Curtain Call.",
  "projectile": "SPECIAL",
  "rechargeRate": "24 / 21.5 / 19 / 16.5 / 14",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "750"
}
export default ability
