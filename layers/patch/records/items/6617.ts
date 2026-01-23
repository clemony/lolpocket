// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6617,
  name: 'Moonstone Renewer',
  nicknames: [
    'yuumi'
  ],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900
    }
  ],
  description: '25 Ability Power\n200 Health\n20 Ability Haste\n125% Base Mana Regen\n\nStarlit Grace\nHealing or shielding an ally chains the effect to another ally (excluding yourself), healing 30% or shielding 35% of the original amount.',
  gold: {
    base: 500,
    sell: 1540,
    total: 2200
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
      name: 'Starlit Grace',
      effects: '<img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding an allied champion chains the effect to the other nearest allied champion within 800 units of them (<i>excluding yourself</i>), granting them 30% of the heal or 35% of the shield\'s initial strength. If no other allied champions are in the radius, grant the same target an additional 30% of the heal or 35% of the shield.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 25,
    health: 200,
    manaRegen: 125
  }
}
export default item