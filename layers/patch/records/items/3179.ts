// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3179,
  name: 'Umbral Glaive',
  nicknames: [
    'lethality'
  ],
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  description: '60 Attack Damage\n18 Lethality\n15 Ability Haste\n\nNightstalker\nAfter being unseen by enemies briefly, your next attack against a champion deals an additional true damage.\n\nBlackout\nWhen you are near enemy Stealth Wards and traps, reveal them briefly. While revealing wards, your attacks deal bonus damage to them.',
  gold: {
    base: 750,
    sell: 1960,
    total: 2800
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
      name: 'Blackout',
      cooldown: '90',
      effects: 'When spotted by enemy stealthed <img src="/img/icons/wards.webp" class="tip-icon" />wards or <img src="/img/icons/stealthed-trap.webp" class="tip-icon" />traps, gain <i>Blackout</i> for 8 seconds.',
      mythic: false,
      range: 400,
      unique: true
    },
    {
      name: 'Blackout',
      effects: 'You <img src="/img/icons/disabled-ward.webp" class="tip-icon" />disable surrounding stealthed wards, as well as <img src="/img/icons/expose.webp" class="tip-icon" />expose and <img src="/img/icons/true-sight.webp" class="tip-icon" />reveal nearby stealthed wards and traps while <i>Blackout</i> is active. Your basic attacks deal (<img src="/img/icons/melee.webp" class="inline-icon" />2 /<img src="/img/icons/ranged.webp" class="inline-icon" />1) <b>bonus</b> true damage to wards.',
      mythic: false,
      unique: false
    },
    {
      name: 'Nightstalker',
      effects: 'After being not <img src="/img/icons/sight.webp" class="tip-icon" />visible to enemies for at least 1 second, your next basic attack against a champion is empowered to deal 50 (+1.5 per 1 Lethality) <b>bonus</b> true damage on-hit. The empowered attack lasts for 4 seconds after being seen by an enemy.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 60,
    lethality: 18
  }
}
export default item