// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Demacian Justice',
  affects: 'Enemies',
  blurb: 'Active:  Garen strikes a lethal blow to an enemy champion that deals true damage based on the target\'s missing health.',
  castTime: '0.435',
  cooldown: '120 / 100 / 80',
  cost: '0',
  damageType: 'True damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Garen calls upon the might of Demacia onto the target enemy champion, dealing them true damage as well as revealing them for 1 second at the start of the cast time.</p>',
      leveling: [
        {
          attribute: 'True Damage',
          modifiers: [
            {
              values: '150 / 250 / 350'
            },
            {
              tooltip: 'Scaling per rank:\n25 / 30 / 35% of target\'s missing health',
              unit: '% of target\'s missing health',
              values: '25 - 35'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/r',
  notes: 'The target will die if they\'re at least under 20 / 21.57 / 23.08 / 24.53 / 25.93% maximum health + 120 / 156.86 / 192.31 / 226.42 / 259.26 flat health on top of that. This does not count effects that mitigate  true damage, such as  shields.\nIf Garen dies during Demacian Justice\'s cast time, it will visually appear as on cooldown and he won\'t be able to cast it until the cooldown has elapsed.(bug)\nThis is fixed by clicking Demacian Justice\'s icon on the UI at the bottom of the screen.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '400'
}
export default ability
