// Updated Patch 16.1 - 01/29/2026 04:26:57 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Formless Blade',
  width: '150',
  affects: 'Self, Enemies',
  blurb: 'Passive:  Nilah gains  armor penetration based on her  critical strike chance. Also, her basic attacks and Formless Blade against  champions  heal her based on her  critical strike chance; overhealing becomes a  shield that lasts a few seconds.',
  castTime: '0.35 : 0.28 (based on bonus attack speed) / None',
  cooldown: '4',
  cost: '30',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nFormless Blade\'s active cast triggers call for help for dealing damage despite not being a targeted spell.(bug)\nApplies  area damage on the empowered attacks.\n Spell shield will not block Formless Blade\'s empowered basic attacks.\nParrying effects ( dodge,  block,  blind) will negate Formless Blade\'s empowered attacks only as the primary target.\nFormless Blade\'s damage to the primary target of the enhanced attacks is affected by  Infinity Edge and classified as  basic damage.\nThe target to which Nilah applies life steal to is unpredictable.',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'Special',
  spellshieldable: 'special',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Nilah gains 0% - 33% (based on critical strike chance) armor penetration. Her basic attacks and Formless Blade heal her for 0% - 20% (based on critical strike chance) of the post-mitigation damage dealt to champions, converting each heal instance beyond maximum health into a shield that lasts 6 seconds.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nilah cracks her whip-blade in a line in the target direction that deals physical damage to enemies hit, increased by 0% - 100% (based on critical strike chance). Formless Blade can hit structures and applies life steal at 100% effectiveness to one target.</p>',
      leveling: [
        {
          attribute: 'Minimum Physical Damage',
          modifiers: [
            {
              values: '5 / 10 / 15 / 20 / 25'
            },
            {
              tooltip: 'Scaling per rank:\n90 / 95 / 100 / 105 / 110% AD',
              unit: '% AD',
              values: '90 - 110'
            }
          ]
        },
        {
          attribute: 'Maximum Physical Damage',
          modifiers: [
            {
              values: '10 / 20 / 30 / 40 / 50'
            },
            {
              tooltip: 'Scaling per rank:\n180 / 190 / 200 / 210 / 220% AD',
              unit: '% AD',
              values: '180 - 220'
            }
          ]
        }
      ]
    },
    {
      description: 'If Formless Blade is cast during Slipstream, Nilah leaves behind a wave that is sent towards her location at the end of the dash, dealing the same damage to enemies hit.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">If Formless Blade hits an enemy, Nilah empowers herself for 4 seconds:</span> gaining 125 bonus attack range and 10% - 60% (based on level) bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit. Against secondary non-champion targets, this is reduced to 33% AD for minions, and additionally executes minions left below 20 health. On-hit effects are applied only to the primary target.</p>'
    }
  ]
}
export default ability
