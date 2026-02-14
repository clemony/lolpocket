import type { MatchStat, MatchStatGroup } from "#shared/types"

export const matchStatGroups: MatchStatGroup[] = [
  {
    color: "color-mix(in lch, var(--color-b3) 80%, black 20%)",
    name: "stats",
  },
  {
    color: "var(--color-domination)",
    name: "offense",
  },
  {
    color: "var(--color-hp)",
    name: "defense",
  },
  {
    color: "var(--color-insp)",
    name: "utility",
  },
  {
    color: "var(--color-g)",
    name: "gold",
  },
  {
    color: "var(--color-ad)",
    name: "farming",
  },
  {
    color: "var(--color-sorc)",
    name: "vision",
  },
  {
    color: "var(--color-res)",
    name: "objectives",
  },
]

export const matchStatRegistry: Record<string, MatchStat> = {
  assists: {
    name: "assists",
    group: "stats",
    unit: "",
  },
  // stats
  champLevel: {
    name: "level",
    group: "stats",
    unit: "",
  },
  deaths: {
    name: "deaths",
    group: "stats",
    unit: "",
  },
  kda: {
    name: "kda ratio",
    group: "stats",
    unit: "",
  },
  kills: {
    name: "kills",
    group: "stats",
    unit: "",
  },
  kp: {
    name: "kill participation",
    group: "stats",
    unit: "%",
  },

  damagePercentage: {
    name: "Team damage share",
    group: "offense",
    unit: "%",
  },
  damagePerMin: {
    name: "damage per min",
    group: "offense",
    unit: "",
  },
  doubleKills: {
    name: "double kills",
    group: "kills",
    unit: "",
  },
  pentaKills: {
    name: "pentakills",
    group: "kills",
    unit: "",
  },
  quadraKills: {
    name: "quadra kills",
    group: "kills",
    unit: "",
  },
  sprees: {
    name: "killing sprees",
    group: "offense",
    unit: "",
  },
  // offense
  totalDamage: {
    name: "damage to champions",
    group: "offense",
    unit: "",
  },
  tripleKills: {
    name: "triple kills",
    group: "kills",
    unit: "",
  },

  ccDuration: {
    name: "Crowd-control duration on enemies",
    group: "defense",
    unit: "s",
  },
  damageSelfMitigated: {
    name: "Damage self-mitigated",
    group: "defense",
    unit: "",
  },
  damageTakenPercentage: {
    name: "damage taken share",
    group: "defense",
    unit: "%",
  },
  // defense
  totalDamageTaken: {
    name: "damage taken",
    group: "defense",
    unit: "",
  },

  allySaves: {
    name: "ally saves from death",
    group: "utility",
    unit: "",
  },
  // utility
  effectiveHealingAndShielding: {
    name: "effective healing and shielding",
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

  allyJungleMinions: {
    name: "ally jungle minions",
    group: "farming",
    unit: "",
  },
  csPerMin: {
    name: "CS / min",
    group: "farming",
    unit: "",
  },
  enemyJungleMinions: {
    name: "enemy jungle minions",
    group: "farming",
    unit: "",
  },
  // farming
  minionsKilled: {
    name: "minions killed",
    group: "farming",
    unit: "",
  },
  totalCs: {
    name: "total minions",
    group: "farming",
    unit: "",
  },

  objectivesStolen: {
    name: "objectives stolen",
    group: "objectives",
    unit: "",
  },
  // olbjectives
  turretsKilled: {
    name: "turrets killed",
    group: "objectives",
    unit: "",
  },

  // vision
  visionScore: {
    name: "vision score",
    group: "vision",
    unit: "",
  },

  controlWardsPlaced: {
    name: "control wards placed",
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
}
