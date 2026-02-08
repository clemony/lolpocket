// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Last Caress',
  affects: 'Enemies / Self',
  angle: '180°',
  castTime: '0.35',
  cooldown: '120 / 100 / 80',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '500',
  icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/r',
  notes: 'Last Caress can be buffered during  Empowered Whiplash.\nThe casting input controls the direction Last Caress\'  damage is dealt from, with the movement automatically happening in the reverse direction.\nEnemy  champions below the health threshold are marked for Evelynn, indicating the target will receive Last Caress\'  increased damage.\nThe screen will direct to Evelynn\'s position after she  blinks.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Evelynn reveals her true form, becoming untargetable at the start of the cast time and then unleashing her lashers in a cone in the target direction, dealing magic damage to enemies struck within. After 0.5 seconds, she blinks 700 units in the opposite direction and becomes targetable again.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '125 / 250 / 375'
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
      description: 'Last Caress is empowered to deal 240% damage against enemies below 30% of their maximum health.',
      leveling: [
        {
          attribute: 'Empowered Damage',
          modifiers: [
            {
              values: '300 / 600 / 900'
            },
            {
              unit: '% AP',
              values: '180'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
