// Updated Patch 16.1 - 01/29/2026 04:27:10 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Force of Will",
  "affects": "Enemies",
  "blurb": "Active:  Syndra grabs the nearest  Dark Sphere, enemy  minion or non-epic  monster from the target location, and holds it for a few seconds.",
  "castTime": "none",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "60 / 70 / 80 / 90 / 100",
  "damageType": "Magic damage",
  "effectRadius": "225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Syndra telekinetically grabs the nearest Dark Sphere, enemy minion or non-epic monster within 500 units from the target location, and holds the target near her for 5 seconds. If a Dark Sphere is grabbed, its duration is refreshed; if a minion or monster is grabbed, it is put in stasis. She prioritizes grabbing the nearest unit, then Dark Spheres.</p>"
    },
    {
      "description": "Force of Will can be recast while the target is being held."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Syndra throws the grabbed target towards the target location, granting sight of their surroundings as they fall and dealing magic damage to them and nearby enemies once they land. All targets hit are slowed by 25% for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 105 / 140 / 175 / 210"
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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Transcendent Bonus:</span> Collecting 60 Splinters of Wrath enhances Force of Will to deal 12% (+ 2% per 100 AP) bonus true damage.</p>",
      "leveling": [
        {
          "attribute": "Bonus Damage",
          "modifiers": [
            {
              "values": "8.4 / 12.6 / 16.8 / 21 / 25.2"
            },
            {
              "tooltip": "Scaling per rank:\n9.2 / 9.9 / 10.6 / 11.3 / 12% AP",
              "unit": "% AP",
              "values": "9.2 - 12"
            }
          ]
        },
        {
          "attribute": "Total Mixed Damage",
          "modifiers": [
            {
              "values": "78.4 / 117.6 / 156.8 / 196 / 235.2"
            },
            {
              "tooltip": "Scaling per rank:\n74.2 / 74.9 / 75.6 / 76.3 / 77% AP",
              "unit": "% AP",
              "values": "74.2 - 77"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/w",
  "notes": "The initial cast does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does.\nIf the ability is not recast within the duration, Syndra will release the unit or Dark Sphere that she is holding.\nForce of Will does not destroy in-flight  projectiles for the  minion or  monster grabbed.\nForce of Will  cleanses the target  minion or  monster grabbed from all  crowd control.\nForce of Will prevents non-sphere targets from dying when picking them up.\nIf the the thrown target was a  monster, it is  taunted for 0.25 seconds after landing.\nSyndra can grab  pets, such as  Shaco's  Jack in the Box.\nCasting  Teleport or  Recall, or switching realms ( Mordekaiser's  Realm of Death) will cause Syndra to cancel Force of Will autonomously and drop anything she is holding.\nGrabbing prioritizes Dark Spheres.\nEnemy  pets that passively have an effect on their surroundings will continue to affect the area around them while they are being held. For example,  Annie's  Tibbers will continue to inflict burn damage on surrounding units while being held.\nGrabbing a  Dark Sphere will cause the duration on it to refresh, but only on the first cast, not when it is thrown.\nForce of Will has additional effects when targeting the  Blue Sentinel and  Red Brambleback. Throwing the former will refund 10  mana to Syndra upon cast and will reduce the  cooldown of Force of Will by 1 second, while throwing the latter will apply the  Crest of Cinders burn to any affected units in the area of effect.\nForce of Will's first cast uses a  modified icon while it has the  Transcendent bonus.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "Aoe",
  "spellshieldable": "True",
  "targeting": "Unit / Location",
  "targetRange": "925 / 950 / 500"
}
  export default ability
