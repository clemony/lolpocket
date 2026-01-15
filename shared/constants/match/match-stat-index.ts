export type MatchStat = {
  name: string
  group: string
  unit: string
}

export const matchStatRegistry: Record<string, MatchStat> = {
  //stats
  champLevel: {
    name: "level",
    group: "",
    unit: "",
  },
  kills: {
    name: "kills",
    group: "",
    unit: "",
  },
  deaths: {
    name: "deaths",
    group: "",
    unit: "",
  },
  assists: {
    name: "assists",
    group: "",
    unit: "",
  },
  kda: {
    name: "kda",
    group: "",
    unit: "",
  },
  kp: {
    name: "kill participation",
    group: "",
    unit: "%",
  },

  // offense
  totalDamage: {
    name: "damage to champions",
    group: "offense",
    unit: "",
  },
  damagePercentage: {
    name: "Team damage percentage",
    group: "offense",
    unit: "%",
  },
  killingSprees: {
    name: "killing sprees",
    group: "offense",
    unit: "",
  },
  doubleKills: {
    name: "double kills",
    group: "kills",
    unit: "",
  },
  tripleKills: {
    name: "triple kills",
    group: "kills",
    unit: "",
  },
  quadraKills: {
    name: "quadra kills",
    group: "kills",
    unit: "",
  },
  pentaKills: {
    name: "pentakills",
    group: "kills",
    unit: "",
  },

  // defense
  totalDamageTaken: {
    name: "damage taken",
    group: "defense",
    unit: "",
  },
  damageTakenPercentage: {
    name: "Damage taken of team total",
    group: "defense",
    unit: "%",
  },
  damageSelfMitigated: {
    name: "Damage self-mitigated",
    group: "defense",
    unit: "",
  },
  ccDuration: {
    name: "Crowd-control duration on enemies",
    group: "defense",
    unit: "s",
  },

  // utility
  effectiveHealingAndShielding: {
    name: "effective healing and shielding",
    group: "utility",
    unit: "",
  },
  totalAllyHealing: {
    name: "ally healing",
    group: "utility",
    unit: "",
  },
  totalAllyShielding: {
    name: "ally shielding",
    group: "utility",
    unit: "",
  },
  allySaves: {
    name: "ally saves from death",
    group: "utility",
    unit: "",
  },

  // farming
  goldEarned: {
    name: "gold earned",
    group: "farming",
    unit: "",
  },
  minionsKilled: {
    name: "minions killed",
    group: "farming",
    unit: "",
  },
  neutralMinionsKilled: {
    name: "monsters killed",
    group: "farming",
    unit: "",
  },
  turretsKilled: {
    name: "turrets killed",
    group: "farming",
    unit: "",
  },
  objectivesStolen: {
    name: "objectives stolen",
    group: "farming",
    unit: "",
  },

  //vision
  visionScore: {
    name: "vision score",
    group: "vision",
    unit: "",
  },
  wardsKilled: {
    name: "wards killed",
    group: "vision",
    unit: "",
  },
  wardsPlaced: {
    name: "wards placed",
    group: "vision",
    unit: "",
  },
  controlWardsPlaced: {
    name: "control wards placed",
    group: "vision",
    unit: "",
  },
}
