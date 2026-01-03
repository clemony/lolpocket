export const STAT_AVERAGE = (): StatAverage => ({
  total: 0,
  average: 0,
})

export type StatFinalizeRule = {
  decimals?: number
  scale?: number
}

export type StatSchemaEntry = StatFinalizeRule & {
  init: () => StatAverage
}

export const AGGREGATED_STAT_SCHEMA = {
  kills: { init: STAT_AVERAGE },
  deaths: { init: STAT_AVERAGE },
  assists: { init: STAT_AVERAGE },
  kp: { init: STAT_AVERAGE, decimals: 1, scale: 100 },

  // damage
  totalDamage: {
    init: STAT_AVERAGE,
    decimals: 0,
  },
  totalDamageTaken: {
    init: STAT_AVERAGE,
    decimals: 0,
  },
  damagePercentage: {
    init: STAT_AVERAGE,
    scale: 100,
    decimals: 2,
  },

  // defense
  damageTakenPercentage: {
    init: STAT_AVERAGE,
    scale: 100,
    decimals: 2,
  },

  // utility
  ccDuration: { init: STAT_AVERAGE },
  totalAllyHealing: {
    init: STAT_AVERAGE,
    decimals: 0,
  },
  totalAllyShielding: {
    init: STAT_AVERAGE,
    decimals: 0,
  },
  allySaves: { init: STAT_AVERAGE },

  // farming
  goldEarned: { init: STAT_AVERAGE },
  minionsKilled: { init: STAT_AVERAGE },
  neutralMinionsKilled: { init: STAT_AVERAGE },
  turretsKilled: { init: STAT_AVERAGE },
  objectivesStolen: { init: STAT_AVERAGE },

  // vision
  visionScore: { init: STAT_AVERAGE },
  controlWardsPlaced: { init: STAT_AVERAGE },

  // timeline
  killsBefore15: { init: STAT_AVERAGE },
  assistsBefore15: { init: STAT_AVERAGE },
  deathsBefore15: { init: STAT_AVERAGE },

  // kills
  killingSprees: { init: STAT_AVERAGE },
  doubleKills: { init: STAT_AVERAGE },
  tripleKills: { init: STAT_AVERAGE },
  quadraKills: { init: STAT_AVERAGE },
  pentaKills: { init: STAT_AVERAGE },

  gameTime: {
    init: STAT_AVERAGE,
    decimals: 2,
  },
} as const satisfies Record<string, StatSchemaEntry>
