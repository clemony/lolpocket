// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Mana Surge',
  affects: 'Self',
  blurb: 'Innate: Periodically,  Xerath\'s next basic attack restores  mana, doubled against an enemy  champion.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Xerath empowers his next basic attack to restore 30 - 195 (based on level) mana, doubled to 60 - 390 (based on level) against enemy champions.</p>'
    },
    {
      description: 'Mana Surge\'s cooldown is reduced by 3.5 seconds whenever Xerath kills an enemy.'
    },
    {
      description: 'Mana Surge does not trigger if Xerath would restore above his maximum mana.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/p',
  notes: 'Mana Surge will trigger even if the attack is  blocked.\nThe empowered attack will trigger against structures.\nPENDING FOR TEST:: Mana Surge\'s  interactions with  dodging, and  blinding effects.',
  targeting: 'Passive'
}
export default ability
