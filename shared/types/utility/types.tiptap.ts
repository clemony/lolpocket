export interface Thread {
  id: string
  comments: UUID[]
}

export interface CommentData extends CommentSchema {
  is_author?: boolean
}

export interface User {
  puuid: UUID
  username: string
  splash: string
}

export interface IndexGroup {
  name: string
  icon: string
  items: Index[]
}
export interface MentionData {
  groups: IndexGroup[]
  items: Index[]
}
