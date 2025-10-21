// types/comments.ts
export interface Comment {
  id: string
  authorId: string
  content: string // tiptap JSON or HTML
  createdAt: string
  parentId?: string | null
  replies?: Comment[]
}