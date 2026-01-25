declare global {
  export interface OgResponse {
  title: string
  description: string
  image: string
  url: string
}
export interface PatchNotesData extends OgResponse {
  patch: string
}}