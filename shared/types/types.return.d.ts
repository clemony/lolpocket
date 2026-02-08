interface Return {
  data: JSON
  error: string
}
interface CommentReturn {
  data: CommentData
  error: string
}

interface MatchReturn {
  cursor?: number
  done?: boolean
  matches: MatchData[]
  newestTimestamp?: number
}

interface ThreadReturn {
  authors: Record<string, Account>
  comments: CommentData[]
}

interface UserProfileResponse {
  settings: Settings | null
  account: Account | null
  pockets: Pocket[] | null
}
