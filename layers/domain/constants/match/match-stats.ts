export const matchStatGroups: MatchStatGroup[] = [
  {
    name: "stats",
    color: "color-mix(in lch, var(--color-b3) 80%, black 20%)",
  },
  {
    name: "offense",
    color: "var(--color-domination)",
  },
  {
    name: "defense",
    color: "var(--color-hp)",
  },
  {
    name: "utility",
    color: "var(--color-inspiration)",
  },
  {
    name: "gold",
    color: "var(--color-g)",
  },
  {
    name: "farming",
    color: "var(--color-ad)",
  },
  {
    name: "vision",
    color: "var(--color-sorcery)",
  },
  {
    name: "objectives",
    color: "var(--color-resolve)",
  },
]

export const matchStatRegistry: Record<string, MatchStat> = {
  //stats
  champLevel: {
    name: "level",
    group: "stats",
    unit: "",
  },
  kills: {
    name: "kills",
    group: "stats",
    unit: "",
  },
  deaths: {
    name: "deaths",
    group: "stats",
    unit: "",
  },
  assists: {
    name: "assists",
    group: "stats",
    unit: "",
  },
  kda: {
    name: "kda ratio",
    group: "stats",
    unit: "",
  },
  kp: {
    name: "kill participation",
    group: "stats",
    unit: "%",
  },

  // offense
  totalDamage: {
    name: "damage to champions",
    group: "offense",
    unit: "",
  },
  damagePerMin: {
    name: "damage per min",
    group: "offense",
    unit: "",
  },
  damagePercentage: {
    name: "Team damage share",
    group: "offense",
    unit: "%",
  },
  sprees: {
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
    name: "damage taken share",
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
  // gold
  goldEarned: {
    name: "gold earned",
    group: "gold",
    unit: "",
  },
  goldPerMin: {
    name: "Gold / min",
    group: "gold",
    unit: "",
  },
  goldShare: {
    name: "team gold share",
    group: "gold",
    unit: "%",
  },

  // farming
  minionsKilled: {
    name: "minions killed",
    group: "farming",
    unit: "",
  },
  allyJungleMinions: {
    name: "ally jungle minions",
    group: "farming",
    unit: "",
  },
  enemyJungleMinions: {
    name: "enemy jungle minions",
    group: "farming",
    unit: "",
  },
  totalCs: {
    name: "total minions",
    group: "farming",
    unit: "",
  },
  csPerMin: {
    name: "CS / min",
    group: "farming",
    unit: "",
  },

  //olbjectives
  turretsKilled: {
    name: "turrets killed",
    group: "objectives",
    unit: "",
  },
  objectivesStolen: {
    name: "objectives stolen",
    group: "objectives",
    unit: "",
  },

  //vision
  visionScore: {
    name: "vision score",
    group: "vision",
    unit: "",
  },

  visionShare: {
    name: "team vision share",
    group: "vision",
    unit: "%",
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
