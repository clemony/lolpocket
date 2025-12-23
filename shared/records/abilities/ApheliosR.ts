// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Moonlight Vigil",
  "affects": "Enemies",
  "blurb": "Active:  Aphelios fires a concentrated blast of moonlight that explodes upon hitting an enemy champion, dealing physical damage to enemy champions in the area.",
  "castTime": "0.6",
  "cooldown": "120 / 110 / 100",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios casts forth a lunar spotlight in the target direction that briefly grants sight of the area along its path and stops upon illuminating an enemy champion. Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225 (based on level) (+ 20% bonus AD) (+ 100% AP) physical damage to enemy champions struck and locking-on to each target hit, as well as granting sight of the area for 2 seconds.</p>"
    },
    {
      "description": "After 0.3 seconds of the illumination, attacks based on Aphelios' current main weapon will launch from the sky against each locked-on target, dealing 100% AD physical damage and applying on-hit effects. These attacks can critically strike for (120% + 40%) damage. There is no range limit for locked-on targets.\n<p class=\"ability-effect\"><span class=\"ability-header\"> Calibrum:</span> Applies an empowered mark that deals 50 / 80 / 110 (based on level) bonus physical damage per mark consumed.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Severum:</span> Heals Aphelios for 250 / 350 / 450 (based on level) if at least one enemy champion is hit.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Gravitum:</span> Increases the initial slow to 99% and empowers Binding Eclipse to root targets affected by the enhanced slow for 1.35 seconds.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Infernum:</span> The initial blast deals 50 / 100 / 150 (based on level) (+ 25% bonus AD) bonus physical damage.[ The attack instead deals 110% AD physical damage against locked-on targets, and causes an explosion of bolts in a 400-radius circle that deals 74.25% / 99% (based on level) AD physical damage to targets hit. ][ Performs Infernum's attacks and Infernum's bolts in a 400-radius circle: primary targets are dealt Infernum's primary damage; secondary targets are dealt 90% of Infernum's regular bolt damage; both are modified by Moonlight Vigil's critical damage modifier. ]Enemy champions will take damage from overlapping areas.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Crescendum:</span> Generates 5 additional spectral Chakrams that return to Aphelios from the first enemy champion hit, for a total of 6, on top of those from other targets hit.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/r",
  "notes": "When critically striking, the attacks on locked-on targets when using  Severum and  Crescendum deal slightly more than 120% damage.(bug) It is currently unknown where this damage originates from.\nFor example, at level 6 with no  attack damage bonuses, Aphelios will deal 80.7471 damage (approximated) from those attacks, whereas they are normally expected to deal 76.902. This discrepancy increases with higher attack damage.\nPENDING FOR TEST: It is also unknown whether this is just a Practice Tool bug.\nAttacks do not apply on-attack effects.\nThe attacks always count as  projectiles unless  Severum is being used. The lunar spotlight, however, may always be intercepted regardless of which weapon is in play as the main weapon.\nDue to this fact, non- Severum attacks will hit targets that are farther away from the center of the blast at a slightly longer delay.\n Spell shield will block Moonlight Vigil's initial detonation damage but does not prevent the attacks from locking-on.\nAll attacks from Moonlight Vigil  critically strike independently from each other.\nThis includes  Infernum's bolts, which also critically strike independently from the primary attack's damage.\nChanging weapons while Moonlight Vigil is in flight does not change the effect it has when it hits.\nThis ability will cast from wherever the caster is at the start of the cast time.\nMoonlight Vigil's effect radius is centered around the location of the missile as it collides.\nWith  Severum, the extra flat heal is given only once, not per target. However, all damage done by Moonlight Vigil with it also heals him from Severum's  own passive effect.\nWith  Infernum, 14 fire bolts splash from each target hit (18 for  critical strikes). Bolts do not activate if Moonlight Vigil's initial damage kills the target.\nWith  Crescendum, 1 spectral chakram is generated for every target hit, meaning it is possible to generate up to 10 spectral chakrams with one cast of Moonlight Vigil if it hits 5 enemy champions.\nThe locked-on attacks' can be  dodged and  blocked, but won't be prevented if Aphelios is  blinded.\nPreventing the attack also prevents the additional effect (e.g. marking them with  Gravitum or granting  spectral chakrams).\nMoonlight Vigil has different visual effects changed accordingly to each weapon. This may vary depending on the skin, this showcases the default:\n\n\n\n Calibrum\n\n\n\n Severum\n\n\n\n Gravitum\n\n\n\n Infernum\n\n\n\n Crescendum",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "1000",
  "spellEffects": "aoe",
  "spellshieldable": "special",
  "targeting": "Direction",
  "targetRange": "1300"
}
export default ability
