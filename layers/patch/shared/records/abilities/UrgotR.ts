// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Fear Beyond Death",
  "width": "160",
  "affects": "Enemies",
  "castTime": "0.5",
  "cooldown": "100 / 85 / 70",
  "cost": "100",
  "damageType": "Other damage",
  "effectRadius": "Global /  600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are revealed and slowed by 0% - 75% (based on target's missing health).</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "100 / 225 / 350"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Fear Beyond Death can be recast if the leashed target is below 25% of their maximum health, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Mercy:</span> Urgot launches chains at the leashed target, then channels for 1.5 seconds once they latch on. During this time, he reels them toward him, suppressing them, revealing them, rendering them untargetable, and preventing them from taking damage from other sources. If the target is near Urgot when the chains connect, they are pushed up to 1000 units away based on their proximity to him. This channel cannot be interrupted by crowd control.</p>"
    },
    {
      "description": "Upon completing the channel, the target is executed. If the execution is successful, he fears nearby enemies for 1.5 seconds, during which they are slowed by 75%."
    },
    {
      "description": "Fear Beyond Death's recast can be used while affected by cast-inhibiting crowd control. Urgot can move while channeling Fear Beyond Death's recast."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/r",
  "notes": "Unlike most  projectiles, Fear Beyond Death can hit the edge of targets whose center is further than the missile range.\nHowever, it still cannot hit targets whose center is behind Urgot.\nApplies  spell damage on first cast and  raw damage on recast.\nUrgot is  revealed while the target is leashed and being reeled in.\nFear Beyond Death's execute against the enemy champion will aggro nearby enemy minions.\nWhile Fear Beyond Death is not on cooldown, all enemy champions will have an execution indicator on their health bar, and a visual indicator if below the execution threshold.\nMercy's granted  untargetability does not  destroy in-flight  projectiles for the target.\nUrgot will place himself onto the ground and interrupts  displacements affecting him upon starting the channel.\nIf the displacement effect is a knock up with no debuff source, the airborne status is not removed and he spends significantly less time in the air.\nThis ability will cast from wherever the caster is at the start of the cast time.\nFear Beyond Death prevents  Purge from firing for 0.8 seconds.\nThe recast prevents  Purge from firing for 1.5 seconds.\nIf Urgot is in cast time or is  dashing while the chains are in transit, Mercy's forced movement will be deferred (the debuff will continuously refresh) until the cast or dash is complete. The target will still be untargetable, prevented from taking damage from other sources, and suppressed during this time.\nIf Urgot is  channeling a spell, the channel is interrupted when the chains hit.\nRemoving or resisting the  slow has no effect on the mark  debuff.\nThe initial cast always counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability hits a target who is below the threshold, it will automatically recast itself and it won't be considered as an ability activation.\nIf the ability hits a target who is above the threshold and it's recast early, the recast will happen automatically when they reach the threshold and it won't be considered as an ability activation.\nIf the target got hit while above the threshold and it is recast after they fall below it, the recast will be considered as an ability activation.\nReactivating the ability early will reel the target as soon as they reach the 25% maximum health threshold.\nMercy can be cast and will automatically do so at the end of the duration if the target is below the execute threshold regardless of Urgot being affected by  crowd control, including self or enemy-imposed  stasis.\nFear Beyond Death can affect  clones and activates its fear when executing one.\nFear Beyond Death's recast cannot be used if the target is  untargetable.\nFear Beyond Death's recast cannot be used during  resurrection. Attempting to do so places the recast on a 5-second  cooldown.\nIf the target is below the threshold at the end of the duration and Urgot is revived, the recast will initiate regardless of this cooldown.\nThe recast's chains are classified as a  projectile and they will fail to affect their target if:\nUrgot or his target  dies or enters  resurrection.\nThe target becomes  untargetable, even if the granted source does not  destroy in-flight projectiles.\nUrgot will also fail to execute the target if they become  untargetable while the chains are being pulled.(note)\nThey collide with  Wind Wall or  Unbreakable.\nIf  Unbreakable intercepts the chains and  Braum is not the target, they're destroyed.\nIf  Braum is the target, he will still be reeled in and executed as normal.\nThe target is  crowd control immune when the chains hit.\nThe target is  a zombie.\n Spell shield will not block the recast's chains.\nIf the target removes the  suppression by any means they will prevent themselves from being  executed and stop the forced movement from being renewed, though allowing the most recent one to be present and move them to Urgot's previous location.\nTheir untargetability and damage prevention of other sources granted by Fear Beyond Death is removed in the process.\nUrgot will still complete the full channel despite this.\nThe execution would not count as being successful in this case and thus he will not  fear nearby enemies after the failed execution.\nIf the target is  displacement immune when the chains collide, Urgot will not begin the channel until after their displacement immunity ends.\nThe target will be unaffected by Fear Beyond Death's forced movement during this time, but will still be suppressed, prevented from taking damage from other sources and rendered untargetable.\nIf the target's displacement immunity does not end within 10 seconds, Fear Beyond Death will cancel.\nWhen the chains start reeling in and suppressing a player's champion, chains will also cover the sides of their screen.\nThe target champion shrinks in  size in several steps after reaching Urgot's grinder and before being executed.\nIf the suppression ends in any way, the target returns to its normal size.\nIf the execution is successful, the victim's corpse will be effectively invisible unless they enter a  zombie state.\nThe target will die regardless of their current health once the recast's chains hit, even if they are  healed.\nIf the target has  invulnerability that persists for the duration of the channel, it will protect them from the execution.\n Undying Rage will prevent  Tryndamere from dying by the execute. In this case, the execute will bypass his minimum health threshold though and reduce him to 1 health.\nThe effect will also not prevent the activation of  resurrection effects, such as  Guardian Angel or  Anivia's  Rebirth.\nPost-death events such as  Zombie State effects (e.g,  Karthus'  Death Defied,  Kog'Maw's  Icathian Surprise, and  Sion's  Glory in Death) will be triggered.\nOnly the target's current health will count as Urgot's damage in post-game statistics and  spell vamp healing.\nFear Beyond Death's initial cast will not perform the automatic recast from dealing enough damage to kill  Sion.\nFear Beyond Death's recast will be placed on a 5-second  cooldown if the target is below the threshold and becomes targetable again after completing the dash from  Hero's Entrance.\nFear Beyond Death will not put the target inside terrain while reeling them in.\nThis does prevent the execution.\nThe following table refers for interactions while Urgot is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3200",
  "spellEffects": "special",
  "spellshieldable": "Special",
  "targeting": "Direction / Auto",
  "targetRange": "2500"
}
  export default ability
