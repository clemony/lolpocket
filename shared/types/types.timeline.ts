export interface MatchTimeline {
  matchId: string
  players: Record<string, PlayerTimeline>
}

export interface PlayerTimeline {
  puuid: string
  matchId?: string
  stats: {
    deathsBefore15: number
    killsBefore15: number
    assistsBefore15: number
  }
  //timeShoppingInSec: number
  items: ItemEventGroup[]
  skills: {
    order: number[]
    priority: string[]
  }
  kills: ChampionDeathEvent[]
  assists: ChampionDeathEvent[]
  deaths: ChampionDeathEvent[]
}

export interface ItemEventGroup {
  timestamp: number
  events: ItemEvent[]
}

// Riot's only valid item event types
export const ITEM_EVENT_TYPES = new Set([
  "ITEM_PURCHASED",
  "ITEM_UNDO",
  "ITEM_SOLD",
  "ITEM_DESTROYED",
  "ITEM_OBTAINED",
])

export type ItemEvent =
  | {
      action: "ADD"
      id?: number
      count?: number
      timestamp?: number
    }
  | {
      action: "UPGRADE"
      to?: number
      from?: number | number[]
      count?: number
      timestamp?: number
    }
  | {
      action: "S1_UPGRADE" | "S2_UPGRADE"
      to?: number
      count?: number
      from?: number
      timestamp?: number
    }

export interface PlayerItemEvent {
  timestamp: number
  participantId: number
  itemId?: number
  afterId?: number
  beforeId?: number
  goldGain?: number
  type:
    | "ITEM_PURCHASED"
    | "ITEM_UNDO"
    | "ITEM_SOLD"
    | "ITEM_DESTROYED"
    | "ITEM_OBTAINED"
}

export interface ChampionDeathEvent {
  killerId: number
  assistingParticipantIds: number[]
  victimId: number
  timestamp: number
}
