// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Twin Fang',
  affects: 'Enemies',
  blurb: 'Active:  Cassiopeia launches an attack at the target enemy that deals magic damage. If this attack kills the target, the  mana cost is refunded.',
  castTime: '0.125',
  cooldown: '0.75',
  cost: '40',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cassiopeia launches her fangs at the target enemy that deal 52 - 120 (based on level) (+ 10% AP) magic damage. If this kills the target, Twin Fang\'s mana cost is refunded.</p>'
    },
    {
      description: 'Against a poisoned target, Twin Fang deals bonus magic damage and heals Cassiopeia. The heal is reduced by 75% against minions and small and medium monsters.',
      leveling: [
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              values: '20 / 43 / 66 / 89 / 112'
            },
            {
              unit: '% AP',
              values: '55'
            }
          ]
        },
        {
          attribute: 'Total Enhanced Damage',
          modifiers: [
            {
              values: '52 / 56 / 60 / 64 / 68 / 72 / 76 / 80 / 84 / 88 / 92 / 96 / 100 / 104 / 108 / 112 / 116 / 120'
            },
            {
              values: '20 / 43 / 66 / 89 / 112'
            },
            {
              unit: '% AP',
              values: '65'
            }
          ]
        },
        {
          attribute: 'Heal',
          modifiers: [
            {
              unit: '% AP',
              values: '10 / 11.5 / 13 / 14.5 / 16'
            }
          ]
        },
        {
          attribute: 'Reduced Heal',
          modifiers: [
            {
              unit: '% AP',
              values: '2.5 / 2.88 / 3.25 / 3.63 / 4'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/e',
  notes: 'Upon reaching the target, Twin Fang will wait for an ongoing  Noxious Blast to explode before dealing its damage.\nTwin Fang\'s damage against poisoned targets:\nWhen maxed first: 72 : 220 (based on level) (+ 65% AP).\nWhen maxed second: 72 : 220 (based on level) (+ 65% AP).\nWhen maxed last: 72 : 220 (based on level) (+ 65% AP).\nTwin Fang\'s cast indicator is incorrectly adding her own radius to the range like an  edge range ability, and is therefore slightly larger than the actual cast range Twin Fang can cast at.\nUsing Twin Fang on an out-of-range target after completing a movement order causes Cassiopeia to move back to her original location after casting, if no other order is issued during the entire process.(note)\nThis may be a consequence of Twing Fang being a "Walk in range of the target" ability that does not interrupt movement commands.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2500',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '700'
}
export default ability
