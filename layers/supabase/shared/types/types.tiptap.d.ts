declare global {
  interface Thread {
  id: string
  comments: UUID[]
}

export type Doc = v.InferOutput<typeof DocSchema>
export type CommentSchema = v.InferOutput<typeof commentSchema>
export type CommentLog = Partial<CommentData>

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
}