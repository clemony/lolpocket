// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Jaws of the Beast',
  affects: 'Enemies, Self',
  castTime: 'none',
  cooldown: '8 / 7.5 / 7 / 6.5 / 6',
  cost: '80 / 85 / 90 / 95 / 100',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/q',
  notes: 'Details\n\nJaws of the Beast deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nJaws of the Beast has a 0.264 seconds cast delay, which is the amount of time required for the bite to occur from the start of the cast. This should not be confused with a cast time.\nIf the cast started beforehand, both the damage and the heal occur even after Warwick\'s  death, or during  resurrection.\nIf the target dies prior to Warwick reaching them, Jaws of the Beast refunds its cooldown when tapped. The ability can be still held, however, Warwick is no longer eligible for the refund in this case.  Editor\'s Note: The refund can occasionally fail. (bug)\nThe healing is calculated only from Jaws of the Beast\'s damage, while additional effects, such as on-hits, are not.\nWhile the bite always occurs after the same delay, the time spent lunging does not, which depends on the range Jaws of the Beast was cast away from the target, up to 0.5 seconds when cast at maximum range.\nThis does not affect the  lockout timer, which is the same as the bite\'s delay.\nThe lunge always places Warwick to his attack range to the center of his target, while the dash will place him up to the edge of his attack range from the target\'s edge.\nIt has been special cased so Warwick does not follow an enemy\'s  Recall or a  Sion that revives from  Glory in Death.Editor\'s Note: This may occasionally fail. Also note that as of currently, if Warwick manages to bite the target in those conditions, he will almost always end up following them to their base. (bug)\nJaws of the Beast\'s channel cannot be initiated while  grounded or  rooted. Warwick can only use the normal cast.\nThe channel will not be interrupted by either of the two effects, despite the lock-on being a movement channel.\nInteractions & Other\n\nIn order to hit the cap, the target monster needs to have at least 2500 / 2358 / 2250 / 2167 / 2100 health.\nJaws of the Beast is the only ability in the game that combines  channeling with  displacement immunity. Every  interrupting crowd control effect that is not resisted by the displacement immunity will prematurely stop the  dash.\nThe bite can still occur if cast before the crowd control application, but Warwick cannot start channeling.\nAbilities that apply both  stun and  airborne at the same time cause Warwick to ignore the displacement, but prematurely stop the channel and the dash.\nThe only exception to this is  Sion\'s  Glory in Death.\nWarwick will follow enemies that move via  attachment effects but the lock-on will not be extended.\nWhile Jaws of the Beast does not use Quick Casting by default, click-and-hold is comparable to the input required to use  Bone Skewer or  Comet Spear. It does not accept two-click input (e.g. First Cast and Recast) that abilities like  Piercing Arrow or  Decimating Smash use in Standard Casting.\nWarwick will attempt to basic attack the target after a short delay.\nThe following table refers for interactions while Warwick is  channeling:\n Flash,  Teleport,  Hexflash, and  Recall are disabled during the first 0.4 seconds of the channel.\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Primal Howl is usable.  Blood Hunt and  Infinite Duress are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\nKnown Issues\n\nJaws of the Beast will also refund its  cooldown if it kills the target after being held for exactly its bite delay. (bug)\nThe ability may briefly cast on a dead target, with the ability going on cooldown.(bug)',
  resource: 'Mana',
  spellEffects: 'Special',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '365',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Warwick lunges at the target enemy over 0.264 seconds and bites them, dealing magic damage, healing himself for a percentage of the post-mitigation damage dealt, applying on-hit effects and life steal, and triggering on-attack effects. The damage based on the target\'s health ratio is capped against monsters.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              unit: '% of target\'s maximum health',
              values: '6 / 7 / 8 / 9 / 10'
            },
            {
              unit: '% AD',
              values: '120'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Maximum Monster Damage',
          modifiers: [
            {
              values: '150 / 165 / 180 / 195 / 210'
            },
            {
              unit: '% AD',
              values: '120'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Healing Percentage',
          modifiers: [
            {
              unit: '%',
              values: '25 / 37.5 / 50 / 62.5 / 75'
            }
          ]
        }
      ]
    },
    {
      description: 'While Jaws of the Beast is active, Warwick is displacement immune and clamps his jaw on the target, following all of their movement. The ability can be held for additional effects.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Hold:</span> Warwick performs the bite, and then begins to charge for 0.5 seconds, extended if the target is under effects of a dash or displacement. During the charge, he leaps behind the target.</p>'
    }
  ]
}
export default ability
