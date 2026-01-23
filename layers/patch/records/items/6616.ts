// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6616,
  name: 'Staff of Flowing Water',
  nicknames: [
    'nami'
  ],
  buildsFrom: [
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    }
  ],
  description: '35 Ability Power\n10% Heal and Shield Power\n125% Base Mana Regen\n15 Ability Haste\n\nRapids\nHealing or Shielding an ally grants you both 45 Ability Power for 6 seconds.',
  gold: {
    base: 800,
    sell: 1575,
    total: 2250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Rapids',
      effects: '<img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding allied champions (<i>excluding yourself</i>) grants you and them 45 ability power for 6 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 35,
    healAndShieldPower: 10,
    manaRegen: 125
  }
}
export default item