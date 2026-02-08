// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Impale',
  width: '350 / 200',
  affects: 'Self, Enemies',
  blurb: 'Active:  Skarner winds up his stingers over the cast time with  displacement immunity, then lashes them forward in the target direction, dealing magic damage to enemies hit and impaling up to 3 of the closest enemy champions within the area to briefly  suppress. While suppressed, the targets are  revealed and  attached to Skarner. If he successfully impales at least one enemy champion, Skarner gains  bonus movement speed for Impale\'s duration.',
  castTime: '0.75',
  cooldown: '120 / 105 / 90',
  cost: '100',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/r',
  notes: 'Impale\'s attachment depends on the application of the  suppression; if the suppression is not applied, neither is the attachment. Similarly, if the suppression is removed, so is the attachment.\nIf a target resists the suppression by being  immune to crowd control,  displacement immune, or having a  spell shield, Skarner will not attach them to himself.\nIf all targets hit resist the suppression, Skarner will fail to attach any of them to himself and thus will not initiate Impale, causing the ability to behave as if no valid impale targets were hit.\nIf a target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will detach themselves from Skarner immediately.\nIf all targets remove the suppression, Impale ends prematurely and is cancelled for Skarner.\nIf a target would be inside of terrain at the end of the effect, they are moved to the nearest valid space.\nIf a target would be on the other side of a wall, they are moved to the same side as Skarner.\nDuring Impale, Skarner always faces in the direction of the nearest attached target.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Skarner is in cast time:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while Skarner is performing Impale:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Shattered Earth and  Ixtal\'s Impact are disabled, but can be buffered.  Seismic Bastion is usable.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport\n\n\nDisabled\n\n Flash  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Skarner winds up his stingers over the cast time, then lashes them forward in an isosceles trapezoid in the target direction, dealing magic damage to enemies hit and impaling up to 3 of the closest enemy champions within the area to suppress them for 1.5 seconds. While suppressed, the targets are revealed and attached to Skarner. If he successfully impales at least one enemy champion, Skarner gains 40% bonus movement speed for the same duration.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '150 / 250 / 350'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        }
      ]
    },
    {
      description: 'If Impale is cast during Shattered Earth, Skarner automatically casts Upheaval in the direction of Impale\'s cast. Skarner is unable to basic attack, cast Shattered Earth or Ixtal\'s Impact, or use Flash during Impale. While the targets are impaled, they are attached to Skarner 300 units in front of him. Targets are placed 200 units in the same direction at the end of the effect.'
    }
  ]
}
export default ability
