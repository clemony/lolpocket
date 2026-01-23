// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3222,
  name: 'Mikael\'s Blessing',
  nicknames: [
    'crucible',
    'michael',
    'mikael'
  ],
  active: [
    {
      name: 'Purify',
      effects: 'Remove all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon" />Airborne, <img src="/img/icons/blind.webp" class="tip-icon" />Blind, <img src="/img/icons/disarm.webp" class="tip-icon" />Disarm, <img src="/img/icons/nearsight.webp" class="tip-icon" />Nearsight, and <img src="/img/icons/suppression.webp" class="tip-icon" />Suppression) from yourself or the target allied champion and <img src="/img/icons/heal.webp" class="tip-icon" />heal the target for 100 – 250 (based on target\'s level).',
      range: 0,
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    }
  ],
  description: '250 Health\n100% Base Mana Regen\n12% Heal and Shield Power\n15 Ability Haste\n\nPurify\nRemove all crowd control debuffs (excluding Airborne and Suppression) from an ally champion and restore 100 - 250 Health.',
  gold: {
    base: 900,
    sell: 1610,
    total: 2300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    healAndShieldPower: 12,
    health: 250,
    manaRegen: 100
  }
}
export default item