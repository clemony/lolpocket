import type { BadgeProps, BlogPostProps } from "@nuxt/ui"

export type PostType = PbeMeta | Post | PatchNotesMeta

export type OpenRedditPostFn = (post: Post, index: number) => void

export interface OpenRedditPost {
  post: Post
  index: number
}

export interface VariantHeader {
  component: Component
  class: HTMLAttributes["class"]
  isVariant: boolean
}
export interface BuiltPost extends BlogPostProps {
  post: PostType
  variantHeader?: VariantHeader
  badge: BadgeProps
  source: string
}

export const PostModalKey = Symbol("PostModal")

export interface UsePostModalReturn {
  posts: ComputedRef<Post[]>
  activeIndex: Ref<number>
  activePost: ComputedRef<Post | null>
  prev: (e?: MouseEvent) => void
  next: (e?: MouseEvent) => void
  ctrls: PostControl[]
  open: (post: Post, index: number) => void
  close: () => void
}

export interface PostControl {
  disabled?: ComputedRef<boolean>
  icon: string
  onClick: (e?: MouseEvent) => void
  label: string
}

export type PostSource =
  | Ref<Post[] | undefined>
  | ComputedRef<Post[] | undefined>
  | Post[]
