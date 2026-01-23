// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Summon: Tibbers',
  affects: 'Enemies / Tibbers',
  blurb: 'Active:  Annie summons her bear  Tibbers, dealing magic damage to enemies in the area.',
  castTime: '0.25 / None',
  cooldown: '130 / 115 / 100',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '250 /  350',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Annie gains magic penetration.</p>',
      leveling: [
        {
          attribute: 'Magic Penetration',
          modifiers: [
            {
              unit: '%',
              values: '10 / 15 / 20'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Annie summons Tibbers to the target location in a burst of flame, dealing magic damage to enemies near him. Summon: Tibbers can be recast at any time while Tibbers is alive.</p>',
      leveling: [
        {
          attribute: 'Initial Magic Damage',
          modifiers: [
            {
              values: '150 / 275 / 400'
            },
            {
              unit: '% AP',
              values: '75'
            }
          ]
        }
      ]
    },
    {
      description: 'Tibbers then remains on the field as a controllable pet for up to 45 seconds.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Annie directs Tibbers to the target location.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Summon:</span> Tibbers\' recast can be used while affected by cast-inhibiting crowd control. See Pets for more details about Tibbers.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/r',
  notes: 'Burst of flame deals  area damage and Tibbers\' basic attacks deal  pet damage.\nTibbers will  blink back next to Annie if he gets too far away.\nRecasting Summon: Tibbers does not interrupt  Recall\'s channel.',
  resource: 'Mana',
  spellEffects: 'special',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '600'
}
export default ability
