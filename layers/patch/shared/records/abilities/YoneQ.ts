// Updated Patch 16.1 - 01/29/2026 04:27:16 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Mortal Steel",
  "width": "80 / 160",
  "affects": "Self, Enemies",
  "blurb": "Active:  Yone thrusts his Steel Sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and  on-attack effects to the first enemy hit. This can  critically strike.",
  "castTime": "0.35 : 0.175 (based on bonus attack speed)",
  "collisionRadius": "100",
  "cooldown": "4",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yone thrusts his Steel Sword in a line in the target direction that deals physical damage to enemies hit, applies on-hit effects to the first enemy hit, and triggers on-attack effects once. Mortal Steel's damage based on its AD ratio can critically strike for (175% + 30%) damage.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "25 / 50 / 75 / 100 / 125"
            },
            {
              "unit": "% AD",
              "values": "105"
            }
          ]
        }
      ]
    },
    {
      "description": "If this hits at least one enemy, Yone generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Mortal Steel cast consumes them all to become empowered with a new effect."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Gathering Storm Bonus:</span> Yone dashes a fixed distance in the target direction and unleashes a whirlwind in the same direction, both applying and triggering the same effects and additionally knocking up enemies hit in their path for 0.75 seconds, but being unable to affect the same target twice.</p>"
    },
    {
      "description": "Mortal Steel's thrust will fail to hit targets after the cast time if Yone was affected by disarming crowd control during it, but the cooldown of the ability is reset to 0.1 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/q",
  "notes": "This ability always employs Quick cast.\nMortal Steel applies  basic damage for the first (closest) enemy hit and  area damage for secondary enemies:\nMortal Steel will apply  on-hit effects to the first target hit, but will not do so to the secondary ones.\nMortal Steel will not apply  spell effects to the first target hit, but will do so to the secondary ones.\n Spell vamp will only grant  healing from the damage dealt to secondary targets, and healing is reduced to 33% effectiveness, accordingly.\n Life steal will heal based on the damage dealt to the first target hit.\nMortal Steel will not benefit from the bonus attack speed gained by  Hail of Blades.(bug)\nAll three of the thrust, whirlwind and dash roll for a critical strike on each individual target hit.\n Blinking during Mortal Steel's cast with two stacks of Gathering Storm (after the cast time) will end the dash prematurely but enemies in range of Yone at the new location are affected. The whirlwind's trajectory cannot be changed once it has already been unleashed.\nOnly the whirlwind can be  intercepted.\nEach parry has different interactions with this ability, whether it's the first target of Mortal Steel or the secondary one. In either case Yone still gains a stack of Gathering Storm and his whirlwind  knock up cannot be negated by parries:\n Dodge and  Block: first target does not take damage, secondary target does take damage.\n Blind: both first target and secondary target take damage.\n Spell shield does not prevent Yone from receiving a stack.\nMortal Steel is disabled while  grounded or  rooted if Yone has two stacks of Gathering Storm.\nWhile at two stacks, a range indicator will be shown for the effective range of the whirlwind.\nThe  dash can cross terrain.\nIf Yone gets knocked back during the 3rd cast, the dash will only damage and knockup around Yone's current position then will stop colliding, making Yone play Mortal Steel's dash winddown animation while still visually dashing.(bug)\nThis ability will cast from wherever the caster is at the end of the cast time.\nYone will always cast Mortal Steel in his facing direction, and he will turn to face the target direction at the start of the cast time. While at two stacks, Yone will always cast it in the target direction.",
  "projectile": "SPECIAL",
  "speed": "1500",
  "spellEffects": "special",
  "spellshieldable": "true",
  "targeting": "Direction"
}
  export default ability
