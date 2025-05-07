declare global {

  interface ChampionLite {
    id: string
    key: string
    name: string
    resource: string
    attackType: string
    stats: Record<string, ChampionStat>
    positions: string[]
    roles: string[]
    attributeRatings: Record<string, number>
    splash?: string
  }

  interface Champion extends ChampionLite {
    fullName: string
    title: string
    abilities: Record<'P' | 'Q' | 'W' | 'E' | 'R', Ability[]>
    splash?: string
  }

  interface FullChampion extends Champion {
    skins?: any
  }

  interface Skin {
    name: string
    splashPath: string
  }

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

  interface ChampionAbilities {
    [key: string]: Ability // e.g., { Q: Ability, W: Ability, E: Ability, R: Ability }
  }

  interface ChampionsData {
    [championName: string]: ChampionAbilities
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
}
export { }
