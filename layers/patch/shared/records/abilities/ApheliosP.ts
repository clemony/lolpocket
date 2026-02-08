// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Crescendum',
  affects: 'Enemies',
  blurb: 'Aphelios throws a chakram as his basic attack and he cannot attack again until it returns to him. Other abilities will create mirror chakrams that he gathers, and his basic attacks deal bonus physical damage based on how many mirror chakrams he holds.',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/p',
  notes: 'Accumulated Chakrams accompany Crescendum whenever Aphelios performs a basic attack. This is merely a visual representation of the increased damage, and the separate blades are not considered separate damage sources nor  projectiles.\nAll Chakram stacks are lost if the Crescendum projectile is destroyed (i.e  Wind Wall,  Unbreakable).\nDue to the return time, at high attack speeds Crescendum will increase Aphelios\' effective time to cast attacks, even when right next to his target.',
  projectile: 'TRUE',
  resource: 'Other',
  spellEffects: 'attack',
  targeting: 'Passive',
  effects: [
    {
      description: 'Basic attacks with Crescendum hurl the blade at the target, which lingers for 0.25 seconds before homing back to Aphelios. He is unable to declare basic attacks until he retrieves Crescendum, but the attack timer is reset once caught.'
    },
    {
      description: 'Whenever Aphelios casts an ability that would require him to throw Crescendum, he instead fires a spectral Chakram at the target that similarly returns to him. Aphelios accumulates the Chakrams he catches, up to 20, which last for 5 seconds or until Crescendum is depleted of Moonlight. Chakram duration is refreshed when Aphelios catches a new one or attacks a champion with Crescendum.'
    },
    {
      description: 'Attacks with Crescendum are empowered to deal 0% - 138.5% (based on number of Chakrams) AD bonus physical damage and have a lower windup of 10.67%, further decreased to 6.67% when critically striking. The bonus damage from Chakrams is affected by critical strike modifiers.'
    }
  ]
}
export default ability
