export interface OgResponse {
  title: string
  description: string
  image: string
  url: string
}
export interface PatchNotesData extends OgResponse {
  patch: string
}

export interface Return {
  data: JSON
  error: string
}
export interface CommentReturn {
  data: CommentData
  error: string
}

export interface MatchReturn {
  matches: MatchData[]
  newestTimestamp?: number
  cursor?: number
  done?: boolean
}

export interface ThreadReturn {
  comments: CommentData[]
  authors: Record<string, Account>
}

export interface UserProfileResponse {
  account: Account | null
  pockets: Pocket[] | null
  settings: Settings | null
}
