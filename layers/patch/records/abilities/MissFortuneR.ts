// Updated Patch 15.24.1 - 12/26/2025 07:04:06 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Bullet Time',
  width: '40',
  affects: 'Enemies',
  angle: '30°',
  castTime: 'none',
  cooldown: '120 / 110 / 100',
  cost: '100',
  damageType: 'Physical damage',
  effectRadius: '1450',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune channels for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals 80% AD (+ 25% AP) physical damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Total Waves',
          modifiers: [
            {
              values: '14 / 16 / 18'
            }
          ]
        },
        {
          attribute: 'Maximum Total Physical Damage',
          modifiers: [
            {
              unit: '% AD',
              values: '1120 / 1280 / 1440'
            },
            {
              tooltip: 'Scaling per rank:\n350 / 400 / 450% AP',
              unit: '% AP',
              values: '350 - 450'
            }
          ]
        },
        {
          attribute: 'Wave Interval Time',
          modifiers: [
            {
              unit: ' seconds',
              values: '0.2 / 0.18 / 0.16'
            }
          ]
        }
      ]
    },
    {
      description: 'Each of the waves can critically strike for (120% + 8%) damage.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/r',
  notes: 'The damage dealt by each wave of Bullet Time is calculated when the wave reaches the target.\nMiss Fortune  reveals herself for 4.5 seconds if there is an enemy champion within the area.\nTargets cannot be damaged by more than one projectile per wave.\nThe bullet streams that each fire 1 projectile per wave are spead by 6° between one another, aiming towards the angles +-3/9/15° from Miss Fortune\'s facing direction.\nBullet time picks 6 locations on the ground 500 units from Miss Fortune (with the aforementioned angles) and fires a bullet stream towards each.\nIf Miss Fortune is moved to a new location, these locations will update (since patch V13.3); the cone will fire towards her new facing direction.\nBullet time fires the first wave at 0.066 seconds, and the last at 2.904 seconds. Times between waves are equally spread between these values.\nMiss Fortune may cancel the last ~0.1 seconds of channel time at no loss of effect.\nThe following table refers for interactions while Miss Fortune is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2000',
  spellEffects: 'aoedot',
  spellshieldable: 'False',
  targeting: 'Direction'
}
export default ability
