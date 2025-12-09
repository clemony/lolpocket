// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Leap of Faith",
  "affects": "Enemies",
  "blurb": "Active:  Illaoi becomes  unstoppable before dealing physical damage to nearby enemies. For each enemy  champion hit, a Tentacle is summoned around her for a period.",
  "castTime": "0.5",
  "cooldown": "120 / 95 / 70",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Illaoi gains displacement immunity and leaps into the air for the cast time. She then slams her idol into the ground, dealing physical damage to nearby enemies. For each enemy champion hit, a Tentacle is summoned for 8 seconds (up to a maximum of 6 summons).</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "For the duration, Harsh Lesson's cooldown is halved, all Tentacles awakened by Illaoi are untargetable, will not show their hitboxes, nor go dormant, and will take 0.5 seconds to make an attack; however they will then incur a lockout of 0.5 seconds before being able to start a new attack."
    },
    {
      "description": "This does not affect the Tentacle attack from Tentacle Smash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nIllaoi spawns the  Tentacle 700 range away from her, unless there's a natural wall blocking the way making the Tentacle spawn on it, with an angle relative to the direction she's facing.\n1+ champions: one  Tentacle at 0 degrees. (towards Illaoi's facing direction)\n2+ champions: one  Tentacle at 60 degrees.\n3+ champions: one  Tentacle at 300 degrees.\n4+ champions: one  Tentacle at 120 degrees.\n5+ champions: one  Tentacle at 240 degrees.\n6+ champions: one  Tentacle at 180 degrees.\nTentacles may spawn on base barriers. If Illaoi is in the center of a base barrier, all Tentacles will spawn in the same position and stack over each other, making it appear as if there was only one Tentacle. [7] (bug)\nIllaoi's facing direction is decided by the position of the cursor on cast, but can also be changed mid-cast through other effects, such as  Flash. [8]\nIf there are no walls nearby, spawning the last  Tentacle will form a perfect hexagon.\n Spell shields will block the ability's damage but will not prevent Tentacles from spawning.\nIf Illaoi  dies within 0.25 seconds of dropping down, she will spawn buffed Tentacles, but she won't manage in time to buff the already spawned ones. [9] (bug)\nIf Illaoi is near a Tentacle that is about to spawn, it will spawn buffed by Leap of Faith even if Illaoi is no longer nearby.\nUsing  Harsh Lesson after Illaoi drops down will command Tentacles to instantly attack, regardless if they were already attacking. Their old attack will keep on going and will hit while the second attack is on its animation attack. [10] (bug)\nThis makes it possible for the same tentacle to reduce its own damage by having the second attack hit too fast, which is not otherwise possible. [11]\nAfter the buff expires, Tentacles will linger for an extra 0.25 seconds, allowing them to continue receiving commands and queuing up non-empowered attacks, while remaining not dormant. [12]",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Direction"
}
export default ability
