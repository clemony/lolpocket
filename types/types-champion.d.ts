declare global {

    type ChampionId = number
  type ChampionName = string
type ChampionKey = string
type ChampionRecord = Record<ChampionKey, ChampionLite>

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
}

  interface Champion extends ChampionLite {
    fullName: string
    title: string
    lore?: string
    abilities: Record<string, Ability[]>
  }


  interface StatEntry {
    flat?: number
    perLevel?: number
  }

  interface ChampionLiteStat extends ChampionLite {
    attackSpeedRatio?: StatEntry
  }
  
  interface BaseSkin {
    splashPath: string
    centeredPath: string
    tilePath: string
    loadPath: string
  }

  interface Skin extends BaseSkin {
    name: string
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
    cost: number[]
    cooldown: number[]
    targeting: string
    affects: string
    spellshieldable: string
    resource: string
    damageType: string
    spellEffects: string
    projectile: string
    onHitEffects: string
    occurrence: string
    notes: string
    blurb: string
    missileSpeed: string
    rechargeRate: number[]
    collisionRadius: string
    tetherRadius: string
    onTargetCdStatic: string
    innerRadius: string
    speed: string
    width: string
    angle: string
    castTime: string
    effectRadius: string
    targetRange: string
    maxCharges?: number
    maxRank?: number
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
