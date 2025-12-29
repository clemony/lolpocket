// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Between Worlds",
  "affects": "Enemies, self",
  "blurb": "Active:  Aurora becomes  unstoppable and  leaps, unleashing an expanding shockwave that deals magic damage to enemies hit and  slows them briefly, and gaining  Realm Hopper for a few seconds.",
  "castTime": "none",
  "collisionRadius": "25",
  "cooldown": "140 / 120 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "700",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurora leaps in the target direction with displacement immunity over 0.4 seconds. She then gains Realm Hopper for a duration and unleashes a shockwave from 425 units in front of her, expanding over 0.75 seconds to deal magic damage to enemies hit and slow them by 30% for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "175 / 275 / 375"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Realm Hopper Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "3.5 / 4.25 / 5"
            }
          ]
        }
      ]
    },
    {
      "description": "The shockwave leaves behind a circular rift to the Spirit Realm for a duration, forming borders that interact with Aurora and enemies. If Aurora collides with the border, she dashes to the diametrically opposite side of the rift over 0.4 seconds, becoming untargetable and unable to act during the travel. If an enemy collides with the border, they are slowed by 50% for a duration.",
      "leveling": [
        {
          "attribute": "Rift Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.75 / 2.5 / 3.25"
            }
          ]
        },
        {
          "attribute": "Slow Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.5 / 1.75 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "Between Worlds can be recast after 1 second of unleashing the shockwave while the rift is active."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Aurora closes the rift prematurely.</p>"
    },
    {
      "description": "The rift closes immediately if Aurora dies, enters resurrection, leaves the area, or is not within the area upon creation."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/r",
  "notes": "Collision with the border is essentially moving within range of it while being targetable, including via normal movement, dash, or displacement.\nAurora and enemies can collide with the border any number of times, as much as the duration permits.\nEnemies can be applied the slow by colliding with the border only once after moving within collision radius of it. The slow may be applied again from collision only until after they have left the collision radius; it cannot be continuously applied while enemies remain within collision radius of the border.\n Untargetable units cannot collide with the border, including Aurora herself.\nThe in-game tooltip incorrectly lists the rift duration as 0.75 seconds longer than it actually is.(bug)\nIt is seemingly including the time required for the shockwave to fully expand. However, the rift and its borders will only form after the fact, so the actual duration of the rift is shorter.\nBetween Worlds'   untargetability from the rift dash does not  destroy in-flight  projectiles.\nBetween Worlds'  first cast is disabled while  grounded or  rooted.\nAurora can still dash from colliding with the border even if she is  immobilized or  grounded.\n Spell shield can block both the shockwave and border collision.\nA pair of portals signifying Aurora's nearest possible entry and its corresponding exit is visible to her at all times.\nThe following table refers for interactions while Aurora is dashing:\nThis lockout applies to both the initial dash and the dashes in the formed rift.\nThe lockout during the initial cast's dash persists for another 0.5 seconds after the dash ends.\nThe lockout during the rift dash persists for another 0.15 seconds after the dash ends.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction / Auto"
}
export default ability
