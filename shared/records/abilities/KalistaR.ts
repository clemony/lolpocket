// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Fate's Call",
  "affects": "Oathsworn Ally / Enemies",
  "blurb": "Active:  Kalista invokes her  tether to retrieve her Oathsworn,  vanishing and  cleansing them from all  crowd control, and hold them for a few seconds.",
  "castTime": "none",
  "cooldown": "160 / 140 / 120",
  "cost": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kalista invokes her tether to retrieve and hold her Oathsworn for 4 seconds. Kalista cleanses the Oathsworn from all crowd control and renders them invulnerable and untargetable for the duration, and pulls them to her over 1 second.</p>"
    },
    {
      "description": "While held, the Oathsworn is vanished and may select a target location to dash to with displacement immunity, ending Fate's Call's invocation and reappearing at the location. If the invocation ends without the Oathsworn selecting a target location, they will automatically do so at maximum range from Kalista's facing direction."
    },
    {
      "description": "The Oathsworn's dash stops upon colliding with an enemy champion. Upon the dash ending by collision or arriving to the targeted location, the Oathsworn knocks back all nearby enemies and keeps them airborne for a set duration, while simultaneously landing to their base attack range from the closest target hit.",
      "leveling": [
        {
          "attribute": "Airborne Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.5 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "The Oathsworn must be within tether range to cast this ability, and is also silenced and unable to perform movement or attack commands while Fate's Call is in effect."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/r",
  "notes": "The Oathsworn's landing location of the lunge is precisely to their base attack range from the closest target they hit and relative to where this target would be displaced to from the knock back.\nIn other words, the Oathsworn will land to a location where they are within their exact base attack range of the target by the end of the target's displacement.\nThe calculated landing spot does not evaluate if the target was successfully displaced or not, meaning that the Oathsworn will end up closer than their base attack range if the closest target hit was not knocked back.\nIf the Oathsworn does not hit any targets with the knock up effect, the dash will simply end and they will reappear at the target location.\nThe following will defer Fate's Call's effects at the time of cast to the end of their duration if the Oathsworn is:\nIn a cast time.\n Channeling.\nFate's Call will not defer by the following channels:  Recall,  Defiant Dance,  Realm Warp, and  The Culling.\nFate's Call cannot be cast during the following channels:  Teleport,  Gate,  Grand Starfall,  Hero's Entrance and  Stand United.\nUsing an ability that preloads UnstoppableForceMarker.\nIf the Oathsworn is still occupied after 6 seconds of being deferred from this time, Fate's Call will cancel.\nFate's Call will not pull the Oathsworn if they are  dashing but they will be retrieved after 1 second regardless.\nFate's Call can be cast even if the Oathsworn is  untargetable.\nFate's Call is disabled if the Oathsworn is  resurrecting or is being affected by another Fate's Call.\nFate's Call can be used even if the Oathsworn is in a  zombie state.\nFate's Call does not render the target  vanished while being held if they are creating  Curse of the Black Mist's aura.\nThe Oathsworn being held is represented by a light over Kalista's head.\nKalista's death does not cancel Fate's Call.",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Proximity",
  "targetRange": "1200",
  "tetherRadius": "1100"
}
export default ability
