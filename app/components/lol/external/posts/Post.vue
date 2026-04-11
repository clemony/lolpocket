<script lang="ts" setup>
import type { Post } from "#shared/types"
import { postAuthorUi, postBadge } from "./postProps"
type Props = Partial<Post> & { post?: Post }
const props = defineProps<Props>()

const post = computed<Post>(() => (props.post ? props.post : (props as Post)))
</script>

<template>
  <UBlogPost
    :key="post.source_id"
    variant="naked"
    :ui="{
      root: 'group/post h-full min-h-full grow',
      title: cn(
        '',
        !post.preview_image_url && !post.thumbnail_url
          ? 'tracking-tight text-2xl font-bold line-clamp-4 shrink-0 overflow-hidden'
          : !post.preview_image_url && !post.thumbnail_url && !post.excerpt
            ? 'text-[1.6rem] line-clamp-none'
            : 'line-clamp-2'
      ),
      header: post.video_provider ? 'pointer-events-auto! z-3!' : '',
      body: cn(
        'pb-2!',
        !post.preview_image_url && !post.thumbnail_url
          ? 'px-0! z-0! flex min-h-0 flex-1 grow flex-col overflow-hidden'
          : 'px-2!'
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
    :image="
      post.preview_image_url || post.thumbnail_url
        ? {
            fetchpriority: 'high',
            crossorigin: 'anonymous',
            loading: 'eager',
            src: post.preview_image_url || post.thumbnail_url || undefined,
            preset: 'card'
          }
        : undefined
    ">
    <template v-if="post.video_provider" #header>
      <slot name="header" />
    </template>

    <template #body>
      <slot name="body" />
    </template>

    <template #footer>
      <slot name="footer" />
    </template>

    <template #badge>
      <slot name="badge" />
    </template>

    <template #authors>
      <slot name="authors" />
    </template>

    <template #description>
      <slot name="description" />
    </template>

    <template #title>
      <slot name="title" />
    </template>

    <template #date>
      <slot name="date" />
    </template>
  </UBlogPost>
</template>
