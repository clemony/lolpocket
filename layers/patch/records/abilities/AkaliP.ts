// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Assassin\'s Mark',
  affects: 'Self, Enemies',
  blurb: 'Innate:  Akali\'s damage with abilities against a champion create a ring around them for a few seconds, and she gains  move speed while moving away from the ring.',
  damageType: 'Magic damage',
  effectRadius: '500',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> When Akali damages an enemy champion with an ability, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions. For 2 seconds, she gains 30% / 40% / 50% / 60% (based on level) bonus movement speed while moving away from the center of the ring. Only one ring may be active at a time.</p>'
    },
    {
      description: 'When Akali exits the ring, for 2 seconds, she regains the bonus movement speed while facing nearby enemy champions and becomes empowered with Swinging Kama for 4 seconds, during which she cannot create another ring.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Swinging Kama:</span> Akali\'s next basic attack is empowered to have its range doubled and deal 35 - 182 (based on level) (+ 60% bonus AD) (+ 55% AP) bonus magic damage.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/p',
  notes: 'Enemies cannot see the ring, but can see the empower effect.\nSwinging Kama gives a static bonus range which doesn\'t change if Akali\'s range changes during it (i.e  Rapid Firecannon):\nIf Rapid Firecannon fully charges within Swinging Kama\'s duration, Akali\'s total range increases to 337.5.\nIf Rapid Firecannon fully charges before gaining Swinging Kama, Akali\'s total range is increased to 395.\nThe ring will be created around the last target hit by  Five Point Strike.\nThe ring\'s center is offset 120 units away from the enemy\'s center, towards Akali.\nThe empowered attack can be  dodged and  blocked, and will be mitigated by  blinds.\nThe empowered attack will trigger but not be consumed nor apply its effects against structures and wards.\nThis ability\'s damage is calculated based on the caster\'s stats at the time of its application.',
  spellEffects: 'spell',
  spellshieldable: 'false',
  targeting: 'Passive'
}
export default ability
