// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Trial by Fire',
  affects: 'Self, Enemies',
  blurb: 'Innate: Every few seconds,  Gangplank\'s next basic attack will burn the target, continually dealing bonus true damage and granting him  bonus movement speed.',
  damageType: 'True damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them[ 50 - 250 (based on level) (+ 100% bonus AD) (+ 2 per 1% critical strike chance) bonus true damage over 2.5 seconds. ][ 5 - 25 (based on level) (+ 10% bonus AD) (+ 0.2 per 1% critical strike chance) bonus true damage every 0.25 seconds over 2.5 seconds. ] Turrets are dealt 50% damage.</p>'
    },
    {
      description: 'If Gangplank successfully hits a target with Trial by Fire, he gains 15% - 30% (based on level) bonus movement speed for 2 seconds. Every time a Powder Keg explodes, the cooldown for Trial by Fire resets and Gangplank gains its bonus movement speed.'
    },
    {
      description: 'Trial by Fire cannot be applied with Parrrley nor Powder Keg.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/p',
  notes: 'Reapplying Trial by Fire before a previous application has run out will stack the full damage, instead of refreshing the duration.\nThe bonus true damage scaling based on critical strike chance is capped at 100% of the stat.\nIf the attack is  dodged or if Gangplank is  blinded, the effect is not applied nor does Trial by Fire go on cooldown. If the attack is  blocked, the effect is not applied, but Trial by Fire will go on cooldown.(note)\nThe empowered attack will not trigger against non- turret structures nor wards.',
  spellEffects: 'default',
  spellshieldable: 'False',
  targeting: 'Passive'
}
export default ability
