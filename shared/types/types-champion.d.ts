declare global {
  type ChampionId = number
  type ChampionName = string
  type ChampionKey = string
  type ChampionRecord = Record<ChampionKey, Champion>
  type ChampionLiteRecord = Record<ChampionKey, ChampionLite>
  type AbilityRecord = Record<"P" | "Q" | "W" | "E" | "R", Ability[]>
  type SplashType = "tile" | "centered" | "load"
  type SkinRecord = Record<ChampionKey, Skin>
  type FullSkinRecord = Record<ChampionKey, Skin[]>

  interface ChampionIndex {
    id: number
    key: string
    name: string
  }

  interface ChampionLite extends ChampionIndex {
    resource?: string
    attackType?: string
    stats?: Record<string, ChampionStat>
    positions?: string[]
    roles?: string[]
    attributeRatings?: Record<string, number>
  }

  interface Champion extends ChampionIndex {
    resource: string
    attackType: string
    stats: Record<string, ChampionStat>
    positions: string[]
    roles: string[]
    attributeRatings: Record<string, number>
    fullName?: string
    title: string
    lore?: string
    abilities: AbilityRecord
  }

  interface StatEntry {
    flat?: number
    perLevel?: number
  }

  interface ChampionLiteStat extends ChampionLite {
    attackSpeedRatio?: StatEntry
  }

  interface Skin {
    name?: string
    splashPath?: string
    centeredPath?: string
    tilePath?: string
    loadPath?: string
    id?: string
  }

  interface Ability {
    name?: string
    icon?: string
    effects?: AbilityEffect[]
    cost?: number[]
    cooldown?: number[]
    targeting?: string
    affects?: string
    spellshieldable?: string
    resource?: string
    damageType?: string
    spellEffects?: string
    projectile?: string
    onHitEffects?: string
    occurrence?: string
    notes?: string
    blurb?: string
    missileSpeed?: string
    rechargeRate?: number[]
    collisionRadius?: string
    tetherRadius?: string
    onTargetCdStatic?: string
    innerRadius?: string
    speed?: string
    width?: string
    angle?: string
    castTime?: string
    effectRadius?: string
    targetRange?: string
    maxCharges?: number
    maxRank?: number
  }

  interface Modifier {
    values?: number[]
    units?: string[]
  }

  interface Attribute {
    attribute?: string
    modifiers?: Modifier[]
  }

  interface AbilityEffect {
    description?: string
    leveling?: Attribute[]
  }

  interface ChampionStat {
    flat?: number
    perLevel?: number
  }

  interface BayesianChampion {
    games: number
    wins: number
    losses: number
    winrate: number
    kills: number
    deaths: number
    assists: number
    killParticipation: number
    matchIndexes: number[]
    gameVersions: string[]
  }

  export interface ChampionStats {
    name: string
    id: number
    games: number
    wins: number
    losses: number
    winrate: number
    kills: number
    deaths: number
    assists: number
    killParticipation: number
    matchIndexes: number[]
    gameVersions: number[]
  }

  export interface BayesianChampionStats extends ChampionStats {
    bayesianWinrate: number
    kda: number
    avgKills: number
    avgDeaths: number
    avgAssists: number
    avgKp: number
  }
}
export {}
