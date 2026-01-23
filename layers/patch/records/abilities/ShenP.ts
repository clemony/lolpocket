// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Ki Barrier',
  affects: 'Self',
  blurb: 'Innate: Shen manifests a Spirit Blade that he can control with his abilities.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> After completing an ability\'s effects, Shen grants himself a shield for 47 - 120 (based on level) (+ 13% bonus health) for 2.5 seconds. If Shen affects at least one other champion with an ability, Ki Barrier\'s cooldown is reduced by 4 - 8 (based on level) seconds.</p>'
    },
    {
      description: 'Shen manifests a Spirit Blade that he can control with Twilight Assault and Spirit\'s Refuge.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/p',
  notes: 'The Spirit Blade spawns with Shen, teleports closer to him if he gets too far away, and instantly blinks to him if he uses any global  blink ( Teleport,  Recall, or  Stand United). It will also dissappear if Shen dies and reappear upon respawning.\nEnemies see an arrow pointing from Shen to the location of his Spirit Blade even if it is not visible.\n Twilight Assault will grant the shield if the Spirit Blade reaches Shen. If it is stopped, no shield is granted. It will grant the cooldown reduction upon hitting an enemy champion.\n Spirit\'s Refuge will grant the shield and/or the cooldown reduction after the protective zone disappears. It does not need to block attacks to trigger the cooldown reduction, just touch an ally champion at any point of the duration.\n Shadow Dash will grant the shield when the dash ends. It will grant the cooldown reduction upon hitting an enemy champion.\nIf the dash is  interrupted, the shield will instead be received the moment the  crowd control source is applied, before damage calculation (if any).\n Stand United will give the shield and/or the cooldown reduction upon completing the channel.',
  targeting: 'Passive'
}
export default ability
