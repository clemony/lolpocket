// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3171,
  name: 'Crimson Lucidity',
  nicknames: [
    'boots'
  ],
  buildsFrom: [
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900
    }
  ],
  description: '20 Ability Haste\n45 Move Speed\n\nIonian Insight\nGain 20 Summoner Spell Haste.\n\nNoxian Haste\nEmpowering or protecting allies with abilities, dealing damage to enemy Champions with abilities, or casting a Summoner Spell grants  Move Speed for 4 seconds.\n\nNoxian Haste can only be triggered once per Ability cast.',
  gold: {
    base: 0,
    sell: 630,
    total: 900
  },
  maps: [
    11
  ],
  noEffects: false,
  passives: [
    {
      name: 'Ionian Lucidity',
      effects: 'Gain 20 summoner spell haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Noxian Haste',
      effects: '<img src="/img/icons/heal.webp" class="tip-icon" />Healing, <img src="/img/icons/shield.webp" class="tip-icon" />shielding or buffing an ally, damaging abilities against champions, and using summoner spells grants you (<img src="/img/icons/melee.webp" class="inline-icon" />10% /<img src="/img/icons/ranged.webp" class="inline-icon" />8%) <b>bonus</b> movement speed for 4 seconds. This can be triggered from the same cast instance only once every 4 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    flatMovespeed: 45
  }
}
export default item