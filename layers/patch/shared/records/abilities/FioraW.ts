// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Riposte",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Fiora briefly parries all incoming damage and  debuffs, then stabs in a direction, dealing magic damage to enemies hit.",
  "castTime": "none",
  "cooldown": "24 / 22 / 20 / 18 / 16",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora enters a defensive stance for 0.75 seconds, during which she is unable to act, prevents all incoming non- turret damage, and gains debuff immunity.</p>"
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
  "notes": "Riposte is not  invulnerability but instead reduces any damage to her by 100% late into the damage event. Because of this, it interacts differently with effects triggered from damage:\n Life steal and  Healing based on damage dealt (Vamp) will still have effect even if the damage is ultimately ignored by Riposte.\n Shields will absorb damage before Riposte takes effect.\nFiora cannot be  executed by  Pyke's  Death from Below during Riposte, but she may by  Aspect of the Dragon.\nRiposte prevents  Azir's  Shurima's Legacy's  Sun Disc damage. (note)\nThe debuff immunity encompasses:\n Crowd control.\nNote this isn't  cc-immune, and effects that look specifically for that will not consider Riposte (i.e  Yasuo's  Last Breath may not be cast on cc-immune targets but it can be cast while Fiora is in Riposte [3]).\nDebuffs from summoner spells such as  Exhaust's damage reduction and all of  Ignite's effects.\n Persistent damage application.\n Tether application (i.e  Camille's  The Hextech Ultimatum,  Illaoi's  Test of Spirit), with the exception of  Malzahar's  Nether Grasp [4].\nSome mark application (i.e  Fiora's  Duelist's Dance,  Zilean's  Time Bomb), but not some other (i.e  Braum's  Concussive Blows and  Winter's Bite,  Caitlyn's  Ace in the Hole,  Kennen's  Electrical Surge on-hit,  Fiora's  Grand Challenge,  Tahm Kench's  Tongue Lash,  Vi's  lock-on).\nRiposte will not negate  nearsight.\n Immobilizing effects include those from  Blast Cone (only if triggered by an enemy) and  epic monsters.\nThe ability does not count  K'Sante's  All Out as an immobilizing effect. (bug)\nIn the last 0.25 seconds of Riposte's duration, Fiora cannot be selected. This is distinct from  untargetability and there are no known interactions beyond this.\nRiposte's effect prioritization is as follows:\nRiposte will negate effects before  spell shields.\n Black Shield will negate  crowd control before Riposte.\nBeing hit by a crowd control while affected by Black Shield means Riposte will not trigger its  stun empowerment condition, as it itself must negate the  immobilize and not any other external source.\n Spell shield will also prevent Vitals from being triggered by Riposte's shock.\nThe shock missile will be fired from wherever Fiora is after the first 0.5 seconds of Riposte.\nThe following table refers for interactions while Fiora is performing Riposte:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3200",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction",
  "targetRange": "900"
}
  export default ability
