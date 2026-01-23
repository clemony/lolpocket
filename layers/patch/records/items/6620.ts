// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6620,
  name: 'Echoes of Helia',
  nicknames: [
    'spooky cup'
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
  description: '35 Ability Power\n200 Health\n20 Ability Haste\n125% Base Mana Regen\n\nSoul Siphon\nGain 35% of pre-mitigation damage dealt to champions as Soul Charges. Healing or Shielding an ally consumes all Soul Charges to restore Health.',
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
      name: 'Soul Siphon',
      effects: 'Gain 35% of pre-mitigation damage dealt to champions as <i>Soul Charges</i>, up to 80 – 250 (based on level). <img src="/img/icons/healing.webp" class="tip-icon" />Healing or <img src="/img/icons/shielding.webp" class="tip-icon" />shielding an allied champion <i>(excluding yourself)</i> consumes all charges to heal them equal to the consumed amount.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 35,
    health: 200,
    manaRegen: 125
  }
}
export default item