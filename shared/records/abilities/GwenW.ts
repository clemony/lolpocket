// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Hallowed Mist",
  "affects": "Self",
  "blurb": "Active:  Gwen summons the Hallowed Mist upon her current location for a few seconds. Hallowed Mist can be recast within this time, and does so automatically if she attempts to leave the area.",
  "castTime": "none",
  "cooldown": "22 / 21 / 20 / 19 / 18",
  "cost": "60",
  "effectRadius": "480",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gwen summons the Hallowed Mist upon her current location, lasting for 4 seconds. Hallowed Mist can be recast after 0.5 seconds, and does so automatically if Gwen attempts to leave the area.</p>"
    },
    {
      "description": "While inside the mist, Gwen becomes ghosted, gains bonus armor and bonus magic resistance and is untargetable to all enemies (except turrets and monsters) outside of the mist.",
      "leveling": [
        {
          "attribute": "Bonus Resistances",
          "modifiers": [
            {
              "values": "22 / 24 / 26 / 28 / 30"
            },
            {
              "unit": "% AP",
              "values": "7"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Gwen commands the mist to move to her current location.</p>"
    },
    {
      "description": "Gwen negates all attacks by monsters outside of the mist."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/w",
  "notes": "Hallowed Mist's  untargetability does not apply to  monsters nor  turrets, meaning they are allowed to gain aggro against Gwen and attack her regardless of being in the mist or not.\nHowever, Gwen will not take damage from monsters that hit her and are outside of the mist.\nHallowed Mist does not grant untargetability against enemy  pets inside the zone even if their source is not.\nAll  projectiles targeted at Gwen by enemy champions outside the mist are  destroyed upon attempting to pass through the mist or being inside the mist.\nTargeted projectiles sourced by minions or monsters will not be destroyed and can still hit Gwen even if they are outside of the zone.\nIf Gwen  dashes out of the area, the mist will automatically move to the dash's destination instead of Gwen's location.\nThe mist will stop moving immediately if the dash is interrupted.\nThe recast will move the mist's center 75 units through Gwen's location at the time.\nIf she is  dashing, the mist will move 75 units through her dash destination instead.\nThe mist will teleport to Gwen's location if she  blinks a far distance.\nEnemy champions outside the mist are indicated with a broken sword.\nHallowed Mist will indicate that Gwen is Immune whenever an effect attempts to hit Gwen.",
  "resource": "Mana",
  "speed": "2000",
  "targeting": "Auto"
}
export default ability
