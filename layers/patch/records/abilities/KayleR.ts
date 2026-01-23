// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Divine Judgment',
  affects: 'Allies, Self',
  blurb: 'Active:  Kayle grants herself or an allied champion  invulnerability for the next few seconds, and conjures flaming swords around herself.',
  castTime: '0.5',
  cooldown: '160 / 120 / 80',
  cost: '100 / 50 / 0',
  damageType: 'Magic damage',
  effectRadius: '675 / 675 / 775',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kayle grants herself or a target allied champion invulnerability for 2.5 seconds from the start of the cast time, and conjures flaming swords around herself.</p>'
    },
    {
      description: 'After 2.5 seconds, she rains the swords down around the target, dealing magic damage to nearby enemies.',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '200 / 300 / 400'
            },
            {
              unit: '% bonus AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    },
    {
      description: 'Kayle can move during Divine Judgment\'s cast time.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/r',
  notes: 'Details\n\nDivine Judgment\'s effects persist through the target\'s  death.\nDivine Judgment will prioritize casting on allies over Kayle. This means that if the player is selecting a point with the mouse on which both Kayle\'s and another valid target\'s selection areas overlap on the map, the cast will always occur on the ally.\nPrior to becoming Transcended via  Divine Ascent, casting Divine Judgment refreshes the duration of  Zeal  stacks at the start of the cast time to ensure that it does not expire while she can\'t attack during the cast.\nDuring cast, an indicator for the damaging area can be seen around the target, however, this is not visible if there is no  sight on the them.\nDivine Judgment can be cast on  clones too, including  Shapesplitter and  Warrior Trickster, which are normally not targetable for allies.\nWhile it\'s an uncommon occurence, it is possible to cast Divine Judgment on targets who just entered  resurrection or  zombie state. This is only possible with very strict timing and perhaps high latency.\nIt\'s recommended to avoid both of the afformentioned interactions, as they render the usage of Divine Judgment useless in many cases.\nInteractions & Other\n\nWhile the target is invulnerable, a number indicator will appear beneath them whenever they would receive damage to show the amount that was entirely mitigated. This is calculated pre-mitigation, meaning before resistances and reductions are taken into account.\n Rapid Firecannon\'s Energized effect behaves strangely with the set basic attack range:\nIf the ability is cast while the effect is ready, the range goes from  400 to  385 over 4 stat updates (400 -> 390 -> 387 -> 385). When the cast completes, the proper range needs 2 updates to set in ( 660 -  675 while Arisen;  710 -  725 while Transcended).\nGaining the effect during the cast will cause the range to cycle between  525 and  550 until the cast finishes, then the proper range is set after 1 update.\nSelling the item during the cast causes the range to be set to  250.\nPENDING FOR TEST: Range values are outdated because of patch V11.18 changes to Kayle.\n\nThe invulnerability can be tracked on the HUD via a buff called  Intervention.',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '900'
}
export default ability
