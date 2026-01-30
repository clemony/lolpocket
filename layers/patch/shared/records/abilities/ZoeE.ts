// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Sleepy Trouble Bubble",
  "width": "100 / 200",
  "affects": "Enemies",
  "castTime": "0.25",
  "cooldown": "16 / 15 / 14 / 13 / 12",
  "cost": "80",
  "damageType": "Magic damage",
  "effectRadius": "250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zoe kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range while slightly bouncing forward over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy. The bubble can move through terrain only once, but travels the entire distance as bonus range, and will fall short if it would enter terrain again.</p>"
    },
    {
      "description": "The burst deals magic damage to the target and inflicts them with drowsy for 1.4 seconds, which gradually slows them until they fall asleep for 2.25 seconds. While the target is asleep, they are inflicted with 30% magic resistance reduction.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        },
        {
          "attribute": "Maximum Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 15 / 20 / 25 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "The next instance of non- persistent damage that the sleeping target takes from champions, large monsters or turrets consumes the debuff to deal bonus true damage equal to the post-mitigation damage dealt, capped at Sleepy Trouble Bubble's damage.",
      "leveling": [
        {
          "attribute": "Bonus Damage Cap",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        },
        {
          "attribute": "Maximum Mixed Damage",
          "modifiers": [
            {
              "values": "140 / 220 / 300 / 380 / 460"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/e",
  "notes": "Applies  spell damage for the bubble and  default damage for the wake-up damage.\nThe wake-up damage is similar to a damage modifier in that it cannot be redirected (i.e  Illaoi's  Test of Spirit,  Zac's  Cell Division,  Knight's Vow).\n Spell shield will not prevent falling  asleep nor block the wake-up damage.\nThe bubble's damage and  drowsy application will be blocked.\nThe bonus damage from Sleepy Trouble Bubble is dealt before any triggering damage from Zoe or her allies, and is attributed to Zoe at all times.\nIf an ally expunges the  sleep and the bonus damage from Sleepy Trouble Bubble is enough to kill the target, Zoe will be credited the kill.\nAdditionally in this case, the allied champion will not be credited an assist at all.(bug)\nZoe will gain  obscured vision of the target while they're  asleep if they are not  visible.\nIf exceptionally close to terrain, the bubble will pass through without detection and will still be able to pass through a second piece of terrain - although it sacrifices any range its already used going through the first piece.\nSleepy Trouble Bubble can interact with player-generated terrain.\nAt the end of the path of the initial missile, before continuing with the short bounce, Sleepy Trouble Bubble checks for targets in a  100 radius to immediately collide with.\nThis \"lollipop\" is one of only a few that is larger than the ability's missile width.\nSleepy Trouble Bubble can still be collided with during the short bounce between end of initial missile and the trap being formed.\nThis seems to use a  very small or negative collision radius, rather than normal missile collision.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe missile's maximum range location, or end position, is determined at the start of the cast and as such will always be fired to the same spot regardless of where Zoe is at the end of the cast time.\nAn applicable example of this can be seen in an interaction with her  Portal Jump. If Sleepy Trouble Bubble is cast right before she blinks back to Portal Jump's original cast position, the range of the missile will be extended for it to fire to the same end position as if she had not blinked back. This interaction occurs in this manner due to the missile's behavior as explained prior and the fact that Zoe blinks back with Portal Jump before the cast time of Sleepy Trouble Bubble finishes, causing the cast time to finish from Portal Jump's original cast position.\nThis will still count as damage dealt by Zoe in the damage recap.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1850",
  "spellEffects": "special",
  "spellshieldable": "special",
  "targeting": "Direction"
}
  export default ability
