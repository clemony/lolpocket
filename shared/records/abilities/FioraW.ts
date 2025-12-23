// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Riposte",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Fiora briefly parries all incoming damage, debuffs, and  disables, then stabs in a direction, dealing magic damage to enemies hit.",
  "castTime": "none",
  "cooldown": "24 / 22 / 20 / 18 / 16",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora enters a defensive stance for 0.75 seconds, during which she is unable to act, prevents all incoming non- turret damage, and gains debuff immunity and crowd control immunity.</p>"
    },
    {
      "description": "Additionally, over the first 0.5 seconds of the duration, Fiora poises to strike, after which she sends a shock with her sword in a line in the target direction, dealing magic damage to all enemies hit until colliding with an enemy champion.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "110 / 150 / 190 / 230 / 270"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "The enemy champion struck is also slowed and crippled by 25% for 2 seconds. If Riposte negates at least one hostile immobilizing effect, Fiora stuns the target for the same duration instead."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/w",
  "notes": "Riposte is not  invulnerability but instead reduces any damage to her by 100% late into the damage event. Because of this, it interacts differently with effects triggered from damage:\n Life steal and  Healing based on damage dealt (Vamp) will still have effect even if the damage is ultimately ignored by Riposte.\n Shields will absorb damage before Riposte takes effect.\nFiora cannot be  executed by  Pyke's  Death from Below during Riposte, but she may by  Aspect of the Dragon.\nRiposte will not negate  nearsight.\n Immobilizing effects include those from  Blast Cone (only if triggered by an enemy) and  epic monsters.\n(Non-crowd-control) debuff immunity encompasses debuffs from summoner spells such as  Exhaust's damage reduction and all of  Ignite's effects, as well as  persistent damage and other effects.\nIn the last 0.25 seconds of Riposte's duration, Fiora cannot be selected. This is distinct from  untargetability and there are no known interactions beyond this.\nRiposte's effect prioritization is as follows:\nRiposte will negate effects before  spell shields.\n Black Shield will negate  crowd control before Riposte.\nBeing hit by a crowd control while affected by Black Shield means Riposte will not trigger its  stun empowerment condition, as it itself must negate the  immobilize and not any other external source.\n Spell shield will also prevent Vitals from being triggered by Riposte's shock.\nThe shock missile will be fired from wherever Fiora is after the first 0.5 seconds of Riposte.\nThe following table refers for interactions while Fiora is performing Riposte:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3200",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction",
  "targetRange": "900"
}
export default ability
