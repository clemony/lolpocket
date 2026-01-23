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
  cursor?: number
  done?: boolean
  matches: MatchData[]
  newestTimestamp?: number
}

export interface ThreadReturn {
  authors: Record<string, Account>
  comments: CommentData[]
}

export interface UserProfileResponse {
  account: Account | null
  pockets: Pocket[] | null
  settings: Settings | null
}
