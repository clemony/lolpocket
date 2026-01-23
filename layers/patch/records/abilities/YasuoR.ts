// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Last Breath',
  affects: 'Enemies',
  blurb: 'Active:  Yasuo  blinks to the target  airborne enemy champion and instantly generates max  Flow. He then briefly  knocks up,  reveals, and deals physical damage to all nearby  airborne enemies.',
  castTime: 'none',
  cooldown: '70 / 50 / 30',
  cost: '0',
  damageType: 'Physical damage',
  effectRadius: '400',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Yasuo blinks to the opposite side of a visible airborne enemy champion nearest to the cursor, instantly generating maximum Flow while resetting Gathering Storm stacks.</p>'
    },
    {
      description: 'Upon arrival, he knocks up all nearby airborne enemy champions for 1 second, revealing them, becoming unable to act himself, and slashing them with his sword over the duration to deal physical damage thereafter. Surrounding enemy champions that become airborne during this time will also be affected by Last Breath through the remaining duration.',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '200 / 350 / 500'
            },
            {
              unit: '% bonus AD',
              values: '150'
            }
          ]
        }
      ]
    },
    {
      description: 'For the next 15 seconds, the damage dealt by Yasuo\'s critical strikes ignores 60% of the target\'s bonus armor.'
    },
    {
      description: 'A nearby airborne enemy champion is required to cast this ability. If Yasuo would blink inside the attack range of an enemy turret (excluding the Nexus Obelisk), Last Breath will instead attempt to position him outside of it.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/r',
  notes: 'Last Breath can be cast on targets  suspended in mid-air by  Nami\'s  Aqua Prison\'s  stun.\nThe wiki has adopted the term suspension for this unique property due to a statement by Yasuo\'s designer.[2]\nThe percentage bonus armor penetration stacks additively with other sources of percentage armor penetration.(note)\nYasuo gains the bonus armor penetration on-cast.\nLast Breath requires the target to be affected by  airborne from an enemy source, and simultaneously that the target is not considered  cc-immune,  displacement immune, or  untargetable during it.\nLast Breath cannot be cast if there are no nearby enemy champions that meet the conditions.\nAttempting to cast the ability on an enemy champion that is not airborne will indicate that they "Must Be Airborne!".\n Spell shield will not prevent Last Breath from being cast and the target will be knocked up and dealt the damage.\nThe spell shield is still consumed in this case.(note)\nSelf-applied or allied-applied  displacements do not allow Last Breath to target the champion. Those applied by the neutral team (e.g.  Dragon\'s initial knock back) can be targeted.\nAn indicator will be placed towards enemy champions that meet the cast conditions within range of Last Breath to signify the ability can be cast.\n The Hextech Ultimatum will prevent Yasuo from casting Last Breath on an airborne enemy champion far outside its borders.\nYasuo can only do so if the airborne enemy champion is positioned slightly outside of the borders.\nUpon Last Breath\'s cast, the targets\' facing directions snap to Yasuo. Afterwards, their facing directions shift in all other directions every 0.25 seconds over the duration of the airborne.\nThe last shift snaps them to the facing direction of the second one.\nOn the  Nightbringer Yasuo skin, these shifts in facing direction do not occur, but the targets\' facing directions will still snap to Yasuo upon Last Breath\'s cast.\nYasuo does not need  sight of enemy champions near his target to affect them with the ability.\nLast Breath applies its damage and removes any forced movement(note) on the targets when it ends, including if it is removed early by being  cleansed.\nThis is in contrast to most other effects with  airborne, which have their forced movement linger if the disabling debuff is removed and have to be overridden by another movement spell (such as  Lucian\'s  Relentless Pursuit or  Flash).\nTerrain displacing abilities (e.g.  Weaver\'s Wall,  Pillar of Ice,  Volcanic Rupture) that affect enemy champions are considered  airborne, and will therefore interact with Last Breath.\nWhile blinking, Yasuo creates an  untargetable clone of himself that cues a dashing animation (similar to  Sweeping Blade\'s) towards the target. This unit\'s rules do not follow those of a  clone\'s. As such, it is more alike a champion, unless special cased.\nWhile performing Last Breath, Yasuo is  locked out of performing actions.\nThe lock out will end prematurely if all targets:\n Cleanse the  knock up.\nMove far away from Yasuo.\nLeave Yasuo\'s  sight (e.g. by  nearsight).\nBecome  untargetable.\n Die.\nEnter the  Realm of Death.\nThe following table refers for interactions while Yasuo is locked out:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A',
  spellEffects: 'Single target',
  spellshieldable: 'special',
  targeting: 'Unit / Proximity',
  targetRange: '1400'
}
export default ability
