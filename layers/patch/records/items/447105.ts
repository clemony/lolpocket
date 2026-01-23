// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 447105,
  name: 'Empyrean Promise',
  active: [
    {
      name: 'Vigilance',
      effects: '<img src="/img/icons/dash.webp" class="tip-icon" />Dash to the current location of your ally and upon completion grant both yourself and the ally a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs 100 – 250 (based on level) (+100% of your AP) (+10% of your <b>bonus</b> health) damage for 5 seconds. <b>Can be used even while the ally is dead.</b>',
      unique: true
    }
  ],
  description: '70 Ability Power\n18% Heal and Shield Power\n30 Ability Haste\n125% Base Mana Regen\n\nACTIVE (0s)\nVigilance\nTeleport to your ally and grant  shield for 5s when landing. Can be used when Ally is downed.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 30,
    abilityPower: 70,
    healAndShieldPower: 18,
    manaRegen: 125
  }
}
export default item