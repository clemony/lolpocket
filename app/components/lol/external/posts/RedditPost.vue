<script lang="ts" setup>
import type { BadgeProps, BlogPostProps } from "@nuxt/ui"
import { uiRedditAvatar } from "~~/layers/ui/app/assets/objects/avatar"
import { postAuthorUi, postBadge } from "./post_props"

const {
  post: p,
  index,
  orientation = "vertical"
} = defineProps<
  BlogPostProps & {
    post?: Post
    index: number
  }
>()

const emit = defineEmits<{
  openPost: [post: Post, index: number]
}>()
const post = computed(() => p ?? null)

const hasImage = computed(
  () => post.value?.preview_image_url || post.value?.thumbnail_url
)

const badgeColor: Record<string, HTMLAttributes["class"]> = {
  Discussion: "ring-insp-200! **:ring-insp-200!",
  RiotOfficial: "ring-dom",
  Esports: "ring-gold! **:ring-gold!",
  Gameplay: "ring-sorc",
  News: "ring-res"
}

function openPost() {
  if (!post.value) return

  emit("openPost", post.value, index)
}
</script>

<template>
  <UBlogPost
    v-if="post && orientation === 'vertical'"
    :key="post.source_id"
    variant="naked"
    as="button"
    :title="post?.title"
    :ui="{
      root: 'group/post h-full max-h-98 min-h-full max-w-260 grow cursor-pointer overflow-hidden **:text-start',
      title: cn({
        'line-clamp-2 font-bold': post.metadata?.isVideo || hasImage,
        'line-clamp-4 max-h-1/2 shrink-0 truncate overflow-hidden text-[1.6rem] font-bold tracking-tight':
          !post.metadata?.isVideo && !hasImage && orientation === 'vertical'
      }),
      header: cn('after:play-mask', {
        'pointer-events-auto! px-1 py-2 z-3!': post.metadata?.isVideo,
        hidden: !hasImage && orientation === 'vertical'
      }),
      image: '',
      body: cn(
        'h-full max-h-full self-start',
        !post.metadata?.isVideo
          ? 'z-0! flex min-h-0 flex-1 grow flex-col overflow-hidden px-0!'
          : 'px-2!'
      ),
      authors: 'mt-full shrink-0 justify-self-end',
      description: cn(
        'mt-2 h-full max-h-full min-h-0 truncate overflow-hidden bg-transparent leading-6',
        post.metadata?.isVideo || hasImage ? 'hidden!' : ''
      ),
      footer: cn('shrink-0')
    }"
    :description="post.excerpt?.toString().length ? post.excerpt : undefined"
    :date="useTimeAgo(post.source_created_at).value"
    :badge="post?.flair ? postBadge(post?.flair) : undefined"
    :authors="[
      {
        name: post?.subreddit ? `/r/${post.subreddit}` : undefined,
        description: post?.author ? `/u/${post.author}` : undefined,
        avatar: uiRedditAvatar,
        ui: postAuthorUi,
        size: 'xs'
      }
    ]"
    :image="
      hasImage
        ? {
          fetchpriority: 'high',
          crossorigin: 'anonymous',
          loading: 'eager',
          width: 400,
          height: 300,
          sizes: '(min-width: 1024px) 400px, 100vw',
          format: 'webp',
          preload: true,
          src: post.preview_image_url || post.thumbnail_url || undefined
        }
        : undefined
    "
    @click.stop.prevent="openPost">
  </UBlogPost>
</template>
