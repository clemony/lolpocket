// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Judgment',
  affects: 'Enemies',
  blurb: 'Active:  Garen rapidly spins with his sword for a short time while  ghosted, continually dealing physical damage to nearby enemies. He spins more based on his  bonus attack speed.',
  castTime: 'none',
  cooldown: '9 / 8.25 / 7.5 / 6.75 / 6',
  cost: '0',
  damageType: 'Physical damage',
  effectRadius: '325',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Garen rapidly spins his sword around himself 7 (+ 1 per 25% bonus attack speed) times over 3 seconds, becoming unable to declare basic attacks but gaining ghosting and dealing physical damage to nearby enemies periodically. Judgment can be recast after 1 second while active, and does so automatically after it ends.</p>',
      leveling: [
        {
          attribute: 'Physical Damage Per Spin',
          modifiers: [
            {
              values: '4 / 7 / 10 / 13 / 16'
            },
            {
              tooltip: 'Scaling per rank:\n38 / 41 / 44 / 47 / 50% AD',
              unit: '% AD',
              values: '38 - 50'
            }
          ]
        }
      ]
    },
    {
      description: 'Enemy champions hit 6 times by Judgment are inflicted with 25% armor reduction for 6 seconds, with the duration refreshing upon the 7th hit and every 6th hit thereafter.'
    },
    {
      description: 'Judgment deals 25% increased damage against the nearest enemy hit.',
      leveling: [
        {
          attribute: 'Increased Damage Per Spin',
          modifiers: [
            {
              values: '5 / 8.75 / 12.5 / 16.25 / 20'
            },
            {
              tooltip: 'Scaling per rank:\n47.5 / 51.25 / 55 / 58.75 / 62.5% AD',
              unit: '% AD',
              values: '47.5 - 62.5'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Garen ends Judgment.</p>'
    },
    {
      description: 'Judgment can critically strike for[ (140% + 32%) damage. ][ 80% total critical damage. ]'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/e',
  notes: 'Deactivating the ability manually does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nEach spin triggers a stack of  Conqueror.\nFor the purpose of moving closer to an enemy when right clicking them, Judgment also reduces Garen\'s  attack range [ to 100 ][ by 75 ] for the duration.\nJudgment cancels Garen\'s last movement command upon ending.\nEach spin deals damage simultaneously to all enemies within its range when the spin is completed.\nThe spin animation is capped at once per 0.2 seconds, but the amount of ticks will keep on scaling.\nThe armor reduction stacks multiplicatively with other percentage armor penetration effects.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Decisive Strike and  Courage are usable.  Demacian Justice interrupts.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Hexflash\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  spellEffects: 'aoedot',
  targeting: 'Auto'
}
export default ability
