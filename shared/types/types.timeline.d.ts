declare global {
  export interface MatchTimeline {
  lastAccessedAt?: number
  matchId: string
  participantIds: string[]
  players: Record<string, PlayerTimeline>
}

export interface PlayerTimeline {
  puuid: string
  assists: ChampionDeathEvent[]
  deaths: ChampionDeathEvent[]
  items: ItemEventGroup[]
  kills: ChampionDeathEvent[]
  matchId?: string
  skills: {
    order: number[]
    priority: string[]
  }
  stats: {
    deathsBefore15: number
    killsBefore15: number
    assistsBefore15: number
  }
}

export interface ItemEventGroup {
  events: ItemEvent[]
  timestamp: number
}


export type ItemEvent
  = | {
    action: 'ADD'
    id?: number
    count?: number
    timestamp?: number
  }
  | {
    action: 'UPGRADE'
    to?: number
    from?: number | number[]
    count?: number
    timestamp?: number
  }
  | {
    action: 'S1_UPGRADE' | 'S2_UPGRADE'
    to?: number
    count?: number
    from?: number
    timestamp?: number
  }

export interface PlayerItemEvent {
  afterId?: number
  beforeId?: number
  goldGain?: number
  itemId?: number
  participantId: number
  timestamp: number
  type:
    | 'ITEM_PURCHASED'
    | 'ITEM_UNDO'
    | 'ITEM_SOLD'
    | 'ITEM_DESTROYED'
    | 'ITEM_OBTAINED'
}

export interface ChampionDeathEvent {
  assistingParticipantIds: number[]
  killerId: number
  timestamp: number
  victimId: number
}
}

