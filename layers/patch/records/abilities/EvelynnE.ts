// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Empowered Whiplash',
  affects: 'Enemies',
  blurb: 'Active:  Evelynn casts Whiplash,  dashing to the target enemy and dealing  increased damage to them and enemies she passes through.',
  cooldown: '8',
  cost: '40 / 45 / 50 / 55 / 60',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Evelynn dashes toward the target enemy with her lashers, dealing increased damage to them upon completion as well as to all enemies within her path.</p>',
      leveling: [
        {
          attribute: 'Empowered Magic Damage',
          modifiers: [
            {
              values: '80 / 120 / 160 / 200 / 240'
            },
            {
              unit: '% (+ 2.5% per 100 AP) of target\'s maximum health',
              values: '4'
            }
          ]
        }
      ]
    },
    {
      description: 'Empowered Whiplash only applies on-hit effects to the primary target.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/e',
  notes: 'Evelynn will track the target if they change locations.\nShe will dash to the target\'s previous location if the target moves 2000 or more units away.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nThere is no time-out period on Empowered Whiplash.\nEmpowered Whiplash can be  blocked but cannot be  dodged and/or missed if Evelynn is  blinded.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Unit'
}
export default ability
