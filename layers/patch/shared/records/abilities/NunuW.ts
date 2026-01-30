// Updated Patch 16.1 - 01/29/2026 04:26:58 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Biggest Snowball Ever!",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "14",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Willump cleanses himself from all slows and channels for up to 10 seconds, becoming ghosted and slow-immune and creating a rolling snowball. Willump automatically navigates his movement in the direction of the cursor and can steer the snowball at an increasing speed over time, which resets upon changing direction. The duo have their movement speed reduced by 50% for the first 1 second, but after a delay they start gaining 14 movement speed every 0.25 seconds, up to a cap.</p>"
    },
    {
      "description": "The snowball increases in size and power linearly over the duration. Its size changes from small to medium after 2.5 seconds, then to large after 5 seconds into the charge. Biggest Snowball Ever! can be recast after 0.5 seconds during the channel, and does so automatically after the channel or if interrupted."
    },
    {
      "description": "The snowball explodes upon hitting an enemy champion, large pet, medium or large monster, or terrain, dealing magic damage to nearby enemies, increased by 0% - 400% (based on charge time), knocking them up for 0.5 - 0.75 (based on charge time) seconds and subsequently stunning them for 0 - 0.75 (based on charge time) seconds. If the snowball explodes while still being steered, it will stun Willump for 0.132 seconds seconds.",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "36 / 45 / 54 / 63 / 72"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "180 / 225 / 270 / 315 / 360"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        }
      ]
    },
    {
      "description": "The snowball rolls over enemy minions and small monsters hit, dealing 33.3% of the damage as magic damage.",
      "leveling": [
        {
          "attribute": "Minimum Minion/Monster Roll Damage",
          "modifiers": [
            {
              "values": "11.99 / 14.99 / 17.98 / 20.98 / 23.98"
            },
            {
              "unit": "% AP",
              "values": "9.99"
            }
          ]
        },
        {
          "attribute": "Maximum Minion/Monster Roll Damage",
          "modifiers": [
            {
              "values": "59.94 / 74.93 / 89.91 / 104.9 / 119.88"
            },
            {
              "unit": "% AP",
              "values": "49.95"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Willump releases the snowball, sending it rolling forward up to a maximum distance during which it will not grow any larger and will explode upon hitting an enemy.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/w",
  "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and  Force Pulse.\nThe movement speed reduction the duo receive from initially casting Biggest Snowball Ever! is not considered a  slow, thus it will not be resisted by their  slow immunity.\nThe time threshold to begin gaining bonus movement speed may be bugged, as Flat Bonus MS increases the time while % Bonus MS decreases the time.\nThe formula appears to be (X ÷ 100) - Y, where:\nX = Total Flat MS after caps\nY = 0.1 per 1% %MS\nThe delay is not modified from its initially calculated value on-cast, even if additional movement speed is gained.\nNunu and Willump keep all increases in movement speed at time of cast for the duration of the charge.\nNunu and Willump's movement speed always increases in increments of ~14, reaching the greater value between [ Total MS + 85 : 255 (based on level) ][ Total Uncapped Flat MS + 85 : 255 (based on level) ]\nThis takes 6 increments to reach the Total MS + 85, but may take more to reach the Uncapped Flat + 85. Due to flat bonuses increasing the time threshold, it is possible for the ability's effects to end before reaching the total uncapped movement speed.\nThe bonus movement speed ignores the movement speed cap.\nIf Nunu turns continuously he will create a 600 unit circle, increased with bonus movement speed, striking the same point up to 3 times, for a maximum of 180 / 225 / 270 / 315 / 360 (+ 300% AP) magic damage. The damage can be further increased by detonating the snowball, for a total of 360 / 450 / 540 / 630 / 720 (+450% AP) magic damage.\n Ryze's  Realm Warp will only teleport Nunu and Willump, leaving the  snowball behind.\nHovering the cursor on the HUD (e.g mini map / champion portraits) does not affect the cast and steering of Biggest Snowball Ever!.\nNunu gains a slightly larger field of view during Biggest Snowball Ever!.\n Projectile-interception effects will destroy the snowball only after it has been released.\nBiggest Snowball Ever! is disabled for the first 15 seconds of the game.\n Displacement immunity will not resist the application of the  stun.\nThe following table refers for interactions while Nunu & Willump are  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed, but cannot input movement commands.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "425 / 435 : 594 / 595",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "750 : 1750 (based on charge time)"
}
  export default ability
