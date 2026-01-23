// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Living Battery',
  affects: 'Self',
  blurb: 'Innate:  Zeri generates charge when she moves and casts  Burst Fire. Her next basic attack will consume charge to deal magic damage.',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Zeri generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts Burst Fire, up to a maximum of 100 charge. Her basic attacks consume charge to deal modified damage.Zeri gains maximum charge when the game starts and upon respawning.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Basic Attack:</span> Zeri zaps the target, applying spell effects as spell damage, and triggering on-cast effects. This cannot critically strike nor trigger on-hit and on-attack effects.</p>'
    },
    {
      description: 'At full charge, Zeri\'s next attack is empowered to consume all charge to deal 75 - 160 (based on level) (+ 110% AP) (+ 1% - 11% (based on level) of target\'s maximum health) magic damage. The damage based on the target\'s health ratio is capped at 300 against monsters.'
    },
    {
      description: 'While not at full charge, Zeri\'s attacks deal 10 - 25 (based on level) (+ 3% AP) magic damage, and execute targets below 60 - 150 (based on level) (+ 18% AP) health. Each attack consumes 10 charge if she has enough already.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/p',
  notes: 'Charged attacks only deal the base damage to  structures.\nUncharged attacks do not execute enemies that are  shielded or  invulnerable while below the health threshold.\n Spell shield will only block a fully charged attack. Uncharged attacks are not blocked.\nThe attack\'s range is not increased from attack range increases ( Rapid Firecannon). Instead,  Burst Fire\'s reach is.\nUncharged and charged attacks trigger  Tear of the Goddess\' Mana Charge.\nThe empowered attack will trigger but not be consumed against  wards or jungle plants.',
  projectile: 'FALSE',
  speed: 'N/A',
  spellEffects: 'Spell',
  spellshieldable: 'special',
  targeting: 'Unit'
}
export default ability
