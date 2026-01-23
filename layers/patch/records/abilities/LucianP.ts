// Updated Patch 15.24.1 - 12/26/2025 07:03:58 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Lightslinger',
  affects: 'Enemies',
  blurb: 'Innate: After casting an ability,  Lucian\'s next  basic attack within a few seconds fires a second attack that deals reduced physical damage.',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> After casting an ability, Lucian\'s next basic attack within 3.5 seconds fires an additional shot on-attack after 0.25 seconds, which deals 50% / 55% / 60% (based on level) AD physical damage, increased to 100% AD against minions. He will shoot the same target, else another target within 50 units beyond his basic attack range automatically.</p>'
    },
    {
      description: 'The second shot applies on-hit effects, triggers on-attack effects, and is affected by critical strike modifiers.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate - Vigilance:</span> Whenever Lucian is healed or shielded by an ally, or an enemy champion within 1000 units is immobilized, his next two shots within 6 seconds are empowered to deal 15 (+ 20% AD) bonus magic damage on-hit. He can store up to 4 empowered shots at a time.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/p',
  notes: 'Lightslinger is triggered and consumed by the first attack, even if no target can be found upon firing the second attack.\nThe second attack, if the initial target was killed, will prioritize enemy champions regardless of having  sight of them or not and enemy  minions with  low health.\nLucian can perform actions freely while firing Lightslinger\'s second attack.\nThe second attack has special movement animations depending on the direction Lucian is moving while firing.\nThe second attack counts as a separate hit for effects such as  Electrocute,  Muramana\'s Shock, and  Eclipse\'s Ever Rising Moon.\nThe second attack separately rolls a  critical strike.\nThe second attack does not trigger  Sundered Sky\'s Lightshield Strike.(note)\nThe empowered shots will apply against structures.',
  spellEffects: 'attack',
  targeting: 'Passive'
}
export default ability
