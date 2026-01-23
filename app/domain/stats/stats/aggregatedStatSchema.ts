export function STAT_AVERAGE(): StatAverage {
  return {
    average: 0,
    total: 0,
  }
}

export interface StatFinalizeRule {
  decimals?: number
  scale?: number
}

export type StatSchemaEntry = StatFinalizeRule & {
  init: () => StatAverage
}

export const AGGREGATED_STAT_SCHEMA = {
  assists: { init: STAT_AVERAGE },
  deaths: { init: STAT_AVERAGE },
  kills: { init: STAT_AVERAGE },
  kp: { decimals: 1, init: STAT_AVERAGE, scale: 100 },

  damagePercentage: {
    decimals: 2,
    init: STAT_AVERAGE,
    scale: 100,
  },
  // damage
  totalDamage: {
    decimals: 0,
    init: STAT_AVERAGE,
  },
  totalDamageTaken: {
    decimals: 0,
    init: STAT_AVERAGE,
  },

  // defense
  damageTakenPercentage: {
    decimals: 2,
    init: STAT_AVERAGE,
    scale: 100,
  },

  allySaves: { init: STAT_AVERAGE },
  // utility
  ccDuration: { init: STAT_AVERAGE },
  totalAllyHealing: {
    decimals: 0,
    init: STAT_AVERAGE,
  },
  totalAllyShielding: {
    decimals: 0,
    init: STAT_AVERAGE,
  },

  // farming
  goldEarned: { init: STAT_AVERAGE },
  minionsKilled: { init: STAT_AVERAGE },
  neutralMinionsKilled: { init: STAT_AVERAGE },
  objectivesStolen: { init: STAT_AVERAGE },
  turretsKilled: { init: STAT_AVERAGE },

  controlWardsPlaced: { init: STAT_AVERAGE },
  // vision
  visionScore: { init: STAT_AVERAGE },

  assistsBefore15: { init: STAT_AVERAGE },
  deathsBefore15: { init: STAT_AVERAGE },
  // timeline
  killsBefore15: { init: STAT_AVERAGE },

  doubleKills: { init: STAT_AVERAGE },
  // kills
  killingSprees: { init: STAT_AVERAGE },
  pentaKills: { init: STAT_AVERAGE },
  quadraKills: { init: STAT_AVERAGE },
  tripleKills: { init: STAT_AVERAGE },

  gameTime: {
    decimals: 2,
    init: STAT_AVERAGE,
  },
} as const satisfies Record<string, StatSchemaEntry>
