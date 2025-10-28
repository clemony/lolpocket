export const statTotalGold = [
  {
    id: 'total',
    name: 'Total Gold Cost',
    abbr: 'Total',
    description: '',
    icon: 'i-lol-',
  },
]
export const statIndex: Record<string, StatIndex> = {

  // magic

  abilityPower: {
    id: 'abilityPower',
    name: 'Ability Power',
    abbr: 'AP',
    color: 'var(--color-sorcery)',
    description: '',
<<<<<<< HEAD
    group: 'spells',
    icon: 'i-lol-ap',
  },
=======
    group: 'magic',
    icon: 'i-lol-ap',
  },
  healAndShieldPower: {
    id: 'healAndShieldPower',
    name: 'Heal & Shield Power',
    abbr: 'HSP',
    color: 'var(--color-enchanter)',
    description: '',
    group: 'magic',
    icon: 'i-lol-hsp',

  },
  //
  flatMagicPenetration: {
    id: 'flatMagicPenetration',
    name: 'Flat Magic Penetration',
    abbr: 'MPEN',
    color: 'var(--color-mpen)',
    description: '',
    group: 'magic',
    icon: 'i-lol-mpen',
    longAbbr: 'Magic Pen.',

  },
>>>>>>> refs/remotes/origin/main
  percentMagicPenetration: {
    id: 'percentMagicPenetration',
    name: 'Magic Penetration',
    abbr: 'MPEN',
    color: 'var(--color-mpen)',
    description: '',
<<<<<<< HEAD
    group: 'spells',
=======
    group: 'magic',
>>>>>>> refs/remotes/origin/main
    icon: 'i-lol-mpen',
    longAbbr: 'Magic Pen',

  },
<<<<<<< HEAD
  //
  healAndShieldPower: {
    id: 'healAndShieldPower',
    name: 'Heal & Shield Power',
    abbr: 'HSP',
    color: 'var(--color-enchanter)',
    description: '',
    group: 'spells',
    icon: 'i-lol-hsp',

  },
  //
  abilityHaste: {
    id: 'abilityHaste',
    name: 'Ability Haste',
    abbr: 'AH',
    color: 'var(--color-ah)',
    description: '',
    group: 'spells',
    icon: 'i-lol-ah',

  },
=======
>>>>>>> refs/remotes/origin/main

  // physical

  attackDamage: {
    id: 'attackDamage',
    name: 'Attack Damage',
    abbr: 'AD',
    color: 'var(--color-ad)',
    description: '',
    group: 'physical',
    icon: 'i-lol-ad',

  },
  attackSpeed: {
    id: 'attackSpeed',
    name: 'Attack Speed',
    abbr: 'AS',
    color: 'var(--color-as)',
    description: '',
    group: 'physical',
    icon: 'i-lol-as',
    longAbbr: 'Bonus AS',

  },
  criticalStrikeChance: {
    id: 'criticalStrikeChance',
    name: 'Critical Chance',
    abbr: 'Crit',
    color: 'var(--color-domination)',
    description: '',
    group: 'physical',
    icon: 'i-lol-cs',
    longAbbr: 'Crit Chance',

  },
  criticalStrikeDamage: {
    id: 'criticalStrikeDamage',
    name: 'Critical Damage',
    abbr: 'Crit Dmg',
    color: 'var(--color-fighter)',
    description: '',
    group: 'physical',
    icon: 'i-lol-crit-dmg',

  },
  //
  armorPenetration: {
    id: 'armorPenetration',
    name: 'Armor Penetration',
    abbr: 'APEN',
    color: 'var(--color-apen)',
    description: '',
    group: 'physical',
    icon: 'i-lol-armor-pen',
    longAbbr: 'Armor Pen.',

  },
  lethality: {
    id: 'lethality',
    name: 'Lethality',
    abbr: 'LTY',
    color: 'var(--color-apen)',
    description: '',
    group: 'physical',
    icon: 'i-lol-armor-pen',
    longAbbr: 'Lethality',

  },
  lifesteal: {
    id: 'lifesteal',
    name: 'Lifesteal',
    abbr: 'LS',
    color: 'var(--color-domination)',
    description: '',
    group: 'physical',
    icon: 'i-lol-ls',
    longAbbr: 'Lifesteal',

  },

  // basic

  health: {
    id: 'health',
    name: 'Health',
    abbr: 'HP',
    color: 'var(--color-resolve)',
    description: '',
    group: 'basic',
    icon: 'i-lol-health',
    longAbbr: 'Health',

  },
  healthRegen: {
    id: 'healthRegen',
    name: 'Health Regen',
    abbr: 'HP/5',
    color: 'var(--color-resolve)',
    description: '',
    group: 'basic',
    icon: 'i-lol-hp',
    longAbbr: 'HP ∕ 5',

  },
  mana: {
    id: 'mana',
    name: 'Mana',
    color: 'var(--color-inspiration)',
    description: '',
    group: 'basic',
    icon: 'i-lol-mana',

  },
  manaRegen: {
    id: 'manaRegen',
    name: 'Mana Regen',
    abbr: 'MP ∕ 5',
    color: 'var(--color-inspiration)',
    description: '',
    group: 'basic',
    icon: 'i-lol-mana-regen',
    longAbbr: 'Mana ∕ 5',

  },

  // defense

  armor: {
    id: 'armor',
    name: 'Armor',
    color: 'var(--color-iron)',
    description: '',
    group: 'defense',
    icon: 'i-lol-armor',

  },
  magicResistance: {
    id: 'magicResistance',
    name: 'Magic Resist',
    abbr: 'MR',
    color: 'var(--color-mr)',
    description: '',
    group: 'defense',
    icon: 'i-lol-mr',

  },
<<<<<<< HEAD

  // utility

=======
  tenacity: {
    id: 'tenacity',
    name: 'Tenacity',
    color: 'var(--color-platinum)',
    description: '',
    group: 'defense',
    icon: 'i-lol-tenacity',

  },

  // utility

  abilityHaste: {
    id: 'abilityHaste',
    name: 'Ability Haste',
    abbr: 'AH',
    color: 'var(--color-ah)',
    description: '',
    group: 'utility',
    icon: 'i-lol-ah',

  },
  flatMovespeed: {
    id: 'flatMovespeed',
    name: 'Base Movespeed',
    abbr: 'MS',
    color: 'var(--color-white-70)',
    description: '',
    group: 'utility',
    icon: 'i-lol-ms',

  },
>>>>>>> refs/remotes/origin/main
  percentMovespeed: {
    id: 'percentMovespeed',
    name: 'Movespeed',
    abbr: 'MS',
    color: 'var(--color-white-70)',
    description: '',
    group: 'utility',
    icon: 'i-lol-ms',

  },
<<<<<<< HEAD
  tenacity: {
    id: 'tenacity',
    name: 'Tenacity',
    color: 'var(--color-platinum)',
    description: '',
    group: 'utility',
    icon: 'i-lol-tenacity',

  },
=======
>>>>>>> refs/remotes/origin/main
  //
  goldPer10: {
    id: 'goldPer10',
    name: 'Gold / 10',
    abbr: 'GP/10',
    color: 'var(--color-g)',
    description: '',
    group: 'utility',
    icon: 'i-lol-gold',
    longAbbr: '',
<<<<<<< HEAD
  },
  //
=======

  },
>>>>>>> refs/remotes/origin/main
  omnivamp: {
    id: 'omnivamp',
    name: 'Omnivamp',
    abbr: 'Vamp',
    color: 'var(--color-vamp)',
    description: '',
    icon: 'i-lol-vamp',
    longAbbr: 'Omnivamp',

  },

  // champion

<<<<<<< HEAD
  flatMagicPenetration: {
    id: 'flatMagicPenetration',
    name: 'Flat Magic Penetration',
    abbr: 'MPEN',
    color: 'var(--color-mpen)',
    description: '',
    group: 'champion',
    icon: 'i-lol-mpen',
    longAbbr: 'Magic Pen.',

  },
  flatMovespeed: {
    id: 'flatMovespeed',
    name: 'Base Movespeed',
    abbr: 'MS',
    color: 'var(--color-white-70)',
    description: '',
    group: 'champion',
    icon: 'i-lol-ms',

  },
  //
=======
>>>>>>> refs/remotes/origin/main
  acquisitionRadius: {
    id: 'acquisitionRadius',
    name: 'Acquisition Radius',
    abbr: 'Acqusition',
    description: 'The range at which a unit acquires basic attack targets when a target unit is not specified by the player.',
    group: 'champion',
    icon: 'i-lol-acquisition-radius'
  },
  attackCastTime: {
    id: 'attackCastTime',
    name: 'Attack Cast Time',
    abbr: 'Cast Time',
    description: '',
    group: 'champion',
  },
  attackDelayOffset: {
    id: 'attackDelayOffset',
    name: 'Attack Delay Offset',
    abbr: 'Delay Offset',
    description: '',
    group: 'champion',
  },
  attackRange: {
    id: 'attackRange',
    name: 'Range',
    color: 'var(--color-white-70)',
    description: 'Range of the champion\'s basic attack.',
    group: 'champion',
    icon: 'i-lol-range',
  },
  attackSpeedRatio: {
    id: 'attackSpeedRatio',
    name: 'Attack Speed Ratio',
    abbr: 'AS Ratio',
    description: '',
    group: 'champion',
  },
  attackTotalTime: {
    id: 'attackTotalTime',
    name: 'Attack Total Time',
    abbr: 'Total Time',
    description: '',
    group: 'champion',
  },
  criticalStrikeDamageModifier: {
    id: 'criticalStrikeDamageModifier',
    name: 'Critical Strike Damage Modifier',
    abbr: 'Crit Modifier',
    description: '',
    group: 'champion',
    icon: 'i-lol-cs',
  },
  gameplayRadius: {
    id: 'gameplayRadius',
    name: 'Gameplay Radius',
    abbr: 'Gameplay',
    description: 'Determines reach of both incoming and outgoing effects.',
    group: 'champion',
    icon: 'i-lol-radius',
  },
  pathingRadius: {
    id: 'pathingRadius',
    name: 'Pathing Radius',
    abbr: 'Pathing',
    description: 'The gameplay area a unit occupies for unit-collision and pathfinding logic.',
    group: 'champion',
    icon: 'i-lol-pathing',
  },
  selectionRadius: {
    id: 'selectionRadius',
    name: 'Selection Radius',
    abbr: 'Selection',
    description: 'The farthest selectable point from the unit\'s center point.',
    group: 'champion',
    icon: 'i-lol-range-center',
  },
}
