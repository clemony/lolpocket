// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Wild Rush',
  width: '300',
  affects: 'Self, Enemies',
  blurb: 'Active:  Samira  dashes at the target enemy or enemy structure, dealing magic damage to enemies she passes through. She also gains  bonus attack speed for a short time.',
  castTime: 'none',
  cooldown: '20 / 18 / 16 / 14 / 12',
  cost: '40',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Samira dashes a fixed distance in the direction of the target enemy or enemy structure, dealing magic damage to enemies she passes through. She also gains bonus attack speed for 5 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '50 / 60 / 70 / 80 / 90'
            },
            {
              unit: '% bonus AD',
              values: '20'
            }
          ]
        },
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '20 / 25 / 30 / 35 / 40'
            }
          ]
        }
      ]
    },
    {
      description: 'Scoring a takedown against an enemy champion within 3 seconds of damaging them resets Wild Rush\'s cooldown.'
    },
    {
      description: 'Flair and Inferno Trigger can be cast during the dash. Casting Blade Whirl will buffer it to cast at the end of the dash.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/e',
  notes: 'Samira gains the attack speed buff at the start of the dash.\nWild Rush does not deal its damage to turrets.\nWild Rush prioritizes targeting champions over turrets.\n Inferno Trigger will be buffered to cast at the end of the dash if  Flair was cast during the dash.\nCasting  Flash during Wild Rush will interrupt the dash but deal damage to nearby enemies at the location.\nIf  Flair was cast during this time, an explosive will also be placed at that location.\nWild Rush will also reset if Samira kills or gets assist credit on a  clone that dies (to hostiles).(note)',
  resource: 'Mana',
  speed: '1600',
  spellEffects: 'aoe',
  spellshieldable: 'true',
  targeting: 'Unit',
  targetRange: '600'
}
export default ability
