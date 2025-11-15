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
