// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Flash Frost',
  width: '220',
  affects: 'Enemies',
  blurb: 'Active:  Anivia launches a chunk of ice that deals magic damage and  slows enemies hit.',
  castTime: '0.25',
  cooldown: '11 / 10 / 9 / 8 / 7',
  cost: '80 / 85 / 90 / 95 / 100',
  damageType: 'Magic damage',
  effectRadius: '225',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and slows them by 20% - 40% (based on Glacial Storm\'s Rank) for 3 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '50 / 70 / 90 / 110 / 130'
            },
            {
              unit: '% AP',
              values: '25'
            }
          ]
        }
      ]
    },
    {
      description: 'Flash Frost can be recast while the ice is in flight after its cast time, and does so automatically at maximum range.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Anivia shatters the ice, dealing magic damage to nearby enemies and stunning them for a duration, as well as refreshing the slow.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 95 / 130 / 165 / 200'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '110 / 165 / 220 / 275 / 330'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        },
        {
          attribute: 'Stun Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1.1 / 1.2 / 1.3 / 1.4 / 1.5'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/q',
  notes: 'The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nFlash Frost can only proc  Conqueror once even if it damages the same target twice.\nFlash Frost will fire from wherever Anivia was at the start of the cast time.\n Spell shield can only prevent either the collision hit or recast from affecting the target.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '950',
  spellEffects: 'spellaoe',
  spellshieldable: 'Special',
  targeting: 'Direction / Auto'
}
export default ability
