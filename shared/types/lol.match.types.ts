import type { DateRange } from "reka-ui"
import type { MaybeRef } from "vue"
import type { Player, PlayerTimeline } from "."

export interface MatchData {
  gameDuration: number // in seconds
  gameEndTimestamp: number
  gamePatch: number // normalized
  lastAccessedAt?: number
  mapId: number
  matchId: string
  participantIds: string[]
  participants: Player[]
  queueId: number
  regionId: string
  teams: MatchTeam[]
}
export interface MatchFilter {
  ally?: string | null
  amount?: number
  champion?: number | null
  date?: MaybeRef<DateRange>
  ignoreRole?: boolean
  patch?: number | null
  queue?: number
  role?: string | null
}

export interface MatchTeam {
  assists?: number
  bans: number[]
  baron: number
  deaths?: number
  dragon: number
  elder: number
  gold?: number
  goldSpent?: number
  horde: number
  inhibitor: number
  kills?: number
  riftHerald: number
  teamId: number
  tower: number
  win: boolean
}

export interface MatchPlayerData {
  match: MatchData
  player: Player
  timeline: PlayerTimeline
}

export interface MatchStatValue {
  name: string
  group?: string
  unit?: string
}

export interface MatchStatGroup {
  color?: string
  name: string
}

export interface Participant {
  championId: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  rune0: number
  rune1: number
  rune2: number
  rune3: number
  rune4: number
  rune5: number
  summoner1Id: number
  summoner2Id: number
  teamPosition: string
  win: boolean
}

export const matchTeams = {
  100: {
    color: "var(--color-insp)",
    name: "blue"
  },
  200: {
    color: "var(--color-domination)",
    name: "red"
  }
}

export const teamStatRegistry: Record<string, MatchStatValue> = {
  /*   horde: {
    name: "kills",
  },
  riftHerald: {
    name: "",
  },
  dragon: {
    name: "assists",
  },
  elder: {
    name: "",
  },
  baron: {
    name: "",
  },
  tower: {
    name: "",
  },
  inhibitor: {
    name: "",
  }, */
  bans: {
    name: "Bans"
  },
  gold: {
    name: "gold earned"
  },
  kda: {
    name: "kda"
  },
  teamId: {
    name: "Map Designation",
    group: "basic"
  },
  win: {
    name: "Match outcome"
  }
}

export interface MatchReturn {
  cursor?: number
  done?: boolean
  matches: MatchData[]
  newestTimestamp?: number
}
