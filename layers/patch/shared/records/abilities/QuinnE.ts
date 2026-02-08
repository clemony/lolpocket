// Updated Patch 16.1 - 01/29/2026 04:27:01 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Vault',
  affects: 'Enemies',
  blurb: 'Active:  Quinn  dashes to the target enemy, dealing physical damage,  knocking them back, marking them as  Vulnerable, and briefly  slowing them. She then  leaps backward.',
  castTime: 'none',
  cooldown: '12 / 11 / 10 / 9 / 8',
  cost: '50',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/e',
  notes: 'Quinn will track the target if they change locations.\nShe will dash to the target\'s previous location without applying Vault\'s effects if the target is too far away or moves beyond 1200 units.\nVault  resets Quinn\'s remaining attack cooldown a short delay after the first dash ends (even if interrupted).\nThis delay is a fuzzy 0.25 to 0.5 seconds and this matches up with the moment the target of Vault is marked as  Vulnerable.\nThe basic attack reset does not count as one for  Hail of Blades.\nQuinn will automatically attempt to attack the target once she completes Vault.\nThe target will turn to face the opposite direction after being  knocked back.\nUnlike its constant cast range Vault\'s bounce\'s can vary to allow Quinn to close or to make a gap between herself and the target (depending on casting position) or even to jump through a wall (if there is enough landing room on the other side).\nVault\'s  knock back also interrupts the windup of basic attacks with  uncancellable windups.(note)',
  resource: 'Mana',
  speed: '2500 / 850',
  spellEffects: 'Spell',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '600',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Quinn dashes to the target enemy, marking them as Vulnerable, dealing physical damage, knocking them back a very short distance over 0.5 seconds, and slowing them by 50% decaying over 1.5 seconds. She then leaps back 525 units away from them.</p>',
      leveling: [
        {
          attribute: 'Physical damage',
          modifiers: [
            {
              values: '40 / 65 / 90 / 115 / 140'
            },
            {
              unit: '% bonus AD',
              values: '20'
            }
          ]
        }
      ]
    },
    {
      description: 'Vault resets Quinn\'s basic attack timer shortly after the initial dash. Heightened Senses can be cast during either of the dashes.'
    }
  ]
}
export default ability
