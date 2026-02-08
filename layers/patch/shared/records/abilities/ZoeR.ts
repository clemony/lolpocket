// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Portal Jump',
  affects: 'Self',
  blurb: 'Active:  Zoe  blinks in the target direction, after which she cannot move for a brief moment.',
  castTime: '0.25',
  cooldown: '11 / 8 / 5',
  cost: '40',
  icon: 'https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/r',
  notes: 'Zoe will remain at the blink destination for an inconsistent period of time.(bug)\nPortal Jump causes Zoe to become unable to perform any actions for a varied ~0.55-0.75 seconds(bug) from the start of the cast time and another time for a varied ~0.3-0.5 seconds(bug) starting from right before she blinks back.\nZoe is able to perform any action while at the blink destination, except practically being unable to move through normal movement due to having 0 movement speed.\nPortal Jump\'s maximum range location, or end position, is determined at the start of the cast time and as such Zoe will always blink to the determined destination regardless of where she is at the end of the ability\'s cast time.\nPortal Jump will always cause Zoe to  blink back to her casting position regardless of where she is moved to while at the destination.\nShe will still be considered to blink even if she fails to move her intended location while  attached (e.g. if she were affected by  The Show Stopper).\nUpon reaching her destination, Zoe will either raspberry at the nearest enemy champion, or lick an ice cream cone when there are no enemy champions in  sight.\nZoe\'s return position is shifted by 25 units in the target direction from her cast location.\nThe following table refers for interactions while Zoe is locked out during the cast time and for certain periods of time during the ability:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  resource: 'Mana',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> After a 0.15-second delay, Zoe blinks in the target direction and remains there for 0.95 seconds to 1.25 seconds, during which she sets her movement speed to a static 0 and has unobstructed vision. Afterwards, she blinks back to her casting position.</p>'
    },
    {
      description: 'Portal Jump resets Zoe\'s basic attack timer. Zoe briefly becomes unable to act after casting Portal Jump as well as after blinking back.'
    }
  ]
}
export default ability
