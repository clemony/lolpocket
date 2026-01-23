export const statTotalGold = {
  id: 'goldPer10',
  name: 'Total Gold Cost',
  abbr: 'Total',
  description: '',
}

export const statIndex: Record<string, StatIndex> = {
  // magic

  //
  abilityHaste: {
    id: 'abilityHaste',
    key: 'AH',
    name: 'Ability Haste',
    color: 'var(--color-ah)',
    description: '',
    group: 'spells',
  },
  abilityPower: {
    id: 'abilityPower',
    key: 'AP',
    name: 'Ability Power',
    color: 'var(--color-sorcery)',
    description: '',
    group: 'spells',
  },
  //
  healAndShieldPower: {
    id: 'healAndShieldPower',
    name: 'Heal & Shield Power',

    key: 'HSP',
    abbr: 'Heal & Shield +',
    color: 'var(--color-enchanter)',
    description: '',
    group: 'spells',
    unit: '%',
  },
  percentMagicPenetration: {
    id: 'percentMagicPenetration',
    key: 'MPEN',
    name: 'Magic Penetration',
    abbr: 'Magic Pen',
    color: 'var(--color-mpen)',
    description: '',
    group: 'spells',
    unit: '%',
  },

  // physical

  //
  armorPenetration: {
    id: 'armorPenetration',
    key: 'APEN',
    name: 'Armor Penetration',
    abbr: 'Armor Pen',
    color: 'var(--color-apen)',
    description: '',
    group: 'physical',
  },
  attackDamage: {
    id: 'attackDamage',
    key: 'AD',
    name: 'Attack Damage',
    color: 'var(--color-ad)',
    description: '',
    group: 'physical',
  },
  attackSpeed: {
    id: 'attackSpeed',
    key: 'AS',
    name: 'Attack Speed',
    abbr: 'Bonus AS',
    color: 'var(--color-as)',
    description: '',
    group: 'physical',
    unit: '%',
  },
  criticalStrikeChance: {
    id: 'criticalStrikeChance',
    key: 'Crit',
    name: 'Critical Chance',
    abbr: 'Crit Chance',
    color: 'var(--color-domination)',
    description: '',
    group: 'physical',
    unit: '%',
  },
  criticalStrikeDamage: {
    id: 'criticalStrikeDamage',
    name: 'Critical Damage',
    abbr: 'Crit Dmg',
    color: 'var(--color-fighter)',
    description: '',
    group: 'physical',
  },
  lethality: {
    id: 'lethality',
    key: 'LTY',
    name: 'Lethality',
    abbr: 'Lethality',
    color: 'var(--color-apen)',
    description: '',
    group: 'physical',
  },
  lifesteal: {
    id: 'lifesteal',
    key: 'LS',
    name: 'Lifesteal',
    abbr: 'Lifesteal',
    color: 'var(--color-domination)',
    description: '',
    group: 'physical',
  },

  // basic

  health: {
    id: 'health',
    key: 'HP',
    name: 'Health',
    color: 'var(--color-resolve)',
    description: '',
    group: 'basic',
  },
  healthRegen: {
    id: 'healthRegen',
    key: 'HP/5',
    name: 'Health Regen',
    color: 'var(--color-resolve)',
    description: '',
    group: 'basic',
    unit: '%',
  },
  mana: {
    id: 'mana',
    key: 'MP',
    name: 'Mana',
    color: 'var(--color-inspiration)',
    description: '',
    group: 'basic',
  },
  manaRegen: {
    id: 'manaRegen',
    key: 'MP/5',
    name: 'Mana Regen',
    color: 'var(--color-inspiration)',
    description: '',
    group: 'basic',
    unit: '%',
  },

  // defense

  armor: {
    id: 'armor',
    name: 'Armor',
    color: 'var(--color-iron)',
    description: '',
    group: 'defense',
  },
  magicResistance: {
    id: 'magicResistance',
    key: 'MR',
    name: 'Magic Resist',
    color: 'var(--color-mr)',
    description: '',
    group: 'defense',
  },

  // utility

  //
  goldPer10: {
    id: 'goldPer10',
    key: 'GP/10',
    name: 'Gold / 10',
    color: 'var(--color-g)',
    description: '',
    group: 'utility',
  },
  //
  omnivamp: {
    id: 'omnivamp',
    key: 'Vamp',
    name: 'Omnivamp',
    abbr: 'Omnivamp',
    color: 'var(--color-vamp)',
    description: '',
    unit: '%',
  },
  percentMovespeed: {
    id: 'percentMovespeed',
    key: 'MS',
    name: 'Movespeed',
    color: 'var(--color-white-70)',
    description: '',
    group: 'utility',
    unit: '%',
  },
  tenacity: {
    id: 'tenacity',
    name: 'Tenacity',
    color: 'var(--color-platinum)',
    description: '',
    group: 'utility',
  },

  // champion

  //
  acquisitionRadius: {
    id: 'acquisitionRadius',
    name: 'Acquisition Radius',
    abbr: 'Acqusition',
    description:
      'The range at which a unit acquires basic attack targets when a target unit is not specified by the player.',
    group: 'champion',
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
    unit: '%',
  },
  flatMagicPenetration: {
    id: 'flatMagicPenetration',
    key: 'MPEN',
    name: 'Flat Magic Penetration',
    abbr: 'Magic Pen',
    color: 'var(--color-mpen)',
    description: '',
    group: 'champion',
  },
  flatMovespeed: {
    id: 'flatMovespeed',
    key: 'MS',
    name: 'Base MS',
    color: 'var(--color-white-70)',
    description: '',
    group: 'champion',
  },
  gameplayRadius: {
    id: 'gameplayRadius',
    name: 'Gameplay Radius',
    abbr: 'Gameplay',
    description: 'Determines reach of both incoming and outgoing effects.',
    group: 'champion',
  },
  pathingRadius: {
    id: 'pathingRadius',
    name: 'Pathing Radius',
    abbr: 'Pathing',
    description:
      'The gameplay area a unit occupies for unit-collision and pathfinding logic.',
    group: 'champion',
  },
  selectionRadius: {
    id: 'selectionRadius',
    name: 'Selection Radius',
    abbr: 'Selection',
    description: 'The farthest selectable point from the unit\'s center point.',
    group: 'champion',
  },
}
