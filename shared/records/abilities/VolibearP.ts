// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "The Relentless Storm",
  "affects": "Self, Enemies",
  "blurb": "Innate:  Volibear's  basic attacks and  ability hits generate a  stack of The Relentless Storm, which stacks up to 5 times. At 5 stacks, he gains Lightning Claws.",
  "damageType": "Magic damage",
  "effectRadius": "450",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times. At 5 stacks, Volibear gains Lightning Claws.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">The Relentless Storm:</span> For each stack, Volibear gains 5% (+ 3% per 100 AP) bonus attack speed, up to 25% (+ 15% per 100 AP).</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Lightning Claws:</span> Volibear's claws ignite with lightning, empowering his basic attacks on-hit to deal 11 - 60 (based on level) (+ 45% AP) bonus magic damage to the target and the nearest visible enemy within 450 units of the target, chaining up to 4 subsequent targets.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/p",
  "notes": "Volibear's spikes visually grow as The Relentless Storm stacks.\nStacks of The Relentless Storm are also granted  on-hit, but will specifically not be if the target is  invulnerable.\nWhile at four stacks, the next attack or ability on-hit reaching the fifth stack will be empowered by Lightning Claws.\nA stack of The Relentless Storm is not gained if the attack is  dodged and/or missed if Volibear is  blinded. A stack is granted even if the attack is  blocked. In all cases, Lightning Claws will not apply (on-hit damage is parried and the bounce is prevented).\nSince  Frenzied Maul cannot be missed while Volibear is  blinded, gaining stacks from The Relentless Storm and applying Lighting Claws from the ability will not be prevented from that parry effect.\nThe empowered attacks do not affect  structures nor  wards.",
  "projectile": "FALSE",
  "spellEffects": "periodic",
  "spellshieldable": "false",
  "targeting": "Passive"
}
export default ability
