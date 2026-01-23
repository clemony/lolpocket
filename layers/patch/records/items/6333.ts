// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6333,
  name: 'Death\'s Dance',
  nicknames: [
    'dd'
  ],
  buildsFrom: [
    {
      id: 2019,
      name: 'Steel Sigil',
      gold: 1100
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  description: '60 Attack Damage\n50 Armor\n15 Ability Haste\n\nIgnore Pain\nA percentage of damage taken is dealt to you over 3 seconds instead.\n\nDefy\nWhen a champion that you damaged within 3 seconds dies, cleanse Ignore Pain\'s remaining damage and restore Health over 2 seconds.',
  gold: {
    base: 275,
    sell: 2310,
    total: 3300
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
      name: 'Ignore Pain',
      effects: 'Reduces (<img src="/img/icons/melee.webp" class="inline-icon" />30% /<img src="/img/icons/ranged.webp" class="inline-icon" />10%) of all post-mitigation physical damage and magic damage damage received and instead stores the damage to successively take it as true damage over 3 seconds, dealing a third of the stored damage each second.',
      mythic: false,
      unique: true
    },
    {
      name: 'Defy',
      effects: 'If an enemy champion dies within 3 seconds of you damaging them, removes <i>Ignore Pain\'s</i> remaining stored damage and <img src="/img/icons/heals.webp" class="tip-icon" />heals you for 75% <b>bonus</b> AD over 2 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    armor: 50,
    attackDamage: 60
  }
}
export default item