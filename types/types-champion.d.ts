declare global {

    type ChampionId = number
  type ChampionName = string
type ChampionKey = string

interface ChampionIndex {
  id: number
  key: string
  name: string
}
interface ChampionLite {
  id: ChampionId
  key: ChampionKey
  name: ChampionName
  resource: string
  attackType: string
  stats: Record<string, ChampionStat>
  positions: string[]
  roles: string[]
  attributeRatings: Record<string, number>
  splash?: string
}

  type ChampionRecord = Record<ChampionKey, ChampionLite>
  interface Champion extends ChampionLite {
    fullName: string
    title: string
    lore?: string
    abilities: Record<'P' | 'Q' | 'W' | 'E' | 'R', Ability[]>
    splash?: string
  }

  interface FullChampion extends Champion {
    skins?: any
  }

  interface StatEntry {
    flat?: number
    perLevel?: number
  }

  interface ChampionLiteStat extends ChampionLite {
    attackSpeedRatio?: StatEntry
  }

  interface Skin {
    name: string
    splashPath: string
  }

  interface SkinEntry {
    id: ChampionId
    name: ChampionName
    skins: Skin[]
  }

  type SkinRecord = Record<ChampionId, SkinEntry>

  interface Ability {
    name: string
    icon: string
    effects: AbilityEffect[]
    cost: Modifier[]
    cooldown: Cooldown
    targeting: string | null
    affects: string | null
    spellshieldable: string | null
    resource: string | null
    damageType: string | null
    spellEffects: string | null
    projectile: string | null
    onHitEffects: string | null
    occurrence: string | null
    notes: string | null
    blurb: string | null
    missileSpeed: string | null
    rechargeRate: string | null
    collisionRadius: string | null
    tetherRadius: string | null
    onTargetCdStatic: string | null
    innerRadius: string | null
    speed: string | null
    width: string | null
    angle: string | null
    castTime: string | null
    effectRadius: string | null
    targetRange: string | null
  }

  interface Cooldown {
    modifiers: Modifier[]
    affectedByCdr: boolean
  }

  interface Modifier {
    values: number[]
    units: string[]
  }

  interface Attribute {
    attribute: string
    modifiers: Modifier[]
  }

  interface AbilityEffect {
    description: string
    leveling: Attribute[]
  }

  interface ChampionStat {
    flat: number
    perLevel: number
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

  interface ChampionMasteryIndex {
    key: string
    level: number
    points: number
  }
type ChampionMasteryEntry = Record<ChampionId, ChampionMasteryIndex>

}
export { }
