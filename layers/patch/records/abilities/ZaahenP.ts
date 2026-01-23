// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Cultivation of War',
  affects: 'Self',
  blurb: 'Innate:  Zaahen\'s  basic attacks and  abilities against enemy  champions grant him  stacks of Determination, refreshing on subsequent damage to champions and stacking up to 12 times.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Zaahen generates a stack of Determination for each enemy champion damaged by his basic attacks and abilities, lasting for 5 seconds, refreshing on subsequent triggers, and stacking up to 12 times. After the duration, the stacks expire by 1 / 2 / 3 / 4 / 5 (based on seconds elapsed) every 0.5 seconds.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Determination:</span> For each stack, Zaahen gains bonus attack damage equal to 1.5% - 2.8% (based on level) AD. At maximum stacks, this is doubled to 36% - 67.2% (based on level) AD.Periodically, if Zaahen would take lethal damage while at maximum stacks of Determination, he refreshes its duration and enters resurrection for 4 seconds: becoming invulnerable, untargetable, and unable to act. Additionally, he restores[ 30% - 75% (based on level) of his maximum health ][ 0.94% - 2.34% (based on level) of his maximum health every 0.125 seconds ]over the duration. Afterwards, he revives himself and refreshes the duration of Determination.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/p',
  notes: 'Determination stacks are generated per damage instance per champion damaged with Zaahen\'s attacks and abilities.\n The Darkin Glaive\'s initial cast empowered attack can generate a stack for each strike.\nBoth passes of  Dreaded Return can generate a stack.\nBoth  Aureate Rush\'s swing and  Grim Deliverance\'s shockwave generate a stack for every champion hit.\nDuring the resurrection\'s health restoration, Zaahen\'s  current health is set to a percentage of his maximum health equal to the cumulative amount of health restored on that restoration tick, for every single tick.\nIn other words, his current health will always be overridden by the percentage of health he is supposed to have restored on every restoration tick, to prevent him from healing or restoring health by other sources.\nUpon the resurrection being triggered, all summoner spells that are not already on cooldown are placed on a 5-second  cooldown.\nThe  untargetability from the resurrection does not  destroy in-flight  projectiles.\nCultivation of War\'s resurrection takes priority over  Guardian Angel\'s Rebirth, but grants priority to  Zilean\'s  Chronoshift.\nThe resurrection does not activate if Zaahen is killed by the  Nexus Obelisk.\n Spell shield will not prevent stacks from being generated, even if no damage is dealt.(bug)\nDetermination stacks are displayed in a secondary resource bar under Zaahen\'s health bar.\nThe bar is white at <4 stacks, yellow at ≥4 stacks and orange at ≥9 stacks.\nAt maximum stacks, if the revive is available, the bar will be red and will remain red after Zaahen revives until he loses stacks again.(note)\nThe following table refers for interactions while Zaahen is locked out during the resurrection:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  spellshieldable: 'false',
  targeting: 'Passive'
}
export default ability
