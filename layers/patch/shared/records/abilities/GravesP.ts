// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "New Destiny",
  "width": "40",
  "affects": "Self, Enemies",
  "angle": "24° /  30°",
  "blurb": "Innate:  Graves'  basic attacks consume up to 2 shells before needing to reload. The reload speed is reduced based on his  bonus attack speed.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Double Barrel:</span> Graves' basic attacks fire his shotgun to consume ammunition within 2 shells. He will reload over a few seconds immediately after expending all shells or withholding leftover shells for a while. The reload time is reduced by Graves' level and bonus attack speed, and can be interrupted by declaring an attack or casting an ability.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - 12-Gauge:</span> Graves' basic attack sprays 4 pellets in a cone, each colliding with the first enemy unit in their path, dealing 70% - 100.01% (based on level) AD physical damage plus[ 23.31% - 33.3% (based on level) AD additional physical damage ][ about one-third of the damage ]for each subsequent pellet hitting the same target, up to 139.93% - 199.92% (based on level) AD total physical damage against a single target. Pellets deal 25% reduced damage against structures.</p>"
    },
    {
      "description": "Critical strikes spray 6 pellets over a 25% wider cone, with each pellet dealing[ (33.75% + 13.5%) increased damage, ][ increased damage equal to 45% bonus critical damage, ]resulting in[ 178.312% (+ 17.998%) total damage ][ 249.52% - 356.48% (based on level) (+ 25.19% - 35.98% (based on level)) AD total physical damage ]if all pellets hit a single target."
    },
    {
      "description": "Pellets apply life steal. Only the first pellet to hit each enemy applies on-hit effects."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Buckshot:</span> Non-champion units hit by more than one pellet are knocked back, though not through terrain.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Graves/ability-icon/p",
  "notes": "Graves takes 2.08 seconds to reload 2 shells (when the clip is empty) and 1.3 seconds to reload 1 shell. He must idle with 1 shell for 2.08 seconds before he starts reloading. These values can be improved with bonus attack speed.\nValues of bonus attack speed between 150% and 200% have a negative effect on Graves'  reload speed.(bug)[2]\nAttack speed growth will always have a positive effect on Graves'  reload speed and is not counted toward the 150% and 200% attack speed thresholds. For example, Graves gains 51% bonus attack speed from attack speed growth at level 18; meaning the thresholds at level 18 are at 201% and 251% respectively.\nMaximum reload speed is 0.651 : 0.891 (based on level), which equates to a reload timer of 1.54 : 1.12 (based on level) seconds, which is the shortest reload time at the 150% threshold.\nGraves can hit multiple individual enemies with a single shot from his basic attack. The first pellet hitting an enemy:\nDeals the highest damage out of all other pellets.\nApplies and triggers  on-hit effects.\n\"Single-use\" on-hit effects such as  Spellblade items will be applied to the very first enemy hit by a pellet (closest one in this case).\nApplies  basic damage, while all additional pellets deal  default damage.\nIs reduced by  Warden's Mail's Rock Solid.\nGraves' attack windup is based on such a low value that it will always take only 1 game tick, even at the lowest possible attack speed of 0.2.\nWhen Graves has his attack range increased by 35% to  573.75 via  Rapid Firecannon's Sharpshooter, it has special effects on the cone spread of his basic attack:\nThe reach of the individual missiles is also increased by 35% to  843.75 /  783.75.\nThe spread of the individual missiles is decreased by 35% (angle  ×  1/1.35) to 17.7° / 22.2°.\nPellets will not hit  wards nor jungle plants.\nWhen Graves performs a basic attack against these units, he will fire a standard ranged homing missile at the target to successfully hit it.\nThis same missile is also used for when his basic attack is empowered by an  Energized effect.\nPellets can be  dodged and  blocked, but not missed while Graves is  blinded.\nWhile Graves is  blinded, the pellets are special cased to fire in a random direction that is always away from the primary target of his basic attack.\nEnemies within range of the pellets in their randomly fired direction will be hit as the pellets cannot be missed.\n Basic attack resets other than  Quickdraw do not affect Graves' basic attack timer.\nStructures can be hit by multiple pellets, as with other valid targets.\nIf Graves'  basic attack  critically strikes against an enemy behind their structure, and this structure is hit by all pellets, the damage dealt to the structure is increased by 33.3%.\n On-attack effects such as  Help, Pix! and  Runaan's Hurricane's Wind's Fury will be triggered as usual from the completion of Graves'  basic attack windup. They will obey their standard target-acquisition rules in spite of Graves'  special basic attack behavior.\n Runaan's Hurricane's Wind's Fury can still fire its bolts at secondary targets even if they were already hit by the pellets of Graves'  basic attack.\n Black Cleaver's Carve will be applied for the physical damage dealt by each pellet, meaning that each of Graves'  basic attacks can apply up to 4 stacks of the effect, increased to the maximum of 5 with a  critical strike.\n Sundered Sky's Lightshield Strike will function normally with Graves'  basic attacks, causing the pellets to critically strike if the primary target was also a target of the item's effect.\nIf none of the pellets hit the target of Lightshield Strike's effect, however, the item's effect will not be consumed on the target thus not triggering the heal nor applying the on-target-cooldown, but still causing Graves'  basic attack to critically strike as if the effect was successfully consumed.\nHis basic attacks against the marked target will be guaranteed to critically strike until the item's effect has been consumed by at least one pellet hitting them.\nPellets will not consume the item's effect on secondary targets that are also targets of the item's effect; they will not consume the mark of enemies near the primary target that are marked by Lightshield Strike.\n Randuin's Omen's Resilience will reduce the critical damage dealt by every pellet, resulting in each pellet dealing less damage than if they were to not critically strike.\n Kraken Slayer's Bring It Down VFX for its missile appears to fire at the primary target, but will always collide with the target hit by the first pellet.\nThe in-game HUD for the champion's stat panel incorrectly displays Graves \"reload speed\" for reloading 2 shells as his attack speed, instead of displaying his actual attack speed which behaves normally like any other champion. This displayed value more accurately represents his reloads per second, and not attacks per second as the attack speed tooltip in the HUD would suggest.",
  "projectile": "TRUE",
  "speed": "3800 / 3000 / 3400",
  "spellEffects": "special",
  "spellshieldable": "False",
  "targeting": "Passive",
  "targetRange": "425"
}
  export default ability
