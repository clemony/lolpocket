// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Double Up",
  "affects": "Enemies",
  "angle": "160°",
  "blurb": "Active:  Miss Fortune fires a shot at the target enemy that deals physical damage, which then bounces to hit another enemy behind them. This applies  on-hit effects to both enemies hit.",
  "castTime": "Basic Attack Timer",
  "cooldown": "7 / 6 / 5 / 4 / 3",
  "cost": "40",
  "damageType": "Physical damage",
  "effectRadius": "500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Miss Fortune fires a shot at the target enemy that deals physical damage, triggers on-attack effects, and bounces to hit another enemy behind them, applying on-hit effects to both enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "20 / 45 / 70 / 95 / 120"
            },
            {
              "unit": "% AD",
              "values": "100"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        }
      ]
    },
    {
      "description": "Double Up's bounce is affected by critical strike modifiers. If Double Up kills the primary target, the bounce will critically strike."
    },
    {
      "description": "The bounce prioritizes units directly behind the primary target. A target does not have to be visible to be hit by the bounce."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/q",
  "notes": "Double Up deals  basic damage to both targets, but also triggers spell effects by also being tagged as  spell damage.\n Spell shields can be used by either target. If it is on the primary target, the spell shield will not prevent the shot from bouncing.\nNeutral units count as valid targets to bounce.\nThe bounce follows a priority order on targets behind in a certain angle:\n500 units in 20°.\n500 units in 40°.\n500 units in 110°.\n150 units in 160°.\nDouble Up's cast range adjusts based on Miss Fortune's  attack range, which can be increased by items such as  Rapid Firecannon.\nThe damage of a  critically striking shot is 35 / 70 / 105 / 140 / 175 (+ 175% AD) (+ 61.25% AP) physical damage, increased to 42 / 84 / 126 / 168 / 210 (+ 210% AD) (+ 73.5% AP) physical damage by  Infinity Edge's bonus critical damage.\nIf there is no secondary target, the shot will not bounce and the dud will instead fall to the ground.\nThe dud lands on the ground 176 units behind the primary target and has a missile speed of 400 on its way there.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1400",
  "spellEffects": "special",
  "spellshieldable": "Special",
  "targeting": "Unit",
  "targetRange": "550 (+ 100% bonus  attack range)"
}
export default ability
