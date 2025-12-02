// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Searing Brilliance",
  "affects": "Self, Enemies",
  "blurb": "Innate - Overwhelm:  Mel's damaging  basic attacks and  abilities apply a  stack of Overwhelm to enemies hit for a few seconds, stacking infinitely. Each stack stores magic damage; if the total stored damage would kill the target, the next stack will consume them all to detonate the damage.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Mel's damaging basic attacks and abilities apply a stack of Overwhelm to enemies for 5 seconds, refreshing on subsequent applications and stacking infinitely.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Overwhelm:</span> Store 50 / 60 / 70 / 80 (based on Golden Eclipse's rank) (+ 10% AP) magic damage on the affected enemy with the first stack, reduced[ to 60% ][ to 30 / 36 / 42 / 48 (based on Golden Eclipse's rank) (+ 6% AP) ]against minions. For each stack, store an additional 2 / 3 / 4 / 5 (based on Golden Eclipse's rank) (+ 0.75% AP) magic damage on the target. If the total post-mitigation damage stored exceeds the target's current health and shields, the next stack applied against them will consume them all to deal the damage.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Searing Brilliance:</span> Mel's ability casts each generate 3 stacks of Searing Brilliance for 5 seconds, refreshing on subsequent casts and stacking up to 9 times. Her next basic attack consumes all stacks of Searing Brilliance to additionally fire an equal number of blazing projectiles at the target. Each projectile deals 8 - 50 (based on level) (+ 5% AP) magic damage.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/p",
  "notes": "The first stack also benefits from the per-stack bonus stored damage.\nA threshold indicator for the currently stored damage is placed on a target's health bar, as well as a mark above their head, while any Overwhelm stacks are active. These are visible to Mel and her target(s).\nWhenever  Golden Eclipse's damage would put them below Overwhelm's threshold, the mark will darken and glow more prominently.\nJust before Overwhelm stacks are consumed, targets have 5 additional stacks applied to them.(bug)\nThese stacks are consumed immediately.\nOverwhelm stacks will not be consumed against  Tryndamere's  Undying Rage.",
  "projectile": "TRUE",
  "spellEffects": "proc",
  "spellshieldable": "false",
  "targeting": "Passive"
}
export default ability
