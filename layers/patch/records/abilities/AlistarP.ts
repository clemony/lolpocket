// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Triumphant Roar',
  affects: 'Self, Allies',
  blurb: 'Innate:  Alistar generates  stacks of Triumph from  stunning or  displacing enemy champions or when a nearby enemy  dies.',
  effectRadius: '1000 / 950',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Alistar generates a stack of Triumph for each enemy champion he stuns or displaces with his abilities, and each time a nearby enemy minion or non-epic monster dies. He generates 7 stacks if a nearby enemy champion or epic monster dies.</p>'
    },
    {
      description: 'At 7 stacks, Alistar consumes them all to heal himself for 5% of his maximum health and nearby allied champions for 7% of his maximum health.'
    },
    {
      description: 'Triumphant Roar can occur only once every few seconds, though Alistar may still generate stacks before then.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/p',
  notes: 'If Alistar is at 7 stacks when Triumphant Roar comes off cooldown, he will roar as soon as it elapses.\nAlistar does not gain stacks for unsuccessfully trying to apply  crowd control, for instance against a  crowd control immune target.\nAlistar will still gain a stack for unsuccessfully trying to knock back a champion protected by a  spell shield with  Headbutt.(bug)\nHealing occurs simultaneously for Alistar and his allies.\nThere is a VFX projectile (700 missile speed) that cannot be destroyed by  Wind Wall and is unrelated to the actual heal.\nAlistar loses all Triumph stacks upon dying.',
  projectile: 'SPECIAL',
  targeting: 'Passive'
}
export default ability
