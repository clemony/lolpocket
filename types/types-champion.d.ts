declare global {

  interface Champion {
    id: string
    key: string
    name: string
    title: string
    image: Image
    skins: Skin[]
    lore: string
    blurb: string
    allytips: string
    enemytips: string
    tags: string[]
    partype: string
    info: {
      attack: number
      defense: number
      magic: number
      difficulty: number
    }
    stats?: ChampionStats
    children?: ChampionStats
    spells: Ability[]
    passive: {
      name: string
      description: string
      image: Image
    }
    recommended: any[] | null
  }

  interface Skin {
    id: string
    num: number
    name: string
    chromas: boolean | null
  }

  interface Ability {
    id: string
    name: string
    description: string
    tooltip: string | null
    leveltip: {
      label: string[] | null
      effect: string[] | null
    }
    maxammo?: number | null
    maxrank: number | null
    cooldown: number[] | null
    cooldownBurn: string | null
    cost: number[] | null
    costBurn: string | null
    datavalues: any | null
    effect: [number[] | null]
    effectBurn: [string | null]
    vars: any[] | null
    costType: string | null
    range: number[] | null
    rangeBurn: string | null
    image: Image | null
    resource: string | null
  }

  interface ChampionAbility {
    name?: string
    icon?: string
    description?: string
    description2?: string
    description3?: string
    info?: string
    damage?: string
    targeting?: string
    affects?: string
    champion?: string
    skill?: string
    leveling3?: string
    cooldown?: number[]
    cost?: number[]
    costType?: string
    targeting?: string
    affects?: string
    notes?: string
    icon3?: string
    video?: string
    flavorSound?: string
    blurbIcon?: string
    blurb?: string
    blurb2?: string
    blurb3?: string
  }
  interface ChampionAbilities {
    [key: string]: Ability // e.g., { Q: Ability, W: Ability, E: Ability, R: Ability }
  }

  interface ChampionsData {
    [championName: string]: ChampionAbilities
  }

  interface ChampionStats {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    attackrange: number
    hpregen: number
    hpregenperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeedperlevel: number
    attackspeed: number
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
