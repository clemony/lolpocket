export interface Thread {
  id: string
  comments: UUID[]
}

export interface CommentData extends CommentSchema {
  author: User
  is_author?: boolean
}

export interface User {
  puuid: UUID
  username: string
  splash: string
}
