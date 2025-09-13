export type ChampionId = number
export type ChampionName = string
export type ChampionKey = string
export type ChampionRecord = Record<ChampionKey, Champion>
export type ChampionLiteRecord = Record<ChampionKey, ChampionLite>
export type SplashType = 'tile' | 'centered' | 'load' | 'uncentered'
export type SkinRecord = Record<ChampionKey, Skin>
export type FullSkinRecord = Record<ChampionKey, Skin[]>

export interface ChampionIndex {
  id: number
  key: string
  name: string
}

export interface ChampionLite extends ChampionIndex {
  resource?: string | null
  attackType?: string | null
  stats?: Record<string, ChampionStat>
  positions?: string[]
  roles?: string[]
  attributeRatings?: Record<string, number>
}

export interface Champion extends ChampionIndex {
  resource: string
  attackType: string
  adaptiveType: string
  stats: Record<string, ChampionStat>
  positions: string[]
  roles: string[]
  attributeRatings: Record<string, number>
  fullName?: string
  title: string
  lore?: string
  abilities: Ability[]
  faction: string
  releaseDate: string
  patchLastChanged: string
  price: {
    blueEssence: number
    rp: number
  }
}

export interface StatEntry {
  flat?: number
  perLevel?: number
}

export interface ChampionLiteStat extends ChampionLite {
  attackSpeedRatio?: StatEntry
}

export interface Skin {
  name?: string
  splashPath?: string
  centeredPath?: string
  tilePath?: string
  loadPath?: string
  id?: string
}

export interface Ability {
  name?: string
  key: string
  icon?: string
  effects?: AbilityEffect[]
  cost?: string
  cooldown?: string
  targeting?: string
  affects?: string
  spellshieldable?: string
  resource?: string | null
  damageType?: string | null
  spellEffects?: string
  projectile?: string
  onHitEffects?: string
  occurrence?: string
  notes?: string
  blurb?: string
  missileSpeed?: string
  rechargeRate?: string
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

export interface Attribute {
  attribute?: string
  modifiers?: string[]
}

export interface AbilityEffect {
  description?: string
  leveling?: Attribute[]
}

export interface ChampionStat {
  flat?: number
  perLevel?: number
}