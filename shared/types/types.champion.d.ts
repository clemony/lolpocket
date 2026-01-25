declare global {
export type ChampionRecord = Record<string, Champion>
export type ChampionLiteRecord = Record<string, ChampionLite>
export type SplashType = 'tile' | 'centered' | 'load' | 'uncentered'
export type SkinRecord = Record<string, Skin>

export interface ChampionLite extends Index {
  id: number
  key: string
  name: string
  attackType?: string | null
  attributeRatings?: Record<string, number>
  positions?: string[]
  resource?: string | null
  roles?: string[]
  stats?: Record<string, ChampionStat>
}

export interface Champion {
  id: number
  key: string
  name: string
  title: string
  abilities: Ability[]
  adaptiveType: string
  attackType: string
  attributeRatings: Record<string, number>
  fullName?: string
  lore?: string
  patchLastChanged: string
  positions: string[]
  price: {
    blueEssence: number
    rp: number
  }
  releaseDate: string
  resource: string
  roles: string[]
  stats: Record<string, ChampionStat>
}

export interface StatEntry {
  flat?: number
  perLevel?: number
}

export interface ChampionLiteStat extends ChampionLite {
  attackSpeedRatio?: StatEntry
}

export interface Skin {
  id: string
  key: string
  name: string
  load: string
}

export interface Ability {
  key: string
  name?: string
  width?: string
  affects?: string
  angle?: string
  blurb?: string
  castTime?: string
  collisionRadius?: string
  cooldown?: string
  cost?: string
  damageType?: string | null
  effectRadius?: string
  effects?: AbilityEffect[]
  icon?: string
  innerRadius?: string
  maxCharges?: number
  maxRank?: number
  missileSpeed?: string
  notes?: string
  occurrence?: string
  onHitEffects?: string
  onTargetCdStatic?: string
  projectile?: string
  rechargeRate?: string
  resource?: string | null
  speed?: string
  spellEffects?: string
  spellshieldable?: string
  targeting?: string
  targetRange?: string
  tetherRadius?: string
}

export interface Attribute {
  attribute?: string
  modifiers?: Modifier[]
}

export interface Modifier {
  tooltip?: string
  unit?: string
  values: string
}

export interface AbilityEffect {
  description?: string
  leveling?: Attribute[]
}
export type ChampionStat = {
  [K in 'flat' | 'perLevel']?: number
}
}

