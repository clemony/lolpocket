// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2522,
  name: 'Actualizer',
  active: [
    {
      name: 'Mana Made Real',
      effects: 'For 8 seconds, your mana is <i>Empowered</i>. While <i>Empowered</i>: your abilities cost 100% more mana; you gain 15% (+0.5% per 100 <b>bonus</b> mana) increased ability damage, <img src="/img/icons/healing.webp" class="tip-icon" />healing, and <img src="/img/icons/shielding.webp" class="tip-icon" />shielding; and your basic ability cooldowns progress 30% faster.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    }
  ],
  description: '90 Ability Power\n300 Mana\n10 Ability Haste\n\nMana Made Real (0s)\nFor 8 seconds, your mana is Empowered. While Empowered, your spells cost 100% more Mana, you gain  increased Ability damage, Shielding, and Healing, and your basic ability cooldowns progress 30% faster.',
  gold: {
    base: 1050,
    sell: 2170,
    total: 3100
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    abilityPower: 90,
    mana: 300
  }
}
export default item