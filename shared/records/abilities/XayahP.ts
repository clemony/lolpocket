// Updated Patch 15.23.1 - 11/30/2025 12:24:11 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Clean Cuts",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Innate: Feathers shot by  Xayah will linger in the ground at max range for a few seconds.",
  "damageType": "Physical damage",
  "effectRadius": "1000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Feathers shot by Xayah will linger and be planted in the ground at maximum range for 6 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Xayah's ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times. Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the triggering attack's damage to the primary target and 35% / 45% / 55% (based on level) AD physical damage to other enemies hit. The secondary target damage can critically strike for (175% + 40%) damage if the triggering attack does.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Lover's Leap:</span> If either Xayah or Rakan is channeling Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator's Recall completes.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/p",
  "notes": "Deals  basic damage to the primary target and  area damage to secondary targets.\nFeathers will stop upon being intercepted by  projectile-blocking effects.\nPENDING FOR TEST::  Missile popping before and after striking the primary target.\nAfter striking their target, the attack will proceed in a line in the same direction it was already flying.\nIf the target is more than 1000 units from Xayah when the empowered attack hits them, the attack will not keep flying in a line and drop the Feather at their location immediately.\nUnlike similar effects, the homing and line trajectories use the same missile.\nAll her Feathers on the ground will be destroyed when Xayah  dies, and while she is dead, missiles that are still in flight will not spawn new ones, either.\nClean Cut's feathers will spawn even if the basic attack is  blocked.\nClean Cut's hit can be  dodged by or  missed against the primary target.\nThis will not prevent the missile from continuing on its path nor from dealing damage to secondary targets. The damage cannot be dodged as or missed against a secondary target.\nThe empowered attack will not trigger against  structures nor  wards.\nThe duration will be refreshed when starting the attack windup against them.\nThe number of Clean Cuts stacks available is represented by a  feather counter in her ammo bar, visible to the player only.",
  "projectile": "SPECIAL",
  "speed": "4000",
  "spellEffects": "special",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
