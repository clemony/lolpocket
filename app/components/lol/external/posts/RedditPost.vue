<script lang="ts" setup>
import type { BadgeProps } from "@nuxt/ui"
import { postAuthorUi, postBadge } from "./postProps"

const { post } = defineProps<{
  post: RedditPost
}>()

const badgeColor: Record<string, BadgeProps["color"]> = {
  Discussion: "pre",
  RiotOfficial: "neutral",
  Esports: "sorc",
  Gameplay: "insp",
  News: "dom"
}
</script>

<template>
  <!-- shadow-sm shadow-black/5 drop-shadow-sm drop-shadow-black/5 -->
  <UBlogPost
    :key="post.source_id"
    variant="naked"
    :ui="{
      root: 'group/post h-full min-h-full grow',
      title: cn(
        'shrink-0 overflow-hidden',
        !post.preview_image_url && !post.thumbnail_url
          ? 'tracking-tight text-2xl font-bold line-clamp-4'
          : !post.preview_image_url && !post.thumbnail_url && !post.excerpt
            ? 'text-[1.6rem] line-clamp-none'
            : 'line-clamp-2'
      ),
      body: cn(
        'flex min-h-0 flex-1 grow flex-col overflow-hidden pb-2!',
        !post.preview_image_url && !post.thumbnail_url ? 'px-0!' : 'px-2!'
      ),
      authors: 'mt-full justify-self-end',
      description:
        'mt-2 line-clamp-8! block min-h-0 truncate bg-transparent leading-6',
      footer: 'shrink-0'
    }"
    :title="post?.title"
    :description="
      post.preview_image_url || post.thumbnail_url
        ? undefined
        : (post.excerpt as string | undefined)
    "
    :date="post.source_created_at"
    :to="post.permalink"
    external
    target="_blank"
    :badge="post?.flair ? postBadge(post?.flair) : undefined"
    :authors="[
      {
        name: post?.subreddit ? `r/${post.subreddit}` : undefined,
        description: post?.author ? `u/${post.author}` : undefined,
        avatar: {
          icon: 'i-ui-reddit-square',
          ui: {
            icon: 'text-white scale-90',
            root: 'bg-[#FF5700] '
          }
        },
        ui: postAuthorUi,
        size: 'xs'
      }
    ]"
    :image="post.preview_image_url || post.thumbnail_url || undefined" />
</template>
